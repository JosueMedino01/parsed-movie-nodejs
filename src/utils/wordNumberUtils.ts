import { FACTOR_WORDS_MAP } from "../constants/factor-words-map";

export class WordNumberUtils {
    /**
     * Método responsável por escrever um número por extenso
     * @param value Valor numérico
     * @returns Uma string
     */
    static getWord(value: number) {
        if (value >= 1000000000) {
            return (value / 1000000000).toFixed(1).replace('.0', '') + ' bilhões';
        } 
        
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1).replace('.0', '') + ' milhões';
        } 
        
        if (value >= 1000) {
            return (value / 1000).toFixed(1).replace('.0', '') + ' mil';
        } 
        
        return value.toString();
    }

    /**
     * Converte o valor escrito ($2.5 milhões) em número (25000000)'
     * @param value Valor escrito 
     * @returns Retorna um valor numérico
     */
    static getNumber(value: string) {
        const splited = value.split(" ");
        const splitedNumber = Number(splited[0].replace('$', ''));
        const splitedStrFactor = splited[1];

        console.log(
            'getNumber',
            splited,
            splitedNumber,
            splitedStrFactor
        )
        
        return splitedNumber * FACTOR_WORDS_MAP[splitedStrFactor];
    }
}