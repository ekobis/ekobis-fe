import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex flex-col w-screen h-screen mx-auto items-center justify-start mt-10">
      <h1 className="px-4 py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan rounded hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple transition-all duration-900 text-customPurple">ÜRÜNLER</h1>
      <div className="flex flex-row gap-20 mt-10 mb-2">
        <Link to="urunekle" className="px-4 py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan  hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple rounded text-customPurple transition-all duration-1000">
          ÜRÜN EKLE
        </Link>
        
        <Link to="urunlistele" className="px-4 py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan text-customPurple hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple rounded">
          ÜRÜN LİSTELE
        </Link>
      </div>
      <Outlet /> {/* Ürün Ekle ve Listele bileşenleri burada render edilecek */}
    </div>
  );
}
