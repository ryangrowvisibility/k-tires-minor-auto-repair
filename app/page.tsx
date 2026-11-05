import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 456-1129";
const TEL = "tel:+19164561129";
const MAPS = "https://www.google.com/maps/search/?api=1&query=K%20tires%20%26%20minor%20auto%20repair&query_place_id=ChIJtb2rxcXRmoARyT0WqE-cMEE";
const NEXTDOOR = "https://nextdoor.com/pages/k-tire-and-minor-auto-repair-sacramento-ca/";
const ADDRESS = "4825 17th Ave, Sacramento, CA 95820";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#area", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

const otherServices = [
  { icon: "install", title: "Tire installation & mounting", body: "Buy your tires here and we mount them on your wheels while you wait. One visit and you drive out on your new set." },
  { icon: "disc", title: "Tire balancing", body: "A shaking steering wheel at freeway speed usually means a wheel is out of balance. We spin and balance each wheel so the car rides smooth again." },
  { icon: "drop", title: "Oil changes", body: "Quick oil and filter changes while you are already in for tires. One stop instead of two, and we will tell you if we see anything else worth watching." },
  { icon: "gauge", title: "Brakes", body: "Squealing, grinding or a soft pedal? We check your pads and rotors, show you what is worn, and give you a fair price before any work starts." },
  { icon: "wrench", title: "Minor auto repair", body: "Small mechanical jobs that keep your car on the road. Call and describe what is going on and we will tell you straight if it is something we handle." },
];

const brands = ["Bridgestone", "Firestone", "Goodyear", "Yokohama"];

const reviews = [
  { name: "Theresa N.", job: "Tires, follow-up fix", text: "Great prices and great service. When I had a problem afterwards they were prompt and went the extra mile to sort it out. A place you can trust, I highly recommend this shop." },
  { name: "CH B.", job: "Used tires", text: "The cheapest used tire shop in the area for sure, and the owner is the most honest and trustworthy person. Plenty of used tires in stock, and they can order anything you are looking for." },
  { name: "Melly M.", job: "Tire service", text: "So many good things to say about K Tires. He is respectful and has a great team of hard-working men who get whatever you need done fast. Best in Sacramento." },
  { name: "Laura S.", job: "Used tires, repeat customer", text: "A good place for used tires. I have been buying my tires from them for years, and the owner is a nice guy." },
  { name: "Yunus Ö.", job: "Tire purchase", text: "Excellent. Friendly, cheap, fast and high quality. Thanks for everything." },
  { name: "Jesus R.", job: "Long-time customer", text: "I have been going here a long time and they never fail. They even helped me out a time or two when I needed it. Thanks, boss." },
  { name: "Paiman E.", job: "Customer for 6 years", text: "The best tire experience I have had. I have been their customer for almost six years." },
];

const why = [
  { icon: "award", title: "Authorized dealer for 4 big brands", body: "Bridgestone, Firestone, Goodyear and Yokohama. Rare for a small neighborhood shop." },
  { icon: "tag", title: "Fair prices, new or used", body: "Customers call us the best-priced used tire shop in the area. Name-brand new tires at fair prices too." },
  { icon: "users", title: "Family-owned and run", body: "You deal with the owner and his crew, not a call center. They remember you next time." },
  { icon: "repeat", title: "Customers keep coming back", body: "Reviewers mention buying their tires here for years, some for six years and counting." },
];

const steps = [
  { title: "Call with your tire size", body: `Ring ${PHONE} and read us the size off the side of your tire (it looks like 205/55R16). Tell us if you want new or used.` },
  { title: "We check stock and price", body: "We tell you what we have on the rack, what we can order, and the price installed, before you drive over." },
  { title: "Drive in to 17th Ave", body: "Pull into the shop at 4825 17th Ave. We mount, balance and install while you wait." },
  { title: "Back on the road", body: "Pay by card or cash and you are on your way. Something not right later? Call us and we make it right." },
];

const area = ["South Sacramento", "17th Avenue", "Stockton Boulevard", "Franklin Boulevard", "Highway 99 corridor"];

