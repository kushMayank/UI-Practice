import "./App.css";
import DiceApp from "./Components/DiceApp";
import HorizontalLoader from "./Components/HorizontalLoader";
import Accessibility from "./Components/Accessibility";
import {
  Counter,
  Users,
  ControlledInput,
  FocusInput,
} from "./Components/ReactSyntex";
import { UserForm, DynamicList } from "./Components/FormComponents";
// import { RerenderFixComponent } from "./Components/React-Performance/ReactPerformance.js";
import { HeavyPage } from "./Components/React-Performance/HeavyRendering.jsx";
import { SearchExportComponent } from "./Components/React-Performance/Deboucing.jsx";
import { ScrollComponent } from "./Components/React-Performance/Throlling.jsx";
import {Todos} from './Components/Todos.jsx'
import {TodosEdit} from './Components/TodosEdit.jsx'
import {DebounceSearch} from './Components/React-Performance/Practice.jsx'
import {ThrottleButton} from './Components/React-Performance/Practice.jsx'

function App() {
  return (
    <>
      {/* <HorizontalLoader />
      <DiceApp />*/}
      {/* <Accessibility />
      <Counter />
      <Users />
      <ControlledInput />
      <FocusInput />
      <UserForm />
      <DynamicList />*/}
      {/* <RerenderFixComponent />*/}
      {/* <HeavyPage />*/}
      {/* <SearchExportComponent />
      <ScrollComponent /> */}
      {/* <Todos/>
      <TodosEdit/> */}
      <DebounceSearch/>
      <ThrottleButton/>
    </>
  );
}

export default App;
