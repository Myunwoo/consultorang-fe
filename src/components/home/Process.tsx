'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    title: '1. 원가 입력',
    description: '식재료 원가와 비용을 입력합니다. 원하는 방식도 선택하세요.',
  },
  {
    title: '2. 가격 계산',
    description: '선택한 가격 결정법에 따라 적정 판매 가격을 자동 계산해드립니다.',
  },
  {
    title: '3. 결과 확인',
    description: '가장 적절한 판매 가격을 한눈에 확인할 수 있습니다.',
  },
  {
    title: '4. 기록 및 저장',
    description: '이력을 저장하고 추후에도 다시 확인할 수 있습니다.',
  },
]

export default function Process() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-950 py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-consultaurant-primary mb-16">
          어떻게 사용하나요?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="text-consultaurant-accent mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
