import React from 'react';
import { Container } from 'reactstrap';
import NavigationBar from './components/navbar';


function App() {
  return (
    <React.Fragment>
       <NavigationBar />
      <Container>
      <h1>Container here</h1>
    </Container>
   
    </React.Fragment>
  );
}

export default App;
