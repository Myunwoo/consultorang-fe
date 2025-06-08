'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Creator() {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-consultaurant-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          외식업자들의 고민을 함께 해결하겠습니다.
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>컨설토랑</strong>은 <strong>식당 사장님들의 가장 든든한 도우미</strong>가 되기 위해 만들어졌습니다. <br />
        </motion.p>

        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>
            제작자: <strong className="text-gray-700 dark:text-white">임현우</strong>
          </p>
          <p>
            문의: <a href="mailto:h_im_dev@naver.com" className="underline hover:text-consultaurant-primary">h_im_dev@naver.com</a>
          </p>
          <p>
            특허 등록 번호: <strong className="text-gray-700 dark:text-white">10-2575104</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
