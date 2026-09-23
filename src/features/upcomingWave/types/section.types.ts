// Section numbers are derived from the story order, so sections receive them as a prop.
export type NumberedSectionProps = { number: string };

export type FoldableSectionProps = NumberedSectionProps & { featured?: number[] };
