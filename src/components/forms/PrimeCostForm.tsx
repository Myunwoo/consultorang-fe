'use client'

import { useState, useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { resultPriceAtom } from '@/atoms/calculatorAtoms'

interface Props {
  isAdvanced: boolean
}

export default function PrimeCostForm({ isAdvanced }: Props) {
  const setResult = useSetAtom(resultPriceAtom)

  // 기본 모드 입력값
  const [materialCost, setMaterialCost] = useState('')
  const [laborCost, setLaborCost] = useState('')
  const [primeRate, setPrimeRate] = useState('60') // %

  // 고급 모드 상세 입력값 (확장 예정)
  const [cookTime, setCookTime] = useState('')
  const [hourlyWage, setHourlyWage] = useState('')
  const [materials, setMaterials] = useState([{ name: '', unitPrice: '', quantity: '' }])

  // 계산 로직
  useEffect(() => {
    if (!isAdvanced) {
      const m = parseFloat(materialCost)
      const l = parseFloat(laborCost)
      const r = parseFloat(primeRate)

      if (!isNaN(m) && !isNaN(l) && !isNaN(r) && r !== 0) {
        const result = (m + l) / (r / 100)
        setResult(Math.round(result))
      } else {
        setResult(null)
      }
    } else {
      // 고급 모드 계산 로직
      const totalMat = materials.reduce((sum, mat) => {
        const unit = parseFloat(mat.unitPrice)
        const qty = parseFloat(mat.quantity)
        return sum + (isNaN(unit) || isNaN(qty) ? 0 : unit * qty)
      }, 0)

      const time = parseFloat(cookTime)
      const wage = parseFloat(hourlyWage)
      const calcLabor = isNaN(time) || isNaN(wage) ? 0 : (time / 60) * wage
      const rate = parseFloat(primeRate)

      if (rate > 0) {
        const result = (totalMat + calcLabor) / (rate / 100)
        setResult(Math.round(result))
      } else {
        setResult(null)
      }
    }
  }, [materialCost, laborCost, primeRate, isAdvanced, materials, cookTime, hourlyWage, setResult])

  return (
    <div className="space-y-4">
      {!isAdvanced ? (
        <>
          <Input label="원재료비 (₩)" value={materialCost} onChange={setMaterialCost} />
          <Input label="인건비 (₩)" value={laborCost} onChange={setLaborCost} />
          <Input label="프라임 코스트율 (%)" value={primeRate} onChange={setPrimeRate} />
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

          <Input label="조리 시간 (분)" value={cookTime} onChange={setCookTime} />
          <Input label="시급 (₩)" value={hourlyWage} onChange={setHourlyWage} />
          <Input label="프라임 코스트율 (%)" value={primeRate} onChange={setPrimeRate} />
        </>
      )}
    </div>
  )
}

// 재사용 가능한 인풋 컴포넌트
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
