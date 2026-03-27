const request = require("supertest");
const app = require("../backend/server");

jest.mock("../backend/services/weatherService");
const mockedWeatherService = require("../backend/services/weatherService");

describe('Testes de Integração', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("retorna dados corretos de irrigação", async () => {
    mockedWeatherService.mockResolvedValueOnce({ temperature: 35 });

    const res = await request(app)
      .get("/irrigation?lat=-23.55&lon=-46.63");
    
    expect(res.statusCode).toBe(200);
    expect(res.body.temperature).toBe(35);
    expect(res.body.advice).toBe("Irrigação URGENTE");
    expect(mockedWeatherService).toHaveBeenCalledWith('-23.55', '-46.63');
  });

  test("trata erro quando serviço de clima falha", async () => {
    mockedWeatherService.mockRejectedValueOnce(new Error("Falha na API"));

    const res = await request(app)
      .get("/irrigation?lat=-23.55&lon=-46.63");
    
    expect(res.statusCode).toBe(200);
    expect(res.body.erro).toBe("falha interna");
    expect(mockedWeatherService).toHaveBeenCalledWith('-23.55', '-46.63');
  });

  test("sem parâmetros chama API com valores undefined", async () => {
    const res = await request(app).get("/irrigation");
    
    expect(res.statusCode).toBe(200);
    expect(mockedWeatherService).toHaveBeenCalledWith(undefined, undefined);
  });
});
