import clsx from 'clsx';

import './word.styles.css';
import { TWordOption, TWordOptonStatus } from '@src/domain/types/word-option.type';

type Props = {
  value: TWordOption[];
}

const _letterClass = (status: TWordOptonStatus) => clsx(
  'letter rounded-md flex justify-center items-center text-3xl font-extrabold text-gray-900 dark:text-white',
  status === 'NONE' && 'none',
  status === 'SUCCESS' && 'success',
  status === 'WRONG_POSITION' && 'wrong-position',
  status === 'NOT_EXIST' && 'not-exist',
);

export const Word: React.FC<Props> = ({ value }) => {
  return (
    <div className="flex gap-2">
      {
        value.map((l, idx) => (
          <span key={`${l.letter}_${idx}`} className={_letterClass(l.status)}>{l.letter}</span>
        ))
      }
    </div>
  );
}
