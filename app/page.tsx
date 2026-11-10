import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">FES GitHub Copilot Course</h1>
        <p className="text-lg mb-8 text-gray-700">
          Welcome to your practice workspace! Choose a module to get started.
        </p>

        <div className="grid gap-4">
          <Link
            href="/practice/module-1-copilot-chat"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Module 1: Setup & Orientation</h2>
            <p className="text-gray-600">
              Learn the basics and have your first interaction with Copilot
            </p>
          </Link>

          <Link
            href="/practice/module-2-agent-features"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Module 2: Core Agent Features</h2>
            <p className="text-gray-600">Fix code, add features, and write tests with Copilot</p>
          </Link>

          <Link
            href="/practice/module-3-inline-chat"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Module 3: Inline Chat</h2>
            <p className="text-gray-600">Make surgical edits and refactor with precision</p>
          </Link>

          <Link
            href="/practice/module-4-rules"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Module 4: Rules & Context</h2>
            <p className="text-gray-600">Teach Copilot your coding style and preferences</p>
          </Link>

          <Link
            href="/practice/module-5-portfolio"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Module 5: Final Project</h2>
            <p className="text-gray-600">Build a complete portfolio website</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
