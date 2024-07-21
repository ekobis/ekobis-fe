import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import ErrorModal from '../../components/ErrorModal';

export default function UrunListele() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      console.log(response.data)
      setProducts(response.data);
    } catch (err) {
      setError('Ürünleri yüklerken bir hata oluştu.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/product/${productId}`);
      console.log(response.data)
      await fetchProducts(); // Re-fetch products after deletion
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Ürün silinirken bir hata oluştu.');
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClose = () => {
    setError(null);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorModal onClose={handleClose} children="Ürünler listelenirken bir hata meydana geldi" />;
  }

  return (
    <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-r from-customPurple via-customGreen to-customCyan mt-10 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-customPurple">
        Ürün Listele
      </h1>
      <div className="grid grid-cols-7 gap-4 bg-customGreen text-customPurple underline font-bold text-xl rounded-lg shadow-md border mb-4 border-gray-300 p-2">
        <p className="col-span-1">Kategori</p>
        <p className="col-span-1">Ürün Adı</p>
        <p className="col-span-1">Alış Fiyatı</p>
        <p className="col-span-1">Satış Fiyatı</p>
        <p className="col-span-1">Vergi Oranı</p>
        <p className="col-span-1">Açıklama</p>
        <p className="col-span-1">Düzenle/Sil</p>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.productId} className="grid grid-cols-7 gap-4 bg-white rounded-lg shadow-md border border-gray-300 p-2">
            <p className="col-span-1 text-gray-700">{product.category}</p>
            <p className="col-span-1 text-gray-700">{product.productName}</p>
            <p className="col-span-1 text-gray-700">{product.purchasePrice}₺</p>
            <p className="col-span-1 text-gray-700">{product.salePrice}₺</p>
            <p className="col-span-1 text-gray-700">{product.taxRate}%</p>
            <p className="col-span-1 text-gray-700">{product.description}</p>
            <div className="col-span-1 flex gap-2">
              <button className="bg-orange-300 px-2 py-1 rounded">Düzenle</button>
              <button onClick={() => handleRemove(product.productId)} className="bg-red-400 px-2 py-1 rounded">Sil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
