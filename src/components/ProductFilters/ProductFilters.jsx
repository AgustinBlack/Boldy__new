import { useState, useEffect } from "react";
import { useFiltrers } from "../../context/FiltrersProd";
import clases from './ProductFilters.module.css';
import filterPng from '../../assets/icons/filter_list_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';

const ProductFilters = () => {
  const { setSortBy, setSearchQuery, setSelectBrand, setPriceRange, priceRange } = useFiltrers();
  const [showFilters, setShowFilters] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);
  const [rangeValue, setRangeValue] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setShowFilters(true);
    } else {
      setShowFilters(false);
    }
  }, [isLargeScreen]);

  const handleToggleFilters = () => {
    if (!isLargeScreen) {
      setShowFilters(!showFilters);
    }
  };

  const handleOnRange = (e) => {
    const value = parseInt(e.target.value);
    setRangeValue(value);
    setPriceRange({ ...priceRange, max: value });
  }

  return (
    <div className={clases.container}>
      {!isLargeScreen && (
        <img
          className={clases.filterPng}
          src={filterPng}
          alt="Filtrar productos"
          onClick={handleToggleFilters}
          style={{ cursor: 'pointer' }}
        />
      )}

      {showFilters && (
        <div className={clases.filtersContainer}>
          <input className={clases.input} type="text" placeholder="Buscar productos" onChange={(e) => setSearchQuery(e.target.value)}/>
          <select className={clases.select__option} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Selecciona orden</option>
            <option className={clases.option} value="price_asc">Menor a Mayor precio</option>
            <option className={clases.option} value="price_desc">Mayor a Menor precio</option>
          </select>
          <select className={clases.select__option} onChange={(e) => setSelectBrand(e.target.value)}>
            <option value="">Todas las Marcas</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
          </select>
          <div>
            <b>$50</b><input type="range" min={50} max={500} onChange={handleOnRange}/><b>${rangeValue}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
