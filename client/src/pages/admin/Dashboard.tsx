import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  Eye,
  MessageSquare,
  Star,
  Plus,
  Settings,
  BarChart3,
  Calendar
} from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 1250,
    totalProducts: 340,
    totalOrders: 89,
    totalRevenue: 125000,
    monthlyGrowth: 12.5,
    activeUsers: 450,
    pendingOrders: 23,
    avgRating: 4.8
  });

  const recentActivity = [
    { type: 'order', message: 'New order #1234 received', time: '2 minutes ago' },
    { type: 'user', message: 'New user registration: john@example.com', time: '15 minutes ago' },
    { type: 'product', message: 'Product "Smart RFID Tags" updated', time: '1 hour ago' },
    { type: 'review', message: 'New 5-star review received', time: '2 hours ago' },
    { type: 'blog', message: 'New blog post published', time: '3 hours ago' }
  ];

  const quickActions = [
    { title: 'Add Product', icon: Package, action: () => {}, color: 'blue' },
    { title: 'Create Blog Post', icon: Plus, action: () => {}, color: 'green' },
    { title: 'View Orders', icon: ShoppingCart, action: () => {}, color: 'orange' },
    { title: 'User Management', icon: Users, action: () => {}, color: 'purple' },
    { title: 'Analytics', icon: BarChart3, action: () => {}, color: 'pink' },
    { title: 'Settings', icon: Settings, action: () => {}, color: 'gray' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +{stats.monthlyGrowth}% from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Products</CardTitle>
                <Package className="h-4 w-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stats.totalProducts}</div>
                <p className="text-xs text-gray-500 mt-1">Across all categories</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stats.totalOrders}</div>
                <p className="text-xs text-orange-600 mt-1">{stats.pendingOrders} pending</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.2% from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <action.icon className={`h-8 w-8 mx-auto mb-3 text-${action.color}-600`} />
                    <h3 className="font-medium text-gray-900 text-sm">{action.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates from your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'order' ? 'bg-green-500' :
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'product' ? 'bg-purple-500' :
                    activity.type === 'review' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Active Users</span>
                </div>
                <span className="text-lg font-bold text-blue-600">{stats.activeUsers}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium">Average Rating</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">{stats.avgRating}/5</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Growth Rate</span>
                </div>
                <span className="text-lg font-bold text-green-600">+{stats.monthlyGrowth}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Pending Inquiries</span>
                </div>
                <span className="text-lg font-bold text-purple-600">7</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Manage your website content and data</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Product Management</h3>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
                <p className="text-gray-600">Manage your product catalog, inventory, and pricing.</p>
              </TabsContent>
              
              <TabsContent value="categories" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Category Management</h3>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </div>
                <p className="text-gray-600">Organize your products with categories and subcategories.</p>
              </TabsContent>
              
              <TabsContent value="blogs" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Blog Management</h3>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Button>
                </div>
                <p className="text-gray-600">Create and manage blog posts for Tag Talk.</p>
              </TabsContent>
              
              <TabsContent value="users" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">User Management</h3>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
                <p className="text-gray-600">Manage user accounts, roles, and permissions.</p>
              </TabsContent>
              
              <TabsContent value="orders" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Order Management</h3>
                  <Button variant="outline">
                    View All Orders
                  </Button>
                </div>
                <p className="text-gray-600">Process orders, manage shipping, and handle customer inquiries.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;