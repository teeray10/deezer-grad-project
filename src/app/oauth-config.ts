export const oAuthConfig = {
    responseType: 'token',
    appId: 498142,
    redirectUri: 'http://localhost:4200',
    permissions: 'basic_access, offline_access'
};

export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const API_BASE_URL = PROXY + 'https://api.deezer.com';