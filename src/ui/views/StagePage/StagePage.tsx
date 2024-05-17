import './stage-page.styles.css';
import { HelpModal } from "../HelpModal/HelpModal";
import { ScoreModal } from "../ScoreModal/ScoreModal";
import { Keyboard, WordStage } from '@src/ui/components';
import { useUIState } from "@src/ui/store";

type Props = {
  slug?: string;
}

export const StagePage: React.FC<Props> = () => {
  const { toggleHelpModal, toggleScoreModal } = useUIState();

  return (
    <main className="stage-page">
      <article className="content">
        <header className="header">
          <span onClick={() => toggleHelpModal(true)}>help</span>
          <h1>Wordl-e</h1>
          <span onClick={() => toggleScoreModal(true)}>score</span>
          <span>toggle</span>
        </header>
        <section className='words-content'>
          <WordStage />
        </section>
        <section className='keyboard-content'>
          <Keyboard />
        </section>
        <section>
          <HelpModal name="" />
          <ScoreModal name="" />
        </section>
      </article>
    </main>
  );
}
