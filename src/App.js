import React,{Component} from 'react'
import ClassClick from './components/handlers/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/handlers/FunctionClick';
import Greet from "./components/Greet";
import Inline from './components/styles/Inline';
import Message from './components/Message';
import NameList from './components/render list/NameList';
import ParentComponent from './components/parent_chiled comps/ParentComponent';
import Stylesheet from './components/styles/Stylesheet';
import UserGreeting from './components/conditionaly rendering/UserGreeting';
import Welcome, {  } from "./components/Welcome";
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifeCycleMethods/LifecycleA';
import Fragments from './components/fragments/Fragments';
import PureCompo from './components/pure_component/PureCompo';
import ParentComp from './components/pure_component/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/Refs/FocusInput';
import FRParentInput from './components/Refs/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ClickCounter from './components/higherOrderCompo/ClickCounter';
import HoverCounter from './components/higherOrderCompo/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import User from './components/renderProps/User';
import CounterTwo from './components/renderProps/CounterTwo'
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext';
import PostList from './components/HttpRequest/PostList';
import PostForm from './components/HttpRequest/PostForm';
//the regular css is apliyed to every child component
//the css module is only appliyed for the same component
class App extends Component {
  render(){
  return (
    
    <div className="App">
      <PostForm/>
      {/* <PostList/> */}
      {/* <UserProvider value='Tarek' >
      <ComponentC/>
      </UserProvider> */}
      
    

      {/* <CounterTwo>
      {(count,incrementCount)=>(
      <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}
      </CounterTwo>
      <CounterTwo>
      {(count,incrementCount)=>(
      <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}
      </CounterTwo> */}
      

      
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn?'Tarek':'guest'} /> */}
      {/* <ClickCounter name='Tarek'/>
      <HoverCounter/> */}

      {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Joker'/>
      </ErrorBoundary> */}

      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Fragments/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error' >Error</h1> */}
      {/* <h1 className={styles.success} >Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name='Clark' heroName='Batman' >
        <p>i'm a super hero</p>
        <button>click me</button>
      </Greet> */}

      {/* <Welcome compName='Class Component'/> */}
    </div>
  );
}
}
export default App;
/*
what if we don't know what to pass as props to the
children component we pass it in between the component tag
and in the compo defenition use the {props.children}
*/
