'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-consultaurant-primary mb-6 text-center">
        궁금한 점 또는 기능 제안이 있으신가요?
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        제안해주신 모든 의견은 꼼꼼히 읽고 <br className="sm:hidden" />
        서비스 개선에 적극 반영할게요.
      </p>

      {submitted ? (
        <motion.div
          className="text-center text-consultaurant-accent text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🙏 소중한 의견 감사합니다! <br />
          빠르게 확인 후 반영하겠습니다.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-200">
              문의 유형
            </label>
            <select
              className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-600"
              required
            >
              <option value="">선택해주세요</option>
              <option value="feature">기능 제안</option>
              <option value="general">일반 문의</option>
              <option value="business">비즈니스 문의</option>
            </select>
          </div>
          
          <div className="relative group">
            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-200">
              휴대폰 번호 (선택)
            </label>
            <input
              type="tel"
              className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-600"
              placeholder="010-1234-5678"
            />
            <div className="absolute top-0 right-0 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1">
              입력하신 번호는 <br className="sm:hidden" />
              오픈 이후 <strong>베네핏 안내</strong>에만 사용돼요.
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-200">
              제목
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-600"
              placeholder="예: 경쟁 메뉴 가격도 보고 싶어요"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-200">
              상세 내용
            </label>
            <textarea
              required
              rows={5}
              className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-600"
              placeholder="내용을 자유롭게 입력해주세요."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-consultaurant-accent text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            제출하기
          </button>
        </form>
      )}
    </section>
  )
}
