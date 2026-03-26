const request = require("supertest");
const app = require("../backend/server");
jest.mock("../backend/services/weatherService", () => {
  return jest.fn(() => Promise.resolve({ temperature: 32 }));
});

test("retorna dados corretos", async () => {
  const res = await request(app)
    .get("/irrigation?lat=-12&lon=-38");
  expect(res.statusCode).toBe(200);
  expect(res.body.temperature).toBeDefined();
  expect(res.body.advice).toBeDefined();
});
