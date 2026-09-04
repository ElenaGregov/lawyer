
import { ArrowRight } from "lucide-react";
import "./Experience.css";

const experienceFacts = [
  {
    number: "2004",
    label: "založení vlastní advokátní kanceláře",
  },
  {
    number: "7 let",
    label: "působení v České pojišťovně",
  },
  {
    number: "Ředitel",
    label: "odboru povinného ručení",
  },
];

function Experience() {
  return (
    <section className="experience section-light" id="o-kancelari">
      <div className="container">
        <div className="experience-grid">
          <div className="experience-intro">
            <p className="section-label">Zkušenost a odbornost</p>

            <div className="experience-number">2004</div>

            <p className="experience-number-label">
              rok založení vlastní
              <br />
              advokátní kanceláře
            </p>
          </div>

          <div className="experience-content">
            <h2>
              Zkušenost z obou stran
              <br />
              <em>pojistného systému</em>
            </h2>

            <p className="experience-lead">
              Díky dlouholetým zkušenostem se zastupováním poškozených
              a pozůstalých poskytuje advokátní kancelář vysoce
              kvalifikované právní služby v oblasti náhrady škody,
              pojišťovacího práva a likvidace pojistných událostí.
            </p>

            <div className="experience-story">
              <p>
                JUDr. Josef Kešner se dlouhodobě specializuje na oblast
                náhrady škody a pojišťovacího práva. Před založením vlastní
                advokátní kanceláře v roce 2004 působil sedm let v České
                pojišťovně a.s., kde zastával funkci ředitele odboru
                povinného ručení.
              </p>

              <div className="experience-detail">
                <span className="experience-detail-label">
                  Odbornost
                </span>

                <p>
                  V této pozici se zabýval likvidací pojistných událostí,
                  stanovováním metodiky jejich likvidace a tvorbou směrnic
                  a vnitřních předpisů. Stejné problematice se věnoval také
                  v rámci České kanceláře pojistitelů a České asociace
                  pojišťoven.
                </p>
              </div>

              <div className="experience-detail">
                <span className="experience-detail-label">
                  Mezinárodní zkušenost
                </span>

                <p>
                  Po dobu svého působení v České pojišťovně úzce spolupracoval
                  na zajistném programu povinného ručení s řadou významných
                  zahraničních brokerů a zajistitelů.
                </p>

                <div className="experience-partners">
                  <span>Harris&amp;Dixson</span>
                  <span>Benfield Greig</span>
                  <span>Scor</span>
                  <span>AXA</span>
                  <span>Swiss Re</span>
                  <span>Munich Re</span>
                </div>
              </div>
            </div>

            <a href="#kontakt" className="text-link">
              Kontaktujte nás
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="experience-facts">
          {experienceFacts.map((fact) => (
            <div className="experience-fact" key={fact.number}>
              <span className="experience-fact-number">{fact.number}</span>
              <span className="experience-fact-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

