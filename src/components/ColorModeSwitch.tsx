import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}