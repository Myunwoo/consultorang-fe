'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 text-center overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-60 z-0 opacity-10"
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
      >
        {[50, 100, 150].map((y, i) => (
          <line
            key={i}
            x1="0"
            y1={y}
            x2="600"
            y2={y}
            stroke="#888"
            strokeDasharray="4"
            strokeWidth="0.5"
          />
        ))}
        <motion.polyline
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="3"
          points="0,180 100,120 200,160 300,100 400,140 500,80 600,100"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        {[
          [100, 120],
          [200, 160],
          [300, 100],
          [400, 140],
          [500, 80],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#0ea5e9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
          />
        ))}
      </svg>

      <h1 className="text-4xl md:text-5xl font-bold text-consultaurant-primary z-10">
        사장님의 메뉴 가격, <br /> 더는 감이 아니라 데이터로
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 z-10">
        지금 바로 AI 리뷰 분석을 통해 <br />
        <strong>합리적인 메뉴 가격</strong>을 계산해보세요.
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