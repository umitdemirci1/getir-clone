import AnimatedFragment from "./components/AnimatedFragment";
import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AnimatedFragment></AnimatedFragment>
      <Categories></Categories>
      <div className="container mx-auto px-[144px]">
        <Campaigns></Campaigns>
        <MobileApp></MobileApp>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
