export interface SobreData {
    textoDaSessao: string;
    apresentacaoDaSessao: string;
    tituloDaSessao: string;
    capaDoVideo: string;
    videoInstitucional: string;
    doutoresResposaveis: {
        cro: string;
        nome: string;
        fotoDoutor: {
            node: {
                mediaItemUrl: string;
            };
        };
    }[];
}
