import { Container } from "@/components/Container";
import { DisplayDepoimentos } from "./DisplayDepoimentos";


export function Depoimentos() {
    return (
        <section id="depoimentos" className="bg-white pt-36">
            <Container>
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-[#717074] text-5xl font-bold">Depoimentos</h2>
                </div>
                <DisplayDepoimentos/>
            </Container>
        </section>
    );
}