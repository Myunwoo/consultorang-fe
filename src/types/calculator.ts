export interface CalculationHistoryItem {
  method: 'prime' | 'costplus' | 'competitor'
  result: number
  createdAt: string
  summary: string
}
