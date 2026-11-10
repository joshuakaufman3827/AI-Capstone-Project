# FES GitHub Copilot Course - Student Guide

Welcome to the FES GitHub Copilot Course! This guide will help you navigate the practice repository.

## 📚 Course Structure

The course is divided into 5 modules, each with its own practice page:

### Module 1: Setup & Orientation

**File:** `app/practice/module-1-copilot-chat/page.tsx`

**What You'll Learn:**

- Installing and enabling GitHub Copilot
- Your first interaction with `/explain`
- Understanding Copilot suggestions
- Essential keyboard shortcuts

**Key Exercises:**

- Explain simple and complex code
- Practice accepting/rejecting suggestions
- Use Inline Chat for the first time

---

### Module 2: Core Agent Features

**File:** `app/practice/module-2-agent-features/page.tsx`

**What You'll Learn:**

- Edit Mode: fixing broken code with `/fix`
- Agent Mode: scaffolding new features
- Writing tests with `/tests`
- Freeform conversations for code improvements

**Key Exercises:**

- Fix intentionally broken calculator component
- Build a feedback form from scratch
- Generate test cases for functions
- Ask Copilot about performance and security

---

### Module 3: Inline Chat

**File:** `app/practice/module-3-inline-chat/page.tsx`

**What You'll Learn:**

- Surgical, precise edits to existing code
- Converting callback patterns to async/await
- Improving accessibility
- Refactoring for clarity

**Key Exercises:**

- Refactor promise chains to async/await
- Add aria-labels and accessibility features
- Break complex functions into smaller ones
- Convert inline styles to Tailwind classes

---

### Module 4: Rules & Context

**Files:**

- `app/practice/module-4-workspace-context/page.tsx`
- `.github/copilot-instructions.md`

**What You'll Learn:**

- How Copilot learns from your codebase
- Creating project-wide rules
- Ensuring consistency across generated code
- Context-aware code generation

**Key Exercises:**

- Create components that mirror existing styles
- Define your coding preferences in rules file
- Test that Copilot follows your rules
- Extend components while maintaining patterns

---

### Module 5: Final Project

**File:** `app/practice/module-5-portfolio/page.tsx`

**What You'll Build:**

- A complete personal portfolio website
- Header with navigation
- Hero section with call-to-action
- Projects grid with cards
- About section with bio and skills
- Contact form with validation
- Footer with social links
- Optional: Dark mode toggle

**Skills Applied:**

- Agent Mode for scaffolding
- Edit Mode for refinements
- Ask Mode for guidance
- All your learned techniques combined

---

## 🎯 How to Use This Repository

### Step 1: Setup Your Environment

```bash
# Clone or navigate to the repository
cd FES-Copilot-course

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Step 2: Open VS Code

- Make sure GitHub Copilot extensions are installed
- Sign in to your GitHub account
- Verify the Copilot icon in the status bar

### Step 3: Follow the Course

1. Open the course text document (FES - GitHub Copilot Course.txt)
2. Read a lesson in the course document
3. Navigate to the corresponding practice file
4. Look for **BOLD COMMENT SECTIONS** that tell you exactly where to practice
5. Follow the step-by-step instructions in each exercise
6. Experiment and iterate!

### Step 4: Navigate Between Modules

- Run the dev server: `npm run dev`
- Visit http://localhost:3000
- Click on any module to see its practice page
- Or open files directly in VS Code

---

## 🔑 Essential Keyboard Shortcuts

| Action              | Shortcut (Mac)  | Shortcut (Windows/Linux) |
| ------------------- | --------------- | ------------------------ |
| Inline Chat         | Cmd + I         | Ctrl + I                 |
| Quick Chat          | Cmd + Shift + I | Ctrl + Shift + I         |
| Accept Suggestion   | Tab             | Tab                      |
| Dismiss Suggestion  | Esc             | Esc                      |
| Next Suggestion     | Option + ]      | Alt + ]                  |
| Previous Suggestion | Option + [      | Alt + [                  |
| Trigger Suggestion  | Option + \      | Alt + \                  |

---

## 💡 Copilot Commands

Use these commands in Inline Chat (Cmd/Ctrl + I):

- `/explain` - Get an explanation of selected code
- `/fix` - Fix bugs or errors in selected code
- `/tests` - Generate test cases for selected code
- `/doc` - Generate documentation
- Natural language - Just describe what you want!

---

## 🎨 Finding Exercise Areas

Each practice file has clearly marked sections:

```tsx
/* ==========================================
 * 🔧 LESSON X.X - EXERCISE: TITLE
 * ==========================================
 *
 * ✅ TODO: DO THIS HERE
 *
 * Instructions:
 * 1. Step one
 * 2. Step two
 * ...
 *
 * ========================================== */
