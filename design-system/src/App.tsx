import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { COLOR } from "./styled-component/tokens/color";
import Checkbox from "./components/CheckBox";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const user = { name: "Brilly" };
  const handleLogin = () => {
    console.log("Login clicked");
  };
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  const handleCreateAccount = () => {
    console.log("Create Account clicked");
  };
  return (
    <>
      <Checkbox
        label="체크박스"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Button
        primary={true}
        size="large"
        backgroundColor={COLOR.sub.base}
        color={COLOR.palette.purple.weight}
      >
        버튼
      </Button>
      <Button label="테스트" size="small">
        테스트
      </Button>
      <Box size="small" backgroundColor={COLOR.palette.red.light} />
      <Input
        width="30rem"
        titleText="되나?"
        buttonText="Submit"
        placeHolder="테스트입니다"
        handleButton={() => {}}
      />
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
    </>
  );
}

export default App;
