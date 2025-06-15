'use client'

import { useAtom } from 'jotai'
import { methodAtom } from '@/atoms/calculatorAtoms'

const methodTooltips: Record<string, string> = {
  prime: '원재료비와 인건비를 기준으로 가격을 정합니다. (보통 60~70%)',
  costplus: '원가에 마진율을 더한 가장 직관적인 방식입니다.',
  competitor: '경쟁 업체 평균가에서 조정값을 더하거나 빼서 계산합니다.',
}

export default function CalculatorTabs() {
  const [method, setMethod] = useAtom(methodAtom)

  const tabs = [
    { label: '프라임 코스트법', value: 'prime' },
    { label: '원가기준', value: 'costplus' },
    { label: '경쟁자 가격', value: 'competitor' },
  ]

  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab) => (
        <div key={tab.value} className="relative group">
          <button
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => setMethod(tab.value as any)}
            className={`px-4 py-2 rounded-full border font-medium transition ${
              method === tab.value
                ? 'bg-consultaurant-primary text-white'
                : 'bg-white text-consultaurant-primary border-consultaurant-primary'
            }`}
          >
            {tab.label}
            <span className="ml-1 text-xs align-middle">ⓘ</span>
          </button>

          <div className="absolute z-10 w-64 p-3 text-xs text-gray-700 bg-white border rounded shadow-lg hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-2">
            <p className="font-semibold mb-1">💡 {tab.label}</p>
            <p>{methodTooltips[tab.value]}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
