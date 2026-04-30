/**
 * Responsive card grid block.
 * Block table format: each row = one card.
 * Columns: [image] [heading + body text + optional CTA link]
 */
export default async function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  for (const row of rows) {
    row.classList.add('cards-card');
    const cells = [...row.querySelectorAll(':scope > div')];

    if (cells[0]) {
      cells[0].classList.add('cards-image');
      const img = cells[0].querySelector('img');
      if (img) img.loading = 'lazy';
    }

    if (cells[1]) {
      cells[1].classList.add('cards-body');
      const link = cells[1].querySelector('a');
      if (link) link.classList.add('cards-cta');
    }
  }
}
