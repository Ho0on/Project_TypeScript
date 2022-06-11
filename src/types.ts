import { Dispatch, SetStateAction } from 'react';

export interface Idata {
  text: string;
  id: number;
}

export interface DataProps {
  resultData: Idata[];
  setListItemCount: Dispatch<SetStateAction<number>>;
}
