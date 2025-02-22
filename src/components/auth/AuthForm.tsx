
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic here
    console.log({ email, password, isLogin });
  };

  return (
    <Card className="w-full max-w-md p-8 space-y-6 animate-fade-in bg-white/80 backdrop-blur-sm">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {isLogin ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-sm text-gray-500">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Enter your information to create your account"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          {isLogin ? "Sign in" : "Sign up"}
        </Button>
      </form>
      <div className="text-center">
        <Button
          variant="link"
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-gray-500 hover:text-primary"
        >
          {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </Button>
      </div>
    </Card>
  );
};
