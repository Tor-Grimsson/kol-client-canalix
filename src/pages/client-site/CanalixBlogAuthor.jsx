import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'
import { findAuthor, articlesByAuthor, formatDate } from './blog-data'

export default function CanalixBlogAuthor() {
  const { slug } = useParams()
  const author = findAuthor(slug)
  const articles = author ? articlesByAuthor(slug) : []

  usePageTitle(author ? `${author.name} · Canalix blog` : 'Canalix — blog')
  const root = useRef(null)
  useReveal(root)

  if (!author) {
    return (
      <main ref={root}>
        <section className="site-hero site-hero--centered">
          <div className="site-hero__inner">
            <div className="site-hero__body">
              <span className="eyebrow">404</span>
              <h1>Author not found.</h1>
              <p className="lede">
                <Link to="/canalix/site/blog">Back to the blog index.</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <Link to="/canalix/site/blog" className="blog-back-link">← Back to blog</Link>
            <div className="blog-author-header">
              <span className="blog-avatar blog-avatar--xl">{author.avatarInitial}</span>
              <div className="blog-author-header-body">
                <span className="eyebrow">{author.role}</span>
                <h1>{author.name}</h1>
                <p className="lede">{author.bio}</p>
                {author.links.length > 0 && (
                  <ul className="blog-author-links">
                    {author.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div className="blog-author-list-head">
            <span className="eyebrow">Published by {author.name}</span>
          </div>
          <ul className="blog-list">
            {articles.map((article) => (
              <li key={article.slug} className="blog-card" data-reveal>
                <Link to={`/canalix/site/blog/${article.slug}`} className="blog-card-link">
                  {article.cover && (
                    <div className="blog-card-cover">
                      <img src={article.cover} alt="" aria-hidden="true" />
                    </div>
                  )}
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      {article.tag && <span className="blog-tag">{article.tag}</span>}
                      <span className="blog-card-date">{formatDate(article.publishedAt)}</span>
                    </div>
                    <h3 className="blog-card-title">{article.title}</h3>
                    <p className="blog-card-excerpt">{article.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-reading">{article.readingMinutes} min read</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
