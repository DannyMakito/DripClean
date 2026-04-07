export default function TrustLogos() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/512px-New_Balance_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_Logo.svg/512px-Puma_Logo.svg.png"
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium mb-10">
          Trusted by local collectors, resellers & everyday sneaker lovers
        </p>
        
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap items-center gap-16 md:gap-24">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Brand logo" 
                className="h-12 md:h-16 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
