import "./App.css";
import { Box } from "./components/Box";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button label="버튼" size="large" />
      <Box label="박스" size="small" />
    </>
  );
}

export default App;
