import { ReactNode } from 'react';

export type MiniDiamondProps = {
  children: ReactNode;
  download?: string;
  external?: boolean;
  href: string;
  label: string;
  position: 'top' | 'left' | 'right' | 'bottom';
};
