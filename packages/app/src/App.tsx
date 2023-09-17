import { swrOptions } from "apis/config/swr/options";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig value={swrOptions}>
      <p>hihi</p>
    </SWRConfig>
  );
}

export default App;
