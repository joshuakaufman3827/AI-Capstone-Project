'use client'

/**
 * MODULE 5: Final Project - Portfolio Website
 *
 * A complete single-page portfolio built from the module's steps:
 * header + nav (with dark mode toggle), hero, projects grid, about,
 * contact form, and footer. Follows .github/copilot-instructions.md:
 * arrow functions, TypeScript types, Tailwind only, accessible markup.
 *
 * Design idea: every project is shown inside a small browser window with a
 * live screenshot, because these are sites people can actually visit.
 *
 * ✏️ To personalize: edit the constants in the "CONTENT" block below.
 * 🖼️ Screenshots: save them in /public/projects/ and set each project's `image`.
 */

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent, MouseEvent, ReactNode } from 'react'

/* ==========================================
 * TYPES
 * ========================================== */

type NavLink = {
  id: string
  label: string
}

type Project = {
  title: string
  summary: string
  description: string
  tech: TechKey[]
  // Deployed site (e.g. a Vercel URL). Leave undefined until it's live.
  liveUrl?: string
  repoUrl?: string
  // Optional: your own screenshot in /public, e.g. '/projects/dronetech.png'.
  // If left out, a screenshot of liveUrl is generated automatically.
  image?: string
  // Tailwind gradient for the colored placeholder shown until the site is live
  gradient: string
  featured?: boolean
}

type SkillGroup = {
  heading: string
  skills: TechKey[]
}

type Tech = {
  label: string
  // Logo URL; technologies without a logo render as a text badge instead
  icon?: string
  // Black logos (Next.js, Express, GitHub…) get flipped to white in dark mode
  invertOnDark?: boolean
}

type SocialLink = {
  name: string
  href: string
  icon: ReactNode
}

type ContactFields = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactFields, string>>

type FormStatus = 'idle' | 'submitting' | 'success'

type NavigateHandler = (event: MouseEvent<HTMLAnchorElement>, id: string) => void

/* ==========================================
 * CONTENT — edit these to make it yours
 * ========================================== */

const OWNER_NAME = 'Joshua Kaufman'
const ROLE = 'Front-end developer'
const INTRO =
  'I build websites for small businesses and web apps for the fun of it — most recently sites for a drone services company and a local handyman.'
const CONTACT_EMAIL = 'joshuakaufman3827@gmail.com'
const GITHUB_URL = 'https://github.com/joshuakaufman3827'
const LINKEDIN_URL = 'https://www.linkedin.com/in/joshbkaufman/'

const NAV_LINKS: NavLink[] = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

// Logos come from the Devicon library (devicon.dev), served by the jsDelivr CDN
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const devicon = (name: string, variant = 'original') =>
  `${DEVICON_BASE}/${name}/${name}-${variant}.svg`

const TECH = {
  html: { label: 'HTML5', icon: devicon('html5') },
  css: { label: 'CSS3', icon: devicon('css3') },
  javascript: { label: 'JavaScript', icon: devicon('javascript') },
  typescript: { label: 'TypeScript', icon: devicon('typescript') },
  react: { label: 'React', icon: devicon('react') },
  nextjs: { label: 'Next.js', icon: devicon('nextjs'), invertOnDark: true },
  redux: { label: 'Redux', icon: devicon('redux') },
  tailwind: { label: 'Tailwind CSS', icon: devicon('tailwindcss') },
  vite: { label: 'Vite', icon: devicon('vitejs') },
  node: { label: 'Node.js', icon: devicon('nodejs') },
  express: { label: 'Express', icon: devicon('express'), invertOnDark: true },
  firebase: { label: 'Firebase', icon: devicon('firebase') },
  gemini: { label: 'Gemini API' },
  rest: { label: 'REST APIs' },
  git: { label: 'Git', icon: devicon('git') },
  github: { label: 'GitHub', icon: devicon('github'), invertOnDark: true },
  jest: { label: 'Jest', icon: devicon('jest', 'plain') },
  testingLibrary: { label: 'Testing Library' },
  vercel: { label: 'Vercel', icon: devicon('vercel'), invertOnDark: true },
  netlify: { label: 'Netlify', icon: devicon('netlify') },
  copilot: { label: 'GitHub Copilot', icon: devicon('githubcopilot', 'plain'), invertOnDark: true },
} satisfies Record<string, Tech>

