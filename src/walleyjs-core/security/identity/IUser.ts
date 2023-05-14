import {Guid} from "../../primitives/Guid";

export interface IUser
{
    id: string | Guid;
    username: string;
}