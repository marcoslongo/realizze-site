import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getBanner() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery {
                    page(id: "cG9zdDoxMA==") {
                        bannerHome {
                            texto
                            titulo
                            imagemBannerDoutores {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            `
        });

        if (!data || !data.page || !data.page.bannerHome) {
            throw new Error("Dados do banner não encontrados");
        }

        const { texto, titulo, imagemBannerDoutores } = data.page.bannerHome;
        return { texto, titulo, imagemBannerDoutores };

    } catch (error) {
        console.error("Erro ao obter dados do banner:", error);
        return { texto: "erro", titulo: "erro", imagemBannerDoutores: [] }; 
    }
}