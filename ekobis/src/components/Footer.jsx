


export default function Footer() {
  return(
    <>
     <footer className="bg-customBlue text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Ön Muhasebe Programı. Tüm hakları saklıdır.</p>
          <p className="text-sm mb-2">
            <a href="#home" className="hover:underline">Ana Sayfa</a> | 
            <a href="#features" className="hover:underline"> Özellikler</a> | 
            <a href="#about" className="hover:underline"> Hakkımızda</a> | 
            <a href="#contact" className="hover:underline"> İletişim</a>
          </p>
          <p className="text-sm">Geliştirici: [Ekobis]</p>
        </div>
      </footer>
    </>
  )
}