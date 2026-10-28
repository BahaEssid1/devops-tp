
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { app, prisma } = require("../server");

describe("API security tests", () => {
  it("stores SQL-injection-style input as ordinary text", async () => {
    const injectionText = "' OR '1'='1' --";

    let createdId;

    try {
      const response = await request(app)
        .post("/api/contact")
        .send({
          name: injectionText,
          email: "security-test@example.com",
          subject: "Security test",
          message: "Checking that suspicious text is handled safely.",
        });

      assert.equal(response.status, 201);
      assert.equal(response.body.status, "received");
      createdId = response.body.id;

      const savedMessage = await prisma.contactMessage.findUnique({
        where: { id: createdId },
      });

      assert.ok(savedMessage, "The message should be stored");
      assert.equal(savedMessage.name, injectionText);
    } finally {
      if (createdId !== undefined) {
        await prisma.contactMessage.delete({
          where: { id: createdId },
        });
      }
    }
  });
});
