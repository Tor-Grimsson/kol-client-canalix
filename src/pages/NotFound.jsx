import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not found')

  return (
    <section className="kol-page-hero">
      <p className="kol-helper-xs uppercase tracking-widest text-fg-48 m-0 mb-4">404</p>
      <h1 className="kol-display-lg text-auto m-0 mb-6">Not here.</h1>
      <p className="kol-text-lg text-fg-64 m-0 max-w-[60ch]">
        That route isn&rsquo;t part of this brand book.{' '}
        <Link to="/" className="text-auto hover:text-fg-80 underline">
          Back to the landing
        </Link>
        .
      </p>
    </section>
  )
}
