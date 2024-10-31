export interface IVerifyModel {
    message: string;
    result: Result;
}
interface Result {
    access_token: string;
    refresh_token: string;
}