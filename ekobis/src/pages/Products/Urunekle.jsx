import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal';
import Loading from '../../components/Loading';

export default function UrunEkle() {
  const [productName, setProductName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); // Kategori state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urun = {
      productName,
      purchasePrice,
      salePrice,
      stockQuantity,
      taxRate,
      description,
      category, // Kategoriyi de ekleyin
    };

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/product', urun);
      console.log(response.data);
      setLoading(false);
      resetForm();
    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const resetForm = () => {
    setProductName('');
    setPurchasePrice('');
    setSalePrice('');
    setStockQuantity('');
    setTaxRate('');
    setDescription('');
    setCategory(''); 
  };

  return (
    <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
      {loading && <Loading />}
      {error && <ErrorModal onClose={() => setError(false)} children="ürün eklerken bir hata meydana geldi" />}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: 'rgb(69, 53, 193)' }}>
          Ürün Ekle
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              placeholder="Ürün Adı"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(71, 140, 207)' }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Alış Fiyatı"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(119, 228, 200)' }}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Satış Fiyatı"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(54, 194, 206)' }}
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Adet"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(71, 140, 207)' }}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
            <input
              type="number"
              placeholder="Vergi Oranı (%)"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(119, 228, 200)' }}
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Açıklama"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(54, 194, 206)' }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Kategori"
              className="border border-gray-300 p-3 rounded-md"
              style={{ borderColor: 'rgb(71, 140, 207)' }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              className="py-2 px-4 rounded hover:bg-customBlue bg-customPurple text-white"
              onClick={() => resetForm()}
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded bg-green-700 hover:bg-customGreen text-white"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
