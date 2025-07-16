export function Hero() {
  return (
    <section className="px-4 py-16 text-center bg-gray-50 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        Systemize. Automate. Grow.
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl mx-auto">
        We help SMBs and D2C brands streamline operations with smart web, app, and SaaS solutions.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/portfolio" className="px-6 py-3 bg-blue-600 text-white rounded font-medium">See Our Work</a>
        <a href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded font-medium">Book Consultation</a>
      </div>
    </section>
  )
}
