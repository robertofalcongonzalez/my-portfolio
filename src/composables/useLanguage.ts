import {computed, ComputedRef, Ref, ref} from "vue";
import {reactiveAsyncImport, retrieveLang} from "../utils";
import {useTranslator} from "./useTranslator";


interface Languages {
  /**
   * Supports nested properties Ex: $t('a.b')
   * Language keys from lang file must not have "."
   */
  translate: (path: string) => string

  setLanguage(lang: string): void;

  lang: ComputedRef<string>

}


const navigatorLang = navigator.language.split("-")[0];

export function useLanguages(): Languages {
  const currentLang = ref(navigatorLang)
  let messages = reactiveAsyncImport(currentLang.value) as Ref<Record<string, any>>
  const loadedLanguages = [{lang: navigatorLang, messages}]

  const changeLanguage = (lang: string, msg: Ref<Record<string, any>>) => {
    localStorage.setItem('lang', lang);
    currentLang.value = lang;
    messages = msg;
    document.querySelector("html")?.setAttribute('lang', lang);
    return lang;
  };

  const setLanguage = (lang: string) => {
    const retrievedLang = retrieveLang(lang, loadedLanguages);
    if (!retrievedLang) {
      throw 'Language not supported.';
    }
    if (currentLang.value !== lang && retrievedLang) {
      changeLanguage(lang, ref(retrievedLang!.messages));
      return ref(retrievedLang!.messages);
    } else {
      loadedLanguages.push({
        lang, messages: messages
      });
      changeLanguage(lang, ref(retrievedLang!.messages));
    }
  }
  const {translate} = useTranslator(messages);

  return {
    translate,
    setLanguage,
    lang: computed(() => currentLang.value)
  }
}
