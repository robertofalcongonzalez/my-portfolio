import {Directive} from "vue";

export const VResize: Directive = {
  mounted: (el, binding) => {
    const onResizeCallback = binding.value;
    window.addEventListener('resize', ()=>{
      const width = el.clientWidth;
      onResizeCallback(width);
    })
  }
}
