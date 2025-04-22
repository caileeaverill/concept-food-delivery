import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { FaQuoteLeft } from "react-icons/fa6";
import generateTestimonial from "@/data/testimonialsData";

function Testimonials() {
  return (
    <>
      <section className="bg-orange-50">
        <h2 className="text-2xl font-bold text-center">
          Hear what others have to say
        </h2>
        <div className="max-w-[1200px] mx-auto p-8">
          <div className="flex flex-wrap gap-4">
            {generateTestimonial.map((item, index) => (
              <Card key={index} className="w-full sm:basis-[calc(33%-1rem)]">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <FaQuoteLeft className="mb-2" />
                    {item.tagline}
                  </CardTitle>
                  <CardDescription className="my-4">
                    "{item.text}"
                  </CardDescription>
                  <CardFooter className="flex justify-center items-center gap-2 my-2">
                    <Avatar>
                      <AvatarImage src={item.avatar} alt="@shadcn" />
                    </Avatar>
                    {item.name}
                  </CardFooter>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
