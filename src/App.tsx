import { StagePage } from '@src/ui/views';
import { useInitAppState, useKeyboardListener } from './data/hooks';

function App() {
  useInitAppState();
  useKeyboardListener();

  return (
    <StagePage />
  );
}

export default App;
