import clsx from 'clsx';

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
      className={clsx('bg-fern-400 hover:bg-fern-500 font-bold py-2 px-4 rounded-xl text-white', className)}
    >
      { children }
    </button>
  );
}
