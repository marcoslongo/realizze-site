import { Container } from "@/components/Container";
import ImgFachada from "../../../../../public/assets/image/fachada.jpg"
import Image from "next/image";
import { FaRegHospital } from "react-icons/fa";
import { getEstrutura } from "@/api/getEstrutura";
import { EstruturaData } from "@/@types/EstruturaData";

export async function Estrutura() {
    const estrutura:EstruturaData = await getEstrutura();

    return (
        <section id="estrutura" className="w-full bg-white pt-36">
            <Container>
                <div className="flex flex-wrap justify-between items-center">
                    <article className="w-2/5 flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-2">
                            <h3 className="text-[#A79A86] font-semibold">NOSSA ESTRUTURA</h3>
                            <h2 className="text-[#717074] font-bold text-5xl">{estrutura.tituloEstrutura}</h2>
                        </div>
                        <p className="text-[#A79A86] text-lg">{estrutura.textoEstrutura}</p>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#A79A86] rounded-full p-4 w-[82px]">
                                <FaRegHospital size={50} />
                            </div>
                            <div className="flex">
                                <h2 className="text-[#717074] font-bold text-lg">{estrutura.estrutura}</h2>
                            </div>
                        </div>
                    </article>
                    <figure className="2/4">
                        <Image
                            width={500}
                            height={580}
                            alt=""
                            src={ImgFachada}
                        />
                    </figure>
                </div>
            </Container>
        </section>
    );
}