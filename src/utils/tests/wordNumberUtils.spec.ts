import { IAward } from "../../models/movie";
import { WordNumberUtils } from "../wordNumberUtils"

describe('', () => {
    const utils = WordNumberUtils;

    it('Should convert a formatted text to a number value', () => {
        const strNumberValue = "$21.1 milhões"; 

        const observer = jest.spyOn(utils, 'getNumber');

        const numberValue  = utils.getNumber(strNumberValue);


        expect(observer).toHaveBeenCalledTimes(1);
        expect(numberValue).toEqual(21100000);
    });

    it('Should convert a number value to formatted text', () => {
        const numberValue = 21100000; 

        const observer = jest.spyOn(utils, 'getWord');
        const strNumberValue = utils.getWord(numberValue);

        expect(observer).toHaveBeenCalledTimes(1);
        expect(strNumberValue).toEqual("$21.1 milhões");
    });
})