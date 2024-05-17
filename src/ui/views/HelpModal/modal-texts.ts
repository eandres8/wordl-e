import { TWordOption } from "@src/domain/types/word-option.type";

export const MODAL_TEXTS = {
  title: 'Cómo jugar',
  rule1: 'Adivina la palabra oculta en cinco intentos.',
  rule2: 'Cada intento debe ser una palabra válida de 5 letras.',
  rule3: 'Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.',
  rule4: 'Puede haber letras repetidas. Las pistas son independientes para cada letra.',
  example: 'Ejemplos',
  example1: 'gatos',
  example1_subtext: 'La letra <strong>G</strong> está en la palabra y en la posición correcta.',
  example2: 'vocal',
  example2_subtext: 'La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.',
  example3: 'canto',
  example3_subtext: 'La letra <strong>O</strong> no está en la palabra.',
  message: '¡Una palabra nueva cada 5 minutos!',
  play: '!JUGAR¡',
};

export const FIRST_MODA_MOCK: TWordOption[] = [
  { letter: 'g', status: 'SUCCESS' },
  { letter: 'a', status: 'NONE' },
  { letter: 't', status: 'NONE' },
  { letter: 'o', status: 'NONE' },
  { letter: 's', status: 'NONE' },
];

export const SECOND_MODA_MOCK: TWordOption[] = [
  { letter: 'v', status: 'NONE' },
  { letter: 'o', status: 'NONE' },
  { letter: 'c', status: 'WRONG_POSITION' },
  { letter: 'a', status: 'NONE' },
  { letter: 'l', status: 'NONE' },
];

export const THIRD_MODA_MOCK: TWordOption[] = [
  { letter: 'c', status: 'NONE' },
  { letter: 'a', status: 'NONE' },
  { letter: 'n', status: 'NONE' },
  { letter: 't', status: 'NONE' },
  { letter: 'o', status: 'NOT_EXIST' },
];
