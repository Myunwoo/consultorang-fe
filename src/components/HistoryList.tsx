'use client'

import { useAtom } from 'jotai'
import { historyAtom } from '@/atoms/calculatorAtoms'
import dayjs from 'dayjs'

export default function HistoryList() {
  const [history] = useAtom(historyAtom)

  if (!history.length) return null

  return (
    <div className="mt-8">
      <h3 className="text-base font-semibold mb-2">🕓 계산 이력</h3>
      <ul className="space-y-2 text-sm">
        {history.map((item, idx) => (
          <li
            key={idx}
            className="border rounded p-3 bg-white shadow-sm text-gray-700"
          >
            <div className="flex justify-between">
              <span className="font-semibold">
                {item.result.toLocaleString()}원
              </span>
              <span className="text-xs text-gray-400">
                {dayjs(item.createdAt).format('YY.MM.DD HH:mm')}
              </span>
            </div>
            <p className="text-xs mt-1">{item.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
