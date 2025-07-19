import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Logo } from "@/components";
import useUserStore from "@/store/useUserStore";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [messages, setMessages] = useState({ error: "", success: "" });
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages({ error: "", success: "" });

    const { name, email, password } = formData;

    try {
      const response = await axios.post("/api/v1/user/signup", {
        name,
        email,
        password,
      });

      // Extract token and user details
      const { token } = response.data;
      const { _id, name: userName, email: userEmail, role } = response.data.data;

      // Update state and navigate to login page
      setMessages({ success: "Signup successful! Redirecting to login..." });
      setUser({
        id: _id,
        name: userName,
        email: userEmail,
        token,
        role
      });
      navigate("/");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessages({ error: errorMsg });
    }
  };

  return (
    <main>
      <div className="relative h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="bg-background text-foreground min-h-screen flex justify-center items-center">
        <Card className="w-full max-w-sm p-6">
          <CardHeader className="flex justify-center">
            <Logo width={150} />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-primary mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-primary mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-lg text-primary mb-2"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Error Message */}
              {messages.error && (
                <p className="text-red-600 text-center mb-4">{messages.error}</p>
              )}

              {/* Success Message */}
              {messages.success && (
                <p className="text-green-600 text-center mb-4">
                  {messages.success}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground rounded-full w-full py-3"
                >
                  Sign Up
                </Button>
              </div>

              {/* Redirect to Login */}
              <div className="text-center mt-4">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
