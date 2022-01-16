export const parseJwt = (token: string): Record<string, string | number>=> {
    try {
      return JSON.parse(window.atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  export const localStorage = {
    get: (key: string) => {
      if(typeof window !== "undefined") {
        return window.localStorage.getItem(key);
      }

      return null;
    },

    set: (key: string, value: string) => {
      if(typeof window !== "undefined") {
        return window.localStorage.setItem(key, value);
      }
    },

    remove: (key: string) => {
      if(typeof window !== "undefined") {
        return window.localStorage.removeItem(key)
      }
    }
  }