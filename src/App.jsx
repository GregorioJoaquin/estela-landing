import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Benefits from "./components/benefits.jsx";
import Modules from "./components/modules.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import FloatingWhatsApp from "./components/floating-whatsapp.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Modules />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
