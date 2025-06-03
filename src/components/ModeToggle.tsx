'use client'

import { useAtom } from 'jotai'
import { isAdvancedAtom } from '@/atoms/calculatorAtoms'

export default function ModeToggle() {
  const [isAdvanced, setIsAdvanced] = useAtom(isAdvancedAtom)

  return (
    <div className="text-right">
      <button
        onClick={() => setIsAdvanced(!isAdvanced)}
        className="text-sm underline text-consultaurant-accent"
      >
        {isAdvanced ? '기본 모드로 전환' : '고급 모드로 전환'}
      </button>
    </div>
  )
}
