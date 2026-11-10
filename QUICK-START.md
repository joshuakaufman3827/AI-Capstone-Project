# 🚀 Quick Start Guide

Get up and running with the FES Copilot Course in 5 minutes!

## ⚡ Installation Steps

### 1. Install VS Code Extensions

Open VS Code and install these extensions:

- **GitHub Copilot** (Required)
- **GitHub Copilot Chat** (Required)
- **ESLint** (Recommended)
- **Prettier** (Recommended)
- **Tailwind CSS IntelliSense** (Recommended)

Or use the terminal:

```bash
code --install-extension github.copilot
code --install-extension github.copilot-chat
```

### 2. Sign In to GitHub

1. Click the GitHub icon in VS Code's left sidebar
2. Click "Sign in to use GitHub Copilot"
3. Follow the authentication flow
4. Verify the Copilot icon appears in the bottom-right status bar

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Your First Exercise (5 minutes)

1. **Open** `app/practice/module-1-copilot-chat/page.tsx`

2. **Find** the `ComplexFilter` component (around line 132)

3. **Highlight** the entire component

4. **Press** `Cmd + I` (Mac) or `Ctrl + I` (Windows/Linux)

5. **Type** `/explain` and press Enter

6. **Read** Copilot's explanation

**✅ Congratulations!** You just used Copilot as a teaching assistant.

---

## 📁 Project Structure

```
FES-Copilot-course/
├── app/
│   ├── practice/
│   │   ├── module-1-copilot-chat/      ← Start here!
│   │   ├── module-2-agent-features/    ← Then here
│   │   ├── module-3-inline-chat/       ← Edit Mode practice
│   │   ├── module-4-workspace-context/ ← Rules & context
│   │   └── module-5-portfolio/         ← Final project
│   ├── layout.tsx
│   └── page.tsx                        ← Home page with links
├── .github/
│   └── copilot-instructions.md         ← Your coding rules
├── __tests__/
│   └── example.test.tsx                ← Test examples
├── COURSE-GUIDE.md                     ← Detailed guide
└── README.md                           ← Project overview
```

---

## ⌨️ Essential Shortcuts

| What                  | Mac               | Windows/Linux      |
| --------------------- | ----------------- | ------------------ |
| **Inline Chat**       | `Cmd + I`         | `Ctrl + I`         |
| **Quick Chat**        | `Cmd + Shift + I` | `Ctrl + Shift + I` |
| **Accept Suggestion** | `Tab`             | `Tab`              |
| **Reject Suggestion** | `Esc`             | `Esc`              |

---

## 🎓 Module Overview

### Module 1: Setup & First Interaction

**Time:** 30 minutes  
**File:** `module-1-copilot-chat/page.tsx`  
**Learn:** `/explain`, suggestions, keyboard shortcuts

### Module 2: Core Agent Features

**Time:** 1 hour  
**File:** `module-2-agent-features/page.tsx`  
**Learn:** `/fix`, `/tests`, building features, asking questions

### Module 3: Inline Chat

**Time:** 45 minutes  
**File:** `module-3-inline-chat/page.tsx`  
**Learn:** Precise edits, refactoring, accessibility, style improvements

### Module 4: Rules & Context

**Time:** 30 minutes  
**File:** `module-4-workspace-context/page.tsx`  
**Learn:** Setting rules, leveraging context, consistency

### Module 5: Final Project

**Time:** 2-3 hours  
**File:** `module-5-portfolio/page.tsx`  
**Build:** Complete portfolio website from scratch

**Total Course Time:** ~5-6 hours

---

## 💡 How to Use the Practice Files

Each practice file has **BOLD COMMENT BLOCKS** that look like this:

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
 *
 * ========================================== */
```

**Look for these markers** - they tell you exactly where to practice!

**Color-coded borders** show you what to do:

- 🔴 Red = Fix broken code
- 🟢 Green = Add new features
- 🟣 Purple = Refactor existing code
- 🔵 Blue = Ask questions
- 🟡 Yellow = Bonus challenges

---

## 🐛 Troubleshooting

### Copilot Not Working?

```bash
# Check if Copilot is active
# Look at bottom-right status bar in VS Code
# Should show Copilot icon

# If not working:
1. Restart VS Code
2. Sign out and sign back in
3. Check your GitHub Copilot subscription
```

### No Suggestions Appearing?

- Wait 1-2 seconds after typing
- Try `Alt/Option + \` to manually trigger
- Add a comment describing what you want
- Make sure the file is saved

### Commands Not Working?

- Highlight code first before using `/explain` or `/fix`
- Make sure you're using Inline Chat (`Cmd/Ctrl + I`)
- Try Quick Chat instead (`Cmd/Ctrl + Shift + I`)

---

## 📚 Additional Resources

- **Course Guide:** Read `COURSE-GUIDE.md` for detailed info
- **README:** See `README.md` for project overview
- **Original Course:** Reference the course text document
- **Copilot Docs:** [docs.github.com/copilot](https://docs.github.com/copilot)

---

## ✅ Quick Checklist

Before starting the course, make sure:

- [ ] VS Code installed
- [ ] GitHub Copilot extension installed
- [ ] GitHub Copilot Chat extension installed
- [ ] Signed in to GitHub in VS Code
- [ ] Copilot icon visible in status bar
- [ ] `npm install` completed successfully
- [ ] Dev server runs with `npm run dev`
- [ ] Can open http://localhost:3000 in browser

---

## 🎉 Ready to Start!

1. **Run the dev server:** `npm run dev`
2. **Open:** `app/practice/module-1-copilot-chat/page.tsx`
3. **Follow:** The exercises in the file
4. **Experiment:** Try variations of each exercise
5. **Have fun:** You're learning to code with AI!

**Pro tip:** Keep the course text document open in a separate window for reference.

---

**Need help? Check `COURSE-GUIDE.md` for detailed instructions!**

Happy coding with Copilot! 🚀✨
