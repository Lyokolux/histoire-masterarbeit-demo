const CATEGORIE = [
  "User Interface",
  "Pencil",
  "Icons",
  "Illustrations",
  "3D",
  "Animation",
  "Graphics"
];
const CATEGORIE_OPTIONS = CATEGORIE.map((name, id) => ({
  id: id + 1,
  name,
  label: name
}));
const FILTERS = CATEGORIE.map((c, i) => ({ id: i + 1, labelKey: `${c}` }));
FILTERS.sort((a, b) => a.labelKey.localeCompare(b.labelKey));
[
  {
    id: void 0,
    labelKey: "All Themes"
  },
  ...FILTERS
];
export {
  CATEGORIE as C,
  CATEGORIE_OPTIONS as a
};
