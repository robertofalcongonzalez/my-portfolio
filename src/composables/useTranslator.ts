import {range} from "../utils";
import {Ref} from "vue";

export function useTranslator(messages: Ref<Record<string, any>>) {

  const translate = (path: string) => {
    if(messages.value){
      if (path && !path.includes('.')) {
        return messages.value[path];
      }
      const pathKeys = path.split('.');
      let result: Record<string, any> | string = JSON.parse(JSON.stringify(messages.value));
      try {
        for (let x of range(0, pathKeys.length - 1)) {
          result = assign(result as Record<string, any>, pathKeys[x]);
        }
      } catch (e) {
        throw 'Invalid Path' + e
      }
      return result
    }
  };
  return {
    translate,
  }
}

function assign(obj: Record<string, any>, key: string) {
  return obj[key]
}
