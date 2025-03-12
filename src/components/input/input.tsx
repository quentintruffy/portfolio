'use client';

import { useAIStore } from '@/stores/useAIStore';
import { SlotsToClasses } from '@/utils/slots';
import { AreaHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import { input } from '.';
import { Icon } from '../icon';

type InputProps = PropsWithChildren<{
  /**
   * The class names to apply to the mapbox content.
   * @default undefined
   */
  classNames?: SlotsToClasses<keyof typeof input.slots>;
}>;

type UseInputProps = Omit<
  AreaHTMLAttributes<HTMLTextAreaElement>,
  keyof InputProps
> &
  InputProps;

/**
 * The Input component is a basic input element.
 */
const Input = forwardRef<HTMLTextAreaElement, UseInputProps>(
  ({ id, classNames, ...props }, ref) => {
    const { isThinking } = useAIStore();
    const { wrapper_label, inner_label, inner_textarea } = input();

    return (
      <label
        htmlFor={id}
        className={wrapper_label({
          isThinking,
          className: classNames?.wrapper_label,
        })}
      >
        <div className={inner_label({ className: classNames?.inner_label })}>
          <textarea
            ref={ref}
            id={id}
            className={inner_textarea({
              className: classNames?.inner_textarea,
            })}
            maxLength={600}
            {...props}
          />
          <button className="flex items-center justify-center h-full w-12 bg-[#bd9ada] hover:bg-[#a583c2] duration-150 cursor-pointer rounded-[8px]">
            <Icon size={20} name="Send" color="white" />
          </button>
        </div>
      </label>
    );
  },
);
Input.displayName = 'Input';

export { Input };

export type { InputProps, UseInputProps };
