import Navbar from "./pages/Navbar";
import './App.css'
import SideRoutes from "./components/route/SideRoutes";


export default function App() {
  return (
    <>
    <div className="flex flex-row bg-gradient-to-r from-customPurple via-customGreen to-customCyan">
    <Navbar />
    <div className="w-screen">
    <SideRoutes />
    </div>
    </div>
    </>
  )
} 