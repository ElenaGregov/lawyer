import { ArrowRight, Phone } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section-dark">
      <div className="hero-background">
        <div className="hero-grid" />

        <div className="hero-line hero-line-one" />
        <div className="hero-line hero-line-two" />

        {/* ADVOCATE PHOTO */}
        <div className="hero-portrait" aria-hidden="true">
          <img
            src="/images/hero3.jpg"
            alt="JUDr. Josef Kešner"
          />
        </div>

        <div className="hero-mark">
          <span>AK Kešner</span>
        </div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            Odškodnění a pojišťovací právo
          </p>

          <h1>
            Pomůžeme vám získat{" "}
            <em>odškodnění,</em> které Vám náleží
          </h1>

          <p className="hero-description">
            Specializujeme se na odškodnění po dopravních nehodách.
            Zastupujeme poškozené a pozůstalé při jednání s pojišťovnami
            i při vymáhání náhrady škody a újmy.
          </p>

          <div className="hero-actions">
            <a href="#kontakt" className="button button-primary">
              Probrat můj případ
              <ArrowRight size={17} strokeWidth={1.6} />
            </a>

            <a
              href="tel:+420603299475"
              className="hero-phone"
            >
              <Phone size={16} strokeWidth={1.5} />
              <span>+420 603 299 475</span>
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-side-number">2004</div>

          <div className="hero-side-text">
            založení vlastní
            <br />
            advokátní kanceláře
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Objevte více ↓</span>
      </div>
    </section>
  );
}

export default Hero;
