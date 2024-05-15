// import { useState } from 'react';
// import { charity_backend } from '../../declarations/charity_backend';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Layout, CreateDonate, DonatePage, ExplorePage, LoginForm, SettingsPage, TransactionPage, RegisterForm} from './components';

function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   charity_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    
    <Router>
      <Routes>
        <Route index element={
          <LoginForm />
        } />
        <Route path="/" element={
          <Layout />
        }>
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate/create" element={<CreateDonate />} />
          <Route path="/donate/explore" element={<ExplorePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </Router>
    // <main>
    //   <img src="/logo2.svg" alt="DFINITY logo" />
    //   <br />
    //   <br />
    //   <form action="#" onSubmit={handleSubmit}>
    //     <label htmlFor="name">Enter your name: &nbsp;</label>
    //     <input id="name" alt="Name" type="text" />
    //     <button type="submit">Click Me!</button>
    //   </form>
    //   <section id="greeting">{greeting}</section>
    // </main>
  );
}

export default App;
