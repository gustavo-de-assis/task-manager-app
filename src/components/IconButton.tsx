import { IconType } from "react-icons";

interface ButtonProps {
  //children: React.ReactNode;
  Icon: IconType;
  handler: () => void;
  size: number;
}

export default function IconButton(props: Readonly<ButtonProps>) {
  const { Icon, handler, size } = props;

  return (
    <div>
      <button>{Icon && <Icon size={size} onClick={() => handler} />}</button>
    </div>
  );
}
