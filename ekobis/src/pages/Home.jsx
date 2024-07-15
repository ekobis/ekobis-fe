

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col">
      

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* Overview Section */}
        <section id="overview" className="p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Genel Bakış</h2>
          <p className="text-white leading-relaxed">
            Ön muhasebe programımız, işletmenizin finansal işlemlerini kolayca yönetmenizi sağlar. Fatura kesme, stok takibi, cari hesap yönetimi gibi temel muhasebe işlemlerini hızlı ve güvenilir bir şekilde yapabilirsiniz.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-white">Kolay Fatura Kesimi</h3>
              <p className="text-white">Hızlı ve kolay bir şekilde fatura oluşturun ve müşterilerinize gönderin.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-white">Stok Takibi</h3>
              <p className="text-white">Stoklarınızı anlık olarak takip edin ve düşük stok seviyelerinde uyarılar alın.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-white">Cari Hesap Yönetimi</h3>
              <p className="text-white">Cari hesaplarınızı kolayca yönetin ve ödeme takibini yapın.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-white">Raporlama</h3>
              <p className="text-white">Detaylı raporlar ile finansal durumunuzu analiz edin.</p>
            </div>
          </div>
        </section>

        {/* Aside Section */}
        <aside className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md mt-6">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Neden Biz?</h2>
          <ul className="list-disc list-inside text-white">
            <li>Kullanıcı dostu arayüz</li>
            <li>Güvenilir ve hızlı işlem yapabilme</li>
            <li>7/24 destek hizmeti</li>
          </ul>
        </aside>
      </main>

      {/* Footer */}
      <footer className=" dark:bg-gray-900 text-white p-4 mt-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Ön Muhasebe Programı</h3>
            <p className="text-gray-400">&copy; 2024 Tüm hakları saklıdır.</p>
          </div>
          <div className="space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-green-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-green-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-green-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

