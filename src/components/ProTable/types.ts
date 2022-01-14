import { Key, ReactNode, ReactText } from "react";

export interface ProTableHead {
  key: Key;
  name: ReactText;
  render?: () => ReactNode;
}

export interface ProTableRow {
  key: string | number;
  [key: string]: string | number;
}