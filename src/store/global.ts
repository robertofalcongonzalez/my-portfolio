import { reactive, readonly } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
const layoutKey = Symbol('layout');
const state = {
    menu: false
}

const changeMenuStatus = () => state.menu = !state.menu;

provide(layoutKey, { ...readonly(state), changeMenuStatus })

export interface ILayout {
    menu: boolean;
}
export default layoutKey;
