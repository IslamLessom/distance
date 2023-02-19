import React from 'react'

//components
import Preview from '../components/Home/Preview';
import Description from '../components/Home/Description/Description.js';
import Footer from '../components/Footer';

//styled-components
import {Container} from './Home.elements'

function Home() {
  return (
    <Container>
      <Preview />
      <Description />
      <Footer />
    </Container>
  )
}

export default Home
