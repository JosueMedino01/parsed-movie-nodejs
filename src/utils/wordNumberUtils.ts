import { FACTOR_WORDS_MAP } from "../constants/factor-words-map";

export class WordNumberUtils {
    static getWord(value: number) {

    }

    /**
     * Converte o valor escrito ($2.5 milhões) em número (25000000)'
     * @param value Valor escrito 
     * @returns Retorna um valor numérico
     */
    static getNumber(value: string) {
        const splited = value.split(" ");
        const splitedNumber = Number(splited[0].replace('$', ''));
        const splitedStrFactor = splited[0];

        return splitedNumber * FACTOR_WORDS_MAP[value];
    }
}