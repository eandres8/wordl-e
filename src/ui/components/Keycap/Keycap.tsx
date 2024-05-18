import './keycap.styles.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Keycap: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="keycap" onClick={onClick}>
      <span className="letter">
        {children}
      </span>
    </div>
  );
}
