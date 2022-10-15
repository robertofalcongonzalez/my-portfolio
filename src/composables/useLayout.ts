import {computed, ComputedRef, ref} from "vue";
import {getBreakpoint} from "./utils";

export interface ILayout {
  menu: ComputedRef<boolean>;
  breakpoint: ComputedRef<string>

  setClientWidth(width: number): void;

  changeMenuStatus(): void;
}

let state = {
  menu: ref(false),
  clientWidth: ref(document.documentElement.clientWidth),
  breakpoint: ref('')
}

export function useLayout(): ILayout {
  state.breakpoint.value = getBreakpoint(state.clientWidth.value)
  const changeMenuStatus = () => state.menu.value = !state.menu.value;
  const setClientWidth = (width: number) => {
    state.clientWidth.value = width;
    state.breakpoint.value = getBreakpoint(width)
  };
  return {
    changeMenuStatus,
    setClientWidth,
    menu: computed(() => state.menu.value),
    breakpoint: computed(() => state.breakpoint.value)
  }
}






