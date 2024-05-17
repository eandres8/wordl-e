export type TWordOptonStatus = 'SUCCESS' | 'NONE' | 'WRONG_POSITION' | 'NOT_EXIST' | 'EMPTY';

export type TWordOption = {
  letter: string;
  status: TWordOptonStatus;
};
