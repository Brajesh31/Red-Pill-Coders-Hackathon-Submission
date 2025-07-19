import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useUserStore from "@/store/useUserStore";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    eventPic: null,
  });
  const [messages, setMessages] = useState({ error: "", success: "" });
  const { user } = useUserStore();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, eventPic: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages({ error: "", success: "" });

    const { title, description, startDate, endDate, location, eventPic } = formData;

    // Form validation
    if (!title || !description || !startDate || !endDate || !location) {
      return setMessages({ error: "All fields except the image are required" });
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", title);
      formDataToSend.append("description", description);
      formDataToSend.append("startDate", startDate);
      formDataToSend.append("endDate", endDate);
      formDataToSend.append("location", location);
      formDataToSend.append("createdBy", user.id); // Pass admin ID

      // Check if an image is provided, if not use a default image
      if (eventPic) {
        formDataToSend.append("eventPic", eventPic);
      } else {
        formDataToSend.append("eventPic", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcDAf/EADYQAAICAQIDAwsDAwUAAAAAAAABAgMEBREGIUExUbESEyIyUmFxgaHB0RRCkTNT4RVDY6Lw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDqQANMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAed+RTjVuzIshXDvm9iP17Wa9JoXJTvn/Tr+79xQM7NyM+525djnPp3L4LoU1d7+K9Kqk4xnbZ74V8v5Zlj8U6VfJRlbOp/8kGl/Jz4A11mqyF0FZVKM4PslF7oyOY6ZqmVplvl4s9lv6UJerL5fc6DpOp06piq+nlJcp1vtgyDdAAAAAAAAAAAAAAAAAAA88i+GNRZfc/JhXFyk/cj0K/xrkOrSY0r/esSfwXPxApuoZtuoZdmTc35U3yj7K6JfA1h8QWJQAFAkdD1KWl58Lm35qXo2xXWO/27SOBFdaTT5xaa70fSK4YyXk6HjOT3lBOt+/bl4EqQAAAAAAAAAAAAAAAACq8e7+Yw308qXgi1Fd44pc9Lqt2/p2rf4NfnYKowALGQAFAAEVfOCt1ozb7POy2+hPkRwpS6dCo3Xr7z/l/glyAAAAAAAAAAAAAAAAAa2pYkc7AvxZPbzsGk/ZfR/wAo2QBya2udNs6rY+TOEnGS7mYl74j4f/1FvJxNo5SXpRfZYvyUjJptxrXVk1yqsX7ZrZ/5KPMADTA2MDEszsurFq9ax7b+yur+QwsPIzrfNYlUrZdfJ7F8WXzh/RIaTU5zanlTXpzXZFdy93iBKU1wpphVXyhXFRivcuRmAQAAAAAAAAAAAAAAAAAB1AHnfRTkVuGRVC2D6WRTX1NHP1zTsHeN+TF2f26/Sl/ghcjjOKk/02HJ9zsnt9EBLz4c0ifZhQiu6Eml4n2vh7Sa9n+irlt2ecbkvqytS4wz36tOOvkzKHGOdH1qMeXyaBq611wqgo1QjCC7IwikvoZFWxuMqZPbKxLIb9sq5eV9GTeBq2BnpLFyYSl1g/RkvkBvAddgAAAAAAAAAAAAAAADS1bUqdLxHfdzk+UIdZMDLUdQxtOx3dlWKK/alzcn3JFI1biPMz266m8eht+hF82veyP1DNv1DJlflT8qT7F0iu5e41gUABYgACgfU3Fprk116nwAWDSOKMnElGrN3yKd9vK/fH8l1xMqnMojfjWKdcuq8PicqN7SNUyNLyPOUveD/qVt8pL8mVdNBr4OZTn40MjHlvCX/V9zNgAAAAAAAAAAAMbLIVVysse0IreT7kc11rUrNUzpXSbVUeVUfZj+X2/Ms3G2e6cSvCrl6V3pWJeyuz+X4FKAIAFhQAFQAAAAAAwAJjhnVpabnKFsn+luaU1v6r6S/wDd50Jc+fgclOg8J57zdLULJb2478iXe10f2+RlU0AAAAAAAAAYzl5EJT9mLf0A5zxLk/qtayZ77xg/Nx+EeX5Iwysm7LJzfbKTbMSwAAVAAAAAAAAAAACe4MyfMas6m/Rvg47e9c19yBNzR7XTquJYulsfEiungPtYIAAAAAAeOY9sO9r2JeDAA5THsR9ALEAAUAAAAAAAAAAAPXFe2XQ1/cj4oADq3QAGVAAB/9k="); // Add your default image path here
      }

      // Debugging: Log FormData keys and values
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post("/api/v1/events/create-event", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${user.token}`,
        },
      });

      setMessages({
        success: "Event created successfully! Redirecting...",
      });
      setTimeout(() => {
        navigate("/events");
      }, 2000);
    } catch (error) {
      // Enhanced error logging for debugging
      console.error("Error during event creation:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "An error occurred. Please try again.";
      setMessages({ error: errorMsg });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <Card className="w-full max-w-3xl p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Add New Event
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <Input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Event Title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Description
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Event Description"
                required
              />
            </div>

            {/* Start Date */}
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium mb-1"
              >
                Start Date
              </label>
              <Input
                type="date"
                id="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium mb-1">
                End Date
              </label>
              <Input
                type="date"
                id="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-1"
              >
                Location
              </label>
              <Input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Event Location"
                required
              />
            </div>

            {/* Event Picture */}
            <div>
              <label
                htmlFor="eventPic"
                className="block text-sm font-medium mb-1"
              >
                Event Picture (Optional)
              </label>
              <Input
                type="file"
                id="eventPic"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            {/* Messages */}
            {messages.error && (
              <p className="text-red-600 text-center">{messages.error}</p>
            )}
            {messages.success && (
              <p className="text-green-600 text-center">{messages.success}</p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground rounded-full w-full py-3"
              >
                Create Event
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddEvent;
