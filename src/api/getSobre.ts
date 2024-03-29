import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getSobre() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        sobre {
                            apresentacaoDaSessao
                            doutoresResposaveis {
                                cro
                                nome
                                fotoDoutor {
                                    node {
                                        mediaItemUrl
                                    }
                                }
                            }
                            textoDaSessao
                            tituloDaSessao
                            capaDoVideo
                            videoInstitucional
                        }
                    }
                }
            `
        });

        if (!data || !data.page || !data.page.sobre || !data.page.sobre.doutoresResposaveis) {
            throw new Error("Dados sobre os doutores não encontrados");
        }

        const { sobre } = data.page;
        return sobre;
    } catch (error) {
        console.error("Erro ao obter dados sobre os doutores:", error);
        return [];
    }
}