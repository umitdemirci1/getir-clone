import { Outlet } from "react-router-dom";
import GlobalLayout from "./layouts/global-layout";
import Main from "./pages/main/home";

function App() {
  return (
    <div className="App">
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    </div>
  );
}

export default App;
