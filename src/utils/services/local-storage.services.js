export function useValueInLocalStorage (key, initialValue) {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
}

export function setValueInLocalStorage (key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (e) {
        console.error(e)
      }
}
