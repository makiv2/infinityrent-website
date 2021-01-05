export interface JwtToken { 
    iss: string;
    type: string;
    token: string;
    iat: string | Date;
    exp: string | Date;
    sub: string | number;
    username: string;
    email: string;
    roles: [];
}