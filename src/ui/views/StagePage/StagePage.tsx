import './stage-page.styles.css';
import { HelpModal } from "../HelpModal/HelpModal";
import { ScoreModal } from "../ScoreModal/ScoreModal";
import { Keyboard, WordStage } from '@src/ui/components';
import { useUIState } from "@src/ui/store";
import { IconQuestion, IconLines } from '@src/ui/svgs';

type Props = {
  slug?: string;
}

export const StagePage: React.FC<Props> = () => {
  const { toggleHelpModal, toggleScoreModal } = useUIState();

  return (
    <main className="stage-page">
      <article className="content">
        <header className="header">
          <span className="cursor-pointer" onClick={() => toggleHelpModal(true)}>
            <IconQuestion />
          </span>
          <h1>Wordl-e</h1>
          <span className="cursor-pointer" onClick={() => toggleScoreModal(true)}>
            <IconLines />
          </span>
          <span>toggle</span>
        </header>
        <section className='words-content'>
          <WordStage />
        </section>
        <section className='keyboard-content'>
          <Keyboard />
        </section>
        <section>
          <HelpModal />
          <ScoreModal />
        </section>
      </article>
    </main>
  );
}
