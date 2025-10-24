import Text from "../components/text"

interface TitleAndSubTitleProps {
  title: string;
  subtitle: string;
}

export default function TitleAndSubTitle({title, subtitle}: TitleAndSubTitleProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
      <Text className="!text-gray-100" variant="title-lg">
        {title}
      </Text>
      <Text className="!text-gray-300" variant="text-sm">
        {subtitle}
      </Text>
    </div>
    </>
  );
}