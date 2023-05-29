import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  TypographyStylesProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import NavBar from "./components/navbar";
function Providers(props: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <ModalsProvider>
          <TypographyStylesProvider>
            <Notifications position="bottom-right" zIndex={9999} />
            {props.children}
          </TypographyStylesProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function App() {
  return (
    <div className="app">
      <Providers>
        <NavBar/>
      </Providers>
    </div>
  );
}

export default App;
