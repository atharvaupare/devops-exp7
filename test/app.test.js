// tests/app.test.js
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("should return correct message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe(
      "DevOps Exp 7: CI/CD with GitHub Actions & Docker is working!"
    );
  });
});
