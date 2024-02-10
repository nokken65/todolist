import { LOCAL_STORAGE_KEYS } from '../api/localStorage'

type Keys = keyof typeof LOCAL_STORAGE_KEYS

const getEntityStateFromLocalStorage = <K extends string, V>(key: Keys) => {
  const state: Map<K, V> = new Map(
    JSON.parse(localStorage.getItem(key) ?? '[]')
  )

  return {
    entities: Object.fromEntries(state),
    ids: [...state.keys()]
  }
}

export { getEntityStateFromLocalStorage }
