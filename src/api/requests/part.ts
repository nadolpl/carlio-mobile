import api from "api/config/api";
import {Pageable} from "models/Pageable";
import {PARTS} from "api/config/endpoints";
import {PartResponse, PartSearchParams} from "models/response/PartResponse";

export const requestSearchParts = (params?: PartSearchParams) =>
  api.get<Pageable<PartResponse>>(PARTS, {params});