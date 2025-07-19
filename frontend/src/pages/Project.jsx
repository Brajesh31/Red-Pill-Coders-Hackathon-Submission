import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import meeting from "@/assets/meeting.jpg";
import peoples from "@/assets/peoples.jpg";
const projectsData = [
  {
    name: "AI Influencer",
    image: meeting, // Placeholder image
    description:
      "AI Influencer leverages artificial intelligence to create a personalized influencer experience for brands. Developed by a team of young innovators, it has become a pioneer in digital marketing.",
    objectives: [
      "Simplify influencer-brand collaborations.",
      "Improve content personalization using AI.",
    ],
    success: [
      "Secured $50,000 in funding.",
      "Partnered with 10 global brands.",
      'Awarded "Innovation of the Year" at XYZ Tech Awards.',
    ],
  },
  {
    name: "Tech Connect",
    image: peoples, // Placeholder image
    description:
      "A platform designed to bridge the gap between tech startups and investors, facilitating seamless collaboration and growth opportunities.",
    objectives: [
      "Create a network for tech startups and investors.",
      "Enable knowledge sharing through webinars and resources.",
    ],
    success: [
      "Connected over 100 startups with potential investors.",
      "Hosted 20+ successful webinars on startup growth.",
      "Achieved a 95% satisfaction rate from users.",
    ],
  },
  {
    name: "Green Energy Hub",
    image: meeting, // Placeholder image
    description:
      "Promoting sustainable energy solutions by connecting innovators and investors in the green energy space.",
    objectives: [
      "Encourage innovation in renewable energy.",
      "Provide resources to scale green energy startups.",
    ],
    success: [
      "Helped 50+ startups scale operations.",
      "Organized 15 international green energy conferences.",
      "Reduced carbon emissions by 10,000 tons annually.",
    ],
  },
  {
    name: "HealthTech Revolution",
    image: peoples, // Placeholder image
    description:
      "Revolutionizing healthcare by introducing cutting-edge technology solutions to improve patient outcomes.",
    objectives: [
      "Integrate AI in healthcare for diagnosis.",
      "Enhance patient care through technology.",
    ],
    success: [
      "Recognized by WHO for impactful solutions.",
      "Collaborated with 200+ hospitals worldwide.",
      "Won Best HealthTech Innovation award in 2024.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div className="py-12">
          <div className="container mx-auto px-4 text-center">
            {/* Headline */}
            <h1 className="text-4xl font-bold mb-4">Our Success Stories</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore the projects that have redefined innovation and turned
              ideas into reality.
            </p>
          </div>

          {/* Projects Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                  <Card
                    key={index}
                    className="rounded-lg shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-primary transition duration-300"
                  >
                    <CardHeader className="p-0">
                      {/* Project Image */}
                      <div className="w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl font-semibold mt-4 px-4">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 py-4">
                      <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">
                          Description and Details
                        </h2>
                        <p className="text-sm">{project.description}</p>
                      </div>
                      <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">Objectives</h2>
                        <ul className="list-disc list-inside text-sm">
                          {project.objectives.map((objective, idx) => (
                            <li key={idx}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg mb-2">
                          Success the Project Got
                        </h2>
                        <ul className="list-disc list-inside text-sm">
                          {project.success.map((success, idx) => (
                            <li key={idx}>{success}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