```

Look for:

- 🔧 Red borders: Code to fix
- 🟢 Green borders: Features to add
- 🟣 Purple borders: Refactoring practice
- 🔵 Blue borders: Ask Mode exercises
- 🟡 Yellow borders: Challenges

---

## 📖 Working with .github/copilot-instructions.md

This file teaches Copilot your coding style. Here's how to use it:

1. **Open** `.github/copilot-instructions.md`
2. **Read** the current rules
3. **Add** your own preferences
4. **Save** the file
5. **Test** by creating new components - Copilot should follow your rules!

Example rules:

```markdown
- Always use arrow functions
- Style with Tailwind CSS only
- Include TypeScript types
- Add aria-labels for accessibility
```

---

## 🧪 Running Tests

Generate and run tests for your components:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test example.test
```

See `__tests__/example.test.tsx` for test examples.

---

## 🚨 Common Issues & Solutions

### Copilot Not Showing Suggestions

- Check the Copilot icon in status bar (bottom-right)
- Make sure you're signed in to GitHub
- Try reloading VS Code
- Verify your Copilot subscription is active

### Suggestions Not Relevant

- Provide more context in comments
- Open related files for better context
- Use more specific variable/function names
- Check your `.github/copilot-instructions.md` rules

### Inline Chat Not Working

- Make sure to highlight code first
- Try using Quick Chat instead (Cmd/Ctrl + Shift + I)
- Restart VS Code if needed

### Code Doesn't Match Rules

- Verify `.github/copilot-instructions.md` exists
- Make rules more specific
- Give Copilot explicit instructions in your prompts

---

## 🎓 Learning Tips

1. **Read Before Accepting**

   - Don't blindly accept Copilot's suggestions
   - Understand what the code does
   - Ask `/explain` if unclear

2. **Iterate and Refine**

   - First suggestion isn't always best
   - Use follow-up prompts to improve
   - Try different phrasing

3. **Learn Patterns**

   - Notice how Copilot structures code
   - Recognize good patterns to reuse
   - Build your own mental library

4. **Ask Questions**

   - Use Ask Mode liberally
   - "What are alternatives to this approach?"
   - "What could go wrong here?"
   - "How can I improve this?"

5. **Practice Deliberately**
   - Don't rush through exercises
   - Try variations of each exercise
   - Build your own examples

---

## 🚀 Next Steps After Completing the Course

1. **Deploy Your Portfolio**

   - Use Vercel: `npx vercel`
   - Use Netlify: Connect GitHub repo
   - Share your live portfolio!

2. **Build Your Own Projects**

   - Apply techniques to real projects
   - Start with small features
   - Gradually increase complexity

3. **Contribute to Open Source**

   - Use Copilot to understand unfamiliar codebases
   - Get onboarded faster
   - Contribute more confidently

4. **Share Your Knowledge**
   - Teach others what you've learned
   - Write about your experience
   - Help classmates

---

## 📝 Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## 💬 Getting Help

If you're stuck:

1. Review the course text document
2. Check the comments in the practice files
3. Ask Copilot directly: "How do I [task]?"
4. Reach out to your instructor or classmates

---

## ✅ Completion Checklist

Track your progress through the course:

- [ ] Module 1: Setup & Orientation

  - [ ] Installed Copilot extensions
  - [ ] Used `/explain` successfully
  - [ ] Understood Copilot suggestions
  - [ ] Memorized key shortcuts

- [ ] Module 2: Core Agent Features

  - [ ] Fixed broken code with `/fix`
  - [ ] Built a feedback form
  - [ ] Generated tests with `/tests`
  - [ ] Had freeform conversations

- [ ] Module 3: Inline Chat

  - [ ] Converted to async/await
  - [ ] Added accessibility features
  - [ ] Refactored complex code
  - [ ] Improved styling and performance

- [ ] Module 4: Rules & Context

  - [ ] Created `.github/copilot-instructions.md`
  - [ ] Verified context awareness
  - [ ] Tested rule compliance

- [ ] Module 5: Final Project
  - [ ] Built complete portfolio
  - [ ] All sections implemented
  - [ ] Responsive and accessible
  - [ ] Ready to deploy

---

**Congratulations on starting the FES GitHub Copilot Course! Happy coding! 🎉**
