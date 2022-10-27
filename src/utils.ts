import {Ref, ref} from "vue";

export interface LangObject {
  lang: string;
  messages: Record<string, any>
}

export function* range(start: number, end?: number) {
  if (!end) {
    end = start;
    start = 1;
  }
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export function reactiveAsyncImport(path: string): Ref<null | Record<string, any>> {
  const result = ref(null);
  async function exec(){
    try {
      const awaiter = await import(`./assets/lang/${path}.ts`);
      result.value = awaiter.default;
    } catch (e) {
      throw 'Missing translation file';
    }
  }
  exec();
  return result;
}

export function retrieveLang(lang: string, langList: LangObject[]) {
  return langList.find((item) => item.lang === lang);
}

export const getBreakpoint = (width: number) => {
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
};

