const axios = require("axios");
const getWeather = require("../backend/services/weatherService");
jest.mock("axios");

describe('Serviço de Clima', () => {
  test("retorna temperatura corretamente", async () => {
    axios.get.mockResolvedValue({
      data: {
        current_weather: {
          temperature: 28
        }
      }
    });
    const result = await getWeather(-12, -38);
    expect(result.temperature).toBe(28);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("latitude=-12&longitude=-38")
    );
  });

  test("lança erro quando API falha", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));
    
    await expect(getWeather(-12, -38)).rejects.toThrow("Network error");
    expect(axios.get).toHaveBeenCalled();
  });

  test("trata resposta inválida da API", async () => {
    axios.get.mockResolvedValue({
      data: {} // sem current_weather
    });
    
    await expect(getWeather(-12, -38)).rejects.toThrow();
  });
});
