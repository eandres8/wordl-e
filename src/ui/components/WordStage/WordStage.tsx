import './word-stage.styles.css';
import { Word } from '../Word/Word';
import { useWordMapping } from '@src/data/hooks';

export const WordStage: React.FC = () => {
  const { buildAttemptList } = useWordMapping();
  const listWords = buildAttemptList();

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
