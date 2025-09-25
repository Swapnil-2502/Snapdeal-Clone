import { createContext, useContext, useEffect, useState } from "react";
import type { ProductFilter } from "../types/types"

type ProductFilterType = {
    filters: ProductFilter
    setFilters: React.Dispatch<React.SetStateAction<ProductFilter>>;
    searchKeyword: string
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const ProductFilterContext = createContext<ProductFilterType | undefined>(undefined)

export const ProductFilterProvider = ({children}: {children: React.ReactNode}) => {

    const [filters, setFilters] = useState<ProductFilter>(() => {
        const saved = localStorage.getItem("Productfilters")
        return saved ?
            JSON.parse(saved) : 
            {
                type: "",
                color: "",
                minPrice: 100,
                maxPrice: 10000,
                sortby: "priceLowHigh",
                minStars: ""
            }
    })

    const [searchKeyword, setSearchKeyword] = useState(() => {
        const saved = localStorage.getItem("SearchKeyword")
        return saved ? 
            JSON.parse(saved) : ""
    })

    useEffect(() => {
        localStorage.setItem("Productfilters",JSON.stringify(filters))
        localStorage.setItem("SearchKeyword",JSON.stringify(searchKeyword))
    },[filters,searchKeyword])

    return (
        <ProductFilterContext.Provider value={{filters,setFilters,searchKeyword,setSearchKeyword}}>
            {children}
        </ProductFilterContext.Provider>
    )
}

export const useProductFilters = () => {
    const context = useContext(ProductFilterContext);
    if (!context) {
        throw new Error("useProductFilters must be used within ProductFilterProvider");
    }
    return context;
}