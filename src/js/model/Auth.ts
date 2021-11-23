export interface AuthenticateUserInput {
    readonly username: string;
    readonly password: string;
}

export interface AuthenticateUserResponse {
    readonly name: string;
    readonly username: string;
    readonly jwtToken: string;
}