type TechKey = keyof typeof TECH

const PROJECTS: Project[] = [
  {
    title: 'DroneTech Solutions',
    summary: 'Client website',
    description:
      'A marketing site for a drone services company: what they offer, past work, and an easy way for customers to get in touch.',
    tech: ['react', 'tailwind', 'vercel'],
    liveUrl: 'https://drone-tech-1.vercel.app',
    repoUrl: 'https://github.com/joshuakaufman3827/Drone-Tech-Soloutions',
    featured: true,
    gradient: 'from-sky-400 to-indigo-600',
  },
  {
    title: 'Summarist',
    summary: 'Book summary app',
    description:
      'Read or listen to book summaries. Includes sign-in, a personalized For You page, an audio player, a saved library, and subscription plans.',
    tech: ['nextjs', 'typescript', 'firebase'],
    gradient: 'from-emerald-400 to-teal-600',
    liveUrl: 'https://vinternship2-chi.vercel.app',
    repoUrl: GITHUB_URL, // TODO: point to the repo
  },
  {
    title: "Jerry's Handyman Services",
    summary: 'Small business website',
    description:
      'A one-page site for a local handyman: services, upfront pricing, customer testimonials, a gallery of recent jobs, and a quote request form.',
    tech: ['html', 'css', 'netlify'],
    liveUrl: 'https://stellar-pie-91c64b.netlify.app',
    repoUrl: GITHUB_URL, // TODO: point to the repo
    gradient: 'from-amber-400 to-rose-500',
  },
  {
    title: 'Ultraverse',
    summary: 'NFT marketplace',
    description:
      'A marketplace for browsing and collecting digital art: hot collections, new items with live countdown timers, top sellers, and categories, with content loaded from an API.',
    tech: ['react', 'javascript', 'rest'],
    liveUrl: 'https://joshua-internship-seven.vercel.app',
    repoUrl: GITHUB_URL, // TODO: point to the repo
    gradient: 'from-fuchsia-500 to-purple-700',
  },
]

const SKILL_GROUPS: SkillGroup[] = [
  {
    heading: 'Front end',
    skills: ['html', 'css', 'javascript', 'typescript', 'react', 'nextjs', 'redux', 'tailwind'],
  },
  {
    heading: 'Back end & data',
    skills: ['node', 'express', 'firebase', 'rest', 'gemini'],
  },
  {
    heading: 'Workflow',
    skills: ['git', 'github', 'jest', 'testingLibrary', 'vite', 'vercel', 'netlify', 'copilot'],
  },
]

/* ==========================================
 * ICONS (inline SVG so no extra dependencies)
 * ========================================== */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: GITHUB_URL, icon: <GitHubIcon /> },
  { name: 'LinkedIn', href: LINKEDIN_URL, icon: <LinkedInIcon /> },
]

/* ==========================================
 * HELPERS & SHARED STYLES
 * ========================================== */

const THEME_STORAGE_KEY = 'portfolio-theme'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Shared spacing so every section lines up with the Hero (Step 5 refinement)
const SECTION_CLASSES = 'scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28'
const CONTAINER_CLASSES = 'mx-auto max-w-6xl'

// One focus style everywhere: navy ring on light, yellow ring on dark
const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-highlight dark:focus-visible:ring-offset-ink'

// Text link with a highlighter-yellow underline on hover
const TEXT_LINK = `rounded-sm underline decoration-transparent decoration-[3px] underline-offset-4 transition-colors hover:decoration-highlight ${FOCUS_RING}`

const PRIMARY_BUTTON = `inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 font-semibold text-paper transition-colors hover:bg-highlight hover:text-ink dark:bg-highlight dark:text-ink dark:hover:bg-paper ${FOCUS_RING}`

