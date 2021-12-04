import React from 'react';
import Styles from './button.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BtnPropsWithChildren {}

export interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BtnPropsWithChildren {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
}

export type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

const style = {
  rounded: `rounded-full`,
  block: `flex justify-center w-full`,
  default: `text-white focus:outline-none shadow font-medium transition ease-in duration-200`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3 text-lg',
  },
  color: {
    primary: {
      bg: `bg-blue-500 hover:bg-blue-700`,
      outline: `border-blue-700 border-2 text-blue-700 active:bg-blue-700 active:text-white`,
    },
    success: {
      bg: `bg-green-500 hover:bg-green-700`,
      outline: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
    },
    danger: {
      bg: `bg-red-500 hover:bg-red-700`,
      outline: `border-red-500 border-2 text-red-500 active:bg-red-500 active:text-white`,
    },
    dark: {
      bg: `bg-black`,
      outline: `border-black border-2 text-gray-500 active:bg-black active:text-white`,
    },
    warning: {
      bg: `bg-yellow-500 hover: bg-yellow-700`,
      outline: `border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white`,
    },
    indigo: {
      bg: `bg-indigo-500 bg-indigo-700`,
      outline: `border-indigo-500 border-2 text-indigo-500 active:bg-indigo-500 active:text-white`,
    },
  },
};

const colors = (outline: boolean) => ({
  primary: outline ? style.color.primary.outline : style.color.primary.bg,
  success: outline ? style.color.success.outline : style.color.success.bg,
  danger: outline ? style.color.danger.outline : style.color.danger.bg,
  dark: outline ? style.color.dark.outline : style.color.dark.bg,
  warning: outline ? style.color.warning.outline : style.color.warning.bg,
  indigo: outline ? style.color.indigo.outline : style.color.indigo.bg,
});

export const Button = React.forwardRef(
  (
    {
      block = false,
      children,
      className,
      color,
      disabled = false,
      outline = false,
      rounded,
      size = 'md',
      submit,
      ...props
    }: BtnProps,
    ref: ButtonRef,
  ) => (
    <button
      ref={ref}
      {...props}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`${className ?? ''} ${block ? style.block : ''}
        ${disabled ? style.disabled : ''} ${style.sizes[size]}
        ${style.default} ${rounded ? style.rounded : 'rounded'}
        ${color ? colors(outline)[color] : colors(outline).dark}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
