import { ArrowRight, Check } from "lucide-react";
import "./TrafficAccidents.css";

const services = [
  "náhradu škody na zdraví",
  "náhradu škody na vozidle",
  "nároky pozůstalých po obětech nehod",
  "jednání s pojišťovnami",
  "krácení nebo odmítnutí pojistného plnění",
];

function TrafficAccidents() {
  return (
    <section className="traffic-accidents section-light" id="dopravni-nehody">
      <div className="container">
        <div className="traffic-grid">
          <div className="traffic-content">
            <p className="section-label">Dopravní nehody</p>

            <h2>
              Po nehodě nemusíte
              <br />
              <em>na pojišťovnu sami</em>
            </h2>

            <p className="traffic-lead">
              Zastupujeme poškozené a pozůstalé při uplatňování nároků na
              náhradu škody a újmy vůči odpovědným subjektům a pojišťovnám.
            </p>

            <a href="#kontakt" className="traffic-button">
              Chci řešit svůj případ
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>

          <div className="traffic-services">
            <p className="traffic-services-label">Pomáháme například s</p>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <span className="traffic-check">
                    <Check size={14} strokeWidth={1.6} />
                  </span>

                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="traffic-bottom">
          <div className="traffic-bottom-number">01</div>

          <div className="traffic-bottom-text">
            <strong>Od prvního posouzení až po vymáhání nároku.</strong>

            <span>
              Prověříme váš případ, pomůžeme určit rozsah nároků a převezmeme
              za vás komunikaci s pojišťovnou.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrafficAccidents;