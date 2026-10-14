const entries = [
  {
    date: "16 SEP 2026",
    place: "WOLLERT",
    stage: "SLAB DOWN",
    note: "A current Wolco build moved from plans to foundation — a real project milestone, presented here as proof of process rather than promotional decoration.",
  },
  {
    date: "01 SEP 2026",
    place: "KALKALLO",
    stage: "HANDOVER",
    note: "Another Wolco home reached handover in Kalkallo — from an idea on paper to a completed home ready for its owners.",
  },
];

export function BuildJournal() {
  return (
    <section className="build-journal surface-ivory" aria-labelledby="journal-title">
      <div className="journal-head">
        <div className="eyebrow row-between">
          <span>06 / LIVE BUILD JOURNAL</span>
          <span>PUBLIC WOLCO PROJECT UPDATES · SEP 2026</span>
        </div>
        <h2 id="journal-title" className="display-lg">
          From site<br />
          <em>to handover.</em>
        </h2>
      </div>

      <div className="journal-list">
        {entries.map((entry, i) => (
          <article className="journal-entry" key={entry.place}>
            <div className="journal-index">0{i + 1}</div>
            <div className="journal-date">{entry.date}</div>
            <div className="journal-place">{entry.place}</div>
            <div className="journal-stage">{entry.stage}</div>
            <p>{entry.note}</p>
          </article>
        ))}
      </div>

      <div className="journal-foot">
        <span className="journal-line" aria-hidden="true" />
        <p>REAL PROGRESS. REAL HOMES. THE REDLINE KEEPS MOVING.</p>
        <a href="#start" className="text-link">Talk about your build</a>
      </div>
    </section>
  );
}
