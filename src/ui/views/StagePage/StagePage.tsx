import { HelpModal } from "../HelpModal/HelpModal";
import { ScoreModal } from "../ScoreModal/ScoreModal";
import { Keyboard, ToggleSwitch, WordStage } from "@src/ui/components";
import { useUIState } from "@src/ui/store";
import { IconQuestion, IconLines } from "@src/ui/svgs";

type Props = {
  slug?: string;
};

export const StagePage: React.FC<Props> = () => {
  const { toggleHelpModal, toggleScoreModal, isDarkTheme, toggleDarkTheme } =
    useUIState();

  return (
    <main className="pt-8 flex justify-center gap-4">
      <article className="max-w-2xl flex flex-col p-4 gap-4 w-full">
        <header className="bg-gray-100 flex align-center gap-4 rounded-2xl py-4 px-6">
          <span
            className="cursor-pointer flex items-center"
            onClick={() => toggleHelpModal(true)}
          >
            <IconQuestion />
          </span>
          <h1 className="flex-1 text-center font-semibold text-2xl">Wordl-e</h1>
          <span
            className="cursor-pointer flex items-center"
            onClick={() => toggleScoreModal(true)}
          >
            <IconLines />
          </span>
          <span className="flex items-center">
            <ToggleSwitch enabled={isDarkTheme} onChange={toggleDarkTheme} />
          </span>
        </header>
        <section className="flex justify-center p-4">
          <WordStage />
        </section>
        <section className="flex justify-center">
          <Keyboard />
        </section>
        <section>
          <HelpModal />
          <ScoreModal />
        </section>
      </article>
    </main>
  );
};
