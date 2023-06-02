require("dotenv").config(".env");
// Token retrieved from /me route after logging user in
const { TOKEN, ADMIN_KEY } = process.env;

const request = require("supertest");

const { app } = require("./index");

const { sequelize, Car } = require("./db");
const seed = require("./db/seedFn");
const { cars } = require("./db/seedData");

describe("Endpoints", () => {
  // data used in test

  beforeAll(async () => {
    // rebuild db before the test suite runs
    await seed();
  });

  describe("GET /cars", () => {
    it("should return a list of cars", async () => {
      const response = await request(app)
        .get("/cars")
        .set({ Authorization: `Bearer ${TOKEN}` });

      expect(response.status).toBe(200);
      expect(response.body.length).toEqual(cars.length);
      expect(response.body[0].color).toEqual(cars[0].color);
      expect(response.body[0].model).toEqual(cars[0].model);
      expect(response.body[0].image).toEqual(cars[0].image);
    });
  });

  describe("POST /cars", () => {
    it("should return a list of cars", async () => {
      const response = await request(app)
        .post("/")
        .set({ Authorization: `Bearer ${TOKEN}`, Admin: ADMIN_KEY });

      expect(response.status).toBe(200);
      expect(response.text).toEqual("post route");
    });
  });
});
