import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategorySection from "../Product/CategorySection";
import LoadingOverlay from "../ActionComponents/LoadingOverlay";

const SearchPage = ({ products = [] }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || ""; // Tránh searchQuery bị null
  const [filteredProducts, setFilteredProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
  setIsLoading(true); // Bắt đầu loading khi searchQuery thay đổi

  if (searchQuery.trim() && products.length > 0) {
    const searchLower = searchQuery.toLowerCase();
    console.log(products);

    const results = products.filter(
      (product) =>
        product.product_name?.toLowerCase().includes(searchLower) || 
        product.description?.toLowerCase().includes(searchLower)
    );

    console.log(results);
    setFilteredProducts(results);
  } else {
    setFilteredProducts([]);
  }

  setIsLoading(false); // Tắt loading khi xử lý xong
}, [searchQuery, products]);


  return (
    // <div>
    //   <h2>Kết quả tìm kiếm cho "{searchQuery}"</h2>
    //   {filteredProducts.length > 0 ? (
    //     <ul>
    //       {filteredProducts.map((product) => (
    //         <li key={product._id}>{product.name}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Không tìm thấy sản phẩm nào.</p>
    //   )}
    // </div>
    <div className="customer-content-container">
            <div className='container'>
                <div className="filter-product-container">
                    <h2>Kết quả tìm kiếm cho "{searchQuery}"</h2>
                </div>

                <div className="products-container">
                    {isLoading ? (
                        <LoadingOverlay isLoading={isLoading} />
                    ) : (
                        <CategorySection
                            products={filteredProducts}
                            layout="vertical"
                        />
                    )}
                </div>
            </div>
        </div>
  );
};

export default SearchPage;
