import clsx from 'clsx';

import './button.styles.css';

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('btn btn-primary', className)}
    >
      { children }
    </button>
  );
}
