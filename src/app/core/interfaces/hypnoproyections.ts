import { Pagination } from "./pagination";
import { ResponseApi } from "./response-api";


export interface HyproyectionsResponse extends ResponseApi {
  data: HyproyectionsData;
}

export interface HyproyectionIdResponse extends ResponseApi {
  data: Hyproyections[];
}

export interface HyproyectionsData{
  posts: Hyproyections[];
  paginate: Pagination;
}

export interface Hyproyections{
  id : number,
  name : string,
  message : string,
  status : boolean,
  userId : number,
  userName : string,
  createdAt : string,
  tags : string[]
}


