export default function AboutSection() {
  return (
    <section className="section-screen bg-[#E3E1DD]" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="order-2 md:order-1">
          <div className="technical-label mb-6">Ref. 03 — The Method</div>
          <h2 className="font-serif-display text-3xl md:text-4xl leading-snug mb-8 text-gray-800">
            The intersection of emotion, identity, and <span className="italic">desire</span>.
          </h2>
          <div className="space-y-6 text-sm font-light leading-relaxed text-gray-600 max-w-md">
            <p>
              Based in New York, deeply embedded in global subcultures. My practice is informed by the quiet discipline of Japanese craft, the endurance of marathon running, and the archival nature of collecting.
            </p>
            <p>
              We do not just market products; we build the invisible architecture that makes a brand feel inevitable.
            </p>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <span className="technical-label block mb-2 opacity-50">Focus</span>
              <ul className="text-xs space-y-1 tracking-wide">
                <li>Brand Narrative</li>
                <li>Cultural Strategy</li>
                <li>Archival Research</li>
              </ul>
            </div>
            <div>
              <span className="technical-label block mb-2 opacity-50">Interests</span>
              <ul className="text-xs space-y-1 tracking-wide">
                <li>Japanese Denim</li>
                <li>Endurance Sports</li>
                <li>Rare Sneakers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-64 h-80 border border-gray-400 relative p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <span className="technical-sub">FIG. 08</span>
              <span className="technical-sub">N.Y.C.</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border rounded-full border-gray-300 flex items-center justify-center">
                <div className="w-24 h-24 border rounded-full border-gray-300 italic font-serif-display text-xl text-gray-400 flex items-center justify-center">
                  g&amp;o
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="technical-sub">OBJECT PERMANENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
