'use client'

import { useState } from 'react'

/**
 * MODULE 1: Setup & Orientation
 *
 * This file contains exercises for your first interaction with GitHub Copilot.
 * Look for the bold comments below to know where to practice!
 */

export default function Module1Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 1: First Interaction with Copilot</h1>
          <p className="text-gray-600">Practice explaining code and using Copilot Chat</p>
        </header>

        <div className="space-y-8">
          {/* Exercise 1: Simple Component */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Explain Simple Code</h2>
            <SimpleCounter />
          </section>

          {/* Exercise 2: Data Transformation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 2: Explain Data Flow</h2>
            <DataTransformer />
          </section>

          {/* ==========================================
           * 📚 LESSON 1.3 - EXERCISE 3: EXPLAIN COMPLEX CODE
           * ==========================================
           *
           * ✅ TODO: HIGHLIGHT THE FUNCTION BELOW AND USE /explain
           *
           * Instructions:
           * 1. Highlight the entire ComplexFilter component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /explain
           * 4. Read Copilot's explanation
           * 5. Try follow-up questions like:
           *    - "Explain it as if I'm new to React"
           *    - "List the steps this function performs"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 3: Explain Complex Code</h2>
            <ComplexFilter />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: USE COPILOT SUGGESTIONS HERE
           * ==========================================
           *
           * ✅ TODO: TRY COPILOT SUGGESTIONS HERE
           *
           * Instructions:
           * 1. Uncomment the component below
           * 2. Start typing inside the function body
           * 3. Watch for gray "ghost text" suggestions
           * 4. Press Tab to accept, Esc to dismiss
           * 5. Try Alt/Option + ] or [ to cycle suggestions
           *
           * Example: Type "const [count" and see what Copilot suggests
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a simple component below and experiment with Copilot suggestions
            </p>
            {/* UNCOMMENT AND PRACTICE HERE:
            
            <YourPracticeComponent />
            
            */}
          </section>
        </div>
      </div>
    </div>
  )
}

// Simple counter component for Exercise 1
function SimpleCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <p className="text-lg">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

// Data transformation component for Exercise 2
function DataTransformer() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const evenNumbers = numbers.filter(num => num % 2 === 0)
  const doubledNumbers = evenNumbers.map(num => num * 2)
  const sum = doubledNumbers.reduce((acc, num) => acc + num, 0)

  return (
    <div className="space-y-2">
      <p>
        <strong>Original:</strong> {numbers.join(', ')}
      </p>
      <p>
        <strong>Even numbers:</strong> {evenNumbers.join(', ')}
      </p>
      <p>
        <strong>Doubled:</strong> {doubledNumbers.join(', ')}
      </p>
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  )
}

// Complex filtering component for Exercise 3
function ComplexFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [minPrice, setMinPrice] = useState(0)

  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 299, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 199, category: 'Furniture' },
    { id: 5, name: 'Monitor', price: 399, category: 'Electronics' },
  ]

  const filteredProducts = products
    .filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) && product.price >= minPrice
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price
      }
      return b.price - a.price
    })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={e => setMinPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="px-4 py-2 border rounded"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  )
}

/* ==========================================
 * 💡 ADDITIONAL PRACTICE SUGGESTIONS
 * ==========================================
 *
 * After completing the exercises above, try these:
 *
 * 1. Highlight any function and ask: "What are potential bugs here?"
 * 2. Highlight SimpleCounter and ask: "How can I optimize this?"
 * 3. Highlight ComplexFilter and ask: "What accessibility improvements can I make?"
 * 4. Create your own component and use Copilot suggestions to help
 *
 * Remember: The more you interact with Copilot, the better you'll get at
 * prompting it effectively!
 *
 * ========================================== */
