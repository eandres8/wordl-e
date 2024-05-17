import './keyboard.styles.css';
import { Keycap } from '../Keycap/Keycap';
import { FIRST_KEYBOARD_LINE, SECOND_KEYBOARD_LINE, THIRD_KEYBOARD_LINE } from './keyboard-letters';
import { IconDelete } from '@src/ui/svgs';

export const Keyboard: React.FC = () => {
  return (
    <div className="keyboard">
      <div className="row center">
        {
          FIRST_KEYBOARD_LINE.split('').map(letter => (
            <Keycap key={letter}>{letter}</Keycap>
          ))
        }
      </div>
      <div className="row right">
        {
          SECOND_KEYBOARD_LINE.split('').map(letter => (
            <Keycap key={letter}>{letter}</Keycap>
          ))
        }
      </div>
      <div className="row left">
        <Keycap>enter</Keycap>
        {
          THIRD_KEYBOARD_LINE.split('').map(letter => (
            <Keycap key={letter}>{letter}</Keycap>
          ))
        }
        <Keycap>
          <IconDelete />
        </Keycap>
      </div>
    </div>
  );
}
