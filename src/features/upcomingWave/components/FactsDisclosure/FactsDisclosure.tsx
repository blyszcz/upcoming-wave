'use client';

import { useId } from 'react';

import type { FactsDisclosureProps } from './FactsDisclosure.types';

import { useDisclosure } from '@features/upcomingWave/hooks/useDisclosure';

export const FactsDisclosure = ({ label, hideLabel, children }: FactsDisclosureProps) => {
  const { isOpen, toggle } = useDisclosure();
  const regionId = useId();

  return (
    <div className="uw-disclosure" data-open={isOpen}>
      <button type="button" className="uw-disclosure-toggle" aria-expanded={isOpen} aria-controls={regionId} onClick={toggle}>
        <span>{isOpen ? hideLabel : label}</span>
        <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
      </button>
      <div id={regionId} className="uw-disclosure-body" hidden={!isOpen}>{children}</div>
    </div>
  );
};
