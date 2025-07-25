import { db } from "./db";
import { products, categories, type InsertProduct, type InsertCategory } from "@shared/schema";

// Helper function to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Sample categories
const sampleCategories: InsertCategory[] = [
  {
    name: "Thermal Transfer Ribbons",
    slug: "thermal-transfer-ribbons",
    description: "High-quality thermal transfer ribbons for various printing applications"
  },
  {
    name: "Barcode Labels",
    slug: "barcode-labels", 
    description: "Professional barcode labels for inventory and shipping"
  },
  {
    name: "RFID Solutions",
    slug: "rfid-solutions",
    description: "Advanced RFID tags and solutions for tracking and identification"
  },
  {
    name: "ID Cards & Wearables",
    slug: "id-cards-wearables",
    description: "Professional identification cards and wearable solutions"
  }
];

const sampleProducts: InsertProduct[] = [
  // Thermal Transfer Ribbons
  {
    name: "Premium Wax Thermal Transfer Ribbons",
    slug: "premium-wax-thermal-transfer-ribbons",
    description: "High-quality wax ribbons for sharp, durable printing on paper labels. Perfect for shipping, inventory, and general labeling applications.",
    price: "45.99",
    images: ["https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Superior print quality", "Excellent edge definition", "Compatible with all major printers", "Long-lasting durability"],
    inStock: true,
    isFeatured: true
  },
  {
    name: "Wax-Resin Hybrid Ribbons",
    slug: "wax-resin-hybrid-ribbons",
    description: "Premium wax-resin ribbons offering excellent durability and scratch resistance for demanding applications.",
    price: "67.99",
    images: ["https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Chemical resistant", "Scratch resistant", "High-speed printing", "Versatile compatibility"],
    inStock: true
  },
  {
    name: "Resin Thermal Transfer Ribbons",
    slug: "resin-thermal-transfer-ribbons",
    description: "Industrial-grade resin ribbons for extreme durability and chemical resistance on synthetic materials.",
    price: "89.99",
    images: ["https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Maximum durability", "Chemical resistant", "Heat resistant", "Industrial grade"],
    inStock: true
  },

  // Barcode Labels
  {
    name: "Direct Thermal Paper Labels",
    slug: "direct-thermal-paper-labels",
    description: "High-quality direct thermal labels for shipping, inventory management, and retail applications.",
    price: "29.99",
    images: ["https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["No ribbon required", "Clear barcode printing", "Easy peel backing", "Multiple sizes available"],
    inStock: true
  },
  {
    name: "Thermal Transfer Paper Labels",
    slug: "thermal-transfer-paper-labels",
    description: "Premium paper labels designed for thermal transfer printing with excellent adhesion properties.",
    price: "34.99",
    images: ["https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Strong adhesive", "Smooth surface", "High print quality", "Various sizes"],
    inStock: true
  },
  {
    name: "Polyester Synthetic Labels",
    slug: "polyester-synthetic-labels",
    description: "Durable polyester labels resistant to moisture, chemicals, and extreme temperatures.",
    price: "52.99",
    images: ["https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Waterproof", "Chemical resistant", "Temperature resistant", "Long-lasting"],
    inStock: true
  },

  // RFID Solutions
  {
    name: "UHF RFID Labels",
    slug: "uhf-rfid-labels",
    description: "Advanced UHF RFID labels for inventory tracking and asset management with long read range.",
    price: "156.99",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Long read range", "High memory capacity", "EPC Gen2 compatible", "Bulk packaging"],
    inStock: true
  },
  {
    name: "HF RFID Smart Cards",
    slug: "hf-rfid-smart-cards",
    description: "High-frequency RFID smart cards for access control and identification applications.",
    price: "89.99",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["13.56 MHz frequency", "ISO14443 compliant", "Secure encryption", "Durable construction"],
    inStock: true
  },
  {
    name: "NFC Tags for Mobile Applications",
    slug: "nfc-tags-mobile-applications",
    description: "Near Field Communication tags optimized for mobile device interactions and applications.",
    price: "24.99",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["NFC Type 2 compatible", "Android & iOS support", "Small form factor", "Easy programming"],
    inStock: true
  },

  // ID Cards & Wearables
  {
    name: "PVC ID Cards - Blank White",
    slug: "pvc-id-cards-blank-white",
    description: "Professional grade PVC cards perfect for employee IDs, membership cards, and access control.",
    price: "39.99",
    images: ["https://images.unsplash.com/photo-1589833063058-1fa5c32d00b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["CR80 standard size", "Dye-sublimation compatible", "Magnetic stripe ready", "Premium quality PVC"],
    inStock: true
  },
  {
    name: "Silicone RFID Wristbands",
    slug: "silicone-rfid-wristbands",
    description: "Comfortable silicone wristbands with embedded RFID chips for events and access control.",
    price: "127.99",
    images: ["https://images.unsplash.com/photo-1589833063058-1fa5c32d00b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Waterproof design", "Adjustable closure", "Multiple colors", "Long-range readable"],
    inStock: true
  },
  {
    name: "Employee Badge Holders",
    slug: "employee-badge-holders",
    description: "Durable badge holders with lanyards for professional employee identification display.",
    price: "15.99",
    images: ["https://images.unsplash.com/photo-1589833063058-1fa5c32d00b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    features: ["Clear vinyl construction", "Retractable cord", "Breakaway safety feature", "Professional appearance"],
    inStock: true
  }
];

async function seedDatabase() {
  try {
    console.log("Seeding database with MINDWARE products...");

    // Clear existing data
    await db.delete(products);
    await db.delete(categories);
    console.log("Cleared existing data");

    // Insert categories first
    const insertedCategories = await db.insert(categories).values(sampleCategories).returning();
    console.log(`Inserted ${insertedCategories.length} categories`);

    // Create a mapping of category names to IDs
    const categoryMap = new Map();
    insertedCategories.forEach(cat => {
      categoryMap.set(cat.slug, cat.id);
    });

    // Add category IDs to products
    const productsWithCategories = sampleProducts.map(product => {
      let categoryId = null;
      
      // Map products to categories based on their content
      if (product.name.includes('Ribbon')) {
        categoryId = categoryMap.get('thermal-transfer-ribbons');
      } else if (product.name.includes('Label') || product.name.includes('Thermal')) {
        categoryId = categoryMap.get('barcode-labels');
      } else if (product.name.includes('RFID') || product.name.includes('NFC')) {
        categoryId = categoryMap.get('rfid-solutions');
      } else if (product.name.includes('Card') || product.name.includes('Badge') || product.name.includes('Wristband')) {
        categoryId = categoryMap.get('id-cards-wearables');
      }

      return {
        ...product,
        categoryId
      };
    });

    // Insert products
    const insertedProducts = await db.insert(products).values(productsWithCategories).returning();
    console.log(`Inserted ${insertedProducts.length} products`);

    console.log("Database seeding completed successfully!");

  } catch (error) {
    console.error("Error seeding database:", error);
    console.error("Database seeding failed:", error);
  }
}

// Run the seeding function
seedDatabase().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});