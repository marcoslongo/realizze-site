import Image from "next/image";
import ImgDraBruna from "../../../../../../public/assets/image/bruna.jpg"

interface EquipeProps{
    imagem: string;
    nameDr: string;
    especialidade: string;
    cro: string;
    
}

export function Card(props:EquipeProps) {
    return (
        <figure className="text-black relative overflow-hidden">
            <Image
                src={props.imagem}
                width={290}
                height={384}
                alt=""
            />
            <figcaption className="w-full text-center bg-gradient-to-t from-black absolute bottom-0 flex flex-col gap-2 pb-8 pt-12">
                <h2 className="text-white font-semibold text-2xl">{props.nameDr}</h2>
                <h3 className="text-white text-base">{props.especialidade} - {props.cro}</h3>
            </figcaption>
        </figure>
    );
}