import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('should...', inject ([CalculadoraService], (service: CalculadoraService) =>{
    expect(service).toBeTruthy();
  }));


  it('deve garantir que 1 + 3 = 4', inject ([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 3, CalculadoraService.SOMA);
    expect(soma).toEqual(4);
  }));

  it('deve garantir que 10 - 15 = -5', inject ([CalculadoraService], (service: CalculadoraService) => {
    let subtracao = service.calcular(10, 15, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-5);
  }));

  it('deve garantir que 13 * 3 = 39', inject ([CalculadoraService], (service: CalculadoraService) => {
    let multiplicacao = service.calcular(13, 3, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(39);
  }));

  it('deve garantir que 40 / 10 = 4', inject ([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(40, 10, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(4);
  }));

  it('deve retornar 0 para operacao invalida', inject ([CalculadoraService], (service: CalculadoraService) => {
    let operacaoInvalida = service.calcular(10, 15,'%');
    expect(operacaoInvalida).toEqual(0);
  }));


});