const faqs = [
  { q: "Do you sell used tires?", a: "Yes. Used tires are a big part of what we do, and customers say we have plenty of options in stock at the best prices in the area. Call with your size and we will tell you what we have." },
  { q: "Which new tire brands do you carry?", a: "We are an authorized dealer for Bridgestone, Firestone, Goodyear and Yokohama. If we do not have your size on the rack, we can order it in." },
  { q: "What are your hours?", a: "Monday through Saturday, 8:30 a.m. to 6:30 p.m. Our Google listing also shows Sunday hours, so call ahead on Sundays before you drive over." },
  { q: "Do I need an appointment?", a: `It helps to call ${PHONE} first so we can confirm we have your tire size ready. That way you spend less time waiting at the shop.` },
  { q: "Do you take credit cards?", a: "Yes, we accept credit cards." },
  { q: "Can you do more than tires?", a: "Yes. Along with tires and balancing we do oil changes, brake work and minor mechanical repairs. Call and describe the problem and we will tell you honestly if it is a job for us." },
  { q: "Where are you located?", a: "4825 17th Ave in South Sacramento, near Stockton Boulevard, Franklin Boulevard and Highway 99." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  name: "K Tires & Minor Auto Repair",
  telephone: "+1-916-456-1129",
  address: { "@type": "PostalAddress", streetAddress: "4825 17th Ave", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95820", addressCountry: "US" },
  areaServed: "South Sacramento, CA",
  openingHours: "Mo-Sa 08:30-18:30",
  paymentAccepted: "Cash, Credit Card",
  brand: brands.map((b) => ({ "@type": "Brand", name: b })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "16" },
  sameAs: [MAPS, NEXTDOOR],
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-dark text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> 4825 17th Ave, South Sacramento</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon–Sat 8:30 a.m. – 6:30 p.m.</span>
          <span className="flex items-center gap-2"><Icon name="award" className="h-4 w-4" /> Authorized Bridgestone · Firestone · Goodyear · Yokohama dealer</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#top" className="flex items-center gap-2.5" aria-label="K Tires & Minor Auto Repair, home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta"><Icon name="disc" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-head text-xl font-extrabold text-brand">K Tires</span>
              <span className="block text-xs font-medium text-muted">&amp; Minor Auto Repair</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.97rem] font-medium lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-ink/80 hover:text-ink">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-head text-lg font-bold text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-brand-dark md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-muted ring-1 ring-line">
                <Icon name="users" className="h-4 w-4" /> Family-owned tire shop on 17th Avenue
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-brand">New &amp; Used Tires, Oil Changes and Brakes in South Sacramento</h1>
              <p className="lede mt-5 text-xl text-muted">
                Name-brand new tires from an authorized Bridgestone, Firestone, Goodyear and Yokohama dealer, plus a big stock of quality used tires at prices our neighbors call the best around. Mounted, balanced and installed while you wait.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href="#services" className="btn btn-line text-lg">See our services</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem] text-ink">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <strong>4.7</strong> on Google</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span><strong>123</strong> customer reviews on Birdeye</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Authorized 4-brand dealer</span>
              </div>
            </div>

            <figure className="card p-7 shadow-[0_18px_40px_-24px_oklch(0.22_0.012_260/0.45)]">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-head text-2xl font-bold leading-snug text-brand">
                &ldquo;Great prices, great service. When I had a problem they were prompt and went the extra mile to resolve it. A place you can trust!&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-muted">Theresa N. · Google review</figcaption>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-[0.95rem]">
                <div><p className="font-bold text-ink">Open</p><p className="text-muted">Mon–Sat, 8:30–6:30</p></div>
                <div><p className="font-bold text-ink">Find us</p><p className="text-muted">4825 17th Ave</p></div>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {[
              { icon: "award", t: "Authorized dealer", s: "Bridgestone · Firestone · Goodyear · Yokohama" },
              { icon: "tag", t: "New & used tires", s: "Big used stock, fair prices" },
              { icon: "users", t: "Family-owned", s: "Owner on site" },
              { icon: "shield", t: "Credit cards accepted", s: "Easy checkout" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="text-cta"><Icon name={x.icon} className="h-7 w-7" /></span>
                <span><span className="block font-bold">{x.t}</span><span className="block text-sm text-white/70">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-2xl">
              <h2 className="text-3xl text-brand md:text-4xl">Tires first. The quick fixes too.</h2>
              <p className="mt-4 text-muted">Most people come to us for tires. While your car is on the lift we can also take care of the oil, the brakes and the small repairs, so you make one stop instead of three.</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="card reveal border-2 border-brand p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-cta px-3 py-1 text-sm font-bold text-brand-dark">Our specialty</span>
                <h3 className="mt-4 text-2xl text-brand">New name-brand tires</h3>
                <p className="mt-3 text-muted">We are an authorized dealer for four of the biggest names in tires. Tell us what you drive and how you drive it, and we will point you to the right tire for your budget, then mount and balance it on the spot.</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <li key={b} className="rounded-lg bg-brand-soft px-3 py-1.5 font-bold text-brand">{b}</li>
                  ))}
                </ul>
                <a href={TEL} className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:underline">Call about new tires <Icon name="arrow" className="h-4 w-4" /></a>
              </article>
              <article className="card reveal border-2 border-brand p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-cta px-3 py-1 text-sm font-bold text-brand-dark">Customer favorite</span>
                <h3 className="mt-4 text-2xl text-brand">Quality used tires</h3>
                <p className="mt-3 text-muted">Need a tire today without paying new-tire prices? We keep plenty of good used tires on hand in common sizes, and reviewers call us the cheapest used tire shop in the area. If we do not have your size, we can usually order it.</p>
                <ul className="mt-5 space-y-2 text-[0.98rem]">
                  {["Plenty of sizes in stock", "Can order sizes we don't stock", "Mounted and balanced while you wait"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><span className="text-brand"><Icon name="check" className="h-5 w-5" /></span>{t}</li>
                  ))}
                </ul>
                <a href={TEL} className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:underline">Ask what sizes we have <Icon name="arrow" className="h-4 w-4" /></a>
              </article>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s) => (
                <article key={s.title} className="card reveal p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-4 text-xl text-brand">{s.title}</h3>
                  <p className="mt-2 text-[1.02rem] text-muted">{s.body}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-bold text-brand hover:underline">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl text-brand md:text-4xl">Rated 4.7 on Google by South Sacramento drivers</h2>
                <p className="mt-3 text-muted">Plus 123 customer reviews on Birdeye. Here is what people say after a visit.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>

            <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card reveal mb-5 break-inside-avoid p-6">
                  <Stars className="h-5 w-5" />
                  <blockquote className="mt-3 text-[1.05rem] text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-bold text-white">{r.name[0]}</span>
                    <span><span className="block font-bold text-ink">{r.name}</span><span className="block text-muted">{r.job} · Google</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <h2 className="text-3xl text-brand md:text-4xl">A family tire shop that treats you like a regular</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>K Tires &amp; Minor Auto Repair is a family-owned shop on 17th Avenue in South Sacramento. The owner runs the counter himself, with a small crew of hard-working guys in the bays. Customers describe him the same way again and again: honest, respectful and fair.</p>
                <p>We keep it simple. You tell us what you need, we tell you the real price, and we get you back on the road fast. If something is not right after you leave, call us and we will fix it. That is why so many of our customers have been buying their tires here for years.</p>
                <p>Whether you need one used tire to get through the week or a full set of new Goodyears for a road trip, you will get the same straight answer.</p>
              </div>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> Talk to the shop</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title} className="reveal rounded-2xl bg-tint p-6">
                  <span className="text-brand"><Icon name={w.icon} className="h-8 w-8" /></span>
                  <h3 className="mt-3 text-lg text-brand">{w.title}</h3>
                  <p className="mt-1.5 text-[1rem] text-muted">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="reveal text-3xl text-brand md:text-4xl">How getting tires works</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-cta font-head text-xl font-extrabold text-brand-dark">{i + 1}</span>
                  <h3 className="mt-4 text-xl text-brand">{s.title}</h3>
                  <p className="mt-2 text-[1.02rem] text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="reveal">
              <h2 className="text-3xl text-brand md:text-4xl">Find us on 17th Avenue</h2>
              <p className="mt-4 text-muted">Easy to reach from anywhere in South Sacramento, just off the Highway 99 corridor between Stockton and Franklin Boulevards.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => (
                  <li key={a} className="rounded-full bg-white px-4 py-2 text-[0.97rem] font-medium text-ink ring-1 ring-line">{a}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-[1.02rem]">
                <p className="flex items-start gap-3"><span className="mt-0.5 text-brand"><Icon name="pin" className="h-5 w-5" /></span>{ADDRESS}</p>
                <p className="flex items-start gap-3"><span className="mt-0.5 text-brand"><Icon name="clock" className="h-5 w-5" /></span>Mon–Sat 8:30 a.m. – 6:30 p.m. (call ahead on Sundays)</p>
                <p className="flex items-start gap-3"><span className="mt-0.5 text-brand"><Icon name="phone" className="h-5 w-5" /></span><a href={TEL} className="font-bold text-brand hover:underline">{PHONE}</a></p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8"><Icon name="route" className="h-5 w-5" /> Get directions</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map of K Tires & Minor Auto Repair, 4825 17th Ave, Sacramento"
                src="https://maps.google.com/maps?q=4825%2017th%20Ave%2C%20Sacramento%2C%20CA%2095820&output=embed"
                className="h-[380px] w-full md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="reveal text-3xl text-brand md:text-4xl">Questions before you call</h2>
            <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-brand">
                    {f.q}
                    <span className="chev text-muted"><Icon name="chevron" className="h-5 w-5" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-14 md:flex-row md:items-center md:py-16">
            <div>
              <h2 className="text-3xl md:text-4xl">Need tires today? Give us a call.</h2>
              <p className="mt-3 text-white/75">Read us your tire size and we will tell you what we have and the price, installed. Mon–Sat 8:30 a.m. – 6:30 p.m.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-lg">Directions</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark pb-28 text-white/80 md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-head text-2xl font-extrabold text-white">K Tires &amp; Minor Auto Repair</p>
            <p className="mt-3 max-w-sm text-[0.98rem]">Family-owned tire dealer and minor-repair shop in South Sacramento. Authorized dealer: Bridgestone, Firestone, Goodyear, Yokohama.</p>
            <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:underline"><Icon name="home" className="h-4 w-4" /> Find us on Nextdoor</a>
          </div>
          <div className="text-[0.98rem]">
            <p className="font-bold text-white">Visit or call</p>
            <p className="mt-3">{ADDRESS}</p>
            <a href={TEL} className="mt-2 block font-bold text-cta">{PHONE}</a>
            <p className="mt-2">Mon–Sat 8:30 a.m. – 6:30 p.m.</p>
          </div>
          <div className="text-[0.98rem]">
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5">
              {["New tires", "Used tires", "Installation & balancing", "Oil changes", "Brakes", "Minor auto repair"].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pt-6 text-sm text-white/55">
          © {new Date().getFullYear()} K Tires &amp; Minor Auto Repair · Serving South Sacramento, CA
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line"><Icon name="route" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
