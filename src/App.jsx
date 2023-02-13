import { Hero } from "./components";
import { heroApi } from "./data/data";

const App = () => {
  return (
    <main>
      <Hero heroapi={heroApi} />
    </main>
  );
};

export default App;
