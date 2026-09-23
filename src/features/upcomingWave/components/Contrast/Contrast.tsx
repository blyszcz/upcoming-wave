import type { ContrastProps, ContrastSide } from './Contrast.types';

const Column = ({ side, isFuture }: { side: ContrastSide; isFuture?: boolean }) => (
  <div className={isFuture ? 'uw-contrast-col is-future' : 'uw-contrast-col'}>
    <p className="uw-contrast-label">{side.label}</p>
    <ol>{side.steps.map((step) => <li key={step}>{step}</li>)}</ol>
  </div>
);

export const Contrast = ({ title, left, right }: ContrastProps) => (
  <div className="uw-contrast">
    <h3 className="uw-growth-title">{title}</h3>
    <div className="uw-contrast-grid">
      <Column side={left} />
      <Column side={right} isFuture />
    </div>
  </div>
);
