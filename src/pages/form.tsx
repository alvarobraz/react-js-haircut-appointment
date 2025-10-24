import Button from "../components/button";
import DateContent from "../components/date-content";
import InputText from "../components/input-text";
import SelectTime from "../components/SelectTime";
import Text from "../components/text";

import UserSquare from "../assets/icons/user-square.svg?react"

export default function Form() {
  return (
    <>
      <div className="flex flex-col gap-2 mt-6">
        <DateContent title="Data" />

        <Text className="!text-gray-200 mt-4" variant="title-md">
            Horários
        </Text>

          <SelectTime
            disabledTimes={["10:00", "14:00"]}
            onSelect={(time) => console.log(`Horário selecionado: ${time}`)}
          />

        <div className="flex flex-col gap-2 mt-6">
          <Text className="!text-gray-200" variant="title-md">
            Cliente
          </Text>
          <InputText
            icon={UserSquare}
            iconVariant="primary"
            placeholder="Nome do Cliente"
            size="md"
            className="w-full"
          />
          <Button className="mt-6">AGENDAR</Button>
        </div>
      </div>
    </>
  );
}