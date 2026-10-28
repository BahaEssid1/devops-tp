const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const record = await prisma.contactMessage.findUnique({
    where: { id: 5 },
  });

  console.log("PostgreSQL record found:", Boolean(record));
  console.log("ID:", record?.id);
  console.log("Email:", record?.email);
  console.log("Subject:", record?.subject);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
