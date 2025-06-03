'use client'

import { useEffect, useState } from 'react'
import { useSetAtom } from 'jotai'
import { resultPriceAtom } from '@/atoms/calculatorAtoms'

interface Props {
  isAdvanced: boolean
}

export default function CompetitorForm({ isAdvanced }: Props) {
  const setResult = useSetAtom(resultPriceAtom)

  const [competitors, setCompetitors] = useState(['', '', ''])
  const [adjustment, setAdjustment] = useState('0') // 기본 조정값
  const [adjustByPercent, setAdjustByPercent] = useState(false)

  useEffect(() => {
    const prices = competitors
      .map((v) => parseFloat(v))
      .filter((v) => !isNaN(v) && v > 0)

    if (prices.length === 0) {
      setResult(null)
      return
    }

    const avg = prices.reduce((sum, p) => sum + p, 0) / prices.length
    const adj = parseFloat(adjustment)

    if (isNaN(adj)) {
      setResult(null)
      return
    }

    const final = adjustByPercent
      ? avg * (1 + adj / 100)
      : avg + adj

    setResult(Math.round(final))
  }, [competitors, adjustment, adjustByPercent, setResult])

  const updatePrice = (idx: number, value: string) => {
    setCompetitors((prev) => prev.map((v, i) => (i === idx ? value : v)))
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="font-semibold">경쟁 업체 가격</label>
        {competitors.map((price, idx) => (
          <input
            key={idx}
            type="number"
            className="w-full border p-2 rounded"
            placeholder={`경쟁자 ${idx + 1} 가격`}
            value={price}
            onChange={(e) => updatePrice(idx, e.target.value)}
          />
        ))}
        {isAdvanced && (
          <div className="flex gap-2">
            <button
              className="text-sm underline text-consultaurant-accent"
              onClick={() => setCompetitors([...competitors, ''])}
            >
              + 경쟁자 추가
            </button>
            {competitors.length > 1 && (
              <button
                className="text-sm underline text-red-500"
                onClick={() => setCompetitors(competitors.slice(0, -1))}
              >
                - 마지막 제거
              </button>
            )}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {adjustByPercent ? '조정 비율 (%)' : '조정값 (₩)'}
        </label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={adjustment}
          onChange={(e) => setAdjustment(e.target.value)}
        />
        {isAdvanced && (
          <label className="inline-flex items-center mt-2 text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={adjustByPercent}
              onChange={() => setAdjustByPercent(!adjustByPercent)}
            />
            비율로 조정 (예: -10% 할인)
          </label>
        )}
      </div>
    </div>
  )
}
