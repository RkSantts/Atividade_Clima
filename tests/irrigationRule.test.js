const getAdvice = require("../backend/utils/irrigationRule");

describe('Irrigation Rules', () => {
  test("Temperatura 35 → Irrigação URGENTE", () => {
    expect(getAdvice(35)).toBe("Irrigação URGENTE");
  });

  test("Temperatura 25 → Irrigação moderada", () => {
    expect(getAdvice(25)).toBe("Irrigação moderada");
  });

  test("Temperatura 10 → Não irrigar", () => {
    expect(getAdvice(10)).toBe("Não irrigar");
  });
});
