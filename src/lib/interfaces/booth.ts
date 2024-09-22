export interface Booth {
  boothID: number;
  thumbnail: string;
  name: string;
  description?: string;
  location: string;
  isOperated: boolean;
  menu: Menu[];
  openTime: string;
  closeTime: string;
}

export interface BoothBrief
  extends Pick<
    Booth,
    "boothID" | "thumbnail" | "name" | "description" | "location"
  > {}

export interface Menu {
  name: string;
  price: string;
}
