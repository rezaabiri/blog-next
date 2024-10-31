export interface IAuthModel {
    message: string;
    result: Result;
}
interface Result {
    access_token: string;
    refresh_token: string;
}