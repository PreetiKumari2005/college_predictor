import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
 
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });
 
async function main() {
  await prisma.cutoff.deleteMany({});
  await prisma.college.deleteMany({});

  console.log("Seeding database records...");

  const c1 = await prisma.college.create({
    data: {
      name: "Indian Institute of Technology (IIT) Bombay",
      slug: "iit-bombay",
      location: "Mumbai",
      state: "Maharashtra",
      fees: 220000,
      rating: 4.9,
      placementAvg: 23.5,
      placementMax: 44.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 15000, category: "General", year: 2025 },
        ]
      }
    }
  });
  const c2 = await prisma.college.create({
    data: {
      name: "National Institute of Technology (NIT) Trichy",
      slug: "nit-trichy",
      location: "Tiruchirappalli",
      state: "Tamil Nadu",
      fees: 145000,
      rating: 4.5,
      placementAvg: 12.8,
      placementMax: 52.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 1200, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Mechanical Eng", closingRank: 4500, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c3 = await prisma.college.create({
    data: {
      name: "Vellore Institute of Technology (VIT)",
      slug: "vit-vellore",
      location: "Vellore",
      state: "Tamil Nadu",
      fees: 295000,
      rating: 4.2,
      placementAvg: 9.2,
      placementMax: 44.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 15000, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c4 = await prisma.college.create({
    data: {
      name: "Indian Institute of Technology (IIT) Delhi",
      slug: "iit-delhi",
      location: "New Delhi",
      state: "Delhi",
      fees: 225000,
      rating: 4.9,
      placementAvg: 24.2,
      placementMax: 155.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 115, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Electrical Eng", closingRank: 420, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c5 = await prisma.college.create({
    data: {
      name: "National Institute of Technology (NIT) Surathkal",
      slug: "nit-surathkal",
      location: "Mangaluru",
      state: "Karnataka",
      fees: 150000,
      rating: 4.6,
      placementAvg: 13.5,
      placementMax: 54.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 1400, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Information Tech", closingRank: 2300, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c6 = await prisma.college.create({
    data: {
      name: "Birla Institute of Technology and Science (BITS) Pilani",
      slug: "bits-pilani",
      location: "Pilani",
      state: "Rajasthan",
      fees: 475000,
      rating: 4.7,
      placementAvg: 15.6,
      placementMax: 60.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 320, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c7 = await prisma.college.create({
    data: {
      name: "Delhi Technological University (DTU)",
      slug: "dtu-delhi",
      location: "New Delhi",
      state: "Delhi",
      fees: 219000,
      rating: 4.4,
      placementAvg: 12.2,
      placementMax: 48.5,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 4800, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Software Eng", closingRank: 6200, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c8 = await prisma.college.create({
    data: {
      name: "Indian Institute of Technology (IIT) Madras",
      slug: "iit-madras",
      location: "Chennai",
      state: "Tamil Nadu",
      fees: 215000,
      rating: 5.0,
      placementAvg: 24.8,
      placementMax: 168.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 85, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Data Science", closingRank: 210, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c9 = await prisma.college.create({
    data: {
      name: "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
      slug: "mnnit-allahabad",
      location: "Prayagraj",
      state: "Uttar Pradesh",
      fees: 140000,
      rating: 4.3,
      placementAvg: 11.4,
      placementMax: 44.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 3400, category: "General", year: 2025 },
          { exam: "JEE_MAIN", branch: "Electronics Eng", closingRank: 7800, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c10 = await prisma.college.create({
    data: {
      name: "Thapar Institute of Engineering and Technology",
      slug: "thapar-patiala",
      location: "Patiala",
      state: "Punjab",
      fees: 410000,
      rating: 4.1,
      placementAvg: 8.9,
      placementMax: 40.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 22000, category: "General", year: 2025 },
        ]
      }
    }
  });

  const c11 = await prisma.college.create({
    data: {
      name: "College of Engineering, Pune (COEP)",
      slug: "coep-pune",
      location: "Pune",
      state: "Maharashtra",
      fees: 135000,
      rating: 4.3,
      placementAvg: 9.5,
      placementMax: 38.0,
      cutoffs: {
        create: [
          { exam: "JEE_MAIN", branch: "Computer Science", closingRank: 4100, category: "General", year: 2025 },
        ]
      }
    }
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
