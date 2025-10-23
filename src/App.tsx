import Text from "./components/text";

import Calendar from "./assets/icons/calendar-blank.svg?react";
import CaretDown from "./assets/icons/caret-down.svg?react";
import CaretLeft from "./assets/icons/caret-left.svg?react";
import cloudSun from "./assets/icons/cloud-sun.svg?react";
import CaretRight from "./assets/icons/caret-right.svg?react";
import MoonStars from "./assets/icons/moon-stars.svg?react";
import SunHorizon from "./assets/icons/sun-horizon.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import UserSquare from "./assets/icons/user-square.svg?react";
import Icon from "./components/icon";
import ButtonIcon from "./components/button-icon";
import Button from "./components/button";
import InputText from "./components/input-text";
import SelectTime from "./components/SelectTime";
import SelectDate from "./components/SelectDate";

export default function App() {
  return (
    <div className="grid gap-3">
    <div className="flex flex-col gap-2">
      <Text variant="title-lg" className="text-pink-base">Olá mundo!</Text>
      <Text className="text-green-base">Olá mundo!</Text>
      <Text variant="title-md">Olá mundo!</Text>
      <Text variant="title-sm">Olá mundo!</Text>
      <Text variant="text-md">Olá mundo!</Text>
      <Text variant="text-sm">Olá mundo!</Text>
      <Text>Levar o dog pra passear</Text>
    </div>
    <div className="flex gap-1">
      <Icon svg={Calendar} className="fill-yellow" />
      <Icon svg={CaretDown} className="fill-yellow" />
      <Icon svg={CaretLeft} className="fill-yellow" />
      <Icon svg={CaretRight} className="fill-yellow" />
      <Icon svg={cloudSun} className="fill-yellow" />
      <Icon svg={MoonStars} className="fill-yellow" />
      <Icon svg={SunHorizon} className="fill-yellow" />
      <Icon svg={TrashIcon} className="fill-yellow" />
      <Icon svg={UserSquare} className="fill-yellow" />
    </div>
    <div className=" gap-1">
        <Button>AGENDAR</Button>
        <Button disabled>AGENDAR</Button>
      </div>
    <div className="flex gap-1">
      <ButtonIcon icon={TrashIcon} />
    </div>
    <div>
      <InputText
        icon={UserSquare}
        iconVariant="primary"
        placeholder="Nome do cliente"
        size="md"
      />
    </div>
    <SelectTime
      disabledTimes={["08:00", "09:30"]}
      onSelect={(time) => console.log(`Horário selecionado: ${time}`)}
    />

    <SelectDate
        icon={Calendar}
        iconVariant="primary"
        onSelect={(date) => console.log(`Data selecionada: ${date}`)}
      />
    </div>
    
  )
}