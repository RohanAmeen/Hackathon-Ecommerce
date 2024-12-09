"use client";

import Image from "next/image";
import { useState } from "react";
import { MinusIcon, PlusIcon, XIcon as XMarkIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/assets/Products/Product (3).png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Purple",
      price: 180,
      quantity: 1,
      image: "/assets/Products/Product (2).png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/assets/Products/Product (1).png",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = increment
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className=" bg-gray-50 p-6 pt-24 font-satoshi">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-2xl font-bold font-integral">YOUR CART</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex gap-4 rounded-lg border bg-white p-4"
                >
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute right-2 top-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Image
                      src="/assets/dlt.svg"
                      alt="Remove item"
                      width={16}
                      height={16}
                      />
                  </button>

                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Size: {item.size} | Color: {item.color}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-medium">${item.price}</p>

                      <div className="mt-2 flex items-center border rounded-[62px] bg-gray-100">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, false)}
                          className="h-10 w-10 rounded-[62px]"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, true)}
                          className="h-10 w-10 rounded-[62px]"

                        >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-lg border bg-white p-6">
            <h2 className="text-lg font-medium">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${subtotal}</p>
              </div>

              <div className="flex justify-between text-red-500">
                <p>Discount (-20%)</p>
                <p>-${discount}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="font-medium">${deliveryFee}</p>
              </div>

              <div className="flex justify-between border-t pt-4">
                <p className="font-medium">Total</p>
                <p className="font-medium">${total}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 rounded-md border px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                <button className="rounded-[64px] bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                  Apply
                </button>
              </div>

              <button className="mt-4 w-full rounded-[64px] bg-black py-3 text-sm font-medium text-white hover:bg-gray-900">
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
