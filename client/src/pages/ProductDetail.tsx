import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";
import type { Product } from "@shared/schema";
import ThreeCanvas from "@/components/ThreeCanvas";
import ProductCard from "@/components/ProductCard";
import { useCartStore } from "@/lib/cart";
import { getCategoryDisplayName } from "@/lib/products";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id || "0");
  const [isLiked, setIsLiked] = useState(false);
  const addToCart = useCartStore((state) => state.addItem);

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", productId],
  });

  const { data: allProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const relatedProducts = allProducts
    .filter((p) => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-200 rounded-2xl"></div>
              <div className="space-y-6">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-luxury-navy mb-4">
              Product Not Found
            </h1>
            <Link href="/products">
              <Button className="luxury-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/products">
            <Button variant="ghost" className="text-luxury-navy hover:text-luxury-gold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Product View */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="h-96">
              <ThreeCanvas productId={product.id} className="w-full h-full" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square bg-white rounded-lg border-2 border-luxury-gold"></div>
              <div className="aspect-square bg-white rounded-lg border border-gray-200"></div>
              <div className="aspect-square bg-white rounded-lg border border-gray-200"></div>
              <div className="aspect-square bg-white rounded-lg border border-gray-200"></div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge className="mb-3 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
                {getCategoryDisplayName(product.category)}
              </Badge>
              <h1 className="text-4xl font-serif font-bold text-luxury-navy">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-luxury-navy mt-4">
                ${product.price}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-luxury-navy mb-3">Description</h3>
              <p className="text-luxury-navy/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-luxury-navy mb-3">Features</h3>
              <ul className="space-y-2 text-luxury-navy/70">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="luxury-button flex-1 text-lg py-4"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`h-14 w-14 border-luxury-navy ${
                  isLiked
                    ? "bg-red-50 text-red-500 border-red-500"
                    : "text-luxury-navy hover:bg-luxury-navy hover:text-white"
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
