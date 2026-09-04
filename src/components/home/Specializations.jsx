import { ArrowUpRight } from "lucide-react";
import "./Specializations.css";

const specializations = [
  {
    number: "01",
    title: "Dopravní nehody",
    description:
      "Zastupujeme poškozené a pozůstalé při uplatňování nároků na náhradu škody a újmy.",
    href: "#dopravni-nehody",
  },
  {
    number: "02",
    title: "Škody na zdraví",
    description:
      "Pomáháme s uplatněním nároků vzniklých v důsledku újmy na zdraví a s jejich řádným vyčíslením.",
    href: "#skody-na-zdravi",
  },
  {
    number: "03",
    title: "Pojišťovací právo",
    description:
      "Jednáme s pojišťovnami a posuzujeme oprávněnost krácení nebo odmítnutí pojistného plnění.",
    href: "#pojistovaci-pravo",
  },
  {
    number: "04",
    title: "Pracovní úrazy",
    description:
      "Pomáháme při uplatňování nároků souvisejících s pracovními úrazy a vzniklou škodou.",
    href: "#pracovni-urazy",
  },
];

function Specializations() {
  return (
    <section className="specializations section-dark" id="specializace">
      <div className="container">
        <div className="specializations-heading">
          <div>
            <p className="section-label">Na co se zaměřujeme</p>

            <h2>
              Právo zaměřené na
              <br />
              <em>ochranu vašich nároků.</em>
            </h2>
          </div>

          <p className="specializations-intro">
            Dlouhodobě se věnujeme zejména náhradě škody, pojišťovacímu právu
            a zastupování poškozených při dopravních nehodách.
          </p>
        </div>

        <div className="specializations-list">
          {specializations.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="specialization-item"
            >
              <span className="specialization-number">{item.number}</span>

              <div className="specialization-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="specialization-arrow">
                <ArrowUpRight size={22} strokeWidth={1.4} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specializations;