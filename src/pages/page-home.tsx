import Card from "../components/card";
import Container from "../components/container";
import LogoImage from "../assets/images/logo-hair-day.svg?react"
import SunIcon from "../assets/icons/sun-horizon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import MooStars from "../assets/icons/moon-stars.svg?react";

import TitleAndSubTitle from "./title-and-subtitle";
import Form from "./form";
import DateContent from "../components/date-content";
import YourSchedule from "../components/yourSchedule";

export default function PageHome() {
  return (
    <Container className="flex justify-left items-start min-h-screen">
      <LogoImage className="relative left-31 top-[-15px]" />
      <Card size={"md"} className="w-[498px] px-20 py-20 rounded-lg">
        
        <TitleAndSubTitle title="Agende um atendimento" subtitle="Selecione data, horário e informe o nome do cliente para criar o agendamento" />
        <Form />
      </Card>
      <Card size={"none"} className="w-[906px] px-20 py-20 rounded-lg bg-transparent">
        <div className="flex justify-between items-start w-full">
          <TitleAndSubTitle
            title="Sua agenda"
            subtitle="Consulte os seus cortes de cabelo agendados por dia"
          />
          <DateContent />
        </div>
        <div className="flex flex-col justify-between items-start w-full mt-7 gap-5">
          <YourSchedule
            icon={SunIcon}
            period="Manhã"
            range="09h - 12h"
            items={[
              { time: "11:00", name: "Álvaro Braz" },
            ]}
            onDelete={(time) => console.log("Remover horário:", time)}
          />

          <YourSchedule
            icon={CloudSun}
            period="Tarde"
            range="13h - 18h"
            items={[
              { time: "13:00", name: "Álvaro Braz" },
              { time: "14:30", name: "Lucas Mendes" },
              { time: "16:00", name: "Álvaro Braz" },
              { time: "17:30", name: "Lucas Mendes" },
            ]}
            onDelete={(time) => console.log("Remover horário:", time)}
          />

          <YourSchedule
            icon={MooStars}
            period="Noite"
            range="19h - 21h"
            items={[
              { time: "21:00", name: "Lucas Mendes" },
            ]}
            onDelete={(time) => console.log("Remover horário:", time)}
          />
        </div>

      </Card>
      
    </Container>

  )
  
}