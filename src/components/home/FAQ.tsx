'use client'

import React from 'react'

const faqs = [
  {
    question: '정확한 계산 결과를 보장하나요?',
    answer:
      '컨설토랑은 검증된 계산 공식을 바탕으로 결과를 제안합니다. 다만 참고용으로 활용해주세요.',
  },
  {
    question: '서비스 이용에 비용이 드나요?',
    answer: '현재는 MVP 단계로, 누구나 무료로 이용하실 수 있습니다.',
  },
  {
    question: '앞으로 어떤 기능이 추가되나요?',
    answer:
      '재료 관리 및 자동 발주, 업계 평균 비교 등 다양한 기능이 준비 중입니다. 홈 화면에서 확인해보세요!',
  },
]

export default function FAQ() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-consultaurant-primary mb-12">
          자주 묻는 질문
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
