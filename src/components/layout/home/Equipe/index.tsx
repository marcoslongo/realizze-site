import { Container } from "@/components/Container";
import { DisplayEquipe } from "./DisplayEquipe";

export function Equipe() {
    return (
        <section id="equipe" className="bg-white pt-36">
            <Container>
                <div className="flex flex-col text-center w-full">
                    <h3 className="text-[#A79A86] font-semibold">NOSSA EQUIPE</h3>
                    <h2 className="text-[#717074] text-5xl font-bold">Conheça nosso corpo clínico</h2>
                </div>
                <DisplayEquipe/>
            </Container>
        </section>
    );
}