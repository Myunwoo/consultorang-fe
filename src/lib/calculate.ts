export function calcPrimeCost(material: number, labor: number, rate: number): number {
  if (rate === 0) throw new Error('프라임 코스트율은 0일 수 없습니다.')
  return (material + labor) / (rate / 100)
}
