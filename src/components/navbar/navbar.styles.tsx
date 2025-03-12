import { tv } from 'tailwind-variants';

const navbar = tv({
  slots: {
    wrapper: 'relative w-full',
    wrapper_left: 'absolute left-4 top-4',
    left_header: 'text-neutral-900 text-base font-medium',
    wrapper_right: 'absolute right-4 top-4',
    right_button: 'cursor-pointer hover:bg-neutral-200 rounded-full p-3',
  },
});
export { navbar };
