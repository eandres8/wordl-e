import './keycap.styles.css';

type Props = {
  children: React.ReactNode;
}

export const Keycap: React.FC<Props> = ({ children }) => {
  return (
    <div className="keycap">
      <span className="letter">
        {children}
      </span>
    </div>
  );
}
