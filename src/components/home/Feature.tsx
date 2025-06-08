'use client'

import { motion } from 'framer-motion'

export default function Feature() {
  const beforeItems = [
    '그냥 대충 7,000원쯤 하지',
    '손익 계산은 엑셀로 일일이',
    '경쟁가는 감으로 느낌만',
    '리뷰는 대충 훑어보기',
  ]

  const afterItems = [
    '원가 + 경쟁가 + AI 리뷰 분석 기반 가격',
    '자동 계산 + PDF 보고서 저장',
    '업계 평균과 비교',
    '리뷰 키워드 요약 + 전략 가이드 제안',
  ]

  return (
    <section className="px-6 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-consultaurant-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          식당 사장님들은 왜 컨설토랑을 선택할까요?
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          고객의 리뷰 속 목소리를 데이터로 확인하세요. 단순한 가격 계산기를 넘어,
          리뷰 기반 인사이트까지 함께 제공합니다.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 bg-consultaurant-secondary rounded-xl p-8 shadow-xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-gray-600">기존 방식 (감)</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {beforeItems.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg text-consultaurant-accent">컨설토랑 방식</h3>
            <ul className="space-y-3 text-sm">
              {afterItems.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
