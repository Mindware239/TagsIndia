import { useQuery } from '@tanstack/react-query';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  features: string[];
  inStock: boolean;
}

const PopularProducts = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['popular-products'],
    queryFn: async () => {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Get popular products (first 8)
  const popularProducts = products?.slice(0, 8) || [];

  return (
    <div className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Products
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after printing solutions trusted by businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Popular
                  </div>
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link href={`/products/${product.id}`}>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-1">
                        <span>View</span>
                      </button>
                    </Link>
                    
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;