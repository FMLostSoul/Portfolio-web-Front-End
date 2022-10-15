import { Url } from "./url";

export class UserProfile {
    id!: number;
    careerInfo: string = "";
    userName: string = "";
    email: string = "";
    urls: Url[] = [];
}