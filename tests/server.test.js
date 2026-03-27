const request = require('supertest');
const app = require('../backend/server');
jest.mock('../backend/services/weatherService');
const mockedWeatherService = require('../backend/services/weatherService');

describe('Testes Unitários do Servidor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /irrigation com parâmetros válidos retorna dados corretos", async () => {
    mockedWeatherService.mockResolvedValue({ temperature: 28 });
    
    const res = await request(app).get('/irrigation?lat=-12&lon=-38');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.temperature).toBe(28);
    expect(res.body.advice).toBe('Irrigação moderada');
  });

  test("GET /irrigation com erro no serviço retorna erro interno", async () => {
    mockedWeatherService.mockRejectedValue(new Error('Erro'));
    
    const res = await request(app).get('/irrigation?lat=-12&lon=-38');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.erro).toBe('falha interna');
  });

  test("GET / serve frontend estático", async () => {
    const res = await request(app).get('/');
    
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});
