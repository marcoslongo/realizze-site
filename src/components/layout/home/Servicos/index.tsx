import { Container } from "@/components/Container";
import { DisplayServicos } from "./DisplayServicos";

export function Servicos() {
    return (
        <section id="servicos" className="w-full py-36">
            <div className="flex flex-col gap-4 text-center mb-16">
                <h2 className="text-lg uppercase font-semibold text-[#A79A86]">Nossos serviços</h2>
                <h3 className="text-5xl font-bold">Conheça nossas áreas de atuação</h3>
            </div>
            <Container>
                <DisplayServicos/>
            </Container>
        </section>
    );
}