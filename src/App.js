import { UserProvider } from "./context/UserContext";
import Router from "./router";

function App() {

  return (
    <div>
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}
export default App;