import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex flex-col w-screen mx-auto items-center justify-start">
      <h1 className="px-4 py-2 bg-customGreen text-customPurple rounded">ÜRÜNLER</h1>
      <div className="flex flex-row gap-20 mt-10 mb-2">
        <Link to="urunekle" className="px-4 py-2 bg-customGreen text-customPurple rounded">
          ÜRÜN EKLE
        </Link>
        <Link to="urunlistele" className="px-4 py-2 bg-customGreen text-customPurple rounded">
          ÜRÜN LİSTELE
        </Link>
      </div>
      <Outlet /> {/* Ürün Ekle ve Listele bileşenleri burada render edilecek */}
    </div>
  );
}
