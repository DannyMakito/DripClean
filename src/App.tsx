/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <Services />
        <Process />
        <Results />
        <Pricing />
        <BookingForm />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
