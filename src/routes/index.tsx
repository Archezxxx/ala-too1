import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { LangProvider, useLang } from "@/lib/lang-context";
import { ROOMS, type RoomKey } from "@/lib/i18n";
import { HOTEL } from "@/lib/hotel";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BookingDialog } from "@/components/booking-dialog";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  Mountain,
  Users,
  BedDouble,
  Maximize,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Wifi,
  Coffee,
  Car,
  Plane,
  Compass,
  Shield,
  ArrowRight,
  Instagram,
} from "lucide-react";

import heroImg from "@/assets/hero-hotel.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomLux from "@/assets/room-lux.jpg";
import roomFamily from "@/assets/room-family.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const roomImages: Record<RoomKey, string> = {
  standard: roomStandard,
  lux: roomLux,
  family: roomFamily,
};

const amenityIcons = [Coffee, Wifi, Car, Plane, Compass, Shield];

function Index() {
  return (
    <LangProvider>
      <Site />
      <Toaster position="top-center" richColors />
    </LangProvider>
  );
}

function Site() {
  const { t } = useLang();
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState<RoomKey | null>(null);

  function openBooking(key: RoomKey) {
    setSelectedRoom(key);
    setBookingOpen(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBook={() => openBooking("standard")} />
      <Hero onPick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })} />
      <About />
      <Rooms onBook={openBooking} />
      <Amenities />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} roomKey={selectedRoom} />
    </div>
  );
}

