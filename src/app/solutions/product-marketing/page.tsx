"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ProductMarketingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            WriteWorks
          </Link>
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${styles.navLinks} ${menuOpen ? styles.navLinksActive : ""}`}
          >
            <Link href="/solutions" className={styles.navLink}>
              Solutions
            </Link>
            <Link href="/features" className={styles.navLink}>
              Features
            </Link>
            <Link href="/pricing" className={styles.navLink}>
              Pricing
            </Link>
            <Link href="/resources" className={styles.navLink}>
              Resources
            </Link>
            <Link href="/demo" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Built for Product Marketers
            </div>
            <h1 className={styles.heroTitle}>
              Create Compelling Product Content{" "}
              <span className={styles.heroTitleAccent}>70% Faster</span>
            </h1>
            <p className={styles.heroDescription}>
              WriteWorks AI empowers product marketing teams to generate
              high-quality positioning, messaging, and launch content in minutes
              instead of days.
            </p>
            <div className={styles.heroCta}>
              <Link
                href="/demo"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`}
              >
                Watch Demo
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>500+</div>
                <div className={styles.heroStatLabel}>Product Teams</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>70%</div>
                <div className={styles.heroStatLabel}>Time Saved</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>4.9/5</div>
                <div className={styles.heroStatLabel}>User Rating</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <svg
              className={styles.heroImage}
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="400" fill="#f8fafc" />
              <rect
                x="20"
                y="20"
                width="560"
                height="40"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <circle cx="44" cy="40" r="8" fill="#ef4444" />
              <circle cx="68" cy="40" r="8" fill="#f59e0b" />
              <circle cx="92" cy="40" r="8" fill="#10b981" />
              <rect x="120" y="32" width="200" height="16" rx="4" fill="#e2e8f0" />
              <rect
                x="40"
                y="80"
                width="160"
                height="300"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <rect x="56" y="100" width="128" height="12" rx="2" fill="#6366f1" />
              <rect x="56" y="124" width="100" height="8" rx="2" fill="#e2e8f0" />
              <rect x="56" y="144" width="80" height="8" rx="2" fill="#e2e8f0" />
              <rect x="56" y="164" width="110" height="8" rx="2" fill="#e2e8f0" />
              <rect x="56" y="200" width="128" height="12" rx="2" fill="#6366f1" />
              <rect x="56" y="224" width="90" height="8" rx="2" fill="#e2e8f0" />
              <rect x="56" y="244" width="100" height="8" rx="2" fill="#e2e8f0" />
              <rect
                x="220"
                y="80"
                width="360"
                height="300"
                rx="8"
                fill="#fff"
                stroke="#e2e8f0"
              />
              <rect x="240" y="100" width="200" height="16" rx="2" fill="#1e293b" />
              <rect x="240" y="132" width="320" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="152" width="280" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="172" width="300" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="192" width="260" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="230" width="150" height="12" rx="2" fill="#6366f1" />
              <rect x="240" y="258" width="320" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="278" width="290" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="298" width="310" height="8" rx="2" fill="#e2e8f0" />
              <rect x="240" y="330" width="100" height="32" rx="6" fill="#6366f1" />
              <text
                x="268"
                y="351"
                fill="#fff"
                fontFamily="Inter"
                fontSize="12"
                fontWeight="600"
              >
                Generate
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={`${styles.section} ${styles.audience}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Who It&apos;s For</div>
            <h2 className={styles.sectionTitle}>
              Built for Modern Product Marketing Teams
            </h2>
            <p className={styles.sectionDescription}>
              Whether you&apos;re a solo PMM or part of a large enterprise team,
              WriteWorks scales with your content needs.
            </p>
          </div>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className={styles.audienceCardTitle}>
                Product Marketing Managers
              </h3>
              <p className={styles.audienceCardDescription}>
                Create compelling positioning, messaging frameworks, and
                go-to-market content that resonates with your target audience.
              </p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className={styles.audienceCardTitle}>Marketing Teams</h3>
              <p className={styles.audienceCardDescription}>
                Collaborate efficiently across campaigns, maintain brand
                consistency, and ship content faster than ever before.
              </p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className={styles.audienceCardTitle}>Enterprise PMM Leaders</h3>
              <p className={styles.audienceCardDescription}>
                Scale your content operations, maintain governance, and enable
                your team to produce more with fewer resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={`${styles.section} ${styles.challenges}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>The Problem</div>
            <h2 className={styles.sectionTitle}>
              Challenges Product Marketers Face Every Day
            </h2>
            <p className={styles.sectionDescription}>
              Sound familiar? These bottlenecks slow down your launches and
              impact your team&apos;s productivity.
            </p>
          </div>
          <div className={styles.challengesGrid}>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNumber}>1</div>
              <div className={styles.challengeContent}>
                <h3>Time-Consuming Content Creation</h3>
                <p>
                  Writing product messaging, launch emails, and sales enablement
                  materials takes days instead of hours.
                </p>
              </div>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNumber}>2</div>
              <div className={styles.challengeContent}>
                <h3>Inconsistent Brand Voice</h3>
                <p>
                  Maintaining consistent messaging across teams and channels is
                  nearly impossible without the right tools.
                </p>
              </div>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNumber}>3</div>
              <div className={styles.challengeContent}>
                <h3>Scaling Content for Multiple Products</h3>
                <p>
                  As your product portfolio grows, creating unique content for
                  each becomes overwhelming.
                </p>
              </div>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeNumber}>4</div>
              <div className={styles.challengeContent}>
                <h3>Writer&apos;s Block &amp; Creative Burnout</h3>
                <p>
                  Staring at blank pages kills productivity and delays critical
                  go-to-market timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`${styles.section} ${styles.solutions}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>The Solution</div>
            <h2 className={`${styles.sectionTitle} ${styles.solutionsSectionTitle}`}>
              How WriteWorks Solves These Problems
            </h2>
            <p className={`${styles.sectionDescription} ${styles.solutionsSectionDescription}`}>
              Our AI-powered platform eliminates content bottlenecks so you can
              focus on strategy.
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardTitle}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Instant Content Generation
              </h3>
              <p className={styles.solutionCardDescription}>
                Generate first drafts of product messaging, email campaigns, and
                sales collateral in seconds with our trained AI models.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardTitle}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Brand Voice Consistency
              </h3>
              <p className={styles.solutionCardDescription}>
                Train your custom brand voice profile and ensure every piece of
                content sounds authentically like your company.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardTitle}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                Template Library
              </h3>
              <p className={styles.solutionCardDescription}>
                Access 50+ product marketing templates for positioning documents,
                competitive battle cards, and launch announcements.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionCardTitle}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Multi-Product Scaling
              </h3>
              <p className={styles.solutionCardDescription}>
                Create product-specific content profiles and generate tailored
                messaging for your entire portfolio effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs to Be Done Section */}
      <section className={`${styles.section} ${styles.jtbd}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Jobs to Be Done</div>
            <h2 className={styles.sectionTitle}>
              What You Can Accomplish with WriteWorks
            </h2>
            <p className={styles.sectionDescription}>
              From strategic messaging to tactical content, accelerate every
              aspect of your product marketing.
            </p>
          </div>
          <div className={styles.jtbdGrid}>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Product Positioning</h3>
              <p className={styles.jtbdCardDescription}>
                Define and refine your product&apos;s market position
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Messaging Frameworks</h3>
              <p className={styles.jtbdCardDescription}>
                Build consistent messaging hierarchies
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Launch Emails</h3>
              <p className={styles.jtbdCardDescription}>
                Craft compelling announcement campaigns
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Sales Enablement</h3>
              <p className={styles.jtbdCardDescription}>
                Generate battle cards and one-pagers
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Product Announcements</h3>
              <p className={styles.jtbdCardDescription}>
                Write impactful release communications
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Competitive Analysis</h3>
              <p className={styles.jtbdCardDescription}>
                Structure and document competitor insights
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Persona Development</h3>
              <p className={styles.jtbdCardDescription}>
                Create detailed buyer persona profiles
              </p>
            </div>
            <div className={styles.jtbdCard}>
              <div className={styles.jtbdIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className={styles.jtbdCardTitle}>Brand Guidelines</h3>
              <p className={styles.jtbdCardDescription}>
                Document and maintain brand standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className={`${styles.section} ${styles.timeSavings}`}>
        <div className={styles.container}>
          <div className={styles.timeSavingsWrapper}>
            <div className={styles.timeSavingsContent}>
              <div className={styles.sectionLabel}>Time Savings</div>
              <h2 className={styles.timeSavingsTitle}>
                Save Up to 70% of Your Content Creation Time
              </h2>
              <p className={styles.timeSavingsDescription}>
                Our customers report dramatic productivity improvements across
                all product marketing activities. See how WriteWorks transforms
                your workflow.
              </p>
              <div className={styles.savingsMetrics}>
                <div className={styles.savingsMetric}>
                  <div className={styles.savingsMetricValue}>70%</div>
                  <div className={styles.savingsMetricLabel}>
                    Faster content creation
                  </div>
                </div>
                <div className={styles.savingsMetric}>
                  <div className={styles.savingsMetricValue}>85%</div>
                  <div className={styles.savingsMetricLabel}>
                    Reduction in writer&apos;s block
                  </div>
                </div>
                <div className={styles.savingsMetric}>
                  <div className={styles.savingsMetricValue}>60%</div>
                  <div className={styles.savingsMetricLabel}>
                    Less revision cycles
                  </div>
                </div>
                <div className={styles.savingsMetric}>
                  <div className={styles.savingsMetricValue}>3x</div>
                  <div className={styles.savingsMetricLabel}>
                    More content output
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.savingsVisual}>
              <div className={styles.savingsChart}>
                <div className={styles.barChart}>
                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>Without WriteWorks</div>
                    <div className={styles.barContainer}>
                      <div className={`${styles.barFill} ${styles.barFillWithout}`}>
                        8 hours
                      </div>
                    </div>
                  </div>
                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>With WriteWorks</div>
                    <div className={styles.barContainer}>
                      <div className={`${styles.barFill} ${styles.barFillWith}`}>
                        2.5 hrs
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.chartCaption}>
                  Average time to complete a product launch content package
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to Transform Your Product Marketing?
          </h2>
          <p className={styles.ctaDescription}>
            Join 500+ product marketing teams already saving time with WriteWorks
            AI.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/demo"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              href="/demo"
              className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge} ${styles.btnOutlineWhite}`}
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerContainer}`}>
          <Link href="/" className={styles.footerLogo}>
            WriteWorks
          </Link>
          <div className={styles.footerLinks}>
            <Link href="/solutions" className={styles.footerLink}>
              Solutions
            </Link>
            <Link href="/features" className={styles.footerLink}>
              Features
            </Link>
            <Link href="/pricing" className={styles.footerLink}>
              Pricing
            </Link>
            <Link href="/about" className={styles.footerLink}>
              About
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Contact
            </Link>
          </div>
          <div className={styles.footerCopy}>
            &copy; 2026 WriteWorks AI. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
