import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  className?: string;
}

const Button = ({ text, children, className, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children || text}
    </button>
  );
};

export default Button;
