import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./Components/Header";
function App() {
  return (
    <MantineProvider>
      <HeaderMegaMenu/>
    </MantineProvider>
  );
}

export default App;
