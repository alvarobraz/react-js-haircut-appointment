import Text from "../components/text"
import SelectDate from "./SelectDate";

import Calendar from "../assets/icons/calendar-blank.svg?react"

interface DataContentProps {
  title?: string;
} 

export default function DateContent({title}: DataContentProps) {
  return (
    <>
      {
        title && <Text className="!text-gray-200" variant="title-md">
            {title}
        </Text>
      }
        
        <SelectDate
          icon={Calendar}
          iconVariant="primary"
          onSelect={(date) => console.log(`Data selecionada: ${date}`)}
          size={"md"}
        />
    </>
  );
}

