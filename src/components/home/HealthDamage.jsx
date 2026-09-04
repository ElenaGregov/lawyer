import { ArrowRight, Check } from "lucide-react";
import "./HealthDamage.css";

const claims = [
  "náhradu za bolest a další újmy na zdraví",
  "náklady spojené s léčbou a péčí",
  "nároky poškozených při dopravních nehodách",
  "nároky pozůstalých po obětech nehod",
];

function HealthDamage() {
  return (
    <section className="health-damage section-dark" id="skody-na-zdravi">
      <div className="container">
        <div className="health-damage-header">
          <p className="section-label">Škody na zdraví</p>

          <span className="health-damage-number">02</span>
        </div>

        <div className="health-damage-grid">
          <div className="health-damage-heading">
            <h2>
              Zdraví má svou cenu.
              <br />
              <em>Pomůžeme ji určit</em>
            </h2>
          </div>

          <div className="health-damage-content">
            <p className="health-damage-lead">
              Při škodě na zdraví často nejde jen o jeden nárok. Pomáháme
              poškozeným a pozůstalým zorientovat se v tom, na co mají právo,
              a jednotlivé nároky řádně uplatnit.
            </p>

            <ul className="health-damage-list">
              {claims.map((claim) => (
                <li key={claim}>
                  <span className="health-damage-check">
                    <Check size={13} strokeWidth={1.6} />
                  </span>

                  <span>{claim}</span>
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="health-damage-link">
              Probrat svůj případ
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="health-damage-note">
          <span className="health-damage-note-number">02</span>

          <div>
            <strong>
              Nároky je potřeba správně určit, doložit a vyčíslit.
            </strong>

            <p>
              Pomůžeme vám s jejich uplatněním a s komunikací s odpovědným
              subjektem nebo pojišťovnou.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthDamage;