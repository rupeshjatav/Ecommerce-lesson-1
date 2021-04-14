import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./components/shop/shop.component";
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

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
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'currentUser': null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    //whenever the state changes through our app into firebase
    //firebase sends back the updated state to users
    //that the user has signed in or signed out
    //auth.onAuthStateChanged-->keeps track of all authenticated accounts
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ 'currentUser': user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();//closing the subscribe
  }

  render() {
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
}

export default App;
