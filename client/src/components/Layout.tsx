import { useState } from "react";
import { useCartStore } from "@/lib/cart";
import CartModal from "@/components/CartModal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCartStore();

  const totalItems = items.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      <Footer />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
}