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

// lifecycle methods Mounting,Updating,Unmounting
// For Mounting
// 1st constructor() method is called  
// 2nd render() method is called
// 3rd componentDidMount() is called ---> its called after the components are render 

// For Updating
// 1st render() method is called  
// 2nd componentDidUpdate() method is called --> its called when the states are changed 

// For Unmounting
// 1st componentWillUnmount() method is called when the component is about to be deleted from react dom  

class App extends React.Component {
  constructor() {
    super();//it inerits the properties
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
    this.unsubscribeFromAuth(); //closing the subscribe
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/*components will render at same page to avoid this we use Switch */}
        <Switch>
          {/* Route is used to give url path, it has attributes path and exact  */}
          {/* path helps to give url  */}
          {/* exact ---> if the path matches exactly then only the component will render  */}
          {/* example 
             here we have to mention the exact otherwise for path='about/name' it matches with path="/about"
             so in order to distinguish or it should not rendered at same page as both paths are different we use exact attribute
             exact path='/about' if matches then only the component will render otherwise not.  
              <Route exact path='/about' component={HomePage} />
              <Route path='about/name' component={Shoppage} />      
          */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>

      // as we have used div element to render all components inside it but the disadvantage is it adds 
      // a new layer to our page 
      //**To avoid this  we use React.Fragment or <>< which helps to render multi jsx components without adding div*/
      //**EXAMPLE*/
      // <>
      // <About>
      // <Contact>
      // </>
    );
  }
}

export default App;
