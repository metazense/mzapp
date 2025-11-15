'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo-purple.png"
            alt="Metazense Logo"
            width={40}
            height={40}
            style={{ display: 'block' }}
          />
          <span style={{ lineHeight: '40px' }}>metazense</span>
        </Link>
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
        <div className={styles.navActions}>
          <a href="#login" className={styles.btnSecondary}>Log In</a>
          <a href="#demo" className={`${styles.btn} ${styles.btnPrimary}`}>Get Demo →</a>
        </div>
      </div>
    </nav>
  )
}
