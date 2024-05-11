import { Security } from "../models/security";
import { FilterCols } from "../models/securitiesFilter";
import securities from "./securities.json";
import filtersData from "./filtersData.json";

export const SECURITIES: Security[] = securities as Security[];
export const FILTERSDATA: FilterCols[] = filtersData as FilterCols[];
