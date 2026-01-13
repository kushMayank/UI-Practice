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
import { RerenderFixComponent } from "./Components/Performance/ReactPerformance.jsx";

function App() {
  return (
    <>
      {/* <HorizontalLoader />
      <DiceApp />*/}
      <Accessibility />
      <Counter />
      <Users />
      <ControlledInput />
      <FocusInput />
      <UserForm />
      <DynamicList />
      <RerenderFixComponent />
    </>
  );
}

export default App;
