import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import ErrorModal from '../../components/ErrorModal';

export default function UrunListele() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/product');
        setProducts(response.data);
      } catch (err) {
        setError('Ürünleri yüklerken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClose = () => {
    setError(null)
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorModal onClose={handleClose} children="ürünler listelenirken bir hata meydana geldi" />;
  }

  return (
    <div className="h-full bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'rgb(69, 53, 193)' }}>
        Ürün Listele
      </h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'rgb(71, 140, 207)' }}>
              {product.productName}
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1">
                <p className="text-gray-700">Kategori: {product.category}</p>
                <p className="text-gray-700">Alış Fiyatı: {product.purchasePrice}₺</p>
                <p className="text-gray-700">Satış Fiyatı: {product.salePrice}₺</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">Vergi Oranı: {product.taxRate}%</p>
                <p className="text-gray-700">Açıklama: {product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
