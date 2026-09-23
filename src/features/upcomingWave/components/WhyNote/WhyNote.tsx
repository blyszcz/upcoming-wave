import type { WhyNoteProps } from './WhyNote.types';

export const WhyNote = ({ title, text }: WhyNoteProps) => (
  <aside className="uw-why" aria-labelledby="why-title">
    <h2 id="why-title">{title}</h2>
    <p>{text}</p>
  </aside>
);
