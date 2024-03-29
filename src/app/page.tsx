import { Contato } from "@/components/layout/home/Contato";
import { Depoimentos } from "@/components/layout/home/Depoimentos";
import { Equipe } from "@/components/layout/home/Equipe";
import { Estrutura } from "@/components/layout/home/Estrutura";
import { Servicos } from "@/components/layout/home/Servicos";
import { Sobre } from "@/components/layout/home/Sobre";
import { Banner } from "@/components/layout/home/Banner";

export default function App() {
  return (
    <main>
      <Banner />
      <Sobre />
      <Servicos />
      <Estrutura />
      <Equipe />
      <Depoimentos />
      <Contato />
    </main>
  );
}
