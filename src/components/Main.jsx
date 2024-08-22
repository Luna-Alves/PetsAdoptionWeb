import animais from "../datassets/Animais";
import carouselItems from "../datassets/Carousel";
import servicos from "../datassets/Servico";
import AdocaoTable from "./AdocaoTable";
import Carrossel from "./Carrossel";
import ServicosCard from "./ServicosCard";

const Main = () => {
  return (
    <main>
      <Carrossel carouselItems={carouselItems} />
      <ServicosCard servicos={servicos}></ServicosCard>
      <AdocaoTable animais={animais}></AdocaoTable>
    </main>
  );
};

export default Main;
