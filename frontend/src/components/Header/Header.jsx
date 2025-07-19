import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "../ui/button";
import useUserStore from "@/store/useUserStore";

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const handleLogout = () => {
    setUser({
      id: "",
      name: "",
      email: "",
      profilePic:
        "https://res.cloudinary.com/dhxelcjwn/image/upload/v1737779596/networq/default-user.jpg",
      token: null,
      role: "",
    }); // Clear the Zustand store
    navigate("/login");
  };

  // Navigation items
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "About", slug: "/about", active: true },
    { name: "Events", slug: "/events", active: true },
    { name: "Projects", slug: "/projects", active: true },
  ];

  // Admin-specific items
  const adminNavItems = [
    { name: "Dashboard", slug: "/dashboard", active: true },
    { name: "Add Event", slug: "/add-event", active: true },
    { name: "Add Project", slug: "/add-project", active: true },
  ];

  const isAdmin = user?.role === "admin"; // Check if the user is an admin

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-background text-foreground shadow-md">
      {/* Logo */}
      <div>
        <Link to="/">
          <Logo width={150} />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        {/* Common links */}
        {navItems.map(
          (item) =>
            item.active && (
              <Link
                to={item.slug}
                key={item.name}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
        )}
        {/* Admin-only links */}
        {isAdmin &&
          adminNavItems.map(
            (item) =>
              item.active && (
                <Link
                  to={item.slug}
                  key={item.name}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
          )}
      </nav>

      {/* Login/Logout Button */}
      <div>
        {user?.token ? (
          <Button
            variant="outline"
            onClick={handleLogout}
            className="py-2 px-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              variant="outline"
              className="py-2 px-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
