import './word-stage.styles.css';
import { Word } from '../Word/Word';
import { useAppState } from '@src/ui/store';
import { useWordMapping } from '@src/data/hooks';

export const WordStage: React.FC = () => {
  const { inputText } = useAppState();
  const { buildAttemptList } = useWordMapping();
  const listWords = buildAttemptList();

  // @remove
  console.log({ inputText, listWords });

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
