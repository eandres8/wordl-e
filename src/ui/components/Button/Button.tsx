import './button.styles.css';

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary">
        { children }
    </button>
  );
}
