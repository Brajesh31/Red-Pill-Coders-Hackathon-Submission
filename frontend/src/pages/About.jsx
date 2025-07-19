import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="bg-background text-foreground min-h-screen">
          {/* About Us Section */}
          <section className="pt-24 pb-16">
            <div className="container mx-auto px-4 text-center">
              <h1>About Us</h1>
              <p className="text-lg my-6 max-w-3xl mx-auto">
                At <span className="text-primary font-bold">NetworQ</span>, our mission is to empower individuals and businesses by fostering a culture of innovation, collaboration, and growth. We provide an inclusive platform for networking, knowledge-sharing, and opportunity creation in the tech industry.
              </p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <h2>Our Mission</h2>
              <p className="text-lg max-w-4xl mx-auto my-6">
                To bridge the gap between ideas and execution by creating a dynamic ecosystem where entrepreneurs, professionals, and students can share their vision, pitch startups, and collaborate on groundbreaking projects. We aim to be the go-to community for unlocking opportunities in Pakistan’s tech landscape and beyond.
              </p>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-center pb-8">What We Do</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Host Monthly Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    From panel discussions to startup pitch nights, our events are designed to inspire, educate, and connect.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Build Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Facilitate meaningful relationships between students, professionals, and industry leaders.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Empower Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Provide a platform for showcasing ideas, securing funding, and gaining industry insights.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <h2>Meet the Team</h2>
              <p className="text-lg my-6 max-w-3xl mx-auto">
                Behind <span className="text-primary font-bold">NetworQ</span> is a dedicated group of innovators, entrepreneurs, and tech enthusiasts passionate about making a difference. Together, we strive to bring value to our community and create impactful experiences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ali Khan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Founder & CEO. Visionary entrepreneur with 10+ years of experience in tech and business development.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Fatima Noor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Head of Operations. Expert in event planning and community management.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Ahmed Raza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Lead Developer. Full-stack developer specializing in building scalable solutions.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2>Join Our Community</h2>
              <p className="text-lg my-6 max-w-3xl mx-auto">
                Ready to be part of something bigger? Become a member of <span className="text-primary font-bold">NetworQ</span> today and take the first step towards achieving your professional goals. Let’s innovate and grow together!
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-primary text-primary-foreground py-3 px-6 rounded-full">
                  Become a Member
                </button>
                <button className="border-primary text-primary py-3 px-6 border rounded-full">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}