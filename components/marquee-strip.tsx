const items = ["Software engineering", "Applied AI", "Product systems", "Cloud delivery", "Nairobi / Kenya"]

export default function MarqueeStrip() {
  const row = [...items, ...items]
  return <div className="marquee-strip" aria-label="Victor Kamau practice areas"><div className="marquee-track">{row.map((item, index) => <span key={`${item}-${index}`} className="inline-flex items-center gap-8">{item}<span className="text-accent">✳</span></span>)}</div></div>
}
