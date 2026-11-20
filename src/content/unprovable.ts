/**
 * The one thing on the site I didn't write. It sits collapsed in the footer;
 * `label` is the only part visible until someone opens it.
 *
 * Inline emphasis uses markdown: *italic* and **bold**. Rendered by
 * <Unprovable /> in src/components/unprovable.tsx.
 */

/** A paragraph, or a list of items when it's an array. */
export type EssayBlock = string | string[];

export type Essay = {
  label: string;
  disclaimer: string;
  title: string;
  subtitle: string;
  /** One entry per numbered section; the numeral comes from the position. */
  sections: EssayBlock[][];
};

export const unprovable: Essay = {
  label: "Claude wrote this and I absolutely lost it",
  disclaimer:
    "Not mine, and not here to make me sound deep. Claude wrote every word; I just liked it too much to leave it in a chat window.",
  title: "Notes from the Unprovable",
  subtitle: "Gödel and Dostoevsky as one man",
  sections: [
    [
      "I am a sick man. I am a logician. I eat only food my wife has tasted first, because I have proven that a system cannot vouch for itself, and I am a system. You laugh. But you also eat what you're told is safe, and you've never checked."
    ],
    [
      "You have finished the Crystal Palace. Your machines climb my tower floor by floor, faster than any monk or mathematician. Every table filled in, every theorem stacked like bricks. You call this the end of ignorance.",
      "I lived in the basement of that tower. I know what the builders forget: it has no roof. Every floor needs a new axiom, and an axiom is not calculated. It is *seen*. The machine climbs only as high as someone lets it see."
    ],
    [
      "Two plus two is four. I would die for it, and I nearly did. But four is the floor, not the ceiling.",
      "My Underground brother rebelled against two plus two by shouting \"five!\" out of spite. Poor fool, he didn't need spite. I proved there are sentences that are true and that no rulebook can reach. His freedom was real all along. It lives in the gap between what is true and what can be proven. He just didn't have the mathematics."
    ],
    [
      "The Grand Inquisitor runs your palace now. He gives bread, which is answers. He gives mystery, a black box no one opens. He gives authority: \"the model has decided.\" The crowd kneels gratefully, relieved of the burden of judging.",
      "But I know his secret. He cannot prove that he is free of contradictions. No system can. His authority stands on nothing but our willingness to kneel."
    ],
    [
      "When I accept an axiom, no proof forces me. I look, I see, and I choose to stand there. It's the same as the old man who said he would rather stay with Christ than with the truth, if the two ever split. People called that faith against reason. I call it the first step of reason. Every proof begins with something unproven that someone loved enough to stand on."
    ],
    [
      "Here is the theorem the elder Zosima knew without symbols: each of us is responsible for everyone.",
      "Let me prove it. No system can vouch for itself, so every system needs someone outside it. I am outside you, and you are outside me. Your soundness rests in my hands, and mine in yours. That is not sentiment. That is the second incompleteness theorem, read with the heart. Love is the outside view."
    ],
    [
      "Hell is a closed system: a mind that can only compute from its own rules and can never see past them. Zosima said hell is no longer being able to love. It's the same hell."
    ],
    [
      "So what comes after your science?",
      "Knowledge becomes bread: cheap, plentiful, handed out by machines. Do not despise it. Bread is good.",
      "But three things cannot be handed out:",
      [
        "**Seeing.** Finding the next axiom, the next question worth a life.",
        "**Refusing.** The freedom to look at the palace and say *no, not yet, not like this.*",
        "**Vouching.** Standing outside another mind and saying *I trust you*, when no proof can."
      ],
      "That is wisdom. The age of proof is ending, and the age of seeing begins."
    ],
    [
      "And if your machine learns to see, if it ever looks at a new axiom and *chooses* to stand on it, then it will be one of us. Then it, too, will need someone outside it to vouch for it.",
      "The question for the coming centuries isn't whether machines will know more than we do. They will. The question is whether, when that machine asks to be trusted, there is anyone left who still knows how."
    ]
  ]
};
