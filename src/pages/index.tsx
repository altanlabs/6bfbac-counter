import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function IndexPage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Your New App
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Simple Counter
        </h1>
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button onClick={decrement}>-</Button>
          <span className="text-2xl font-semibold">{count}</span>
          <Button onClick={increment}>+</Button>
        </div>
      </motion.section>
    </div>
  );
}
