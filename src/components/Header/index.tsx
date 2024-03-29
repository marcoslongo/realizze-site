import Link from "next/link";
import { Container } from "../Container";
import Image from "next/image";
import LogoRealizze  from "../../../public/assets/image/realizze.png"

export function Header() {
    return (
        <header className="w-full py-8 fixed bg-[#141213] z-50">
            <Container>
                <div className="flex justify-between items-center">
                    <Link href="#">
                        <Image
                            width={245}
                            height={44}
                            src={LogoRealizze}
                            alt="Realizze odonto"
                        />
                    </Link>
                    <nav>
                        <ul className="flex gap-8">
                            <li><Link className="hover:text-[#A79A86] transition" href="#sobre">Sobre</Link></li>
                            <li><Link className="hover:text-[#A79A86] transition" href="#servicos">Serviços</Link></li>
                            <li><Link className="hover:text-[#A79A86] transition" href=" #estrutura">Estrutura</Link></li>
                            <li><Link className="hover:text-[#A79A86] transition" href="#equipe">Equipe</Link></li>
                            <li><Link className="hover:text-[#A79A86] transition" href="#depoimentos">Depoimentos</Link></li>
                            <li><Link className="hover:text-[#A79A86] transition" href="#contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}