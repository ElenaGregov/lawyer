import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Specializations from "./components/home/Specializations";
import Experience from "./components/home/Experience";
import TrafficAccidents from "./components/home/TrafficAccidents";
import HealthDamage from "./components/home/HealthDamage";
import InsuranceClaim from "./components/home/InsuranceClaim";
import WorkInjuries from "./components/home/WorkInjuries";
import HowWeWork from "./components/home/HowWeWork";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Specializations />
        <TrafficAccidents />
        <HealthDamage />
        <InsuranceClaim />  
        <WorkInjuries />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;