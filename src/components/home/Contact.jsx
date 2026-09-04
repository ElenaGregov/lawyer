
import "./Contact.css";

function Contact() {
  return (
    <section id="kontakt" className="contact section-dark">
      <div className="container">
        <div className="contact-header">
          <span className="section-eyebrow">Kontakt</span>

          <h2 className="contact-title">
            Promluvme si o Vašem případu.
          </h2>

          <p className="contact-intro">
            Popište nám stručně svou situaci. Ozveme se Vám a společně
            probereme nejvhodnější další postup.
          </p>
        </div>

        <div className="contact-content">
          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-label">Advokátní kancelář</span>
              <strong>JUDr. Josef Kešner</strong>
            </div>

            <div className="contact-detail">
              <span className="contact-label">Mobil</span>
              <a href="tel:+420603299475">+420 603 299 475</a>
            </div>

            <div className="contact-detail">
              <span className="contact-label">E-mail</span>
              <a href="mailto:josef.kesner@akkesner.cz">
                josef.kesner@akkesner.cz
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-label">Adresa</span>
              <address>
                Hornokrčská 1947/2
                <br />
                140 00 Praha 4
              </address>
            </div>

            <div className="contact-detail contact-detail-ico">
              <span className="contact-label">IČO</span>
              <span>71329731</span>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Jméno</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Vaše jméno"
                  />
                </label>

                <label className="contact-field">
                  <span>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="váš@email.cz"
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Telefon</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+420"
                />
              </label>

              <label className="contact-field">
                <span>Váš případ</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Stručně popište svou situaci..."
                />
              </label>

              <button type="submit" className="contact-submit">
                Odeslat zprávu
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="Advokátní kancelář JUDr. Josef Kešner"
            src="https://www.google.com/maps?q=Hornokrčská%201947%2F2%2C%2014000%20Praha%204&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

