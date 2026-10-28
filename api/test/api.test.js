
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { app } = require("../server");

describe("Express API", () => {
  it("returns a healthy status", async () => {
    const response = await request(app).get("/api/health");

    assert.equal(response.status, 200);
    assert.equal(response.body.status, "healthy");
    assert.equal(response.body.service, "devsecops-portfolio-api");
    assert.ok(response.body.timestamp);
  });

  it("returns profile information", async () => {
    const response = await request(app).get("/api/profile");

    assert.equal(response.status, 200);
    assert.equal(response.body.name, "Baha Essid");
  });

  it("rejects invalid contact data", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "A",
        email: "not-an-email",
        subject: "Hi",
        message: "Too short",
      });

    assert.equal(response.status, 400);
    assert.equal(response.body.error.code, "INVALID_CONTACT_DATA");
  });

  it("rejects unexpected contact fields", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send({
        name: "Test User",
        email: "test@example.com",
        subject: "Testing",
        message: "This is a valid test message.",
        isAdmin: true,
      });

    assert.equal(response.status, 400);
    assert.equal(response.body.error.code, "INVALID_CONTACT_DATA");
  });

  it("returns a clear error for malformed JSON", async () => {
    const response = await request(app)
      .post("/api/contact")
      .set("Content-Type", "application/json")
      .send('{"name":');

    assert.equal(response.status, 400);
    assert.equal(response.body.error.code, "INVALID_JSON");
  });

  it("returns 404 for unknown routes", async () => {
    const response = await request(app).get("/api/does-not-exist");

    assert.equal(response.status, 404);
    assert.equal(response.body.error.code, "NOT_FOUND");
  });
});
