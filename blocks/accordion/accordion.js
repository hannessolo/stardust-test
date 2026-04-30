/**
 * FAQ accordion block using native <details>/<summary>.
 * Block table format: each row = one FAQ item.
 * Columns: [question text] [answer content]
 */
export default async function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  for (const row of rows) {
    const cells = [...row.querySelectorAll(':scope > div')];
    const question = cells[0]?.textContent.trim() ?? '';
    const answerCell = cells[1];

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = question;
    details.append(summary);

    if (answerCell) {
      answerCell.classList.add('accordion-answer');
      details.append(answerCell);
    }

    row.replaceWith(details);
  }
}
