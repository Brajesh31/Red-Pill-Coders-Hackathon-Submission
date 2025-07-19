import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="bg-background text-foreground min-h-screen">
          {/* Hero Section */}
          <section className="pt-24 pb-16">
            <div className="container mx-auto px-4 text-center">
              <h1>
                THE BRIDGE BETWEEN INNOVATION <br /> AND OPPORTUNITY
              </h1>
              <p className="text-lg my-6">
                Monthly networking events designed for techies, students, and
                professionals alike.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground rounded-full"
                >
                  Explore Events
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary rounded-full"
                >
                  Become a Member
                </Button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-center py-8">Who We Are</h2>
              <p className="text-lg text-center mx-auto max-w-4xl">
                At <span className="text-primary font-bold">NetworQ</span>, we
                bring together brilliant minds to share ideas, build
                connections, and create opportunities. From budding
                entrepreneurs to seasoned professionals, our monthly networking
                events are the perfect space to pitch your startups, discover
                new innovations, secure funding, and land your dream job or
                internship.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-card bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-center py-8">Why Join Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Grow Your Network</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Connect with industry leaders, investors, and fellow
                    innovators.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pitch Your Startup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Showcase your ideas and secure funding or mentorship.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Unlock Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Find internships, jobs, and collaborators for your projects.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Featured Stats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="py-8">Our Impact</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p>Connections Made</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">100+</p>
                  <p>Startups Pitched</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p>Internships & Jobs Secured</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">2 Cities</p>
                  <p>Lahore & Islamabad</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="py-8">What Our Members Say</h2>
              <blockquote className="text-lg italic">
                “NetworQ helped me pitch my startup to investors, and now we're
                scaling like never before!”
              </blockquote>
              <p className="text-primary font-bold mt-4">
                — Sara Ahmed, Founder of TechNova
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
