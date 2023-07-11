import { Switch, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch
      id="dark-mode"
      colorScheme="green"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    >
      Dark Mode
    </Switch>
  );
}
