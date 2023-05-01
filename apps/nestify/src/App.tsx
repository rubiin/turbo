import { ActionIcon, AppShell,ColorScheme,ColorSchemeProvider,Group, Header, Navbar, useMantineColorScheme } from '@mantine/core'
import './App.css'
import { Logo } from './logo';
import { MainLinks } from './mainlinks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { User } from './user';
import { useState } from 'react';
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

    <AppShell
    padding="md"
    fixed={false}
    navbar={
      <Navbar width={{ base: 300 }} height={500} p="xs">
        <Navbar.Section grow mt="xs">
          <MainLinks />
        </Navbar.Section>
        <Navbar.Section>
          <User />
        </Navbar.Section>
      </Navbar>
    }
    header={
      <Header height={60}>
        <Group sx={{ height: '100%' }} px={20} position="apart">
          <Logo colorScheme={colorScheme} />
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
            {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
          </ActionIcon>
        </Group>
      </Header>
    }
    styles={(theme) => ({
      main: {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    })}
  >
    Your application goes here
  </AppShell>
  </ColorSchemeProvider>
);

}

export default App
