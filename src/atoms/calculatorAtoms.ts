import { atom } from 'jotai'
import { CalculationHistoryItem } from '@/types/calculator'
import { getHistory } from '@/lib/historyManager'

export type Method = 'prime' | 'costplus' | 'competitor'

// 계산 결과
export const historyAtom = atom<CalculationHistoryItem[]>(getHistory())
// 계산 방식
export const methodAtom = atom<Method>('prime')
// 단순/고급 모드
export const isAdvancedAtom = atom<boolean>(false)
// 계산 결과
export const resultPriceAtom = atom<number | null>(null)
