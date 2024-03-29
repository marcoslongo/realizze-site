import Image from "next/image";
interface ServicosProps {
    title: string;
    text: string;
    icon: string;
}

export function Card(props: ServicosProps) {
    return (
        <div className="bg-white rounded-2xl py-12 px-8 relative mb-6">
            <div className="w-16 h-16 rounded-full z-10 flex items-center justify-center absolute top-[-36px] bg-[#A79A86]">
                <Image
                    alt=""
                    src={props.icon}
                    width={36}
                    height={36}
                />
                
            </div>
            <h2 className="text-[#717074] font-bold text-2xl">{props.title}</h2>
            <p className="text-[#A79A86]">{props.text}</p>
        </div>
    )
}