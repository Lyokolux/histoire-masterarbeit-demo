import { ba as useToggle } from "./vendor.bd202a0d.js";
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
