import { useRef } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'
import { sortedArticles, findAuthor, formatDate } from './blog-data'

export default function CanalixBlog() {
  usePageTitle('Canalix — blog')
  const root = useRef(null)
  useReveal(root)

  const articles = sortedArticles()

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Notes</span>
            <h1>From the bench, the registry, and the studio.</h1>
            <p className="lede">
              Product updates, customer stories, and design-system notes from
              the team building Canalix.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <ul className="blog-list">
            {articles.map((article) => {
              const author = findAuthor(article.authorSlug)
              return (
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
                        <span className="blog-card-author">{author?.name}</span>
                        <span className="blog-card-reading">{article.readingMinutes} min read</span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
