import React from 'react';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-10 p-6">
        {/* Hero Section */}
        <section id="home" className="bg-white p-10 rounded-lg shadow-lg mb-10">
          <h2 className="text-4xl font-bold text-customBlue mb-4">
            Ön Muhasebe Programı ile İşlerinizi Kolaylaştırın
          </h2>
          <p className="text-lg mb-4">
            Ön muhasebe programımız ile işlerinizi hızlı ve kolay bir şekilde yönetin. Kullanıcı dostu arayüzümüz ve güçlü özelliklerimizle işinizi bir üst seviyeye taşıyın.
          </p>
          <a href="#features" className="inline-block bg-customGreen text-white py-2 px-4 rounded-full shadow-md hover:bg-customCyan transition">
            Daha Fazla Bilgi
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-10">
          <h2 className="text-3xl font-bold text-customBlue mb-4">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-customPurple mb-2">Kolay Kullanım</h3>
              <p>Kullanıcı dostu arayüzümüz ile tüm muhasebe işlemlerinizi kolayca gerçekleştirin.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-customPurple mb-2">Raporlama</h3>
              <p>Gelişmiş raporlama özellikleri ile işinizin her anını takip edin.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-customPurple mb-2">Entegrasyon</h3>
              <p>Diğer iş uygulamaları ile kolayca entegre olun.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white p-10 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-bold text-customBlue mb-4">Hakkımızda</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam velit eligendi itaque placeat ea consequatur quae sit atque recusandae, optio veritatis unde debitis iste excepturi ex expedita, quis facere non, neque dignissimos sed fuga! Libero recusandae modi ad nesciunt facere nihil sapiente, atque cumque voluptatem cum vitae fugit cupiditate reiciendis! Repellat nisi voluptatem provident. Autem consequatur placeat sit cupiditate fugit reprehenderit suscipit eum debitis nostrum. Laborum corporis non in, inventore incidunt quod harum aliquam. Esse excepturi iure optio praesentium dicta officia! Et quia minus asperiores, atque, assumenda sapiente obcaecati corporis officiis ad quam molestias eum quidem doloremque veniam, nemo eveniet?
          </p>
          <p className="text-lg mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At itaque eveniet harum illum a culpa porro optio quae pariatur commodi autem assumenda dolor veritatis aperiam tenetur ad iste alias nisi aliquid illo, quibusdam dolorem odio tempore necessitatibus? Neque, rem molestias! Necessitatibus eligendi est voluptate quaerat vel. A temporibus, reiciendis eum totam et enim optio tempora modi nihil libero quod eius vero! Earum, dolorum non. Quisquam, dolores? Asperiores, tenetur modi incidunt nemo nostrum corporis tempore harum!
          </p>
          <p className="text-lg mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium harum veritatis exercitationem ab incidunt sed aperiam, possimus asperiores commodi, autem numquam quibusdam cupiditate quisquam esse ipsa tenetur nihil. Illo accusamus et quam error! Iusto quasi quaerat ratione fugiat repudiandae cumque veniam quis consequatur nostrum magni quae asperiores odit eos nisi repellendus magnam quam, tenetur cupiditate. Voluptatibus vitae commodi non maxime optio aperiam alias autem repudiandae quasi praesentium. Enim nulla laboriosam libero ab dolorum dolores omnis explicabo dolore exercitationem dignissimos, nihil illo hic labore voluptates blanditiis sunt nam eum fugit, architecto debitis quisquam molestias aperiam at repellendus! Ducimus, est voluptatibus.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto minus praesentium amet quo aliquam dignissimos nam sed? Magni, aspernatur? Nulla perferendis quod nostrum, necessitatibus, cumque laborum dolore quia aliquam aspernatur ipsum animi recusandae voluptates? Qui laboriosam et molestias illum veniam ipsam explicabo! Impedit possimus dolore est necessitatibus id voluptatibus? Soluta numquam, corporis autem totam nesciunt harum quaerat molestias temporibus architecto sint. Obcaecati possimus similique dicta fuga ut rem repudiandae eligendi accusantium ullam ratione corrupti excepturi eaque magni omnis, id, officiis vitae vero modi ad nemo earum maiores. Accusantium tenetur aliquam obcaecati cupiditate optio possimus temporibus, qui rerum tempore deleniti.
          </p>
        </section>

      
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
