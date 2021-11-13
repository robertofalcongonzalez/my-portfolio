import {computed, ComputedRef, ref} from "vue";
import constants from "../constants";

interface Languages {
  $t: (key: string) => string

  setLanguage(lang: string): void;

  lang: ComputedRef<string>
}

type keys = Exclude<keyof typeof constants, 'fullName'>;
type lang = Record<keys, Record<string, string>>;
let state = {
  languages: ['en', 'es'],
  current: ref('es')
}

export function useLanguages(): Languages {
  const setLanguage = (lang: string) => state.current.value = lang;
  let languages: lang = {} as lang
  (Object.keys(constants) as keys[]).forEach((key) => {
    state.languages.forEach((lang) => {
      if (key === lang) {
        languages[key] = constants[key]
      }
    })
  })

  const $t = (key: string) => languages[state.current.value as keys][key];
  return {
    $t,
    setLanguage,
    lang: computed(() => state.current.value)
  }
}
