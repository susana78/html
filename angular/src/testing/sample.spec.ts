import {factorial} from './sample'

fdescribe('Factorial Testing', () => {
    it('factorial de 5! es 120', () => {
        expect(factorial(5) === 120).toBeTruthy()
    })
    it('1 no es 2', () => {
        expect(1===2).toBeFalsy()
    })
});

