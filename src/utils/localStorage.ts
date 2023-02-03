export const saveToStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }
};

export const getFromStorage = (key: string): any => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};
