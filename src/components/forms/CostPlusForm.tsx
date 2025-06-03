'use client'

import { useState, useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { resultPriceAtom } from '@/atoms/calculatorAtoms'

interface Props {
  isAdvanced: boolean
}

export default function CostPlusForm({ isAdvanced }: Props) {
  const setResult = useSetAtom(resultPriceAtom)

  // 기본 모드
  const [materialCost, setMaterialCost] = useState('')
  const [marginRate, setMarginRate] = useState('150') // %

  // 고급 모드
  const [materials, setMaterials] = useState([{ name: '', unitPrice: '', quantity: '' }])
  const [advancedMarginRate, setAdvancedMarginRate] = useState('150')

  // 계산 로직
  useEffect(() => {
    if (!isAdvanced) {
      const cost = parseFloat(materialCost)
      const margin = parseFloat(marginRate)

      if (!isNaN(cost) && !isNaN(margin)) {
        const price = cost * (1 + margin / 100)
        setResult(Math.round(price))
      } else {
        setResult(null)
      }
    } else {
      const totalMat = materials.reduce((sum, mat) => {
        const unit = parseFloat(mat.unitPrice)
        const qty = parseFloat(mat.quantity)
        return sum + (isNaN(unit) || isNaN(qty) ? 0 : unit * qty)
      }, 0)

      const margin = parseFloat(advancedMarginRate)
      if (!isNaN(totalMat) && !isNaN(margin)) {
        const price = totalMat * (1 + margin / 100)
        setResult(Math.round(price))
      } else {
        setResult(null)
      }
    }
  }, [materialCost, marginRate, materials, advancedMarginRate, isAdvanced, setResult])

  return (
    <div className="space-y-4">
      {!isAdvanced ? (
        <>
          <Input label="원재료비 (₩)" value={materialCost} onChange={setMaterialCost} />
          <Input label="마진율 (%)" value={marginRate} onChange={setMarginRate} />
        </>
      ) : (
        <>
          <div className="space-y-2">
            <label className="font-semibold">재료 입력</label>
            {materials.map((mat, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  placeholder="재료명"
                  className="flex-1 border p-2 rounded"
                  value={mat.name}
                  onChange={(e) =>
                    setMaterials((prev) =>
                      prev.map((m, i) => (i === idx ? { ...m, name: e.target.value } : m))
                    )
                  }
                />
                <input
                  placeholder="단가"
                  type="number"
                  className="w-24 border p-2 rounded"
                  value={mat.unitPrice}
                  onChange={(e) =>
                    setMaterials((prev) =>
                      prev.map((m, i) => (i === idx ? { ...m, unitPrice: e.target.value } : m))
                    )
                  }
                />
                <input
                  placeholder="수량"
                  type="number"
                  className="w-24 border p-2 rounded"
                  value={mat.quantity}
                  onChange={(e) =>
                    setMaterials((prev) =>
                      prev.map((m, i) => (i === idx ? { ...m, quantity: e.target.value } : m))
                    )
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="text-sm text-consultaurant-accent underline"
              onClick={() => setMaterials([...materials, { name: '', unitPrice: '', quantity: '' }])}
            >
              + 재료 추가
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">마진율 (%)</label>
            <div className="flex gap-2 mb-2">
              {[50, 100, 150].map((v) => (
                <button
                  key={v}
                  className={`px-2 py-1 border rounded text-sm ${
                    advancedMarginRate === `${v}` ? 'bg-consultaurant-primary text-white' : ''
                  }`}
                  onClick={() => setAdvancedMarginRate(String(v))}
                >
                  +{v}%
                </button>
              ))}
            </div>
            <input
              type="number"
              className="w-full border p-2 rounded"
              value={advancedMarginRate}
              onChange={(e) => setAdvancedMarginRate(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="number"
        className="w-full border p-2 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
