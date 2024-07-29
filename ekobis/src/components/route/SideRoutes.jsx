import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Clients from "../../pages/Clients";
import UrunListele from "../../pages/Products/UrunListele";
import UrunEkle from "../../pages/Products/Urunekle";
import NotFound from "../NotFound";

export default function SideRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="musteri" element={<Clients />} />
        <Route path="urunekle" element={<UrunEkle />} />
        <Route path="urunlistele" element={<UrunListele />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
