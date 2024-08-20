import { useState } from "react";
import { useFiltrers } from "../../context/FiltrersProd";
import clases from './ProductFilters.module.css'
import filterPng from '../../assets/icons/filter_list_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

const ProductFilters = () => {
  const { setSortBy, setSearchQuery, setSelectBrand } = useFiltrers();
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={clases.container}>
      <img
        className={clases.filterPng}
        src={filterPng}
        alt="Filtrar productos"
        onClick={handleToggleFilters}
        style={{ cursor: 'pointer' }}
      />

      {showFilters && (
        <div className={clases.filtersContainer}>
          <input
            className={clases.input}
            type="text"
            placeholder="Search products"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className={clases.select__option}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Select order</option>
            <option className={clases.option} value="price_asc">Price: Low to High</option>
            <option className={clases.option} value="price_desc">Price: High to Low</option>
          </select>
          <select
            className={clases.select__option}
            onChange={(e) => setSelectBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
