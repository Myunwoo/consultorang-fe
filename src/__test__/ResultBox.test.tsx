import { render, screen } from '@testing-library/react'
import ResultBox from '@/components/ResultBox'
import { Provider, createStore } from 'jotai'
import { resultPriceAtom, methodAtom } from '@/atoms/calculatorAtoms'
import React from 'react'

function renderWithAtom(value: number | null, method: 'prime' | 'costplus' | 'competitor') {
  const store = createStore()
  store.set(resultPriceAtom, value)
  store.set(methodAtom, method)

  render(
    <Provider store={store}>
      <ResultBox />
    </Provider>
  )
}

describe('ResultBox 컴포넌트', () => {
  it('결과가 없으면 "결과 없음"을 보여준다', () => {
    renderWithAtom(null, 'prime')
    expect(screen.getByText('결과 없음')).toBeInTheDocument()
  })

  it('결과가 있으면 금액과 방식 이름이 나타난다', () => {
    renderWithAtom(8333, 'prime')
    expect(screen.getByText('₩ 8,333')).toBeInTheDocument()
    expect(screen.getByText(/프라임 코스트법/)).toBeInTheDocument()
  })
})
