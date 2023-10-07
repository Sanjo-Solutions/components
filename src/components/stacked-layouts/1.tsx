"use client"

import * as bootstrap from "bootstrap"
import React, { useEffect, useRef } from "react"

export function StackedLayout1({menuItems, title, children}: {menuItems: any[], title: string, children?: React.ReactNode}) {
  const dropdownRef = useRef(null)

  useEffect(
  	function initializeDropdown() {
      console.log('a', dropdownRef.current!)
  	  bootstrap.Dropdown.getOrCreateInstance(dropdownRef.current!)
  	},
  	[]
  )

  return (
    <div className="stacked-layout-1 d-flex flex-column h-100">
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {menuItems &&
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item, index) => {
                return <li key={index} className="nav-item">
                  <a className="nav-link" href={item.href}>{item.label}</a>
                </li>
              }) }
            </ul> }
            <div className="dropdown text-end">
              <a
                ref={dropdownRef}
                data-bs-toggle="dropdown"
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">New project...</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Profile</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-3 border-bottom">
        <div className="container">
          <h1 className="m-0">{ title }</h1>
        </div>
      </div>

      <main className="flex-grow-1">
        <div className="container h-100 py-5">
          { children }
        </div>
      </main>
    </div>
  )
}
