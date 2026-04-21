import { Link } from 'react-router-dom'

export default function SiteFooter({ inCasedoc }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__cols">
          <div className="site-footer__col">
            <div className="site-footer__mark">Canalix</div>
            <p className="site-footer__body">
              A branded house for judicial software. Master brand behind Casedoc
              and a family of products serving courts, counsel, and regulators
              worldwide.
            </p>
          </div>

          <div className="site-footer__col">
            <h4>Canalix</h4>
            <Link to="/canalix/site/solutions">Solutions</Link>
            <Link to="/canalix/site/about">About</Link>
            <Link to="/canalix/site/blog">Blog</Link>
            <Link to="/canalix/site/contact">Contact</Link>
          </div>

          <div className="site-footer__col">
            <h4>Casedoc</h4>
            <Link to="/canalix/site/casedoc">Overview</Link>
            <Link to="/canalix/site/casedoc/features">Features</Link>
            <Link to="/canalix/site/casedoc/virtual-hearing">Virtual Hearing</Link>
            <Link to="/canalix/site/casedoc/get-demo">Get demo</Link>
          </div>

          <div className="site-footer__col">
            <h4>Resources</h4>
            <Link to="/canalix/site/casedoc/support">Support</Link>
            <a href="/canalix">Brand book</a>
            <a href="/canalix/marks">Product marks</a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Canalix. All rights reserved.</span>
          <span>Designed + built by Kolkrabbi Vinnustofa</span>
        </div>
      </div>
    </footer>
  )
}
