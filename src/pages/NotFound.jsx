import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not found')

  return (
    <section className="kol-page__hero">
      <p className="kol-page__section-label">404</p>
      <h1 className="kol-page__title">Not here.</h1>
      <p className="kol-page__lede">
        That route isn&rsquo;t part of this brand book.{' '}
        <Link to="/" className="kol-topnav__link is-active">
          Back to the landing
        </Link>
        .
      </p>
    </section>
  )
}
