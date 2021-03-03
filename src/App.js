import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./components/shop/shop.component";
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

// const TopicsList = () => (
//   <div>
//     <h1>TopicsList</h1>
//   </div>
// )

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TopicDetail{props.match.params.topicId}</h1>
//       <h1 onClick={() => props.history.push('/hats')}>TopicDetail</h1>
//     </div>
//   )
// }
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/sign' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
