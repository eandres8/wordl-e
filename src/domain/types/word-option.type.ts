export type TWordOptonStatus = 'SUCCESS' | 'NONE' | 'WRONG_POSITION' | 'NOT_EXIST';

export type TWordOption = {
  letter: string;
  status: TWordOptonStatus;
};
