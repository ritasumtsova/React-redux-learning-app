import { User } from "./APIIntefaces";

export interface btnCounterInitState {
  count: number;
};

export interface UsersInitState {
  loading: boolean;
  users?: User[];
  errorMsg?: string;
};