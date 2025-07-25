import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Filter, Eye, Download } from 'lucide-react';

interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: number;
  createdAt: string;
}

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data - replace with real API call
  const mockOrders: Order[] = [
    {
      id: 1,
      orderNumber: 'ORD-2025-001',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      status: 'processing',
      total: 2499.99,
      items: 3,
      createdAt: '2025-01-24T12:00:00Z'
    },
    {
      id: 2,
      orderNumber: 'ORD-2025-002',
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      status: 'shipped',
      total: 1299.50,
      items: 1,
      createdAt: '2025-01-23T15:30:00Z'
    },
    {
      id: 3,
      orderNumber: 'ORD-2025-003',
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      status: 'delivered',
      total: 899.00,
      items: 2,
      createdAt: '2025-01-22T09:15:00Z'
    },
    {
      id: 4,
      orderNumber: 'ORD-2025-004',
      customerName: 'Sarah Wilson',
      customerEmail: 'sarah@example.com',
      status: 'pending',
      total: 3499.99,
      items: 5,
      createdAt: '2025-01-21T14:45:00Z'
    }
  ];

  const { data: orders, isLoading } = useQuery({
    queryKey: ['admin-orders', searchTerm, statusFilter, currentPage],
    queryFn: async () => {
      // Simulate API call - replace with real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockOrders.filter(order => {
        const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
      });
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Order Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage customer orders</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="w-full sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders by customer name or order number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Orders ({orders?.length || 0})
          </CardTitle>
          <CardDescription>
            Manage customer orders and track their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order #</TableHead>
                  <TableHead className="hidden sm:table-cell">Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="hidden lg:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span>{order.orderNumber}</span>
                        <span className="text-sm text-muted-foreground sm:hidden">
                          {order.customerName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex flex-col">
                        <span className="font-medium">{order.customerName}</span>
                        <span className="text-sm text-muted-foreground">{order.customerEmail}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.items} items
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.total.toFixed(2)}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:inline ml-1">View</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination would go here */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;