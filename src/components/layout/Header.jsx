
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "O kanceláři", href: "#o-kancelari" },
  { label: "Právní služby", href: "#specializace", hasDropdown: true },
  { label: "Jak postupujeme", href: "#postup" },
  { label: "Kontakt", href: "#kontakt" },
];

const specializations = [
  {
    number: "01",
    title: "Dopravní nehody",
    href: "#dopravni-nehody",
  },
  {
    number: "02",
    title: "Škody na zdraví",
    href: "#skody-na-zdravi",
  },
  {
    number: "03",
    title: "Pojišťovací právo",
    href: "#pojistovaci-pravo",
  },
  {
    number: "04",
    title: "Pracovní úrazy",
    href: "#pracovni-urazy",
  },
];

function Header() {
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop dropdown
  const [servicesOpen, setServicesOpen] = useState(false);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      const headerHeight = window.innerWidth <= 820 ? 76 : 92;

      const element = document.elementFromPoint(
        window.innerWidth / 2,
        headerHeight + 20
      );

      const section = element?.closest(".section-light, .section-dark");

      if (section) {
        setIsLight(section.classList.contains("section-light"));
      }
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  // Lock page scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);

    // Always open the mobile menu with
    // "Právní služby" collapsed.
    setMobileServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <header
      className={`site-header ${isLight ? "is-light" : ""} ${
        scrolled ? "is-scrolled" : ""
      } ${mobileMenuOpen ? "mobile-open" : ""}`}
    >
      <div className="container header-inner">
        {/* BRAND */}
        <a href="/" className="brand" onClick={closeMobileMenu}>
          <span className="brand-name">JUDr. Josef Kešner</span>
          <span className="brand-subtitle">Advokátní kancelář</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  className="nav-dropdown"
                  key={item.label}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="nav-dropdown-trigger">
                    <a href={item.href}>{item.label}</a>

                    <button
                      type="button"
                      className="nav-dropdown-button"
                      aria-label="Zobrazit právní služby"
                      aria-expanded={servicesOpen}
                      onClick={() =>
                        setServicesOpen((open) => !open)
                      }
                    >
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="services-dropdown">
                      {specializations.map((specialization) => (
                        <a
                          key={specialization.number}
                          href={specialization.href}
                          className="services-dropdown-item"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="services-dropdown-number">
                            {specialization.number}
                          </span>

                          <span className="services-dropdown-title">
                            {specialization.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <a href="#kontakt" className="header-cta">
          Probrat můj případ
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Zavřít menu"
              : "Otevřít menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          mobileMenuOpen ? "is-open" : ""
        }`}
      >
        <nav
          className="mobile-nav"
          aria-label="Mobilní navigace"
        >
          <a
            href="#o-kancelari"
            onClick={closeMobileMenu}
          >
            O kanceláři
          </a>

          {/* MOBILE SERVICES */}
          <div className="mobile-nav-group">
            <div className="mobile-nav-services">
              <a
                href="#specializace"
                onClick={closeMobileMenu}
              >
                Právní služby
              </a>

              <button
                type="button"
                className="mobile-services-toggle"
                aria-label="Zobrazit právní služby"
                aria-expanded={mobileServicesOpen}
                onClick={() =>
                  setMobileServicesOpen(
                    (open) => !open
                  )
                }
              >
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={
                    mobileServicesOpen
                      ? "is-open"
                      : ""
                  }
                />
              </button>
            </div>

            <div
              className={`mobile-services-list ${
                mobileServicesOpen
                  ? "is-open"
                  : ""
              }`}
            >
              {specializations.map(
                (specialization) => (
                  <a
                    key={specialization.number}
                    href={specialization.href}
                    className="mobile-service-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-service-number">
                      {specialization.number}
                    </span>

                    <span>
                      {specialization.title}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          <a
            href="#postup"
            onClick={closeMobileMenu}
          >
            Jak postupujeme
          </a>

          <a
            href="#kontakt"
            onClick={closeMobileMenu}
          >
            Kontakt
          </a>
        </nav>

        {/* MOBILE CTA */}
        <a
          href="#kontakt"
          className="mobile-menu-cta"
          onClick={closeMobileMenu}
        >
          Probrat můj případ
        </a>
      </div>
    </header>
  );
}

export default Header;
