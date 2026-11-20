import type { ReactNode } from "react";
import { unprovable, type EssayBlock } from "@/src/content/unprovable";

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

/** **bold** and *italic*, nothing else. Bold is matched first so ** never reads as two italics. */
function emphasis(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, index) => {
    if (part.startsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

function Block({ block }: { block: EssayBlock }) {
  if (typeof block === "string") {
    return <p className="mt-3 text-body">{emphasis(block)}</p>;
  }

  return (
    <ul className="mt-3 space-y-1.5">
      {block.map((item) => (
        <li key={item} className="text-body">
          {emphasis(item)}
        </li>
      ))}
    </ul>
  );
}

/**
 * A native <details>, so it is closed by default, needs no JavaScript, and is
 * still found by in-page search (browsers open it on a match).
 */
export function Unprovable() {
  const { label, disclaimer, title, subtitle, sections } = unprovable;

  return (
    <details className="aside mt-6">
      <summary className="text-meta text-ink2">
        <span className="aside-label">{label}</span>
      </summary>

      <div className="aside-body mt-5">
        <p className="text-meta text-ink2">{disclaimer}</p>

        <article className="mt-6">
          <h3 className="text-title font-semibold">{title}</h3>
          <p className="mt-1 text-meta text-ink2">{subtitle}</p>

          {sections.map((blocks, index) => (
            <section key={index} className="mt-7">
              <h4 className="aside-numeral">{NUMERALS[index] ?? index + 1}</h4>
              {blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </section>
          ))}
        </article>
      </div>
    </details>
  );
}
