'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 text-center">
      <motion.div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-consultaurant-primary rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <h1 className="text-4xl md:text-5xl font-bold text-consultaurant-primary z-10">
        사장님의 메뉴 가격, <br /> 더는 감이 아니라 데이터로
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 z-10">
        지금 바로 간편하게 <strong>합리적인 메뉴 가격</strong>을 계산해보세요.
      </p>
      <div className="mt-8 z-10">
        <a
          href="/calculator"
          className="px-6 py-3 bg-consultaurant-accent text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
        >
          메뉴 가격 계산하러 가기
        </a>
      </div>
    </section>
  )
}
