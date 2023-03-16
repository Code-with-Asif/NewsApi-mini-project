import NewsApi from "./NewsApi";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NewsApi />
    </Router>
  );
}

export default App;
