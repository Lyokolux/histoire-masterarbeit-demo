import { ba as useToggle } from "./vendor.e1f182eb.js";
const useFocusMode = () => {
  const [isFocusModeActivated, toggleFocusMode] = useToggle(false);
  return {
    isFocusModeActivated,
    toggleFocusMode
  };
};
export {
  useFocusMode as u
};
