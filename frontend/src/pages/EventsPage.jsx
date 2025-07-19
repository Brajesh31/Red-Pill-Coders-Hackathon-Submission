import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import image1 from "@/assets/Chairs.jpg";
const eventsData = [
  {
    name: "Tech Innovators Meetup",
    date: "March 10, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Lahore Expo Center",
    description:
      "An event to connect with tech enthusiasts, share ideas, and pitch your innovations.",
  },
  {
    name: "Startup Growth Forum",
    date: "March 24, 2025",
    time: "12:00 PM - 5:00 PM",
    venue: "Islamabad Expo Center",
    description:
      "Gain insights from industry leaders and network with potential investors.",
  },
  {
    name: "AI & Future Tech Conference",
    date: "April 5, 2025",
    time: "9:00 AM - 3:00 PM",
    venue: "Karachi Convention Center",
    description:
      "Dive into the future of artificial intelligence and emerging technologies with leading experts and innovators.",
  },
];

export default function EventsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle login state

  return (
    <>
      <main>
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="bg-background text-foreground min-h-screen">
          {/* Events Header */}
          <section className="pt-24 pb-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Upcoming Networking Events
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                Stay updated and be part of the innovation wave. Explore,
                register, and connect.
              </p>
            </div>
          </section>

          {/* Events List */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Explore Events
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                {eventsData.map((event, index) => (
                  <Card key={index}>
                    <CardHeader>
                      {/* Placeholder Image */}
                      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={image1}
                          alt={event.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="mt-4">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted">
                        {event.date} | {event.time}
                      </p>
                      <p className="text-sm mt-1">Venue: {event.venue}</p>
                      <p className="text-sm mt-4">{event.description}</p>
                      {isLoggedIn ? (
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground mt-4 rounded-full"
                        >
                          Join Now
                        </Button>
                      ) : (
                        <p className="text-sm text-muted mt-4">
                          Log in to register for this event.
                        </p>
                      )}
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
