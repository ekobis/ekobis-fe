import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex flex-col w-screen h-screen mx-auto items-center justify-start mt-5 ml-4">
      <h1 className="px-4 py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan rounded hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple transition-all duration-900 text-customPurple">
        ÜRÜNLER
      </h1>
      <div className="flex flex-row gap-6 sm:gap-20 mt-10 mb-2 flex-wrap justify-center sm:justify-start">
        <Link
          to="urunekle"
          className="px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple rounded text-customPurple transition-all duration-1000"
        >
          ÜRÜN EKLE
        </Link>
        <Link
          to="urunlistele"
          className="px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-customPurple via-customGreen to-customCyan text-customPurple hover:bg-gradient-to-r hover:from-customCyan hover:via-customGreen hover:to-customPurple rounded"
        >
          ÜRÜN LİSTELE
        </Link>
      </div>
      <div className="mt-36 ml-2 sm:ml-8">
        <Outlet /> {/* Ürün Ekle ve Listele bileşenleri burada render edilecek */}
      </div>
    </div>
  );
}
