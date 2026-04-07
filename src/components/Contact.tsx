import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Have a question? We're here to help.
          </h2>
          <p className="text-lg text-gray-600">
            Whether you have a specific request for a rare pair or need help with a bulk laundry order, our team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10am-7pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">hello@dripclean.com</p>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-gray-900 mb-1">Studio</h3>
                <p className="text-gray-600">123 Sneaker District<br/>Your City, YC 10001</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="contactName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="contactEmail" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all text-lg w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
