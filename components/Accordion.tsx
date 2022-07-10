import { useState } from "react";
import { CourseModule } from "../lib/courses";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ data }: { data: Array<CourseModule> }) => {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index);
  };

  return (
    <div className="space-y-4">
      {data.map((courseModule, index) => (
        <AccordionItem
          key={index}
          isActive={activeAccordion === index}
          toggle={toggleAccordion}
          index={index}
          item={courseModule}
        />
      ))}
    </div>
  );
};
