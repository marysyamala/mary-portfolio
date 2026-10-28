const TOOLS = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "PySpark",
  "Snowflake",
  "BigQuery",
  "PostgreSQL",
  "AWS",
  "Azure",
  "dbt",
  "ETL Pipelines",
  "FinBERT",
  "LangChain",
  "OpenAI API",
  "Excel",
  "JIRA",
  "Agile / Scrum",
];

const STYLES = `
  .marquee {
    position: relative;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background:
      linear-gradient(180deg, rgba(163,255,95,0.03), transparent),
      var(--background);
    overflow: hidden;
    padding: 1.4rem 0;
    -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  }
  .marquee-track {
    display: inline-flex;
    gap: 2.75rem;
    white-space: nowrap;
    will-change: transform;
    animation: marqueeScroll 42s linear infinite;
  }
  .marquee:hover .marquee-track { animation-play-state: paused; }
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 2.75rem;
    font-family: var(--font-geist-mono, ui-monospace, monospace);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text);
  }
  .marquee-item::after {
    content: "";
    width: 6px; height: 6px;
    border-radius: 9999px;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
    flex: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; flex-wrap: wrap; white-space: normal; }
  }
`;

/**
 * Infinite, seamless horizontal marquee of Mary's core tools.
 * The track holds two copies of the list and translates -50%, so the
 * loop is gapless. Pure CSS; pauses on hover and for reduced motion.
 */
export default function ToolsMarquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <div className="marquee" aria-label="Core tools and technologies">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="marquee-track">
        {row.map((tool, i) => (
          <span className="marquee-item" key={tool + i} aria-hidden={i >= TOOLS.length}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
