import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getServicos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        servicosoferecidos {
                            servicos {
                                descricaoDoServico
                                nomeDoServico
                                iconeDoServico {
                                    cursor
                                    node {
                                        mediaItemUrl
                                    }
                                }
                            }
                        }
                    }
                }
            `
        });

        if (!data || !data.page || !data.page.servicosoferecidos){
            throw new Error("Dados dos serviços não encontrados");
        }

        const { servicos } = data.page.servicosoferecidos;
        return servicos;
    } catch (error) {
        console.error("Erro ao obter dados dos serviços:", error);
        return [];
    }
}

