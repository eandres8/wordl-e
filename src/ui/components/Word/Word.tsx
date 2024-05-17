import clsx from 'clsx';

import './word.styles.css';
import { TWordOption, TWordOptonStatus } from '@src/domain/types/word-option.type';

type Props = {
  value: TWordOption[];
}

const _letterClass = (status: TWordOptonStatus) => clsx(
  'letter',
  status === 'NONE' && 'none',
  status === 'SUCCESS' && 'success',
  status === 'WRONG_POSITION' && 'wrong-position',
  status === 'NOT_EXIST' && 'not-exist',
);

export const Word: React.FC<Props> = ({ value }) => {
  return (
    <div className="word">
      <span className={_letterClass(value.at(0)!.status)}>{value?.at(0)?.letter}</span>
      <span className={_letterClass(value.at(1)!.status)}>{value?.at(1)?.letter}</span>
      <span className={_letterClass(value.at(2)!.status)}>{value?.at(2)?.letter}</span>
      <span className={_letterClass(value.at(3)!.status)}>{value?.at(3)?.letter}</span>
      <span className={_letterClass(value.at(4)!.status)}>{value?.at(4)?.letter}</span>
    </div>
  );
}
