'use strict';
const setCookie = (name, value) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires}`;
}

const cookieHandler = {
    getAll(name, value) {
        const keyValuePairs = document.cookie
        .split('; ')
        .flatMap(element => element.split('='))
        
        const keyValuesObj = {
            [keyValuePairs.shift()]: keyValuePairs.shift(),
            [keyValuePairs.shift()]: keyValuePairs.shift(),
            [keyValuePairs.shift()]: keyValuePairs.shift(),
        } 
        return keyValuesObj;
    },

    toSessionStorage(key, value) {
        const cookieObject = cookieHandler.getAll();
        Object.entries(cookieObject).forEach(([key, value]) => {
            sessionStorage.setItem(key, value);
        });
         
    },
    flush(name) { 
        let cookieToFlush = document.cookie.split('; ');
        cookieToFlush.forEach(item => {
            document.cookie = item + "=; expires=" + new Date(0).toUTCString();
        });
            
    }
}

export { cookieHandler };
export default setCookie;