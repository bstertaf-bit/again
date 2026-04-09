import bcrypt from "bcryptjs";
import { PrismaClient, PostCategory, HousingType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password123", 10);
  const user = await prisma.user.upsert({
    where: { email: "amina@ensam.africa" },
    update: {},
    create: {
      name: "Amina N'Diaye",
      email: "amina@ensam.africa",
      password,
      country: "Senegal",
      school: "ENSAM Paris",
      year: 3,
      bio: "Mechanical engineering student passionate about student success and housing support."
    }
  });

  await prisma.post.createMany({
    data: [
      {
        title: "How I found my first internship in France",
        content: "Leverage alumni groups and profile your projects with clear outcomes.",
        category: PostCategory.EXPERIENCE,
        authorId: user.id
      },
      {
        title: "Any advice for adapting to winter?",
        content: "First winter in Lille, looking for practical tips and affordable gear.",
        category: PostCategory.QUESTION,
        authorId: user.id
      }
    ]
  });

  await prisma.housing.create({
    data: {
      title: "Studio near ENSAM Paris",
      description: "Furnished studio, 18m², close to transport and campus.",
      location: "Paris 13e",
      price: 640,
      type: HousingType.OFFER,
      userId: user.id
    }
  });

  await prisma.group.upsert({
    where: { name: "West Africa Students" },
    update: {},
    create: {
      name: "West Africa Students",
      description: "Community for support, networking and practical campus help."
    }
  });

  await prisma.announcement.create({
    data: {
      title: "Welcome to ENSAM African Network",
      content: "Complete your profile and introduce yourself in the feed today."
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
