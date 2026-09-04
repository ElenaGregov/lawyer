
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-brand-name">
              JUDr. Josef Kešner
            </a>

            <span className="footer-brand-subtitle">
              Advokátní kancelář
            </span>
          </div>

          <nav className="footer-nav" aria-label="Patička">
            <a href="#o-kancelari">O kanceláři</a>
            <a href="#specializace">Právní služby</a>
            <a href="#postup">Jak postupujeme</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <div className="footer-legal">
            <a href="/cookies">Zásady cookies</a>
            <a href="/privacy">Ochrana osobních údajů</a>
            <button type="button">Nastavení cookies</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Advokátní kancelář JUDr. Josef Kešner, Hornokrčská
            1947/2, 140 00 Praha 4
          </p>

          <span className="footer-ico">IČO 71329731</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

