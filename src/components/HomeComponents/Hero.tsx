import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="bg-green-700 [&>*]:text-white">
      <div className="flex flex-wrap justify-between items-center gap-4 max-w-[1200px] mx-auto p-8">
        <div className="max-w-[500px]">
          <h1 className="text-4xl font-bold">
            Order groceries for delivery or pickup today
          </h1>
          <p className="my-4">
            Get fresh groceries delivered to your door or ready for pickup—fast,
            easy, and on your schedule.
          </p>
          <Button className="bg-orange-600">
            Sign up for 3 free deliveries now
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="rounded-md object-cover w-full sm:w-[500px]"
        />
      </div>
    </section>
  );
}
export default Hero;
