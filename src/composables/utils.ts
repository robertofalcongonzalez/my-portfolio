import {Directive} from "vue";

function extractNameFromUrl(fileUrl: string) {
  return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length - 1).split('.')[0];
}

function sanitizeDynamicImport(record: Record<string, any>) {
  let sanitizedRecord: Record<string, any> = {};
  for (const [key, value] of Object.entries(record)) {
    sanitizedRecord[extractNameFromUrl(key)] = value
  }
  return sanitizedRecord;
}

export function getLanguages() {
  const jsonGlob = import.meta.globEager(`/src/assets/lang/*.json`)
  return sanitizeDynamicImport(jsonGlob);
}

export function getBreakpoint(width: number) {
  if (width <= 640) {
    return 'sm'
  } else if (width > 640 && width <= 768) {
    return 'md'
  } else if (width > 768 && width <= 1024) {
    return 'lg'
  } else if (width > 1024 && width <= 1280) {
    return 'xl'
  } else {
    return '2xl'
  }
}

export const VResize: Directive = {
  mounted: (el, binding) => {
    const onResizeCallback = binding.value;
    window.addEventListener('resize', ()=>{
      const width = el.clientWidth;
      onResizeCallback(width);
    })
  }
}
