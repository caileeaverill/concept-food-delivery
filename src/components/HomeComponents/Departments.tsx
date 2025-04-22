import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";

import groceryDepartmentData from "@/data/groceryDepartmentData";

function Departments() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] m-auto p-8">
          <h2 className="text-2xl font-bold">Browse departments</h2>
          <div className="grid gap-4 py-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            {groceryDepartmentData.map((item, index) => (
              <Link to={item.link}>
                <Card
                  key={index}
                  className="basis-1/3 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <img
                      src={item.image}
                      alt="Image"
                      className="rounded-md object-cover w-full h-[200px]"
                    />
                    <CardTitle className="pt-4">{item.department}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Departments;
