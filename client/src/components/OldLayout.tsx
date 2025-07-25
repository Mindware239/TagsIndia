import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import CartModal from "@/components/CartModal";
import Footer from "@/components/Footer";
import { useCartStore } from "@/lib/cart";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-serif font-bold text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors duration-300">
                  TagsIndia
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActiveLink(item.href)
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                            isActiveLink(item.href)
                              ? "text-indigo-600 bg-indigo-50"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
