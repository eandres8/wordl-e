import './word-stage.styles.css';
import { TWordOption } from '@src/domain/types/word-option.type';
import { Word } from '../Word/Word';

const FIRST_MODA_MOCK: TWordOption[] = [
  { letter: 'g', status: 'SUCCESS' },
  { letter: 'a', status: 'NONE' },
  { letter: 't', status: 'NONE' },
  { letter: 'o', status: 'NONE' },
  { letter: 's', status: 'NONE' },
];

const DEFAULT_MODA_MOCK: TWordOption[] = [
  { letter: '', status: 'EMPTY' },
  { letter: '', status: 'EMPTY' },
  { letter: '', status: 'EMPTY' },
  { letter: '', status: 'EMPTY' },
  { letter: '', status: 'EMPTY' },
];

export const WordStage: React.FC = () => {
  const listWords = [FIRST_MODA_MOCK, DEFAULT_MODA_MOCK, DEFAULT_MODA_MOCK, DEFAULT_MODA_MOCK, DEFAULT_MODA_MOCK];

  return (
    <div className="word-stage">
      {
        listWords.map(word => (
          <Word value={word} />
        ))
      }
    </div>
  );
}
