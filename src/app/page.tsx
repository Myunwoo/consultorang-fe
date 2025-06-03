export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 bg-gray-100 p-4 text-xl font-bold shadow">
        메뉴 원가 계산기
      </header>

      <main className="p-4">
        <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          + 새로운 메뉴 계산하기
        </button>

        <section>
          <h2 className="mb-2 text-lg font-semibold">최근 계산한 메뉴</h2>
          <ul className="space-y-2">
            <li className="rounded border p-2 shadow">제육볶음 (2024.06.03)</li>
            <li className="rounded border p-2 shadow">김치찌개 (2024.06.02)</li>
            <li className="rounded border p-2 shadow">돈까스 (2024.05.31)</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
