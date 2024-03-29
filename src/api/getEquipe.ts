import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getEquipe() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        equipe {
                            doutores {
                                funcao
                                nome
                                cro
                                fotoDoutor {
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

        if (!data || !data.page || !data.page.equipe || !data.page.equipe.doutores) {
            throw new Error("Dados da equipe não encontrados");
        }

        const { doutores } = data.page.equipe;

        return doutores;
    } catch (error) {
        console.error("Erro ao obter dados da equipe:", error);
        return [];
    } 
}
