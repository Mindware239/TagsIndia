import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";
import { useCartStore } from "@/lib/cart";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "clothing":
        return "Clothing Tags";
      case "jewelry":
        return "Jewelry Tags";
      case "rfid":
        return "RFID Tags";
      case "women":
        return "Women's Tags";
      default:
        return category;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.id}`}>
        <Card className="product-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-0">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardContent className="p-6">
            <Badge
              variant="secondary"
              className="mb-3 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20"
            >
              {getCategoryDisplayName(product.category)}
            </Badge>
            <h3 className="text-lg font-serif font-semibold text-luxury-navy mb-3 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-luxury-navy/70 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-luxury-navy">
                ${product.price}
              </span>
              <Button
                onClick={handleAddToCart}
                className="luxury-button"
                size="sm"
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
