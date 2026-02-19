const clients = [
  {
    name: 'Tiffany & Co.',
    label: 'Luxury / Narrative',
    fig: 'Fig A. Silver',
    url: 'https://www.vanityfair.com/style/photos/2019/10/tiffany-mens-launch-party',
  },
  {
    name: 'Apple Inc.',
    label: 'Tech / Identity',
    fig: 'Fig B. Glass',
    url: null,
  },
  {
    name: 'White Claw',
    label: 'Viral / Culture',
    fig: 'Fig C. Wave',
    url: 'https://lbbonline.com/news/white-claw-unveils-the-claw-bag-made-from-can-tabs-at-new-york-fashion-week',
  },
  {
    name: 'Goods & Objects',
    label: 'Proprietary',
    fig: 'Fig D. Archive',
    url: 'https://goodsandobjects.com',
  },
];

export default function WorkSection() {
  return (
    <section className="section-screen items-start text-left" id="work">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="technical-label mb-16 border-b border-gray-300 pb-2 flex justify-between">
          <span>Ref. 02 — Selected Works</span>
          <span>(2020 — 2024)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {clients.map((client) => {
            const inner = (
              <>
                <div className="flex items-baseline justify-between border-b border-transparent group-hover:border-gray-300 pb-4 transition-colors duration-500">
                  <span className="font-serif-display text-4xl md:text-6xl italic text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                    {client.name}
                  </span>
                  <span className="technical-label opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {client.label}
                  </span>
                </div>
                <div className="image-plate w-64 h-40 bg-gray-200 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 border border-gray-300 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[#E0E0E0] flex items-center justify-center text-gray-400 text-xs tracking-widest uppercase">
                    {client.fig}
                  </div>
                </div>
              </>
            );

            return client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-item group relative cursor-none block"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {inner}
              </a>
            ) : (
              <div key={client.name} className="client-item group relative cursor-none">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
