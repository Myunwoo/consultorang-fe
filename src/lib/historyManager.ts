import { CalculationHistoryItem } from '@/types/calculator'

const STORAGE_KEY = 'consultaurant_history'

export function getHistory(): CalculationHistoryItem[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  return JSON.parse(raw)
}

export function saveHistoryItem(item: CalculationHistoryItem) {
  const list = getHistory()
  const updated = [item, ...list].slice(0, 10) // 최대 10개 유지
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}
