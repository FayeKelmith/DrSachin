import { Cairo_Play, Lato, Quicksand } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const cairoplay = Cairo_Play({
  subsets: ["latin"],
  weight: ["1000", "800", "500", "300", "600"],
});
