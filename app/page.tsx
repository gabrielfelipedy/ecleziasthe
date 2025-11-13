import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Biography from "@/components/shared/Biography";
import { loremIpsum } from 'lorem-ipsum'
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
      <section>
        <div className="w-full h-[500px] relative">
          <Image
          src={'/banner.jpg'}
          alt='banner'
          fill
          className="object-cover object-center"
          />
        </div>
      </section>

      <section className="mt-15">
        <h1 className="text-4xl font-bold text-center">CONHEÇA O NOSSO TIME</h1>
      </section>
      
      <section className="mt-15">
        <Biography orientation="img-left" image="/bassist.png" title="NEY SARRAF" text={loremIpsum({ count: 250, units: 'words' })} />
        <Biography orientation="img-right" image="/guitarist.png" title="GABRIEL FELIPE" text={loremIpsum({ count: 250, units: 'words' })} />
        <Biography orientation="img-left" image="/drummer.png" title="THIAGO ACEBOLUDO" text={loremIpsum({ count: 250, units: 'words' })} />
  
      </section>
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}
