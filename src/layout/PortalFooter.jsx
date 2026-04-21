export default function PortalFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="kol-portal-footer">
      <a
        href="https://kolkrabbi.io"
        target="_blank"
        rel="noopener"
        aria-label="Kolkrabbi Vinnustofa"
      >
        <img src="/favicon/favicon.svg" alt="" width="32" height="32" />
      </a>
      <p className="kol-helper-xs-2 text-fg-48">
        <a href="https://kolkrabbi.io" target="_blank" rel="noopener" className="hover:text-fg-80">
          Kolkrabbi Vinnustofa
        </a>
        {' · '}
        {year}
      </p>
    </footer>
  )
}
