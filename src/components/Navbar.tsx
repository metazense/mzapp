'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
        setIsSolutionsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setIsSolutionsOpen(false)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsSolutionsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <Image
            src="/images/logo-purple.png"
            alt="Metazense Logo"
            width={40}
            height={40}
            style={{ display: 'block' }}
          />
          <span style={{ lineHeight: '40px' }}>metazense</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li><a href="#platform">Platform</a></li>
          <li className={styles.dropdown}>
            <a href="#solutions">Solutions</a>
            <div className={styles.dropdownMenu}>
              <Link href="/solutions/migration" className={styles.dropdownItem}>
                Migration
              </Link>
              <Link href="/solutions/compliance" className={styles.dropdownItem}>
                Compliance
              </Link>
            </div>
          </li>
          <li><a href="#why">Why Metazense</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#company">Company</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className={styles.navActions}>
          <a href="#login" className={styles.btnSecondary}>Log In</a>
          <a href="#demo" className={`${styles.btn} ${styles.btnPrimary}`}>Get Demo →</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayActive : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuActive : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li>
            <a href="#platform" onClick={closeMobileMenu}>Platform</a>
          </li>
          <li className={styles.mobileDropdown}>
            <button
              className={styles.mobileDropdownToggle}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              aria-expanded={isSolutionsOpen}
            >
              Solutions
              <svg
                className={`${styles.chevron} ${isSolutionsOpen ? styles.chevronRotated : ''}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownMenu} ${isSolutionsOpen ? styles.mobileDropdownMenuActive : ''}`}>
              <Link href="/solutions/migration" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                Migration
              </Link>
              <Link href="/solutions/compliance" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                Compliance
              </Link>
            </div>
          </li>
          <li>
            <a href="#why" onClick={closeMobileMenu}>Why Metazense</a>
          </li>
          <li>
            <a href="#resources" onClick={closeMobileMenu}>Resources</a>
          </li>
          <li>
            <a href="#company" onClick={closeMobileMenu}>Company</a>
          </li>
        </ul>
        <div className={styles.mobileActions}>
          <a href="#login" className={styles.mobileBtn} onClick={closeMobileMenu}>Log In</a>
          <a href="#demo" className={`${styles.mobileBtn} ${styles.mobileBtnPrimary}`} onClick={closeMobileMenu}>
            Get Demo →
          </a>
        </div>
      </div>
    </nav>
  )
}
