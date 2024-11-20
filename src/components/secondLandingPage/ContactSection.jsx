
// components/Contact.jsx
const ContactSection = () => {
    return (
      <section id="contact" className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/3192708/pexels-photo-3192708.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury beauty"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <span className="text-sm tracking-[0.3em] uppercase mb-6 inline-block">
              Get in Touch
            </span>
            <h2 className="text-5xl font-light tracking-wider mb-8">Experience Luxury</h2>
            <p className="text-lg mb-12">
              Join our exclusive community and be the first to discover our latest collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
              />
              <button className="px-8 py-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ContactSection