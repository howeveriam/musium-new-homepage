import Section0 from "./design/Section0";
import Section1 from "./design/Section1";
import Section2 from "./design/Section2";
import Section3 from "./design/Section3";
import Section4 from "./design/Section4";
import Section5 from "./design/Section5";
import Section6 from "./design/Section6";
import Section7 from "./design/Section7";
import Section8 from "./design/Section8";
import Section9 from "./faq";
import Section10 from "./design/Section10";
import Interactions from "./interactions";
import Consultation from "./consultation";
const pianoLessonSchema = {"@context": "https://schema.org", "@type": "Service", "@id": "https://musium.org/#piano-lessons", "name": "Private Piano Lessons", "serviceType": "Piano instruction for children and adults", "url": "https://musium.org/", "areaServed": [{"@type": "City", "name": "Schaumburg"}], "provider": {"@type": "Organization", "name": "Musium", "url": "https://musium.org/", "email": "pianomusium@gmail.com", "sameAs": ["https://www.youtube.com/@PianoMusium", "https://www.instagram.com/pianomusium/", "https://blog.naver.com/pianomusium"], "founder": {"@type": "Person", "name": "Dami Jeong"}}};
export default function Home(){return <main id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pianoLessonSchema).replace(/</g, "\\u003c") }} /><section id="header" className="design-section section-header"><Section0 /></section><section id="home" className="design-section section-home"><Section1 /></section><section id="social" className="design-section section-social"><Section2 /></section><section id="about" className="design-section section-about"><Section3 /></section><section id="lessons" className="design-section section-lessons"><Section4 /></section><section id="features" className="design-section section-features"><Section5 /></section><section id="samples" className="design-section section-samples"><Section6 /></section><section id="studio" className="design-section section-studio"><Section7 /></section><section id="testimonials" className="design-section section-testimonials"><Section8 /></section><section id="faq" className="design-section section-faq"><Section9 /></section><section id="contact" className="design-section section-contact"><Section10 /></section><Interactions /><Consultation /></main>;}
