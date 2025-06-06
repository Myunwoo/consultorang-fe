'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-consultaurant-primary text-white py-16 text-center px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">지금 바로 메뉴 가격을 계산해보세요</h2>
        <p className="mb-8 text-base text-white/80">
          컨설토랑은 사장님의 메뉴에 가장 적합한 가격을 빠르게 제안합니다.
        </p>
        <Link
          href="/calculator"
          className="inline-block px-6 py-3 bg-white text-consultaurant-primary font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          메뉴 가격 계산하러 가기
        </Link>
      </motion.div>
    </section>
  )
}
