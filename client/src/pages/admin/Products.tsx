import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Package,
  Filter,
  MoreHorizontal,
  Star,
  TrendingUp
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  salePrice?: string;
  sku: string;
  category: string;
  brand: string;
  images: string[];
  features: string[];
  inStock: boolean;
  stockQuantity: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Smart RFID Tags",
        slug: "smart-rfid-tags",
        description: "Advanced RFID tags for inventory tracking",
        price: "299.99",
        salePrice: "249.99",
        sku: "RFID-001",
        category: "RFID Solutions",
        brand: "TechTag",
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64"],
        features: ["Long Range", "Waterproof", "High Memory"],
        inStock: true,
        stockQuantity: 150,
        isFeatured: true,
        isActive: true,
        createdAt: "2024-01-15"
      },
      {
        id: 2,
        name: "Hospital Wristbands",
        slug: "hospital-wristbands",
        description: "Medical grade patient identification wristbands",
        price: "49.99",
        sku: "HWB-001",
        category: "Healthcare",
        brand: "MedID",
        images: ["https://images.unsplash.com/photo-1559526324-4b87b5e36e44"],
        features: ["Waterproof", "Tamper Evident", "Latex Free"],
        inStock: true,
        stockQuantity: 500,
        isFeatured: false,
        isActive: true,
        createdAt: "2024-01-10"
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category === filterCategory);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filterCategory, products]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const ProductForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
        <CardDescription>Create a new product for your catalog</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Product Name</label>
            <Input placeholder="Enter product name" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">SKU</label>
            <Input placeholder="Enter SKU" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>
            <Input type="number" placeholder="0.00" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Sale Price</label>
            <Input type="number" placeholder="0.00" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rfid">RFID Solutions</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="events">Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Stock Quantity</label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <Textarea placeholder="Enter product description" rows={3} />
        </div>
        <div className="flex space-x-4">
          <Button>Save Product</Button>
          <Button variant="outline" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <p className="text-gray-600 mt-2">Manage your product catalog and inventory</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Stock</p>
                  <p className="text-2xl font-bold text-green-600">
                    {products.filter(p => p.inStock).length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Featured</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {products.filter(p => p.isFeatured).length}
                  </p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-purple-600">{categories.length}</p>
                </div>
                <Filter className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Product Form */}
        {showAddForm && <ProductForm />}

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products by name, SKU, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Products ({filteredProducts.length})</CardTitle>
            <CardDescription>Manage your product inventory and details</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <motion.tr
                        key={product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-gray-50"
                      >
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.images[0] || '/placeholder.jpg'}
                              alt={product.name}
                              className="h-10 w-10 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.brand}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{product.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-gray-900">₹{product.price}</div>
                          {product.salePrice && (
                            <div className="text-sm text-green-600">Sale: ₹{product.salePrice}</div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className={`font-medium ${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stockQuantity} units
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col space-y-1">
                            <Badge variant={product.isActive ? "default" : "secondary"}>
                              {product.isActive ? "Active" : "Inactive"}
                            </Badge>
                            {product.isFeatured && (
                              <Badge variant="outline" className="text-yellow-600">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;