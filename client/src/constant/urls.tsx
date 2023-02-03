import { GITHUB_CONFIG } from "./config";

export const API_GITHUB = `https://github.com/login/oauth/authorize?
client_id=${GITHUB_CONFIG.clientID}&redirect_uri=${GITHUB_CONFIG.redirectUri}`