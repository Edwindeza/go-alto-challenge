
const secretName = 'go-alto-'

const getLocalStorageItem = (name) => {
  return JSON.parse(localStorage.getItem(secretName+name))
}

const setLocalStorageItem = (name, value) => {
  return localStorage.setItem(secretName+name, JSON.stringify(value))
}


export { getLocalStorageItem, setLocalStorageItem };