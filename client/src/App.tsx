import { Suspense, useState, useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import TagsIndiaLoader from "@/components/TagsIndiaLoader";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Portfolio from "@/pages/Portfolio";
import BulkOrders from "@/pages/BulkOrders";
import Industries from "@/pages/Industries";
import WhyTagIndia from "@/pages/WhyTagIndia";
import Blog from "@/pages/Blog";

// Why MINDWARE subpages
import Innovation from "@/pages/why/Innovation";
import EcoFriendly from "@/pages/why/EcoFriendly";
import FastDelivery from "@/pages/why/FastDelivery";
import CaseStudies from "@/pages/why/CaseStudies";

// Cart pages
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";

// Admin Pages
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminProducts from "@/pages/admin/Products";
import AdminCategories from "@/pages/admin/Categories";
import AdminUsers from "@/pages/admin/Users";
import AdminOrders from "@/pages/admin/Orders";

// Industry specific pages
import RetailIndustry from "@/pages/industries/Retail";
import GovernmentIndustry from "@/pages/industries/Government";
import HealthcareIndustry from "@/pages/industries/Healthcare";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extended loading time as requested (3-5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("App loading completed, switching to main content");
    }, 4000); // Extended to 4 seconds as requested

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TagsIndiaLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Switch>
            {/* Admin Routes */}
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/admin/products" component={AdminProducts} />
            <Route path="/admin/categories" component={AdminCategories} />
            <Route path="/admin/users" component={AdminUsers} />
            <Route path="/admin/orders" component={AdminOrders} />
            
            {/* Public Routes with Layout */}
            <Route>
              {(params) => (
                <Layout>
                  <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductDetail} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/services" component={Services} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/bulk-orders" component={BulkOrders} />
                    <Route path="/bulk/:category" component={BulkOrders} />
                    <Route path="/industries" component={Industries} />
                    <Route path="/industries/:industry" component={Industries} />
                    <Route path="/why-tagindia" component={WhyTagIndia} />
                    <Route path="/why/:category" component={WhyTagIndia} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/:category" component={Blog} />
                    
                    {/* Why MINDWARE specific subpages */}
                    <Route path="/why/innovation" component={Innovation} />
                    <Route path="/why/eco-friendly" component={EcoFriendly} />
                    <Route path="/why/fast-delivery" component={FastDelivery} />
                    <Route path="/why/case-studies" component={CaseStudies} />
                    
                    {/* Cart and Checkout */}
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    
                    {/* Industry specific routes */}
                    <Route path="/industries/retail" component={RetailIndustry} />
                    <Route path="/industries/government" component={GovernmentIndustry} />
                    <Route path="/industries/healthcare" component={HealthcareIndustry} />
                    
                    {/* Fallback */}
                    <Route>
                      <div className="min-h-screen flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                          <p className="text-gray-600">Page not found</p>
                        </div>
                      </div>
                    </Route>
                  </Switch>
                </Layout>
              )}
            </Route>
          </Switch>
        </div>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;