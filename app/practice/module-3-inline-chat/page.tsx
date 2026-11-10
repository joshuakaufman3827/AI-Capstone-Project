'use client'

import { useState } from 'react'

/**
 * MODULE 3: Inline Chat - Edit Mode in Depth
 *
 * This file contains exercises for making precise, surgical edits:
 * - Converting to async/await
 * - Improving accessibility
 * - Refactoring for clarity
 * - Style and performance tweaks
 */

export default function Module3Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 3: Inline Chat - Precision Edits</h1>
          <p className="text-gray-600">Make surgical edits to improve code quality</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔄 LESSON 3.1 - EXERCISE: CONVERT TO ASYNC/AWAIT
           * ==========================================
           *
           * ✅ TODO: REFACTOR THIS TO USE ASYNC/AWAIT
           *
           * Instructions:
           * 1. Highlight the fetchUserData function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Rewrite this to use async/await"
           * 4. Review the patch and accept it
           * 5. Test that it still works correctly
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🔄 Lesson 3.1: Convert to Async/Await</h2>
            <PromiseBasedComponent />
          </section>

          {/* ==========================================
           * ♿ LESSON 3.2 - EXERCISE: IMPROVE ACCESSIBILITY
           * ==========================================
           *
           * ✅ TODO: ADD ACCESSIBILITY FEATURES
           *
           * Instructions:
           * 1. Highlight the InaccessibleForm component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Add aria-labels and make this accessible for screen readers"
           * 4. Review and accept the improvements
           * 5. Ask follow-up: "What other accessibility improvements can be made?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">♿ Lesson 3.2: Improve Accessibility</h2>
            <InaccessibleForm />
          </section>

          {/* ==========================================
           * 🧹 LESSON 3.3 - EXERCISE: REFACTOR FOR CLARITY
           * ==========================================
           *
           * ✅ TODO: BREAK INTO SMALLER FUNCTIONS
           *
           * Instructions:
           * 1. Highlight the MessyComponent function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Break this into smaller functions with clear names"
           * 4. Review the refactored code
           * 5. Ask: "Can this be simplified further?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧹 Lesson 3.3: Refactor for Clarity</h2>
            <MessyComponent />
          </section>

          {/* ==========================================
           * 🎨 LESSON 3.4 - EXERCISE: STYLE AND PERFORMANCE
           * ==========================================
           *
           * ✅ TODO: APPLY MULTIPLE IMPROVEMENTS
           *
           * Try these inline chat commands on the component below:
           * 1. "Convert this to a functional component" (if it was class-based)
           * 2. "Use Tailwind classes instead of inline styles"
           * 3. "Optimize this loop for better performance"
           * 4. "Add TypeScript types for better type safety"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Lesson 3.4: Style & Performance</h2>
            <StylableComponent />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: YOUR TURN
           * ==========================================
           *
           * ✅ TODO: PRACTICE ALL INLINE CHAT TECHNIQUES
           *
           * Instructions:
           * Create your own component below and practice:
           * - Converting callback patterns to async/await
           * - Adding accessibility features
           * - Refactoring complex logic
           * - Improving styling and performance
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a component below and practice all Inline Chat techniques
            </p>

            {/* 
            
            ⬇️⬇️⬇️ CREATE YOUR PRACTICE COMPONENT HERE ⬇️⬇️⬇️
            
            Ideas:
            - A form with complex validation
            - A data fetching component with loading states
            - A filtering/sorting interface
            - An interactive widget
            
            Then use Inline Chat to improve it step by step!
            
            */}
          </section>
        </div>
      </div>
    </div>
  )
}

/* ==========================================
 * 🔄 PROMISE-BASED COMPONENT
 * Refactor this to use async/await!
 * ========================================== */
function PromiseBasedComponent() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // This uses .then() chains - convert it to async/await!
  const fetchUserData = () => {
    setLoading(true)
    setError(null)

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(userData => {
        setData(userData)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses .then() chains. Highlight the fetchUserData function and convert it to
        async/await!
      </p>

      <button
        onClick={fetchUserData}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Fetch User Data'}
      </button>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {data && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
        </div>
      )}
    </div>
  )
}

/* ==========================================
 * ♿ INACCESSIBLE FORM
 * Add accessibility features to this form!
 * ========================================== */
function InaccessibleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This form lacks accessibility features. Add aria-labels, proper labels, and keyboard
        navigation!
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%', minHeight: '100px' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <button
            type="submit"
            style={{
              background: '#3B82F6',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

/* ==========================================
 * 🧹 MESSY COMPONENT
 * Refactor this into smaller, clearer functions!
 * ========================================== */
function MessyComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.5, inStock: true },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.8, inStock: true },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 1.2, inStock: false },
    { id: 4, name: 'Dates', category: 'Fruit', price: 3.0, inStock: true },
  ])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('name')

  // This is too long and does too many things - break it down!
  const processedItems = items
    .filter(item => {
      if (filter === '') return true
      return item.category.toLowerCase() === filter.toLowerCase()
    })
    .filter(item => item.inStock)
    .sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sort === 'price') {
        return a.price - b.price
      }
      return 0
    })
    .map(item => {
      const discountedPrice = item.price > 2 ? item.price * 0.9 : item.price
      const formattedPrice = `$${discountedPrice.toFixed(2)}`
      const isOnSale = item.price > 2
      return { ...item, discountedPrice, formattedPrice, isOnSale }
    })

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component does too much in one place. Highlight it and ask Copilot to break it into
        smaller functions!
      </p>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {processedItems.map(item => (
          <div key={item.id} className="border rounded p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
              {item.isOnSale && (
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">SALE</span>
              )}
            </div>
            <p className="text-lg font-bold mt-2">{item.formattedPrice}</p>
            {item.isOnSale && (
              <p className="text-xs text-gray-500 line-through">${item.price.toFixed(2)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ==========================================
 * 🎨 STYLABLE COMPONENT
 * Improve the styling and performance!
 * ========================================== */
function StylableComponent() {
  const [count, setCount] = useState(0)

  // Inline styles - convert these to Tailwind!
  const containerStyle = {
    padding: '24px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    marginTop: '16px',
  }

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#3B82F6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '8px',
  }

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
  }

  // This could be optimized - ask Copilot how!
  const expensiveCalculation = () => {
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses inline styles and has performance issues. Improve it!
      </p>

      <div style={containerStyle}>
        <p style={textStyle}>Count: {count}</p>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>
          Expensive calculation: {expensiveCalculation()}
        </p>

        <div style={{ marginTop: '16px' }}>
          <button style={buttonStyle} onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: '#EF4444' }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
