import { useContext } from "react";
import { FilterContext } from "../contexts/Filter-context";

export function usefilter(){
    return useContext(FilterContext)
}