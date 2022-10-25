import { aG as computed, aH as unref, b2 as reactive } from "./vendor.bd202a0d.js";
const useCategorieToGradient = (categorie) => {
  const className = computed(() => categorie ? `gradient-${unref(categorie).replace(" ", "-").toLowerCase()}` : "");
  return reactive({
    className
  });
};
export {
  useCategorieToGradient as u
};
