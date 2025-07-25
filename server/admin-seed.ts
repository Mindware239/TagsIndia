import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);
import { 
  categories, 
  brands, 
  blogCategories, 
  blogPosts, 
  industries, 
  caseStudies,
  products,
  users
} from "../shared/schema";

async function seedAdminData() {
  try {
    console.log("🌱 Starting admin data seeding...");

    // Seed categories for mega menu
    const categoryData = [
      // Main categories
      { name: "Tag Solutions", slug: "tag-solutions", sortOrder: 1 },
      { name: "Card Lab", slug: "card-lab", sortOrder: 2 },
      { name: "Wrist & Wear", slug: "wrist-wear", sortOrder: 3 },
      { name: "Print Services", slug: "print-services", sortOrder: 4 },
      
      // Tag Solutions subcategories
      { name: "Healthcare Tags", slug: "healthcare-tags", parentId: 1, sortOrder: 1 },
      { name: "Retail Tags", slug: "retail-tags", parentId: 1, sortOrder: 2 },
      { name: "Event Tags", slug: "event-tags", parentId: 1, sortOrder: 3 },
      { name: "Logistics Tags", slug: "logistics-tags", parentId: 1, sortOrder: 4 },
      { name: "Education Tags", slug: "education-tags", parentId: 1, sortOrder: 5 },
      
      // Smart Tags
      { name: "RFID Tags", slug: "rfid-tags", parentId: 1, sortOrder: 6 },
      { name: "QR Code Tags", slug: "qr-code-tags", parentId: 1, sortOrder: 7 },
      { name: "NFC Tags", slug: "nfc-tags", parentId: 1, sortOrder: 8 },
      { name: "Barcode Tags", slug: "barcode-tags", parentId: 1, sortOrder: 9 },
      
      // Card Lab subcategories  
      { name: "PVC Cards", slug: "pvc-cards", parentId: 2, sortOrder: 1 },
      { name: "Smart ID Cards", slug: "smart-id-cards", parentId: 2, sortOrder: 2 },
      { name: "Access Cards", slug: "access-cards", parentId: 2, sortOrder: 3 },
      { name: "Security Cards", slug: "security-cards", parentId: 2, sortOrder: 4 },
      
      // Wrist & Wear subcategories
      { name: "Hospital Wristbands", slug: "hospital-wristbands", parentId: 3, sortOrder: 1 },
      { name: "Event Bands", slug: "event-bands", parentId: 3, sortOrder: 2 },
      { name: "Child ID Bands", slug: "child-id-bands", parentId: 3, sortOrder: 3 },
      { name: "Custom Wearables", slug: "custom-wearables", parentId: 3, sortOrder: 4 }
    ];

    const insertedCategories = await db.insert(categories).values(categoryData).returning();
    console.log(`✅ Inserted ${insertedCategories.length} categories`);

    // Seed brands
    const brandData = [
      { name: "Mindware", slug: "mindware", description: "Premium identification solutions" },
      { name: "TechTag", slug: "techtag", description: "Advanced RFID technology" },
      { name: "MedID", slug: "medid", description: "Medical grade identification" },
      { name: "SecureCard", slug: "securecard", description: "Security access solutions" },
      { name: "SmartLabel", slug: "smartlabel", description: "Intelligent labeling systems" }
    ];

    const insertedBrands = await db.insert(brands).values(brandData).returning();
    console.log(`✅ Inserted ${insertedBrands.length} brands`);

    // Seed blog categories
    const blogCategoryData = [
      { name: "Trends in Tagging", slug: "trends-in-tagging", description: "Latest trends and innovations" },
      { name: "RFID Technology", slug: "rfid-technology", description: "RFID insights and future" },
      { name: "How-To Guides", slug: "how-to-guides", description: "Step-by-step guides" },
      { name: "Industry News", slug: "industry-news", description: "Industry updates and news" },
      { name: "Case Studies", slug: "case-studies", description: "Real-world implementations" }
    ];

    const insertedBlogCategories = await db.insert(blogCategories).values(blogCategoryData).returning();
    console.log(`✅ Inserted ${insertedBlogCategories.length} blog categories`);

    // Seed industries
    const industryData = [
      { 
        name: "Hospitals", 
        slug: "hospitals", 
        description: "Medical facilities and healthcare providers",
        icon: "🏥",
        sortOrder: 1
      },
      { 
        name: "Schools & Colleges", 
        slug: "education", 
        description: "Educational institutions and campuses",
        icon: "🎓",
        sortOrder: 2
      },
      { 
        name: "Events & Conferences", 
        slug: "events", 
        description: "Event management and conferences",
        icon: "📅",
        sortOrder: 3
      },
      { 
        name: "Retail & Supermarkets", 
        slug: "retail", 
        description: "Retail stores and supermarket chains",
        icon: "🛒",
        sortOrder: 4
      },
      { 
        name: "Government & Corporate", 
        slug: "government", 
        description: "Government offices and corporate entities",
        icon: "🏛️",
        sortOrder: 5
      }
    ];

    const insertedIndustries = await db.insert(industries).values(industryData).returning();
    console.log(`✅ Inserted ${insertedIndustries.length} industries`);

    // Create admin user
    const adminUser = await db.insert(users).values({
      username: "admin",
      email: "admin@mindware.com",
      password: "admin123", // In production, this should be hashed
      role: "admin"
    }).returning();
    console.log(`✅ Created admin user`);

    // Seed blog posts
    const blogPostData = [
      {
        title: "The Future of RFID Technology in Healthcare",
        slug: "future-rfid-healthcare",
        excerpt: "Exploring how RFID technology is revolutionizing patient care and hospital management.",
        content: "RFID technology is transforming healthcare by enabling real-time tracking of patients, equipment, and medication. This comprehensive guide explores the current applications and future potential of RFID in medical settings...",
        categoryId: insertedBlogCategories[1].id,
        authorId: adminUser[0].id,
        tags: ["RFID", "Healthcare", "Technology", "Innovation"],
        isPublished: true,
        publishedAt: new Date()
      },
      {
        title: "5 Essential Steps for Implementing Smart ID Systems",
        slug: "implementing-smart-id-systems",
        excerpt: "A practical guide to successfully deploying smart identification systems in your organization.",
        content: "Implementing a smart ID system requires careful planning and execution. This step-by-step guide covers everything from initial assessment to full deployment...",
        categoryId: insertedBlogCategories[2].id,
        authorId: adminUser[0].id,
        tags: ["Smart ID", "Implementation", "Guide", "Best Practices"],
        isPublished: true,
        publishedAt: new Date()
      },
      {
        title: "Trending: NFC-Enabled Wearables for Events",
        slug: "nfc-wearables-events",
        excerpt: "How NFC-enabled wristbands are changing the event experience for attendees and organizers.",
        content: "Near Field Communication (NFC) technology in wearable devices is creating new possibilities for event management and attendee engagement...",
        categoryId: insertedBlogCategories[0].id,
        authorId: adminUser[0].id,
        tags: ["NFC", "Wearables", "Events", "Technology"],
        isPublished: true,
        publishedAt: new Date()
      }
    ];

    const insertedPosts = await db.insert(blogPosts).values(blogPostData).returning();
    console.log(`✅ Inserted ${insertedPosts.length} blog posts`);

    // Seed case studies
    const caseStudyData = [
      {
        title: "Mumbai Hospital Implements Smart Patient Tracking",
        slug: "mumbai-hospital-patient-tracking",
        client: "City General Hospital Mumbai",
        industry: "Healthcare",
        description: "Complete RFID-based patient tracking system implementation across 500-bed facility.",
        challenge: "Manual patient tracking leading to delays and errors in patient care coordination.",
        solution: "Deployed comprehensive RFID wristband system with real-time tracking dashboard.",
        results: ["50% reduction in patient wait times", "99.8% patient identification accuracy", "Zero lost patient incidents"],
        tags: ["Healthcare", "RFID", "Patient Tracking", "Mumbai"],
        isFeatured: true,
        completedAt: new Date("2024-01-15")
      },
      {
        title: "Delhi University Smart Campus ID System",
        slug: "delhi-university-smart-campus",
        client: "Delhi University",
        industry: "Education",
        description: "Multi-purpose smart ID card system for 50,000+ students and staff.",
        challenge: "Managing access control, attendance, and services for large university campus.",
        solution: "Integrated smart card system with NFC technology for multiple campus functions.",
        results: ["50,000+ active users", "Multiple service integration", "Enhanced campus security"],
        tags: ["Education", "Smart Cards", "NFC", "Campus"],
        isFeatured: true,
        completedAt: new Date("2024-02-01")
      }
    ];

    const insertedCaseStudies = await db.insert(caseStudies).values(caseStudyData).returning();
    console.log(`✅ Inserted ${insertedCaseStudies.length} case studies`);

    // Update any existing products with new schema fields
    const existingProducts = await db.select().from(products).limit(10);
    if (existingProducts.length > 0) {
      for (const product of existingProducts) {
        await db.update(products).set({
          slug: product.name?.toLowerCase().replace(/[^a-z0-9]/g, '-') || `product-${product.id}`,
          categoryId: insertedCategories.find(c => c.slug === "rfid-tags")?.id,
          brandId: insertedBrands.find(b => b.slug === "mindware")?.id,
          stockQuantity: 100,
          isFeatured: product.id % 3 === 0, // Make every 3rd product featured
          isActive: true
        }).where({ id: product.id });
      }
      console.log(`✅ Updated ${existingProducts.length} existing products`);
    }

    console.log("🎉 Admin data seeding completed successfully!");

  } catch (error) {
    console.error("❌ Error seeding admin data:", error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedAdminData()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export { seedAdminData };