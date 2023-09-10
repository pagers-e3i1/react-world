import { input } from "./style.css";

interface Props extends React.HTMLAttributes<HTMLInputElement>, StyleProps {}

export default function TextInput(props: Props) {
  return <input {...props} className={`${input} ${props.className}`} />;
}
