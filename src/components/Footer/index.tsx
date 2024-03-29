import { Container } from "../Container";
import LogoFooter from "../../../public/assets/image/realizze.png";
import Image from "next/image";
import { IoTime } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="grid grid-cols-3 gap-8 pb-8 pt-16">
                    <figure className="flex flex-col gap-5">
                        <Image
                            width={180}
                            height={47}
                            alt=""
                            src={LogoFooter}
                        />
                        <figcaption>
                            <h3 className="text-[#A2A2A2]">Transformando vidas através da odontologia.</h3>
                        </figcaption>
                    </figure>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 items-center">
                            <FaMapMarkerAlt className="text-[#A79A86]" size={36} />
                            <h3 className="text-[#A2A2A2]">Rua Belém, 3090 – Centro, Realeza – PR, 85770-000</h3>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <FaPhoneAlt className="text-[#A79A86]" size={36} />
                            <h3 className="text-[#A2A2A2]">(46) 2602-0313  |  (46) 99940-9574</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl">Horário de atendimento</h2>
                        <ul>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Segunda-feira 08:00–19:00</li>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Terça-feira 08:00–19:00</li>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Quarta-feira 08:00–19:00</li>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Quinta-feira 08:00–19:00</li>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Sexta-feira 08:00–19:00</li>
                            <li className="text-[#A2A2A2] flex items-center gap-2"><IoTime className="text-[#A79A86]" size={15} />Sábado 08:00–12:00</li>
                        </ul>
                    </div>
                </div>
                <div className="h-[1px] bg-[#A79A86] w-full mt-8"/>
                <div className="flex justify-between py-5 w-full">
                    <h3 className="text-[#A2A2A2]">Desenvolvido por Criup Agência Digital</h3>
                    <h3 className="text-[#A2A2A2]">Copyright © 2024. Todos os direitos reservados.</h3>                 
                </div>
            </Container>
        </footer>
    );
}