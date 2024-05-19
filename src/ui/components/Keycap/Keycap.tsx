import './keycap.styles.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Keycap: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="min-w-11 h-12 flex justify-center items-center rounded-md px-2 bg-gray-300 hover:cursor-pointer hover:bg-gray-400" onClick={onClick}>
      <span className="text-gray-800 text-xl font-medium uppercase">
        {children}
      </span>
    </div>
  );
}
