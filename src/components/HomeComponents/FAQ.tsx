import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqData } from "@/data/faqData";

function FAQ() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-center">Common questions</h2>
        <div className="max-w-[1200px] mx-auto p-8">
          <Accordion type="single" collapsible className="[&_div>p]:mb-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answers.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
export default FAQ;
