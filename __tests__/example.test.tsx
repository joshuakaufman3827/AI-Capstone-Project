import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

/**
 * EXAMPLE TEST FILE
 * 
 * This shows you how to write tests in this project.
 * Use Copilot's /tests command to generate tests for your components!
 * 
 * See Module 2, Lesson 2.3 for more on writing tests with Copilot.
 */

// Simple example component for testing
function ExampleButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  )
}

describe('ExampleButton', () => {
  it('renders the button with correct text', () => {
    render(<ExampleButton onClick={() => {}}>Click Me</ExampleButton>)
    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<ExampleButton onClick={handleClick}>Click Me</ExampleButton>)
    const button = screen.getByText('Click Me')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('has correct CSS classes', () => {
    render(<ExampleButton onClick={() => {}}>Click Me</ExampleButton>)
    const button = screen.getByText('Click Me')
    expect(button).toHaveClass('px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded')
  })
})

/* ==========================================
 * 💡 PRACTICE WITH COPILOT
 * ==========================================
 * 
 * Try these exercises:
 * 
 * 1. Create a new component in one of the module files
 * 2. Highlight the component code
 * 3. Use /tests to generate test cases
 * 4. Review and refine the generated tests
 * 5. Run: npm test
 * 
 * Copilot can help you write:
 * - Unit tests for functions
 * - Component tests for React components
 * - Integration tests for features
 * - Edge case tests
 * 
 * ========================================== */}

