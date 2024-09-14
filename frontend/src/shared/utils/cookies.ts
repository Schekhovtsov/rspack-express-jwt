export const getCookie = (name: string) => {
    const matches = document.cookie.replaceAll(' ', '').split(';');

    for (let i = 0; i < matches.length; i++) {
        const [key, value] = matches[i].split('=');
        if (key === name) return value;
    }

    return null;
};