const SECONDARY_BUTTON = `inline-flex items-center justify-center rounded-lg border border-ink/20 px-5 py-3 font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5 dark:border-paper/25 dark:text-paper dark:hover:border-paper dark:hover:bg-paper/10 ${FOCUS_RING}`

// Pure validation function: easy to test and reuse
const validateContact = (fields: ContactFields): ContactErrors => {
  const errors: ContactErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!EMAIL_PATTERN.test(fields.email.trim()))
    errors.email = 'Enter an email like name@example.com.'
  if (fields.message.trim().length < 10) errors.message = 'Write at least 10 characters.'
  return errors
}

// Live screenshot of a deployed site via Microlink (free tier, cached on their CDN).
// For a permanent image, save a screenshot to /public/projects/ and set the project's `image`.
const screenshotUrl = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720`

type TechBadgeProps = {
  techKey: TechKey
  size: 'sm' | 'lg'
}

// A technology's logo (with its name as alt text + tooltip), or a text badge if it has no logo
const TechBadge = ({ techKey, size }: TechBadgeProps) => {
  const tech: Tech = TECH[techKey]
  if (!tech.icon) {
    return (
      <span
        className={`inline-flex items-center rounded-md border border-ink/15 font-semibold text-ink dark:border-paper/20 dark:text-paper ${
          size === 'lg' ? 'h-10 px-2.5 text-xs' : 'h-7 px-2 text-xs'
        }`}
      >
        {tech.label}
      </span>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small external SVG logos don't need next/image
    <img
      src={tech.icon}
      alt={tech.label}
      title={tech.label}
      loading="lazy"
      className={`${size === 'lg' ? 'h-10 w-10' : 'h-7 w-7'} ${tech.invertOnDark ? 'dark:invert' : ''}`}
    />
  )
}

// Smooth-scroll to a section while keeping the URL hash in sync (Step 8)
const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  if (!target) return
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}

const SectionHeading = ({ title, intro }: { title: string; intro?: string }) => (
  <div className="mb-12 max-w-2xl">
    <h2 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-paper sm:text-5xl">
      {title}
    </h2>
    {intro && (
      <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{intro}</p>
    )}
  </div>
)

/* ==========================================
 * HEADER (Step 1 + dark mode toggle)
 * ========================================== */

type HeaderProps = {
  isDark: boolean
  onToggleTheme: () => void
  onNavigate: NavigateHandler
}

const Header = ({ isDark, onToggleTheme, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMenuOpen(false)
    onNavigate(event, id)
  }

  const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur dark:border-paper/10 dark:bg-ink/85">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={event => handleNavClick(event, 'home')}
          className={`rounded-sm font-display text-lg font-bold tracking-tight text-ink dark:text-paper ${FOCUS_RING}`}
          aria-label={`${OWNER_NAME}, back to top`}
        >
          {OWNER_NAME}
        </a>

        <div className="flex items-center gap-1 sm:gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={event => handleNavClick(event, link.id)}
                  className={`text-sm font-medium text-ink/80 hover:text-ink dark:text-paper/80 dark:hover:text-paper ${TEXT_LINK}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            aria-pressed={isDark}
            className={`rounded-lg p-2 text-ink transition-colors hover:bg-ink/5 dark:text-paper dark:hover:bg-paper/10 ${FOCUS_RING}`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={`rounded-lg p-2 text-ink hover:bg-ink/5 dark:text-paper dark:hover:bg-paper/10 md:hidden ${FOCUS_RING}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-ink/10 px-5 py-3 dark:border-paper/10 md:hidden"
        >
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={event => handleNavClick(event, link.id)}
                className={`block rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-ink/5 dark:text-paper dark:hover:bg-paper/10 ${FOCUS_RING}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

/* ==========================================
 * HERO (Step 2 + fade in on load)
 * ========================================== */

const Hero = ({ onNavigate }: { onNavigate: NavigateHandler }) => {
  const [isVisible, setIsVisible] = useState(false)
  const liveProjects = useMemo(() => PROJECTS.filter(project => project.liveUrl), [])

  // Flip to visible after first paint so the CSS transition actually runs
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="home" className={`${SECTION_CLASSES} flex min-h-[calc(100svh-4rem)] items-center`}>
      <div
        className={`${CONTAINER_CLASSES} grid w-full gap-14 transition duration-700 ease-out motion-reduce:transition-none lg:grid-cols-[1fr_18rem] lg:items-end ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">{ROLE}</p>
          <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-ink dark:text-paper sm:text-8xl">
            {OWNER_NAME}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
            {INTRO}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`Contact me by email at ${CONTACT_EMAIL}`}
              className={PRIMARY_BUTTON}
            >
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={event => onNavigate(event, 'projects')}
              className={SECONDARY_BUTTON}
            >
              See my work
            </a>
          </div>
        </div>

        {/* Quick links to deployed sites — grows as more projects go live on Vercel */}
        {liveProjects.length > 0 && (
          <aside aria-labelledby="live-now-heading" className="border-l-4 border-highlight pl-5">
            <h2
              id="live-now-heading"
              className="font-display text-xl font-bold text-ink dark:text-paper"
            >
              Live now
            </h2>
            <ul className="mt-3 space-y-2">
              {liveProjects.map(project => (
                <li key={project.title}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} (opens in a new tab)`}
                    className={`font-semibold text-ink dark:text-paper ${TEXT_LINK}`}
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  )
}

/* ==========================================
 * PROJECTS (Step 3) — each card is a small browser window
 * ========================================== */

const BrowserFrame = ({ project }: { project: Project }) => {
  const [hasImageError, setHasImageError] = useState(false)
  const previewSrc = project.image ?? (project.liveUrl ? screenshotUrl(project.liveUrl) : undefined)
  const showPreview = previewSrc && !hasImageError

  return (
    <div className="overflow-hidden rounded-xl border border-ink/15 bg-white shadow-[0_1px_0_rgba(20,33,61,0.08)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-18px_rgba(20,33,61,0.45)] dark:border-paper/15 dark:bg-ink-soft">
      {/* Browser chrome: window dots so the preview reads as a live website */}
      <div className="flex items-center gap-3 border-b border-ink/10 bg-paper px-4 py-3 dark:border-paper/10 dark:bg-ink">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/25" />
        </div>
      </div>

      <div className="relative aspect-[16/9]">
        {showPreview ? (
          // eslint-disable-next-line @next/next/no-img-element -- external screenshot service, no next.config change needed
          <img
            src={previewSrc}
            alt={`Screenshot of the ${project.title} website`}
            loading="lazy"
            onError={() => setHasImageError(true)}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          // Placeholder until the project is deployed: the project name set large
          <div
            role="img"
            aria-label={`${project.title} screenshot placeholder`}
            className={`flex h-full items-end bg-gradient-to-br p-6 ${project.gradient}`}
          >
            <span className="font-display text-3xl font-extrabold leading-none tracking-tight text-white/90 transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
              {project.title}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    className={`group transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
      project.featured ? 'md:col-span-2' : ''
    }`}
  >
    <div
      className={project.featured ? 'md:grid md:grid-cols-[3fr_2fr] md:items-center md:gap-10' : ''}
    >
      <BrowserFrame project={project} />

      <div className="mt-6 md:mt-0">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{project.summary}</p>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink dark:text-paper sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-3" aria-label="Built with">
          {project.tech.map(techKey => (
            <li key={techKey}>
              <TechBadge techKey={techKey} size="sm" />
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the ${project.title} live site (opens in a new tab)`}
              className={`${PRIMARY_BUTTON} px-4 py-2 text-sm`}
            >
              Visit live site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View the ${project.title} code on GitHub (opens in a new tab)`}
              className={`${SECONDARY_BUTTON} px-4 py-2 text-sm`}
            >
              View code
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
)

const Projects = () => (
  <section
    id="projects"
    className={`${SECTION_CLASSES} border-t border-ink/10 dark:border-paper/10`}
  >
    <div className={CONTAINER_CLASSES}>
      <SectionHeading
        title="Selected work"
        intro="Two small business websites and two internship projects. Each one opens in its own tab."
      />
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
)

/* ==========================================
 * ABOUT (Step 5 — centered column)
 * ========================================== */

const initials = OWNER_NAME.split(' ')
  .map(part => part[0])
  .join('')

const About = () => (
  <section
    id="about"
    className={`${SECTION_CLASSES} border-t border-ink/10 bg-white/60 dark:border-paper/10 dark:bg-ink-soft/40`}
  >
    <div className="mx-auto max-w-2xl text-center">
      {/* Photo placeholder — replace with <Image src="/me.jpg" alt="Photo of Joshua Kaufman" ... /> */}
      <div
        role="img"
        aria-label={`Photo placeholder for ${OWNER_NAME}`}
        className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-ink font-display text-4xl font-bold text-highlight ring-4 ring-highlight ring-offset-4 ring-offset-paper dark:bg-paper dark:text-ink dark:ring-offset-ink"
      >
        {initials}
      </div>

      <h2 className="mt-10 font-display text-4xl font-bold tracking-tight text-ink dark:text-paper sm:text-5xl">
        About me
      </h2>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          I like the part of a project where a design stops being a mockup and starts being
          something you can click. I&apos;ve built sites for real clients, full-stack apps with
          sign-in and payments, and small tools that put AI to work.
        </p>
        <p>
          I use AI pair programming tools like GitHub Copilot to move faster, and I still read every
          line before it ships.
        </p>
      </div>

      <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
        {SKILL_GROUPS.map(group => (
          <div key={group.heading}>
            <h3 className="border-b-2 border-highlight pb-2 font-display text-lg font-bold text-ink dark:text-paper">
              {group.heading}
            </h3>
            <ul className="mt-4 flex flex-wrap items-center gap-4" aria-label={group.heading}>
              {group.skills.map(techKey => (
                <li key={techKey}>
                  <TechBadge techKey={techKey} size="lg" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ==========================================
 * CONTACT FORM (Step 6 + loading state)
 * ========================================== */

const EMPTY_FIELDS: ContactFields = { name: '', email: '', message: '' }

const inputClasses = (hasError: boolean) =>
  `mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-ink shadow-sm transition focus:outline-none focus:ring-2 dark:bg-ink dark:text-paper ${
    hasError
      ? 'border-red-600 focus:ring-red-600 dark:border-red-400 dark:focus:ring-red-400'
      : 'border-ink/20 focus:border-ink focus:ring-ink dark:border-paper/25 dark:focus:border-highlight dark:focus:ring-highlight'
  }`

type FieldProps = {
  id: keyof ContactFields
  label: string
  error?: string
  children: ReactNode
}

// Label + input + error message, so each field is wired up the same way
const Field = ({ id, label, error, children }: FieldProps) => (
  <div>
    <label
      htmlFor={`contact-${id}`}
      className="block text-sm font-semibold text-ink dark:text-paper"
    >
      {label}
    </label>
    {children}
    {error && (
      <p id={`contact-${id}-error`} className="mt-2 text-sm text-red-700 dark:text-red-300">
        {error}
      </p>
    )}
  </div>
)

const ContactForm = () => {
  const [fields, setFields] = useState<ContactFields>(EMPTY_FIELDS)
  // Only show an error after the user has left a field, so they aren't scolded while typing
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFields, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const errors = useMemo(() => validateContact(fields), [fields])
  const isValid = Object.keys(errors).length === 0

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFields(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleBlur = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid || status === 'submitting') return
    setStatus('submitting')
    // Simulated request — replace with a real endpoint (e.g. Formspree or an API route)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setStatus('success')
    setFields(EMPTY_FIELDS)
    setTouched({})
  }

  const visibleError = (field: keyof ContactFields) => (touched[field] ? errors[field] : undefined)

  const fieldProps = (field: keyof ContactFields) => ({
    id: `contact-${field}`,
    name: field,
    value: fields[field],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(visibleError(field)),
    'aria-describedby': visibleError(field) ? `contact-${field}-error` : undefined,
    className: inputClasses(Boolean(visibleError(field))),
  })

  return (
    <section
      id="contact"
      className={`${SECTION_CLASSES} border-t border-ink/10 dark:border-paper/10`}
    >
      <div className={`${CONTAINER_CLASSES} grid gap-12 lg:grid-cols-[1fr_1.2fr]`}>
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-paper sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Tell me a little about it and I&apos;ll get back to you by email. You can also write to
            me directly at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`font-semibold text-ink dark:text-paper ${TEXT_LINK}`}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        {status === 'success' ? (
          <div
            role="status"
            className="self-start rounded-xl border-l-4 border-highlight bg-white p-8 dark:bg-ink-soft"
          >
            <p className="font-display text-2xl font-bold text-ink dark:text-paper">Message sent</p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Thanks for reaching out. I&apos;ll reply by email.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className={`mt-6 font-semibold text-ink dark:text-paper ${TEXT_LINK}`}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" error={visibleError('name')}>
                <input type="text" autoComplete="name" {...fieldProps('name')} />
              </Field>
              <Field id="email" label="Email" error={visibleError('email')}>
                <input type="email" autoComplete="email" {...fieldProps('email')} />
              </Field>
            </div>
            <Field id="message" label="Message" error={visibleError('message')}>
              <textarea rows={6} {...fieldProps('message')} />
            </Field>

            {/* Disabled until every field passes validation (Step 6 refinement) */}
            <button
              type="submit"
              disabled={!isValid || status === 'submitting'}
              className={`${PRIMARY_BUTTON} w-full gap-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink disabled:hover:text-paper dark:disabled:hover:bg-highlight dark:disabled:hover:text-ink sm:w-auto`}
            >
              {status === 'submitting' && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                  aria-hidden="true"
                />
              )}
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

/* ==========================================
 * FOOTER (Step 4)
 * ========================================== */

const Footer = () => (
  <footer className="border-t border-ink/10 px-5 py-10 dark:border-paper/10 sm:px-8">
    <div
      className={`${CONTAINER_CLASSES} flex flex-col items-center justify-between gap-6 sm:flex-row`}
    >
      <p className="text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} {OWNER_NAME}
      </p>
      <ul className="flex items-center gap-2">
        {SOCIAL_LINKS.map(social => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${OWNER_NAME} on ${social.name} (opens in a new tab)`}
              className={`flex rounded-lg p-2 text-ink/70 transition-colors hover:bg-highlight hover:text-ink dark:text-paper/70 dark:hover:text-ink ${FOCUS_RING}`}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

/* ==========================================
 * PAGE
 * ========================================== */

const Module5Portfolio = () => {
  const [isDark, setIsDark] = useState(false)

  // Load the saved theme, falling back to the OS preference
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = window.localStorage.getItem(THEME_STORAGE_KEY)
    } catch {
      // Storage can be unavailable (private mode, sandboxed iframes) — ignore
    }
    if (saved === 'dark' || saved === 'light') {
      setIsDark(saved === 'dark')
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const next = !prev
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light')
      } catch {
        // Ignore storage failures; the toggle still works for this visit
      }
      return next
    })
  }, [])

  const handleNavigate = useCallback<NavigateHandler>((event, id) => {
    event.preventDefault()
    scrollToSection(id)
  }, [])

  return (
    // The `dark` class here drives every `dark:` variant below (tailwind darkMode: 'class')
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-paper text-ink transition-colors duration-300 selection:bg-highlight selection:text-ink dark:bg-ink dark:text-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-highlight focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <Header isDark={isDark} onToggleTheme={toggleTheme} onNavigate={handleNavigate} />
        <main id="main-content">
          <Hero onNavigate={handleNavigate} />
          <Projects />
          <About />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Module5Portfolio
