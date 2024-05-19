import { Word } from '../Word/Word';
import { useWordMapping } from '@src/data/hooks';

export const WordStage: React.FC = () => {
  const { buildAttemptList } = useWordMapping();
  const listWords = buildAttemptList();

  return (
    <div className="flex flex-col gap-2">
      {
        listWords.map(word => (
          <Word value={word} />
        ))
      }
    </div>
  );
}
