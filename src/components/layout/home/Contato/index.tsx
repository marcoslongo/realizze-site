import { Container } from "@/components/Container";
import { Mapa } from "./Mapa";
import { FormContato } from "./FormContato";

export function Contato() {
    return (
        <section id="contato" className="py-36 bg-white">
            <Container>
                <div className="flex justify-between">
                    <FormContato />
                    <Mapa />
                </div>
            </Container>
        </section>
    );
}