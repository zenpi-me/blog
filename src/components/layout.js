import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main
        style={{
          minHeight: '70vh',
        }}
      >
        {children}
      </main>
      <footer style={{ marginTop: '3rem' }}>
        <a
          href="https://mobile.twitter.com/zenpi_me"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/its-wufu"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull; There will be cake here soon...
      </footer>
    </div>
  )
}

export default Layout
