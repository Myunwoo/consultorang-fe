'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Feature() {
  return (
    <section className="px-4 py-16 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-consultaurant-primary mb-12">
        컨설토랑의 핵심 기능
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* 현재 제공 기능 */}
        <FeatureCard
          title="메뉴 가격 계산기"
          description="프라임 코스트법, 원가기준법, 경쟁자 기준법을 바탕으로 원가 기반의 합리적인 가격을 도출합니다."
        />

        {/* 앞으로 추가될 기능 예고 */}
        <FeatureCard
          title="재료 관리 & 발주 도우미 (준비 중)"
          description="식재료별 사용량과 재고를 기반으로, 자동 발주 추천을 지원합니다. 빠른 시일 내 출시 예정입니다."
          soon
        />

        <FeatureCard
          title="업계 평균과 비교 분석 (준비 중)"
          description="유사 업종의 데이터와 비교하여 내 가게의 경쟁력을 확인하세요."
          soon
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          이런 기능이 필요하신가요?{' '}
          <a
            href="https://forms.gle/your-feedback-form"
            target="_blank"
            className="text-consultaurant-accent underline font-medium"
          >
            의견 남기기
          </a>
        </p>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  soon = false,
}: {
  title: string
  description: string
  soon?: boolean
}) {
  return (
    <motion.div
      className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-zinc-900 shadow-md"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}{' '}
        {soon && (
          <span className="text-xs bg-consultaurant-secondary text-consultaurant-accent px-2 py-0.5 rounded ml-2">
            Soon
          </span>
        )}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}
