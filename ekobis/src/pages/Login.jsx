import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basit kullanıcı doğrulama
    if (username === 'alican' && password === '123456') {
      // Kullanıcı doğrulandığında localStorage veya sessionStorage kullanarak bir işaretleyici saklayabiliriz.
      // Örneğin:
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/urunekle'); // Başarılı girişte yönlendirilecek sayfa
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Giriş Yap</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Kullanıcı Adınızı Girin"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifrenizi Girin"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Giriş Yap
          </button>
        </form>
        <div className="mt-4 text-center">
          Hesabınız yok mu? <a href="/register" className="text-blue-500">Buradan kayıt olun</a>
        </div>
      </div>
    </div>
  );
}
