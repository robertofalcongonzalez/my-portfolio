import {computed, ComputedRef, ref} from "vue";
import {getLanguages} from "./utils";



const langCollection = getLanguages();

interface Languages {
  /**
   * Supports nested properties Ex: $t('a.b')
   * Language keys from lang file must not have "."
   */
  $t: (key: string) => string

  setLanguage(lang: string): void;

  lang: ComputedRef<string>
}
// TODO: Improve Typing
type lang = Record<keys, Record<string, string>>;
type keys = keyof typeof langCollection;

let state = {
  languages: ['en', 'es'],
  current: ref('es')
}

export function useLanguages(): Languages {
  const setLanguage = (lang: string) => {
    const html: HTMLHtmlElement = document.getElementsByName('HTML')[0] as HTMLHtmlElement;
    html.setAttribute('lang', lang);
    state.current.value = lang
  };
  let languages: lang = {} as lang
  (Object.keys(langCollection) as keys[]).forEach((key) => {
    state.languages.forEach((lang) => {
      if (key === lang) {
        languages[key] = langCollection[key]
      }
    })
  })

  const $t = (key: string) => {
    if (key && !key.includes('.')) {
      return languages[state.current.value as keys][key]
    }
    const keys = key.split('.');
    let result: any = languages[state.current.value as keys]
    for(let i: number = 0; i< keys.length; i++){
      result = result[keys[i]]
    }
    return result
  };
  return {
    $t,
    setLanguage,
    lang: computed(() => state.current.value)
  }
}
