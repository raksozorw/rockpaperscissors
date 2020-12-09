import Header from "./components/Header";
import Footer from "./components/Footer";

const { default: MainPage } = require("./components/MainPage");

function App() {
  return (
    <div className='app'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
