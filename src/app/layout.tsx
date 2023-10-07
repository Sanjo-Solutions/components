"use client"

import * as bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useCallback } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navbarRef = React.useRef<HTMLDivElement>(null)

  const toggleNavbar = useCallback(function toggleNavbar(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    bootstrap.Collapse.getOrCreateInstance(navbarRef.current!).toggle()
  }, [])

  return (
    <html lang="en" className="min-vh-100">
      <body className="min-vh-100 d-flex flex-column">
        <nav
          className={`navbar navbar-expand-lg bg-light border-bottom border-body`}
          data-bs-theme="light"
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div ref={navbarRef} className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Components
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          <div className="container my-5">{children}</div>
        </main>

        <div className="container">
          <footer className="d-flex flex-wrap justify-content-end align-items-center py-3 my-4 border-top">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  href="/credits"
                  className="nav-link px-2 text-body-secondary"
                >
                  Credits
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  )
}
