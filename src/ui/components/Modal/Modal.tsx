import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  show?: boolean;
}

export const Modal: React.FC<Props> = ({ children, show }) => {
  return (
    <div className={clsx('bg-gray-100 justify-center items-center bg-white bg-opacity-8 transition-opacity absolute z-10 inset-0', !show && 'hidden', show && 'flex')}>
      <div className="flex flex-col justify-start items-center gap-2 bg-white border border-black rounded-2xl max-w-[546px] w-full p-6">
        {children}
      </div>
    </div>
  );
}
