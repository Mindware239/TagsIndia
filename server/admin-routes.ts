import express from "express";
import { db } from "./db";
import { users, products, categories, brands, blogPosts, industries, caseStudies } from "../shared/schema";
import { eq, desc, like, or, sql } from "drizzle-orm";

const router = express.Router();

// Users management
router.get("/users", async (req, res) => {
  try {
    const allUsers = await db.select().from(users).orderBy(desc(users.createdAt));
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { username, email, password, role, isActive } = req.body;
    
    const [newUser] = await db.insert(users).values({
      username,
      email,
      password, // In production, hash this password
      role: role || 'user',
    }).returning();
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, role, isActive } = req.body;
    
    const updateData: any = { username, email, role };
    if (password) {
      updateData.password = password; // In production, hash this password
    }
    
    const [updatedUser] = await db.update(users)
      .set(updateData)
      .where(eq(users.id, parseInt(id)))
      .returning();
    
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(users).where(eq(users.id, parseInt(id)));
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

// Products management
router.get("/products", async (req, res) => {
  try {
    const { search, category } = req.query;
    
    let whereConditions = [];
    if (search) {
      whereConditions.push(
        or(
          like(products.name, `%${search}%`),
          like(products.description, `%${search}%`)
        )
      );
    }
    
    if (category) {
      whereConditions.push(eq(products.categoryId, parseInt(category as string)));
    }
    
    let allProducts;
    if (whereConditions.length > 0) {
      allProducts = await db.select().from(products)
        .where(whereConditions.length === 1 ? whereConditions[0] : sql`${whereConditions.join(' AND ')}`)
        .orderBy(desc(products.createdAt));
    } else {
      allProducts = await db.select().from(products).orderBy(desc(products.createdAt));
    }
    
    res.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.post("/products", async (req, res) => {
  try {
    const productData = req.body;
    const [newProduct] = await db.insert(products).values(productData).returning();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    
    const [updatedProduct] = await db.update(products)
      .set(productData)
      .where(eq(products.id, parseInt(id)))
      .returning();
    
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(products).where(eq(products.id, parseInt(id)));
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

// Categories management
router.get("/categories", async (req, res) => {
  try {
    const allCategories = await db.select().from(categories).orderBy(categories.sortOrder);
    res.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

router.post("/categories", async (req, res) => {
  try {
    const categoryData = req.body;
    
    // Generate slug from name if not provided
    if (!categoryData.slug) {
      categoryData.slug = categoryData.name.toLowerCase().replace(/\s+/g, '-');
    }
    
    const [newCategory] = await db.insert(categories).values(categoryData).returning();
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Failed to create category" });
  }
});

router.put("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categoryData = req.body;
    
    const [updatedCategory] = await db.update(categories)
      .set(categoryData)
      .where(eq(categories.id, parseInt(id)))
      .returning();
    
    res.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Failed to update category" });
  }
});

router.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(categories).where(eq(categories.id, parseInt(id)));
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Failed to delete category" });
  }
});

// Dashboard stats
router.get("/stats", async (req, res) => {
  try {
    const [userCount] = await db.select({ count: sql<number>`count(*)` }).from(users);
    const [productCount] = await db.select({ count: sql<number>`count(*)` }).from(products);
    const [categoryCount] = await db.select({ count: sql<number>`count(*)` }).from(categories);
    const [activeProducts] = await db.select({ count: sql<number>`count(*)` }).from(products).where(eq(products.isActive, true));
    
    res.json({
      users: userCount.count,
      products: productCount.count,
      categories: categoryCount.count,
      activeProducts: activeProducts.count,
      recentUsers: await db.select().from(users).orderBy(desc(users.createdAt)).limit(5),
      recentProducts: await db.select().from(products).orderBy(desc(products.createdAt)).limit(5),
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
});

export { router as adminRoutes };