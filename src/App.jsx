import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Benefits from "./components/benefits.jsx";
import Modules from "./components/modules.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-estela-beige text-estela-dark scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Modules />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
