import { getDepoimentos } from "@/api/getDepoimentos";
import { Card } from "../Card";
import { DepoimentosData } from "@/@types/DepoimentosData";

export async function DisplayDepoimentos() {
    const depoimentos: DepoimentosData[] = await getDepoimentos(); 

    return (
        <div className="grid grid-cols-3 py-8">
            {depoimentos.map((depoimento, index) => (
                <Card
                    key={index}
                    text={depoimento.depoimento}
                    image=""
                    name={depoimento.cliente}
                />
            ))}

        </div>
    )
}