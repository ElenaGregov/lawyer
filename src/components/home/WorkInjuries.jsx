import { ArrowRight, Check } from "lucide-react";
import "./WorkInjuries.css";

const claims = [
  "nároky vzniklé v důsledku pracovního úrazu",
  "náhradu škody a újmy na zdraví",
  "jednání se zaměstnavatelem a pojišťovnou",
  "posouzení rozsahu a výše jednotlivých nároků",
];

function WorkInjuries() {
  return (
    <section className="work-injuries section-dark" id="pracovni-urazy">
      <div className="container">
        <div className="work-injuries-header">
          <p className="section-label">Pracovní úrazy</p>

          <span className="work-injuries-number">04</span>
        </div>

        <div className="work-injuries-grid">
          <div className="work-injuries-intro">
            <span className="work-injuries-eyebrow">
              Když dojde k úrazu při práci
            </span>

            <h2>
              Vaše práva
              <br />
              <em>nekončí úrazem</em>
            </h2>

            <p>
              Pomůžeme vám zjistit, jaké nároky vám v souvislosti s pracovním
              úrazem vznikly, a postaráme se o jejich řádné uplatnění.
            </p>
          </div>

          <div className="work-injuries-services">
            <p className="work-injuries-services-label">
              Řešíme například
            </p>

            <ul>
              {claims.map((claim) => (
                <li key={claim}>
                  <span className="work-injuries-check">
                    <Check size={13} strokeWidth={1.6} />
                  </span>

                  <span>{claim}</span>
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="work-injuries-link">
              Probrat svůj případ
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="work-injuries-bottom">
          <span className="work-injuries-bottom-number">04</span>

          <div className="work-injuries-bottom-content">
            <strong>
              Nemusíte sami zjišťovat, na co všechno máte nárok.
            </strong>

            <p>
              Projdeme s vámi okolnosti případu a pomůžeme vám jednotlivé
              nároky uplatnit vůči odpovědnému subjektu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkInjuries;