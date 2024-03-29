import Image from "next/image";
import Ilva from "../../../../../../public/assets/image/ilva.jpg"

interface DepoimentosProps {
    text: string,
    image: string,
    name: string,
}

export function Card(props:DepoimentosProps) {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-[#A79A86] text-lg">{props.text}</p>
            <div className="flex items-center gap-2">
                <Image
                    className="rounded-full"
                    width={70}
                    height={70}
                    alt=""
                    src={Ilva}
                />
                <h2 className="text-[#717074] font-bold text-xl">{props.name}</h2>
            </div>
        </div>
    );
}