function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">About This Project</h2>

      <p className="text-gray-400 leading-7">
        This MERN URL Shortener allows users to convert long links into short,
        shareable URLs. It also generates QR codes for quick access and keeps
        track of clicks using MongoDB.
        
      <p className="text-red-400 leading-7">
            for more Contact :- VishalRamanishere@gmail.com
        </p>
        
      </p>

      <div className="mt-6 text-gray-400">
        <p>🚀 Built using:</p>
        <p className="mt-2">
          React • Node.js • Express • MongoDB • Tailwind • DaisyUI
        </p>
      </div>
    </section>
  );
}

export default About;
