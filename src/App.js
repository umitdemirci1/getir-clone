import GlobalLayout from "./layouts/global-layout";
import Main from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <GlobalLayout>
        <Main />
      </GlobalLayout>
    </div>
  );
}

export default App;
