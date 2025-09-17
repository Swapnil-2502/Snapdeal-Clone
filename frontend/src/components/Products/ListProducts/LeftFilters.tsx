import { useState } from "react";
import type { ProductFilter } from "../../../types/types"

interface LeftFiltersProps {
  filters: ProductFilter
  setFilters:  React.Dispatch<React.SetStateAction<ProductFilter>>;
}


export const LeftFilters: React.FC<LeftFiltersProps> = ({filters, setFilters}) => {
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });

    const applyPriceFilter = () => {
        setFilters({
            ...filters,
            minPrice: Number(priceRange.min) || filters.minPrice,
            maxPrice: Number(priceRange.max) || filters.maxPrice,
        });
    };

  return (
    <>
        <div className="col-xs-5 reset-padding ">
			<div className="comp-left-wrapper " style={{top: "45px", position: "static"}}>
				<div className="left-wrapper">
                    <div className="comp-left-filter">
                        
                        <div className="filter-section " data-filtername="Price" data-displayname="Price" data-isvisible="true">
                                <div className="filter-name-section filter-type clearfix">
                                    <div className="filter-type-name lfloat">
                                        
                                        Price
                                    </div>
								
							    </div>
                                <div className="clear"></div>
                                <div className="filter-content">
                                    <div className="filter-inner" data-name="Price" data-filter-type="slider">
                                    
                                           
                                            <div className="price-input">
                                                <div className="price-text-box">
                                                    <input type="text" name="fromVal" value={priceRange.min || filters.minPrice} onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })} className="input-filter"/>
                                                    <span className="rsText">Rs.</span>
                                                </div>
                                            </div>
                                            <span className="dash"> - </span>
                                            <div className="price-input">
                                                <div className="price-text-box">
                                                    <input type="text" name="toVal" className="input-filter" value={priceRange.max || filters.maxPrice} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}/>
                                                    <span className="rsText">Rs.</span>
                                                </div>
                                            </div>
                                            <div className="price-go-arrow btn btn-line btn-theme-secondary" onClick={applyPriceFilter}>
                                                GO
                                            </div>
                                    </div>
                                </div>
                        </div>

                        <div className="filter-section " data-filtername="Color_s" data-displayname="Color" data-isvisible="true">

                            <div className="filter-name-section filter-type clearfix">
                                <div className="filter-type-name lfloat">
                                    <span className="filter-dot hidden"></span>
                                    Color<span className="filter-count hidden">(0)</span>
                                    
                                    <span className="filter-clear hidden" data-displaytype="checkBox">
                                        Clear
                                    </span>
                                </div>
                            </div>
                            
                            <div className="filter-content ">
                                <div className="filter-inner filter-inner-height">
                                    <div className=" filters-list ">
                                        <input id="Color_s-Black" type="checkbox" checked={filters.color === 'Black'} onChange={(e) => e.target.checked ? setFilters({...filters,color: "Black"}) :   setFilters({...filters,color: ""})} className="filter-value visible-filter" value="Black"/>
                                        <label htmlFor="Color_s-Black">
                                            <span className="filter-color-tile Black " style={{background: "Black", marginLeft:'20px'}}></span> 
                                            <span className="filter-name hashAdded"> Black</span>
                                        </label>
                                    </div>

                                    <div className=" filters-list ">
                                        <input id="Color_s-Blue" type="checkbox" checked={filters.color === 'Blue'} onChange={(e) => e.target.checked ? setFilters({...filters,color: "Blue"}) :   setFilters({...filters,color: ""})} className="filter-value visible-filter" value="Blue"/>
                                        <label htmlFor="Color_s-Blue">
                                            <span className="filter-color-tile Blue "style={{background: "Blue",marginLeft:'20px'}}></span> 
                                            <a className="filter-name hashAdded"> Blue</a>
                                        </label>
                                    </div>
                                    <div className=" filters-list ">
                                        <input id="Color_s-Brown" type="checkbox" checked={filters.color === 'Brown'} onChange={(e) => e.target.checked ? setFilters({...filters,color: "Brown"}) :   setFilters({...filters,color: ""})} className="filter-value visible-filter" value="Brown"/>
                                        <label htmlFor="Color_s-Brown">
                                            <span className="filter-color-tile Brown "style={{background: "Brown",marginLeft:'20px'}}></span> 
                                            <a className="filter-name hashAdded"> Brown</a>
                                        </label>
                                    </div>
                                    <div className=" filters-list ">
                                        <input id="Color_s-Green" type="checkbox" checked={filters.color === 'Green'} onChange={(e) => e.target.checked ? setFilters({...filters,color: "Green"}) :   setFilters({...filters,color: ""})} className="filter-value visible-filter" value="Green"/>
                                        <label htmlFor="Color_s-Green">
                                            <span className="filter-color-tile Green "style={{background: "Green",marginLeft:'20px'}}></span> 
                                            <a className="filter-name hashAdded"> Green</a>
                                        </label>
                                    </div>
                                    <div className=" filters-list ">
                                        <input id="Color_s-Orange" type="checkbox" checked={filters.color === 'Orange'} onChange={(e) => e.target.checked ? setFilters({...filters,color: "Orange"}) :   setFilters({...filters,color: ""})} className="filter-value visible-filter" value="Orange"/>
                                        <label htmlFor="Color_s-Orange">
                                            <span className="filter-color-tile Orange "style={{background: "Orange", marginLeft:'20px'}}></span> 
                                            <a className="filter-name hashAdded"> Orange</a>
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    
    </>
  )
}
