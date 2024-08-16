import { useFiltrers } from "../../context/FiltrersProd";
import clases from './ProductFilters.module.css'

const ProductFilters = () => {
  const { setSortBy, setSearchQuery } = useFiltrers();

  return (
    <div className={clases.container}>
      <input
        className={clases.input}
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select className={clases.select__option} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select order</option>
        <option className={clases.option} value="price_asc">Price: Low to High</option>
        <option className={clases.option} value="price_desc">Price: High to Low</option>
      </select>
      {/* <input type="range"/> */}
    </div>
  );
};

export default ProductFilters;
