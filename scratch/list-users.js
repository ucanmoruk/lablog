
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });
    console.log('Users in database:');
    console.log(JSON.stringify(users, null, 2));
  } catch (e) {
    console.error('Error fetching users:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
