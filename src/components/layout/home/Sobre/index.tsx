import React from 'react';
import { Container } from "@/components/Container";
import { getSobre } from '@/api/getSobre';
import { SobreData } from '@/@types/SobreData';
import Image from 'next/image';
import { VideoInstitucional } from './VideoInstitucional';

export async function Sobre() {
    const sobre: SobreData = await getSobre();

    return (
        <section id="sobre" className="w-full bg-white py-36">
            <Container>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="w-[30%]">
                        <VideoInstitucional 
                            capa={sobre.capaDoVideo} 
                            video={sobre.videoInstitucional} 
                        />
                    </div>
                    <article className="w-[65%] flex flex-col gap-8">
                        <h3 className="text-[#A79A86] text-lg font-semibold">
                            {sobre.apresentacaoDaSessao}
                        </h3>
                        <h2 className="text-[#717074] text-5xl font-bold">
                            {sobre.tituloDaSessao}
                        </h2>
                        <p className="text-lg text-[#A79A86]">
                            {sobre.textoDaSessao}
                        </p>
                        <div className="flex w-full gap-6">
                            {sobre.doutoresResposaveis.map((doutor, index) => (
                                <figure key={index} className="flex gap-3 items-center">
                                    <Image
                                        src={doutor.fotoDoutor.node.mediaItemUrl}
                                        width={100}
                                        height={100}
                                        alt=''
                                        className='rounded-full'
                                    />
                                    <figcaption className="flex flex-col">
                                        <h2 className="text-[#717074] font-bold text-xl">{doutor.nome}</h2>
                                        <p className="text-lg text-[#A79A86] text-left">{doutor.cro}</p>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    )
}
