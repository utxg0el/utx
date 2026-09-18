/**
 * The Alexa Automotive migration, drawn rather than photographed.
 *
 * Original artwork: there is no image of this work that Utkarsh owns, and an OEM
 * press photo of a car interior says nothing about what he built. Inline (not an
 * <img>) so it inherits the page's ink colors and themes with the rest of the site.
 */
export function AlexaDiagram() {
  return (
    <svg
      viewBox="0 0 640 208"
      className="h-auto w-full"
      role="img"
      aria-label="Before, a spoken request met a table of hand-written rules: anticipated phrasings mapped to a single action, and anything else fell through unmatched. After, the same request goes to an LLM agent that also reads the car's live sensor data and chains several vehicle API calls to complete it."
    >
      <defs>
        <marker id="ad-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1 L7 4 L0 7 z" fill="currentColor" />
        </marker>
      </defs>

      <g
        fontFamily="var(--font-stack-mono)"
        fontSize="10.5"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        {/* ---------- Before ---------- */}
        <text x="0" y="10" stroke="none" fontWeight="500">
          Before
        </text>

        <text x="0" y="42" stroke="none" opacity="0.62">
          &quot;set the temperature to 70&quot;
        </text>
        <line x1="182" y1="38" x2="214" y2="38" markerEnd="url(#ad-arrow)" opacity="0.62" />

        <rect x="222" y="24" width="120" height="28" fill="none" opacity="0.62" />
        <text x="282" y="42" stroke="none" textAnchor="middle" opacity="0.62">
          rule table
        </text>

        <line x1="342" y1="38" x2="374" y2="38" markerEnd="url(#ad-arrow)" opacity="0.62" />
        <text x="382" y="42" stroke="none" opacity="0.62">
          one action
        </text>

        <text x="0" y="68" stroke="none" opacity="0.62">
          &quot;I&apos;m cold&quot;
        </text>
        <line x1="182" y1="64" x2="214" y2="64" strokeDasharray="3 3" markerEnd="url(#ad-arrow)" opacity="0.62" />
        <text x="222" y="68" stroke="none" opacity="0.62">
          no match
        </text>

        {/* ---------- After ---------- */}
        <line x1="0" y1="96" x2="640" y2="96" opacity="0.28" />

        <text x="0" y="124" stroke="none" fontWeight="500">
          After
        </text>

        <text x="0" y="164" stroke="none">
          &quot;I&apos;m cold&quot;
        </text>
        <line x1="182" y1="160" x2="214" y2="160" markerEnd="url(#ad-arrow)" />

        <rect x="222" y="146" width="120" height="28" fill="none" />
        <text x="282" y="164" stroke="none" textAnchor="middle">
          agent
        </text>

        {/* live vehicle state feeding the agent from below */}
        <text x="222" y="200" stroke="none" opacity="0.62">
          cabin temp, seat state
        </text>
        <line x1="282" y1="188" x2="282" y2="178" markerEnd="url(#ad-arrow)" opacity="0.62" />

        <line x1="342" y1="160" x2="374" y2="160" markerEnd="url(#ad-arrow)" />
        <text x="382" y="152" stroke="none">
          set temperature
        </text>
        <text x="382" y="166" stroke="none">
          seat heater on
        </text>
        <text x="382" y="180" stroke="none">
          close the window
        </text>
      </g>
    </svg>
  );
}
