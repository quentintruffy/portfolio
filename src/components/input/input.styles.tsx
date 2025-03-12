import { tv } from 'tailwind-variants';

const input = tv({
  slots: {
    wrapper_label: 'h-fit w-full rounded-[18px] p-0.5 shadow bg-neutral-200',
    inner_label: 'flex flex-row space-x-2 bg-white h-20 rounded-[16px] p-2',
    inner_textarea: 'h-full w-full outline-none decoration-0 resize-none',
  },
  variants: {
    isThinking: {
      true: {
        wrapper_label:
          'bgscaled bg-linear-[45deg,#ff00ff,#ffff00] animate-[rotate_2s_linear_infinite]',
      },
    },
  },
});
export { input };
