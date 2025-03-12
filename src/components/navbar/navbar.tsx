'use client';

import { SlotsToClasses } from '@/utils/slots';
import { useRouter } from 'next/navigation';
import { forwardRef, HTMLAttributes } from 'react';
import { navbar } from '.';
import { Icon } from '../icon';

type NavbarProps = {
  /**
   * The class names to apply to the mapbox content.
   * @default undefined
   */
  classNames?: SlotsToClasses<keyof typeof navbar.slots>;
};

type UseNavbarProps = Omit<HTMLAttributes<HTMLElement>, keyof NavbarProps> &
  NavbarProps;

/**
 * The Navbar component is a basic navbar element.
 */
const Navbar = forwardRef<HTMLElement, UseNavbarProps>(
  ({ classNames, ...props }, ref) => {
    const { wrapper, wrapper_left, wrapper_right, left_header, right_button } =
      navbar();
    const router = useRouter();

    return (
      <nav
        ref={ref}
        className={wrapper({ className: classNames?.wrapper })}
        {...props}
      >
        <div className={wrapper_left({ className: classNames?.wrapper_left })}>
          <h2 className={left_header({ className: classNames?.left_header })}>
            Quentin Truffy
          </h2>
        </div>
        <div
          className={wrapper_right({ className: classNames?.wrapper_right })}
        >
          <button
            onClick={() =>
              router.push('https://www.linkedin.com/in/quentintruffy/')
            }
            className={right_button({ className: classNames?.right_button })}
          >
            <Icon size={20} className="stroke-neutral-900" name="Linkedin" />
          </button>
          <button
            onClick={() => router.push('https://github.com/quentintruffy')}
            className={right_button({ className: classNames?.right_button })}
          >
            <Icon size={20} className="stroke-neutral-900" name="Github" />
          </button>
        </div>
      </nav>
    );
  },
);
Navbar.displayName = 'Navbar';

export { Navbar };
export type { NavbarProps, UseNavbarProps };
