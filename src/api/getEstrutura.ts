import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getEstrutura() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        estrutura {
                            tituloEstrutura
                            textoEstrutura
                            estrutura
                            imagemFachada {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            `
        });

        if (!data || !data.page || !data.page.estrutura) {
            throw new Error("Dados sobre a estrutura");
        }

        const { estrutura } = data.page;
        return estrutura;
    } catch (error) {
        console.error("Erro ao obter dados sobre os doutores:", error);
        return [];
    }
}