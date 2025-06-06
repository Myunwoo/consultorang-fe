'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="컨설토랑 로고"
            width={160}
            height={40}
            className="h-auto w-auto max-h-10 object-contain"
            priority
          />
        </Link>

        {/* 필요 시 메뉴 or 토글 자리 */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          {/* 메뉴 예시: 추후 필요 시 추가 */}
          {/* <Link href="/pricing">가격 계산기</Link> */}
        </div>
      </div>
    </header>
  )
}
