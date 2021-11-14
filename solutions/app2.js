'use strict';

const setCookie = (name, value) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires}`;
}

export default setCookie;