function Header({ onBook }: { onBook: () => void }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#top" className={`flex items-center gap-2 ${scrolled ? "text-foreground" : "text-white"}`}>
          <Mountain className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <span className="font-display text-2xl tracking-tight">Ala-Too</span>
        </a>

        <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-foreground" : "text-white"}`}>
          <a href="#rooms" className="hover:text-gold transition-colors">{t.nav.rooms}</a>
          <a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a>
          <a href="#amenities" className="hover:text-gold transition-colors">{t.nav.amenities}</a>
          <a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <LanguageSwitcher subtle={!scrolled} />
          <Button
            onClick={onBook}
            className="hidden sm:inline-flex bg-gradient-gold text-walnut hover:opacity-95 border-0 shadow-gold font-semibold rounded-full px-5"
            style={{ color: "oklch(0.22 0.03 45)" }}
          >
            {t.nav.book}
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onPick }: { onPick: () => void }) {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Ala-Too Hotel"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-transparent to-walnut/30" style={{ background: "linear-gradient(180deg, oklch(0.22 0.03 45 / 0.35) 0%, transparent 35%, oklch(0.18 0.03 45 / 0.85) 100%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-32 pt-32 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-xs uppercase tracking-[0.2em] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.hero.eyebrow}
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-tight mb-4">
            {t.hero.title1}
          </h1>
          <p className="font-display italic text-2xl lg:text-3xl text-gold-soft mb-6" style={{ color: "oklch(0.85 0.09 75)" }}>
            {t.hero.title2}
          </p>
          <p className="text-base lg:text-lg text-white/85 max-w-xl mb-10 leading-relaxed text-balance">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={onPick}
              size="lg"
              className="h-12 px-7 bg-gradient-gold border-0 hover:opacity-95 font-semibold rounded-full shadow-gold gap-2"
              style={{ color: "oklch(0.22 0.03 45)" }}
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#about"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/40 bg-white/5 backdrop-blur text-white font-medium hover:bg-white/15 transition"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.about.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-6 text-balance">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-balance">
            {t.about.body}
          </p>
          <div className="grid grid-cols-3 gap-6">
            <Stat n="12+" label={t.about.stats.years} />
            <Stat n="24" label={t.about.stats.rooms} />
            <Stat n="4.9" label={t.about.stats.rating} />
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
          <img src={roomLux} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-gradient-gold rounded-2xl px-6 py-5 shadow-gold hidden md:block">
            <Mountain className="h-7 w-7 mb-1.5" style={{ color: "oklch(0.22 0.03 45)" }} />
            <div className="font-display text-2xl" style={{ color: "oklch(0.22 0.03 45)" }}>Pamir-Alay</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl lg:text-5xl text-gold mb-1">{n}</div>
      <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Rooms({ onBook }: { onBook: (key: RoomKey) => void }) {
  const { t } = useLang();
  return (
    <section id="rooms" className="py-24 lg:py-36 bg-secondary/40 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.rooms.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-5 text-balance">
            {t.rooms.title}
          </h2>
          <p className="text-muted-foreground text-lg text-balance">{t.rooms.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ROOMS.map((room, i) => (
            <article
              key={room.key}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border/60 hover:shadow-gold transition-all duration-500 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={roomImages[room.key]}
                  alt={t.rooms.names[room.key]}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-3xl">{t.rooms.names[room.key]}</h3>
                  <div className="text-right">
                    <div className="text-gold font-display text-2xl">{room.price.toLocaleString()}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t.rooms.perNight}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {t.rooms.descriptions[room.key]}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5 pb-5 border-b border-border">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-gold" /> {room.capacity} {t.rooms.capacity}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-3.5 w-3.5 text-gold" /> {room.beds} {t.rooms.beds}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-3.5 w-3.5 text-gold" /> {room.size} {t.rooms.size}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {t.rooms.features[room.key].map((f) => (
                    <span
                      key={f}
                      className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => onBook(room.key)}
                  className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 group/btn"
                >
                  {t.rooms.bookBtn}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  const { t } = useLang();
  return (
    <section id="amenities" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.amenities.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
            {t.amenities.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.amenities.items.map((item, i) => {
            const Icon = amenityIcons[i] ?? Coffee;
            return (
              <div
                key={item.title}
                className="group p-7 rounded-2xl border border-border bg-card hover:border-gold/60 hover:shadow-soft transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-colors">
                  <Icon className="h-5 w-5 text-walnut" style={{ color: "oklch(0.28 0.045 40)" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-24 lg:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.reviews.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-6 text-balance">
            {t.reviews.title}
          </h2>
          <a 
            href="https://2gis.kg/razzakov/inside/70030076938110789/firm/70000001097297767/69.525786%2C39.836023/tab/reviews?m=69.527376%2C39.835852%2F18.32" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card hover:bg-card/80 px-6 py-3 rounded-full border border-border shadow-soft transition-colors"
          >
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <span className="font-display text-xl text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">— {t.reviews.summary}</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.items.map((review, i) => (
            <div key={i} className="bg-card p-8 rounded-3xl border border-border shadow-soft hover:border-gold/30 hover:shadow-gold/10 transition-all duration-300 flex flex-col group">
              <div className="flex gap-1 text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">"{review.text}"</p>
              <div className="mt-8 font-medium text-sm text-foreground">— {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useLang();
  
  const mapLinks = [
    { name: t.location.googleMaps, url: "https://www.google.com/maps/search/?api=1&query=39.836023,69.525786" },
    { name: t.location.appleMaps, url: "http://maps.apple.com/?q=39.836023,69.525786" },
    { name: t.location.twoGis, url: "https://2gis.kg/razzakov/firm/70000001097297767/69.525786,39.836023?m=69.527376,39.835852/18.32" },
    { name: t.location.yandexMaps, url: "https://yandex.ru/maps/?pt=69.525786,39.836023&z=16&l=map" },
  ];

  return (
    <section id="location" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.location.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
            {t.location.title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {mapLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-gold hover:text-walnut px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              <MapPin className="h-4 w-4" />
              {link.name}
            </a>
          ))}
        </div>

        <div className="relative aspect-video sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-soft border border-border bg-muted">
          <iframe
            src="https://maps.google.com/maps?q=39.836023,69.525786&hl=ru&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[0.2] contrast-[1.05]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const waUrl = `https://wa.me/${HOTEL.whatsapp}`;

  return (
    <section id="contact" className="py-24 lg:py-36 bg-walnut text-white relative overflow-hidden" style={{ background: "oklch(0.22 0.035 45)" }}>
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.78 0.14 75) 0%, transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.65 0.13 55) 0%, transparent 45%)",
      }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4 font-medium">
            {t.contact.eyebrow}
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-10 text-balance">
            {t.contact.title}
          </h2>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 h-14 px-7 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold transition-colors shadow-gold"
          >
            <MessageCircle className="h-5 w-5" />
            {t.contact.whatsapp}
          </a>
        </div>

        <div className="space-y-6">
          <ContactItem icon={MapPin} label={t.contact.address} value={t.contact.addressValue} href="https://2gis.kg/razzakov/firm/70000001097297767/69.525786%2C39.836023?m=69.527376%2C39.835852%2F18.32" />
          <ContactItem icon={Phone} label={t.contact.phone} value={t.contact.phoneValue} href={`tel:${HOTEL.phoneDisplay.replace(/\s/g, "")}`} />
          <ContactItem icon={Instagram} label="Instagram" value="@alatoo_hotel" href="https://www.instagram.com/alatoo_hotel" />
          <ContactItem icon={Clock} label={t.contact.hours} value={t.contact.hoursValue} />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <>
      <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0 border border-gold/30">
        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">{label}</div>
        <div className="font-display text-2xl text-white">{value}</div>
      </div>
    </>
  );
  const isExternal = href?.startsWith("http");
  return href ? (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="flex items-center gap-5 group hover:text-gold transition-colors">{Content}</a>
  ) : (
    <div className="flex items-center gap-5">{Content}</div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mountain className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <span className="font-display text-xl text-foreground">Ala-Too</span>
          <span className="hidden md:inline ml-3 text-muted-foreground">— {t.footer.tagline}</span>
        </div>
        <div>© {new Date().getFullYear()} Ala-Too Hotel. {t.footer.rights}</div>
      </div>
    </footer>
  );
}
