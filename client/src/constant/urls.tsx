import { BASE_URL, GITHUB_CONFIG } from "./config";

export const API_GITHUB = `https://github.com/login/oauth/authorize?
client_id=${GITHUB_CONFIG.clientID}
&redirect_uri=${GITHUB_CONFIG.redirectUri}`

export const API_OAUTH = BASE_URL + '/oauth'
export const API_USER_STATUS = BASE_URL + '/user/status'
export const API_USER_MODIFY = BASE_URL + '/user/modify'
export const API_USER_VERITY = BASE_URL + '/user/verity'
export const API_NOTE_ADD = BASE_URL + '/note/add'