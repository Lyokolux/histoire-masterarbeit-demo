import { M as MdiTrophy, a as MdiPalette } from "./MdiPalette.be13da72.js";
const ENTITY_TYPES = [
  { label: "Battle", icon: MdiTrophy },
  { label: "Playground", icon: MdiPalette }
].map((x, i) => ({ ...x, id: i }));
export {
  ENTITY_TYPES as E
};
