'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { methodAtom, resultPriceAtom, historyAtom } from '@/atoms/calculatorAtoms'
import { saveHistoryItem } from '@/lib/historyManager'


export default function ResultBox() {
  const [result] = useAtom(resultPriceAtom)
  const [method] = useAtom(methodAtom)
  const [, setHistory] = useAtom(historyAtom)

  useEffect(() => {
    if (result === null) return

    const summary =
      method === 'prime'
        ? '재료비 + 인건비 기준'
        : method === 'costplus'
        ? '원가 × 마진율'
        : '경쟁자 평균 ± 조정값'

    const item = {
      method,
      result,
      createdAt: new Date().toISOString(),
      summary,
    }

    saveHistoryItem(item)
    setHistory((prev) => [item, ...prev].slice(0, 10))
  }, [method, result, setHistory])

  const methodNameMap = {
    prime: '프라임 코스트법',
    costplus: '원가기준 가격결정법',
    competitor: '경쟁자 가격결정법',
  }

  return (
    <div className="mt-8 p-4 border rounded-lg bg-consultaurant-secondary text-consultaurant-accent">
      <p className="text-lg font-semibold mb-2">
        💡 계산 결과 ({methodNameMap[method]})
      </p>

      <p className="text-3xl font-bold text-consultaurant-primary mb-2">
        {result !== null ? `₩ ${result.toLocaleString()}` : '결과 없음'}
      </p>

      {result !== null && (
        <div className="text-sm text-gray-700">
          <p className="font-semibold mt-4 mb-1">📘 참고 계산 방식</p>
          {method === 'prime' && (
            <p>(원재료비 + 인건비) ÷ (프라임 코스트율 / 100)</p>
          )}
          {method === 'costplus' && (
            <p>원재료비 × (1 + 마진율 / 100)</p>
          )}
          {method === 'competitor' && (
            <p>(경쟁자 평균가격 ± 조정값)</p>
          )}
        </div>
      )}
    </div>
  )
}
