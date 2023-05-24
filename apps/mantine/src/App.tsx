import { Paper,Text,Button, MantineProvider } from '@mantine/core'
import './App.css'

function App() {

  return (

 <div className="app">

<MantineProvider>
<Paper>
    <Text>Hello</Text>
</Paper>

<Button>Hello</Button>
</MantineProvider>
 </div>

  )
}

export default App
