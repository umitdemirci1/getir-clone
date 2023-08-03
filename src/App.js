import { Outlet } from "react-router-dom";
import GlobalLayout from "./layouts/global-layout";

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
