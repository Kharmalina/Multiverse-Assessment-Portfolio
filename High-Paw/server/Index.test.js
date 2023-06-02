const request = require("supertest");
const { app } = require("./App");
require("./config/db.config");
const User = require("./Models/User.model");
const mongoose = require("mongoose");

describe("Endpoints", () => {
  let globalAccessToken;
  let globalRefreshToken;
  let globalHangout;
  let secondGlobalHangout;
  let testUserRegister = {
    email: "test@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
    name: "Bub",
    breed: "French Bulldog",
    age: "3",
    picture: "frenchbulldog.jpg",
    city: "Houston",
    address: "1234 Street, USA",
    latLong: [1232, 12],
  };

  let newHangout = {
    title: "Meet up at Hillside Dog Park",
    description:
      "Cinnamon is looking forward to hanging out with all his pals.",
    userId: "",
    latLong: [123, 456],
    joining: [],
  };

  let secondNewHangout = {
    title: "Meet up at Test Dog Park",
    description:
      "Hercules is looking forward to hanging out with all his new pals.",
    userId: "",
    latLong: [789, 112],
    joining: [],
  };

  let editedHangout = {
    title: "Meet up at Bayou Dog Park",
    description: "Hercules can't wait to hang out with all his new pals.",
    latLong: [3345, 4456],
    userId: "",
    joining: [],
  };

  let testUserLogin = {
    email: "test@gmail.com",
    password: "12345678",
  };

  describe("POST /auth/register", () => {
    it("should register user", async () => {
      const response = await request(app)
        .post("/auth/register")
        .send(testUserRegister)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.user.email).toBe(testUserRegister.email);
      expect(text.user.name).toBe(testUserRegister.name);
      expect(text.user.password).toBe(text.user.confirmPassword);
    });
  });

  describe("POST /auth/login", () => {
    it("should login user", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send(testUserLogin)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);
      globalAccessToken = text.accessToken;
      globalRefreshToken = text.refreshToken;

      secondNewHangout.userId = text.refreshToken.userId;
      secondNewHangout.joining.push(text.refreshToken.userId);

      newHangout.userId = text.refreshToken.userId;
      newHangout.joining.push(text.refreshToken.userId);

      expect(response.status).toBe(200);
      expect(text.user.email).toBe(testUserLogin.email);
      expect(text.user.name).toBe(testUserRegister.name);
    });
  });

  describe("POST /hangout/create", () => {
    it("creates a new hangout", async () => {
      const response = await request(app)
        .post("/hangout/create")
        .send(newHangout)
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);
      globalHangout = text.savedHangout;

      expect(response.status).toBe(200);
      expect(text.savedHangout.title).toBe(newHangout.title);
      expect(text.savedHangout.userId).toBe(globalRefreshToken.userId);
      expect(text.savedHangout.latLong).toStrictEqual(newHangout.latLong);
    });
  });

  describe("POST /hangout/create", () => {
    it("creates a new hangout", async () => {
      const response = await request(app)
        .post("/hangout/create")
        .send(secondNewHangout)
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);
      secondGlobalHangout = text.savedHangout;
      editedHangout.userId = text.savedHangout.userId;
      editedHangout.joining = text.savedHangout.joining;

      expect(response.status).toBe(200);
      expect(text.savedHangout.title).toBe(secondNewHangout.title);
      expect(text.savedHangout.userId).toBe(globalRefreshToken.userId);
      expect(text.savedHangout.latLong).toStrictEqual(secondNewHangout.latLong);
    });
  });

  describe("GET /hangout/all", () => {
    it("obtains all hangouts", async () => {
      const response = await request(app)
        .get("/hangout/all")
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.hangouts.length).toBe(2);
    });
  });

  describe("GET /hangout/:id", () => {
    it("obtains a created hangout", async () => {
      const response = await request(app)
        .get(`/hangout/${globalHangout._id}`)

        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.hangout.description).toBe(newHangout.description);
      expect(text.hangout.joining[0]).toBe(globalHangout.userId);
    });
  });

  describe("PUT /hangout/:id", () => {
    it("edits a created hangout", async () => {
      const response = await request(app)
        .put(`/hangout/${secondGlobalHangout._id}`)
        .send(editedHangout)
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.description).toBe(editedHangout.description);
      expect(text.latLong).toStrictEqual(editedHangout.latLong);
      expect(text.title).toBe(editedHangout.title);
    });
  });

  describe("Delete /hangout/:id", () => {
    it("deletes a created hangout", async () => {
      const response = await request(app)
        .delete(`/hangout/${globalHangout._id}`)
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.message).toBe("Hangout was deleted");
    });
  });

  describe("Delete /hangout/:id", () => {
    it("deletes second created hangout", async () => {
      const response = await request(app)
        .delete(`/hangout/${secondGlobalHangout._id}`)
        .set("Authorization", `Bearer ${globalAccessToken}`)
        .set("Accept", "application/json");

      const text = await JSON.parse(response.text);

      expect(response.status).toBe(200);
      expect(text.message).toBe("Hangout was deleted");
    });
  });

  describe("POST /auth/logout", () => {
    it("should logout user", async () => {
      const response = await request(app)
        .delete("/auth/logout")
        .send({ refreshToken: globalRefreshToken.token })
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
    });
  });

  afterAll(async () => {
    const user = await User.findOneAndDelete(testUserRegister.email);
    await mongoose.connection.close();
  });
});
