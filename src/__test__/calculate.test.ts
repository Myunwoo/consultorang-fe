import { calcPrimeCost } from '@/lib/calculate'

describe('프라임 코스트 계산', () => {
  it('기본 계산이 정확해야 한다', () => {
    const result = calcPrimeCost(4000, 1000, 60)
    expect(result).toBeCloseTo(8333.33, 1)
  })

  it('0% 코스트율은 에러를 유발해야 한다', () => {
    expect(() => calcPrimeCost(4000, 1000, 0)).toThrow()
  })
})
