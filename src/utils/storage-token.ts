const ACCESS_TOKEN = 'access_token';

export class StorageToken {
    static defineTokens(accessToken: string) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken)
    }
    static accessToken () {
        return sessionStorage.getItem(ACCESS_TOKEN)
    }
}