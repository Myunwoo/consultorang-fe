'use client'

import { Lightbulb, ShieldCheck, Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const reasons = [
  {
    icon: Lightbulb,
    title: '전문가의 기준',
    description: '프랜차이즈 본사의 방식과 외식업 컨설턴트들이 실제로 사용하는 계산 기준을 반영합니다.',
  },
  {
    icon: ShieldCheck,
    title: '신뢰할 수 있는 결과',
    description: '단순 계산기가 아닌, 다양한 방식 중 가장 합리적인 방법을 직접 선택할 수 있습니다.',
  },
  {
    icon: Clock3,
    title: '빠르게 확인',
    description: '복잡한 공식 없이 몇 번의 클릭만으로 가격 책정이 완료됩니다.',
  },
]

export default function Why() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-consultaurant-primary mb-16">왜 컨설토랑인가요?</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm text-left"
            >
              <reason.icon size={32} className="text-consultaurant-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
