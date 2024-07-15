import { useState } from 'react';
import axios from 'axios';

export default function UrunEkle() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urun = {
      productName,
      price,
      stockQuantity,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8080/product', urun);
      console.log(response.data);
    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Ürün Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            <input
              type="text"
              placeholder="Ürün Adı"
              className="border border-gray-300 p-3 rounded-md"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Adet Fiyatı"
              className="border border-gray-300 p-3 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Adet"
              className="border border-gray-300 p-3 rounded-md"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Açıklama"
              className="border border-gray-300 p-3 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="reset"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => {
                setProductName('');
                setPrice('');
                setStockQuantity('');
                setDescription('');
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
