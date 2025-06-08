'use client'

import React from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: '정확한 계산 결과를 보장하나요?',
    answer:
      '컨설토랑은 AI 기반 권장 데이터와 수집된 리뷰 데이터를 기반으로 결과를 제공합니다. 다만 참고용으로 활용해주세요.',
  },
  {
    question: '서비스 이용에 비용이 드나요?',
    answer: '현재는 MVP 단계로, 누구나 무료로 이용하실 수 있습니다.',
  },
  {
    question: '앞으로 어떤 기능이 추가되나요?',
    answer:
      '월간 매출 기반 손익 분석 보고서 제공, 메뉴의 인기도에 기반한 개선 방향 제시 등 다양한 기능이 준비 중입니다.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-consultaurant-primary py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          자주 묻는 질문
        </h2>

        <div className="space-y-8 mb-12">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="text-gray-200 text-sm mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/feedback"
            className="inline-block bg-consultaurant-accent text-white px-5 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >질문 또는 기능 제안하기</Link>
          <p className="text-sm text-consultaurant-notice font-medium mt-8">
            좋은 질문과 제안을 주신 분들께는 컨설토랑의 그랜드 오픈 이후 사용하실 수 있는
            <strong className="ml-1 underline">소정의 보상을 제공</strong>합니다!
          </p>
        </div>
      </div>
    </section>
  )
}
