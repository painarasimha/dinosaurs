const services = [
  { title: 'Web Design', desc: 'Responsive, SEO-optimized websites that convert.' },
  { title: 'App Development', desc: 'Modern mobile/web apps tailored to your needs.' },
  { title: 'Digital Marketing', desc: 'Social, search, content – all focused on results.' },
  { title: 'SaaS Development', desc: 'Automate and monetize your ideas with custom SaaS.' },
]

export function ServicesGrid() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <div key={i} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
