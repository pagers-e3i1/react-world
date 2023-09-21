import {
  Button,
  Divider,
  Skeleton,
  Text,
  Textarea,
  TextInput,
} from "design-system";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1>리얼월드 START!!</h1>
        <Divider />
        <Skeleton borderRadius="90px" width="90px" height="90px" />
        <TextInput onChange={handleChangeInput} value={inputValue} />
        <Textarea />
        <Button>Button</Button>
        <Text>Typography</Text>
        <Text typography="h1">h1</Text>
      </div>
    </>
  );
}

export default App;
