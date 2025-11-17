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

      <section>
        <h1 className="text-4xl font-bold text-center">APRESENTAÇÃO</h1>


        <p className="text-justify text-lg">O projeto"Banda Ecleziasthe" expressa a música relogiosa, sendo que tal modalidade musical é uma das mais difundidas em nosso país em meio aos eventos culturais e religiosos. Desta forma, este projeto trata-se exclusivamente da expressão musical cristã.</p>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">OBJETIVO</h1>


        <p className="text-justify text-lg">Este projeto tem como objetivo promover a palavra de Deus através da Música falando diretamente com jovens e pessoas de todas as idades evangelizando em todos os veículos de comunicação. Internet, rádio e televisão, dentro e fora do estado onde a banda for se apresentar trabalhando agora para conseguir parceiros para ajudar no crescimento do trabalho. A banda quer trazer diversidade cultural em nosso município por meio do estilo musical Hard Rock Cristão, como também, representar os valores éticos cristãos relacionados à arte da Música Cristã, e proporcionzar lazer, o entretenimento e movimento social.</p>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">RELEASE</h1>


        <p className="text-justify text-lg">ECLEZIASTHE iniciou no ano de 2003, gravou seu 1º CD em 2007, conseguindo realizar o seu sonho, sendo 4 das 8 músicas escritas pelo guitarrista na época, Mauro Borges, e as outras 4 composições do atual vocalista e baixista, fundador da banda, Ney Sarraf.</p>

        <p>O CD continha 10 faixas inétidas no estilo soul e pop rock, sendo a 1º faixa introdutória e a 10ª uma faixa instrumental. Com o CD intitulado "Não serei mais o mesmo" a banda se manteve firme e participou fo Festival Alma Ampaense, realizado pela TV Tucuju em 2007. Com a visibilidade, a banda Ecleziasthe, entre os anos de 2009 e 2010, gravou o seu 2º CD intitulado "Até o fim", lançado no teatro das bacabeiras, a banda continuou participano dos eventos culturais fazendo aberturas de shows para bandas e cantores nacionais com Novo Som, Mariana Valadão, Damares, Roger Franco, Aline Barros, entre outros.</p>

        <p>Em 2015, a banda gravou seu 3º CD, Enquanto viver, fazendo um lançamento no Teatro das Bacabeiras consolidando a banda entre as melhores do estado do Amapá. Recentemente, a banda lançou singles oficiais e novos clipes, continuando a sua carreira com mais de 20 anos.</p>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">REPERTÓRIO</h1>


        <ol>
          <li>Intro</li>
          <li>Jesus está voltando</li>
          <li>Tanto tempo</li>
          <li>Pai</li>
          <li>De Volta</li>
          <li>Perto do fim</li>
          <li>Tua vontade (lançamento)</li>
          <li>Motivo pra viver (lançamento)</li>
          <li>Não vai me deixar (lançamento)</li>
        </ol>

        <p className="text-sm">A duração do show tem em média 1 hora e 15 minutos, podendo ser estendida ou reduzida conforme a solicitação do contratante</p>
      </section>

      <section className="mt-15">
        <h1 className="text-4xl font-bold text-center">INTEGRANTES</h1>
      </section>
      
      <section className="mt-15">
        <Biography orientation="img-left" image="/bassist.png" title="NEY SARRAF" text={loremIpsum({ count: 150, units: 'words' })} />
        <Biography orientation="img-right" image="/guitarist.png" title="GABRIEL FELIPE" text={loremIpsum({ count: 150, units: 'words' })} />
        <Biography orientation="img-left" image="/drummer.png" title="THIAGO ACEBOLUDO" text={loremIpsum({ count: 150, units: 'words' })} />
  
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">DISCOGRAFIA</h1>


        <ol>
          <li>Intro</li>
          <li>Jesus está voltando</li>
          <li>Tanto tempo</li>
          <li>Pai</li>
          <li>De Volta</li>
          <li>Perto do fim</li>
          <li>Tua vontade (lançamento)</li>
          <li>Motivo pra viver (lançamento)</li>
          <li>Não vai me deixar (lançamento)</li>
        </ol>

        <p className="text-sm">A duração do show tem em média 1 hora e 15 minutos, podendo ser estendida ou reduzida conforme a solicitação do contratante</p>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">VIDEOCLIPS</h1>


        <ol>
          <li>Intro</li>
          <li>Jesus está voltando</li>
          <li>Tanto tempo</li>
          <li>Pai</li>
          <li>De Volta</li>
          <li>Perto do fim</li>
          <li>Tua vontade (lançamento)</li>
          <li>Motivo pra viver (lançamento)</li>
          <li>Não vai me deixar (lançamento)</li>
        </ol>

        <p className="text-sm">A duração do show tem em média 1 hora e 15 minutos, podendo ser estendida ou reduzida conforme a solicitação do contratante</p>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">PARICIPAÇÕES</h1>


        <ol>
          <li>Intro</li>
          <li>Jesus está voltando</li>
          <li>Tanto tempo</li>
          <li>Pai</li>
          <li>De Volta</li>
          <li>Perto do fim</li>
          <li>Tua vontade (lançamento)</li>
          <li>Motivo pra viver (lançamento)</li>
          <li>Não vai me deixar (lançamento)</li>
        </ol>

        <p className="text-sm">A duração do show tem em média 1 hora e 15 minutos, podendo ser estendida ou reduzida conforme a solicitação do contratante</p>
      </section>

      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}
