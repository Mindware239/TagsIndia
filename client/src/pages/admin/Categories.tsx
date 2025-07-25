import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  FolderOpen,
  FolderTree,
  MoreHorizontal,
  ArrowRight
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

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
  sortOrder: number;
  isActive: boolean;
  children?: Category[];
  productCount: number;
}

const AdminCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock hierarchical data
  useEffect(() => {
    const mockCategories: Category[] = [
      {
        id: 1,
        name: "Tag Solutions",
        slug: "tag-solutions",
        description: "Complete range of identification tags",
        sortOrder: 1,
        isActive: true,
        productCount: 45,
        children: [
          {
            id: 5,
            name: "Healthcare Tags",
            slug: "healthcare-tags",
            description: "Medical identification tags",
            parentId: 1,
            sortOrder: 1,
            isActive: true,
            productCount: 12
          },
          {
            id: 6,
            name: "RFID Tags",
            slug: "rfid-tags",
            description: "Radio frequency identification tags",
            parentId: 1,
            sortOrder: 2,
            isActive: true,
            productCount: 18
          }
        ]
      },
      {
        id: 2,
        name: "Card Lab",
        slug: "card-lab",
        description: "Professional card printing solutions",
        sortOrder: 2,
        isActive: true,
        productCount: 28,
        children: [
          {
            id: 7,
            name: "PVC Cards",
            slug: "pvc-cards",
            description: "Durable PVC identification cards",
            parentId: 2,
            sortOrder: 1,
            isActive: true,
            productCount: 15
          },
          {
            id: 8,
            name: "Smart ID Cards",
            slug: "smart-id-cards",
            description: "Technology-enabled identification cards",
            parentId: 2,
            sortOrder: 2,
            isActive: true,
            productCount: 13
          }
        ]
      },
      {
        id: 3,
        name: "Wrist & Wear",
        slug: "wrist-wear",
        description: "Wearable identification solutions",
        sortOrder: 3,
        isActive: true,
        productCount: 22,
        children: [
          {
            id: 9,
            name: "Hospital Wristbands",
            slug: "hospital-wristbands",
            description: "Medical grade patient wristbands",
            parentId: 3,
            sortOrder: 1,
            isActive: true,
            productCount: 8
          }
        ]
      }
    ];

    setTimeout(() => {
      setCategories(mockCategories);
      setIsLoading(false);
    }, 1000);
  }, []);

  const CategoryForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Category</CardTitle>
        <CardDescription>Create a new product category for organization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Category Name</label>
            <Input placeholder="Enter category name" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Slug</label>
            <Input placeholder="category-slug" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Parent Category</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">None (Top Level)</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Sort Order</label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <Textarea placeholder="Enter category description" rows={3} />
        </div>
        <div className="flex space-x-4">
          <Button>Save Category</Button>
          <Button variant="outline" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderCategoryRow = (category: Category, level: number = 0) => {
    const rows = [];
    
    // Main category row
    rows.push(
      <TableRow key={category.id} className="hover:bg-gray-50">
        <TableCell>
          <div className="flex items-center space-x-2" style={{ paddingLeft: `${level * 20}px` }}>
            {level > 0 && <ArrowRight className="h-4 w-4 text-gray-400" />}
            <FolderOpen className="h-4 w-4 text-blue-600" />
            <div>
              <div className="font-medium text-gray-900">{category.name}</div>
              <div className="text-sm text-gray-500">{category.slug}</div>
            </div>
          </div>
        </TableCell>
        <TableCell>{category.description || '-'}</TableCell>
        <TableCell>
          <Badge variant="outline">{category.productCount} products</Badge>
        </TableCell>
        <TableCell>
          <Badge variant={category.isActive ? "default" : "secondary"}>
            {category.isActive ? "Active" : "Inactive"}
          </Badge>
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
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus className="h-4 w-4 mr-2" />
                Add Subcategory
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    );
    
    // Children rows
    if (category.children) {
      category.children.forEach(child => {
        rows.push(...renderCategoryRow(child, level + 1));
      });
    }
    
    return rows;
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCategories = categories.reduce((sum, cat) => 
    1 + (cat.children ? cat.children.length : 0), 0
  );

  const totalProducts = categories.reduce((sum, cat) => 
    sum + cat.productCount + (cat.children?.reduce((childSum, child) => childSum + child.productCount, 0) || 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
            <p className="text-gray-600 mt-2">Organize your products with categories and subcategories</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Categories</p>
                  <p className="text-2xl font-bold text-gray-900">{totalCategories}</p>
                </div>
                <FolderTree className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Main Categories</p>
                  <p className="text-2xl font-bold text-green-600">{categories.length}</p>
                </div>
                <FolderOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-purple-600">{totalProducts}</p>
                </div>
                <Plus className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Category Form */}
        {showAddForm && <CategoryForm />}

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories Table */}
        <Card>
          <CardHeader>
            <CardTitle>Categories Hierarchy</CardTitle>
            <CardDescription>Manage your category structure and organization</CardDescription>
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
                      <TableHead>Category</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCategories.map(category => renderCategoryRow(category))}
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

export default AdminCategories;