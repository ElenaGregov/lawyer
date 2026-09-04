import "./HowWeWork.css";

const steps = [
  {
    number: "01",
    title: "Úvodní konzultace",
    description:
      "Probereme váš případ, jeho okolnosti a dostupnou dokumentaci. Společně si ujasníme, jaké nároky vám mohou náležet.",
  },
  {
    number: "02",
    title: "Posouzení nároku",
    description:
      "Prověříme podklady, stanovíme jednotlivé nároky a posoudíme postup pojišťovny nebo jiného odpovědného subjektu.",
  },
  {
    number: "03",
    title: "Uplatnění nároků",
    description:
      "Na základě plné moci vás zastoupíme při jednání s pojišťovnou či odpovědnou stranou a vaše nároky řádně uplatníme.",
  },
  {
    number: "04",
    title: "Kontrola plnění",
    description:
      "Prověříme výši přiznané náhrady. Pokud bylo plnění neoprávněně kráceno nebo odmítnuto, navrhneme další postup.",
  },
  {
    number: "05",
    title: "Soudní vymáhání",
    description:
      "Pokud se nepodaří dosáhnout spravedlivého řešení jednáním, zastoupíme vás při soudním vymáhání vašeho nároku.",
  },
];

function HowWeWork() {
  return (
    <section id="postup" className="how-we-work section-light">
      <div className="container">
        <div className="how-we-work-header">
          <span className="section-eyebrow">Jak postupujeme</span>

          <h2 className="how-we-work-title">
            Od prvního kontaktu až po 
            <br/>
            <em>vyřešení vašeho případu</em>
          </h2>

          <p className="how-we-work-intro">
            Každý případ nejprve individuálně posoudíme. Poté společně
            zvolíme nejvhodnější postup a postaráme se o jeho právní řešení.
          </p>
        </div>

        <div className="how-we-work-steps">
          {steps.map((step, index) => (
            <article className="how-we-work-step" key={step.number}>
              <div className="how-we-work-step-top">
                <span className="how-we-work-number">{step.number}</span>

                {index < steps.length - 1 && (
                  <span className="how-we-work-line" aria-hidden="true" />
                )}
              </div>

              <h3 className="how-we-work-step-title">{step.title}</h3>

              <p className="how-we-work-step-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="how-we-work-bottom">
          <div className="how-we-work-bottom-text">
            <h3>Nemusíte se v právních otázkách orientovat sami.</h3>

            <p>
              Postaráme se o právní stránku vašeho případu a provedeme vás
              celým procesem.
            </p>
          </div>

          <a href="#kontakt" className="how-we-work-cta">
            Probrat můj případ
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
