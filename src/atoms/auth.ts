import { atom } from "jotai";

interface AuthProps {
  accessToken: string;
  refreshToken: string;
}

export const authAtom = atom<AuthProps | null>(null);
