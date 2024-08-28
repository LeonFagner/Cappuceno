"use client"

import { createContext, ReactNode, useState } from "react";
import { FilterTyper } from "../types/Filter-types";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTyper.ALL,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: 
        FilterTyper) => {},
})

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider({children} : ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterTyper.ALL)

    return(
        <FilterContext.Provider value={{search, page, type, setSearch, setPage, setType}}>
            {children}

        </FilterContext.Provider>
    )
}