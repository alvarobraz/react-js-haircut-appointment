import Card from "../components/card";
import Container from "../components/container";
import LogoImage from "../assets/images/logo-hair-day.svg?react"

import TitleAndSubTitle from "./title-and-subtitle";
import Form from "./form";
import DateContent from "../components/date-content";

export default function PageHome() {
  return (
    <Container className="flex justify-left items-start min-h-screen">
      <LogoImage className="relative left-31 top-[-15px]" />
      <Card size={"md"} className="w-[498px] px-20 py-20 rounded-lg">
        
        <TitleAndSubTitle title="Agende um atendimento" subtitle="Selecione data, horário e informe o nome do cliente para criar o agendamento" />
        <Form />
      </Card>
      <Card size={"none"} className="w-[906px] px-20 py-20 rounded-lg bg-transparent">
        <div className="flex justify-between items-center w-full">
          <TitleAndSubTitle
            title="Sua agenda"
            subtitle="Consulte os seus cortes de cabelo agendados por dia"
          />
          <DateContent />
        </div>
      </Card>
      
    </Container>

  )
  
}