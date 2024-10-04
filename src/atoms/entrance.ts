import { atom } from "jotai";
import { EntranceProps } from "@components/entrance/Entrance";

export const entranceBottomsheetAtom = atom<
  Omit<EntranceProps, "isOpen" | "nextPath"> & { location?: string }
>({
  boothID: 1,
  location: "/",
});
