export type loginRequestData = {
    username: string;
    password: string;
}

export type loginResponseData = {
    access_token: string;
    refresh_token: string;
}