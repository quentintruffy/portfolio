'use client';

import { LucideProps, icons } from 'lucide-react';
import { SVGAttributes } from 'react';

type IconProps = {
  /**
   * The name of the icon.
   * @default 'ChevronRight'
   */
  name: keyof typeof icons;
} & LucideProps;

type UseIconProps = Omit<SVGAttributes<SVGSVGElement>, keyof IconProps> &
  IconProps;

/**
 * The Icon component is a basic icon element.
 */
const Icon = ({ name = 'ChevronRight', ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    throw new Error(`Icon "${name}" not found`);
  }

  return <LucideIcon {...props} />;
};

export { Icon };
export type { IconProps, UseIconProps };
