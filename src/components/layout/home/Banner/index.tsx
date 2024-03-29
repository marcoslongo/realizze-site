import Image from "next/image";
import { getBanner } from "@/api/getBanner";
import { BannerData } from "@/@types/BannerData";

export async function Banner() {
    const banner:BannerData = await getBanner();

    return (
        <section className="container max-w-[1000px] mx-auto pt-36">
            <div className="flex items-center justify-between">
                <article className="w-full md:w-2/4 flex flex-col gap-5">
                    <h2 className="text-5xl font-bold">{banner.titulo}</h2>
                    <p className="text-lg">{banner.texto}</p>
                </article>
                <figure className="w-full md:w-2/4">
                    <Image
                        width={520}
                        height={730}
                        src={banner.imagemBannerDoutores.node.mediaItemUrl}
                        alt=""
                    />
                </figure>
            </div>
        </section>
    );
}
