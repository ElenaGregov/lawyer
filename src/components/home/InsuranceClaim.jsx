import { ArrowRight } from "lucide-react";
import "./InsuranceClaim.css";

function InsuranceClaim() {
  return (
    <section className="insurance-claim section-light" id="pojistovaci-pravo">
      <div className="container">
        <div className="insurance-claim-top">
          <p className="section-label">Pojišťovací právo</p>

          <span className="insurance-claim-index">03</span>
        </div>

        <div className="insurance-claim-grid">
          <div className="insurance-claim-heading">
            <h2>
              Dostali jste od pojišťovny
              <br />
              <em>méně, než vám náleží?</em>
            </h2>
          </div>

          <div className="insurance-claim-content">
            <p className="insurance-claim-lead">
              Krácení nebo odmítnutí pojistného plnění nemusí znamenat, že
              pojišťovna postupuje správně.
            </p>

            <p>
              Posoudíme váš případ, prověříme výši poskytnuté náhrady a
              pomůžeme vám uplatnit nároky, které vám podle okolností případu
              náleží.
            </p>

            <a href="#kontakt" className="insurance-claim-link">
              Nechat posoudit můj případ
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="insurance-claim-statement">
          <div className="insurance-claim-bottom-number">03</div>

          <p>
            Posuzujeme oprávněnost odmítnutí nebo snížení pojistného plnění
            a v případě potřeby řešíme nárok i soudní cestou.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InsuranceClaim;