import { useUIState } from "@src/ui/store";
import { HelpModal } from "../HelpModal/HelpModal";

type Props = {
  slug?: string;
}

export const StagePage: React.FC<Props> = () => {
  const { toggleHelpModal } = useUIState();

  return (
    <div>
      <header>StagePage</header>
      <button onClick={() => toggleHelpModal(true)}>show help modal</button>
      <article>
        <HelpModal name="" />
      </article>
    </div>
  );
}
