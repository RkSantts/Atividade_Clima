const getAdvice = require("../backend/utils/irrigationRule");

describe('Regras de Irrigação', () => {
  test("Temperatura 35 → Irrigação URGENTE", () => {
    expect(getAdvice(35)).toBe("Irrigação URGENTE");
  });

  test("Temperatura 25 → Irrigação moderada", () => {
    expect(getAdvice(25)).toBe("Irrigação moderada");
  });

  test("Temperatura 10 → Não irrigar", () => {
    expect(getAdvice(10)).toBe("Não irrigar");
  });

  
  test("Temperatura exatamente 30.1 → Irrigação URGENTE", () => {
    expect(getAdvice(30.1)).toBe("Irrigação URGENTE");
  });

  test("Temperatura exatamente 30 → Irrigação moderada", () => {
    expect(getAdvice(30)).toBe("Irrigação moderada");
  });

  test("Temperatura exatamente 20 → Irrigação moderada", () => {
    expect(getAdvice(20)).toBe("Irrigação moderada");
  });

  test("Temperatura 19.9 → Não irrigar", () => {
    expect(getAdvice(19.9)).toBe("Não irrigar");
  });

  test("Temperatura negativa → Não irrigar", () => {
    expect(getAdvice(-5)).toBe("Não irrigar");
  });

  test("Temperatura decimal alta → Irrigação URGENTE", () => {
    expect(getAdvice(30.0001)).toBe("Irrigação URGENTE");
  });
});
