import { CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
              Book your first Drip Clean in under 60 seconds.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell us what you’re sending in, pick a time and choose drop-off or pickup. We’ll confirm details and keep you updated along the way.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Same or next-day turnaround on most services",
                "Real humans you can message for special requests",
                "Secure studio with controlled environment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Booking Received!</h3>
                <p className="text-gray-600">We'll be in touch shortly to confirm your details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Jordan" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="K." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="jordan@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
                  <select id="service" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option value="">Select a service...</option>
                    <option value="signature">Signature Sneaker Clean</option>
                    <option value="refresh">Refresh & Protect</option>
                    <option value="laundry">Laundry & Garment Care</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes (Optional)</label>
                  <textarea id="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Any special requests or details about the items..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 text-lg">
                  Submit Booking
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Prefer WhatsApp or Instagram DMs? Mention it in your booking notes and we’ll confirm there.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
