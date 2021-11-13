import {computed, ComputedRef, ref} from "vue";

export interface ILayout {
  menu: ComputedRef<boolean>;

  changeMenuStatus(): void;
}

let state = {
  menu: ref(false)
}

export function useLayout(): ILayout {
  const changeMenuStatus = () => state.menu.value = !state.menu.value;
  return {
    changeMenuStatus,
    menu: computed(() => state.menu.value)
  }
}






