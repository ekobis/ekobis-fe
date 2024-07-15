import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };

    try {
      await axios.post('http://localhost:8080/register', user);
      navigate('/');
    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Kayıt Ol</h2>
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
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
