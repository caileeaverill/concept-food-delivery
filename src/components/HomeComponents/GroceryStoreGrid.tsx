import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";

import groceryStoreList from "@/data/groceryStoreData";
import { Link } from "react-router-dom";

function GroceryStoreGrid() {
  // function assigns the most popular store randomly to 3 stores

  const mostPopularIndexes = new Set();
  while (mostPopularIndexes.size < 3) {
    mostPopularIndexes.add(Math.floor(Math.random() * 3));
  }

  return (
    <section>
      <div className="max-w-[1200px] m-auto p-8">
        <h2 className="text-2xl font-bold">Find stores nearby</h2>
        <p className="text-neutral-500">
          Hover on a store to see store times and features
        </p>
        <>
          <Carousel>
            <CarouselContent className="py-8">
              {groceryStoreList.map((store, index) => {
                const Icon = store.icon;
                return (
                  <CarouselItem key={index} className="basis-1/5">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Link to={store.link}>
                          <Card className="relative w-full transition-all duration-300 hover:shadow-lg ">
                            {mostPopularIndexes.has(index) && (
                              <Badge className="absolute -top-2 right-4 bg-lime-700">
                                Most Popular
                              </Badge>
                            )}
                            <CardHeader>
                              <span className="bg-orange-100 w-12 h-12 rounded-md flex justify-center items-center mt-4 mb-2">
                                <Icon className="w-6 h-6 text-orange-600" />
                              </span>
                              <CardTitle>{store.name}</CardTitle>
                              <CardDescription>
                                By: {store.orderBy}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p className="text-sm">
                          Open daily from {store.storeTimes}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {store.storeFeatures}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
        <p className="text-xs text-neutral-500 text-right">
          Offers subject to terms and eligibility
        </p>
      </div>
    </section>
  );
}
export default GroceryStoreGrid;
