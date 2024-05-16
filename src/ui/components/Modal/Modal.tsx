import clsx from 'clsx';

import './modal.styles.css';

type Props = {
  children: React.ReactNode;
  show?: boolean;
}

export const Modal: React.FC<Props> = ({ children, show }) => {
  return (
    <div className={clsx('modal', show && 'show')}>
      {children}
    </div>
  );
}
