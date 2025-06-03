'use client'

import { useAtom } from 'jotai'
import { methodAtom, isAdvancedAtom } from '@/atoms/calculatorAtoms'
import CalculatorTabs from '@/components/CalculatorTabs'
import ModeToggle from '@/components/ModeToggle'
import ResultBox from '@/components/ResultBox'
import PrimeCostForm from '@/components/forms/PrimeCostForm'
import CostPlusForm from '@/components/forms/CostPlusForm'
import CompetitorForm from '@/components/forms/CompetitorForm'
import HistoryList from '@/components/HistoryList'

export default function Page() {
  const [method] = useAtom(methodAtom)
  const [isAdvanced] = useAtom(isAdvancedAtom)

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-consultaurant-primary mb-4">
        메뉴 가격 계산기
      </h1>

      <CalculatorTabs />
      <ModeToggle />

      <section className="mt-6">
        {method === 'prime' && <PrimeCostForm isAdvanced={isAdvanced} />}
        {method === 'costplus' && <CostPlusForm isAdvanced={isAdvanced} />}
        {method === 'competitor' && <CompetitorForm isAdvanced={isAdvanced} />}
      </section>

      <ResultBox />
      <HistoryList />
    </main>
  )
}
