import Navbar from "./pages/Navbar";
import './App.css'
import SideRoutes from "./components/route/SideRoutes";
import { useThemeClasses } from "./components/context/CustomTheme";

// bg-gradient-to-r from-customPurple via-customGreen to-customCyan==>  örnek arka plan rengi


export default function App() {
  const { background, text, border, shadow } = useThemeClasses();

  // Define dynamic class based on theme


  return (
    <div className={`flex flex-row ${background} ${text} ${border} ${shadow}`}>
      <Navbar />
      <div className="w-screen">
        <SideRoutes />
      </div>
    </div>
  );
}