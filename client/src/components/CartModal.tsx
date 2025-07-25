import { useState } from "react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-luxury-navy">
              Shopping Cart
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-luxury-navy/30 mx-auto mb-4" />
            <p className="text-luxury-navy/70 text-lg mb-6">Your cart is empty</p>
            <Link href="/products">
              <Button onClick={onClose} className="luxury-button">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-luxury-navy">
            Shopping Cart
          </DialogTitle>
        </DialogHeader>
        
        <div className="max-h-96 overflow-y-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center space-x-4 p-4 bg-luxury-cream/50 rounded-lg"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-luxury-navy">
                  {item.product.name}
                </h4>
                <p className="text-luxury-navy/70 text-sm">
                  ${item.product.price}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() =>
                    handleQuantityChange(item.product.id, item.quantity - 1)
                  }
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Badge
                  variant="secondary"
                  className="min-w-[2rem] text-center bg-white"
                >
                  {item.quantity}
                </Badge>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() =>
                    handleQuantityChange(item.product.id, item.quantity + 1)
                  }
                >
                  <Plus className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span className="text-luxury-navy">Total:</span>
            <span className="text-luxury-navy">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
            <Link href="/checkout" className="flex-1">
              <Button
                onClick={onClose}
                className="luxury-button w-full"
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}