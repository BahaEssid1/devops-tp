const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const record = await prisma.contactMessage.findFirst({
    where: { email: "security-test@example.com" },
    orderBy: { id: "desc" },
  });

  console.log("Record found:", Boolean(record));
  console.log("Stored name:", record?.name);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());