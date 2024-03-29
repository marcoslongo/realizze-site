import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getDepoimentos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        depoimentos {
                            depoimento {
                                cliente
                                depoimento
                                fotoCliente {
                                    node {
                                        uri
                                    }
                                }
                            }
                        }
                    }
                }
            `
        });

        if (!data || !data.page || !data.page.depoimentos || !data.page.depoimentos.depoimento) {
            throw new Error("Dados dos depoimentos não encontrados");
        }

        const { depoimento } = data.page.depoimentos;
        return depoimento;
    } catch (error) {
        console.error("Erro ao obter dados dos depoimentos:", error);
        return [];
    }
}
