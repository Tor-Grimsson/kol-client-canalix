import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'
import BlogBody from './BlogBody'
import { findArticle, findAuthor, formatDate } from './blog-data'

export default function CanalixBlogArticle() {
  const { slug } = useParams()
  const article = findArticle(slug)
  const author = article ? findAuthor(article.authorSlug) : null

  usePageTitle(article ? `${article.title} · Canalix` : 'Canalix — blog')
  const root = useRef(null)
  useReveal(root)

  if (!article) {
    return (
      <main ref={root}>
        <section className="site-hero site-hero--centered">
          <div className="site-hero__inner">
            <div className="site-hero__body">
              <span className="eyebrow">404</span>
              <h1>Article not found.</h1>
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
      <article className="blog-article">
        {article.cover && (
          <div className="blog-article-cover">
            <img src={article.cover} alt="" aria-hidden="true" />
          </div>
        )}

        <div className="container blog-article-inner">
          <Link to="/canalix/site/blog" className="blog-back-link" data-reveal>
            ← Back to blog
          </Link>

          <header className="blog-article-header" data-reveal>
            {article.tag && <span className="blog-tag">{article.tag}</span>}
            <h1 className="blog-article-title">{article.title}</h1>
            <p className="blog-article-excerpt lede">{article.excerpt}</p>
            <div className="blog-article-meta">
              {author && (
                <Link to={`/canalix/site/blog/author/${author.slug}`} className="blog-article-author">
                  <span className="blog-avatar">{author.avatarInitial}</span>
                  <span className="blog-article-author-name">{author.name}</span>
                </Link>
              )}
              <span className="blog-article-meta-sep" aria-hidden="true">·</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span className="blog-article-meta-sep" aria-hidden="true">·</span>
              <span>{article.readingMinutes} min read</span>
            </div>
          </header>

          <div data-reveal>
            <BlogBody blocks={article.body} />
          </div>

          {author && (
            <aside className="blog-author-card" data-reveal>
              <Link to={`/canalix/site/blog/author/${author.slug}`} className="blog-author-card-link">
                <span className="blog-avatar blog-avatar--lg">{author.avatarInitial}</span>
                <div className="blog-author-card-body">
                  <div className="blog-author-card-head">
                    <span className="blog-author-card-name">{author.name}</span>
                    <span className="blog-author-card-role">{author.role}</span>
                  </div>
                  <p className="blog-author-card-bio">{author.bio}</p>
                </div>
              </Link>
            </aside>
          )}
        </div>
      </article>
    </main>
  )
}
