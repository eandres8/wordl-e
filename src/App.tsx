import { StagePage } from '@src/ui/views';
import { useInitAppState } from './data/hooks';

function App() {
  useInitAppState();

  return (
    <StagePage />
  );
}

export default App;
