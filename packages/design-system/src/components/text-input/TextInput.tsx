import { input } from "./style.css";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    StyleProps {}

export default function TextInput(props: Props) {
  return <input {...props} className={`${input} ${props.className}`} />;
}
