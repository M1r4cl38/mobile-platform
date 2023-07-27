import { BrowserRouter, Routes, Route} from "react-router-dom";

import style from './App.module.css';
import { Feature3 } from "./pages/Feature 3";
import { Feature1 } from "./pages/Feature1";
import { Feature2 } from "./pages/Feature2";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { More } from "./pages/More";
import { Register } from "./pages/Register";
import { Terms } from "./pages/Terms";
import { Nopage } from "./pages/Nopage";


function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/main" element={<Main />} />
          <Route path="/more" element={<More />} />
          <Route path="/feature1" element={<Feature1 />} />
          <Route path="/feature2" element={<Feature2 />} />
          <Route path="/feature3" element={<Feature3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
