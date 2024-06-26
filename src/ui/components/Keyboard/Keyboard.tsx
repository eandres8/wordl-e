import './keyboard.styles.css';
import { Keycap } from '../Keycap/Keycap';
import { FIRST_KEYBOARD_LINE, SECOND_KEYBOARD_LINE, THIRD_KEYBOARD_LINE } from './keyboard-letters';
import { IconDelete } from '@src/ui/svgs';
import { useAppState, useUIState } from '@src/ui/store';

export const Keyboard: React.FC = () => {
  const { setLetter, removeLetter } = useAppState();
  const { isDarkTheme } = useUIState();

  const handleClick = (letter: string) => () => setLetter(letter);

  return (
    <div className="keyboard bg-gray-100 p-6 flex flex-col rounded-2xl w-full dark:bg-ebony-800">
      <div className="row center">
        {
          FIRST_KEYBOARD_LINE.split('').map((letter, idx) => (
            <Keycap key={`first_${letter}_${idx}`} onClick={handleClick(letter)}>{letter}</Keycap>
          ))
        }
      </div>
      <div className="row right">
        {
          SECOND_KEYBOARD_LINE.split('').map((letter, idx) => (
            <Keycap key={`second_${letter}_${idx}`} onClick={handleClick(letter)}>{letter}</Keycap>
          ))
        }
      </div>
      <div className="row left">
        <Keycap>enter</Keycap>
        {
          THIRD_KEYBOARD_LINE.split('').map((letter, idx) => (
            <Keycap key={`third_${letter}_${idx}`} onClick={handleClick(letter)}>{letter}</Keycap>
          ))
        }
        <Keycap onClick={removeLetter}>
          <IconDelete dark={isDarkTheme} />
        </Keycap>
      </div>
    </div>
  );
}
