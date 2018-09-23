export const getItem = key => JSON.parse(window.localStorage.getItem(key));
export const setItem = (key, val) => window.localStorage.setItem(key, JSON.stringify(val));
export const isEmpty = data => data === '' || data == null || data == undefined;
