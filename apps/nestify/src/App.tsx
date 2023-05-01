import { AppShell, Button, Navbar } from '@mantine/core'
import './App.css'
function App() {

  return (
    <AppShell
      navbar={
        <Navbar
          width={{ base: 300 }}
          height='100vh'
        >
          <Navbar.Section>    <Button variant='subtle' fullWidth>Assets/Hosts</Button></Navbar.Section>
          <Navbar.Section>  <Button variant='subtle' fullWidth>Software</Button></Navbar.Section>
          <Navbar.Section>  <Button variant='subtle' fullWidth>Configurations</Button></Navbar.Section>
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  )
}

export default App
