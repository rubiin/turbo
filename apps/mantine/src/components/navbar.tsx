import {Container, Header} from '@mantine/core'
import Logo from './Logo';

const mainLinks = [
  {
     link: '',
     label: 'Home',
  },

  {
     link: 'dashboard',
     label: 'Dashboard',
  },
  {
     link: 'blog',
     label: 'Blog',
  },
  {
     link: 'portfolio',
     label: 'Portfolio',
  },
];

const NavBar = () => {
  return <Header height={80}>
  <Container>
    <Logo/>
  </Container>
  </Header>;
};

export default NavBar;
