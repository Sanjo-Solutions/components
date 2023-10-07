"use client"

import { Theme } from "@/Theme"
import * as bootstrap from "bootstrap"
import React, { useCallback, useEffect, useRef } from "react"

export function StackedLayout1({
  menuItems,
  title,
  theme,
  mainBackgroundColor,
  children,
}: {
  menuItems?: any[]
  title: string
  theme?: Theme
  mainBackgroundColor?: string
  children?: React.ReactNode
}) {
  theme = theme || "light"

  const dropdownRef = useRef(null)
  const navbarRef = React.useRef<HTMLDivElement>(null)

  const toggleNavbar = useCallback(function toggleNavbar(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    bootstrap.Collapse.getOrCreateInstance(navbarRef.current!).toggle()
  }, [])

  useEffect(function initializeDropdown() {
    bootstrap.Dropdown.getOrCreateInstance(dropdownRef.current!)
  }, [])

  return (
    <div className="stacked-layout-1 d-flex flex-column">
      <nav
        className={`navbar navbar-expand-lg bg-${theme} border-bottom border-body`}
        data-bs-theme={theme}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
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
            {menuItems && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menuItems.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a className="nav-link" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
            <div className="dropdown text-end">
              <a
                ref={dropdownRef}
                data-bs-toggle="dropdown"
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                aria-expanded="false"
              >
                <img
                  src="/assets/Male_Avatar.jpg"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-3 border-bottom">
        <div className="container">
          <h1 className="m-0">{title}</h1>
        </div>
      </div>

      <main className="flex-grow-1">
        <div className="container h-100 py-5">{children}</div>
      </main>
    </div>
  )
}
