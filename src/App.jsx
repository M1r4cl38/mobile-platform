import { BrowserRouter, Routes, Route} from "react-router-dom";

import style from './App.module.css';
import { Feature3 } from "./pages/Feature3";
import { Features } from "./pages/Features";
import { Feature2 } from "./pages/Feature2";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { More } from "./pages/More";
import { Register } from "./pages/Register";
import { Terms } from "./pages/Terms";

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/main" element={<Main />} />
          <Route path="/more" element={<More />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/:featureId" element={<Feature2 />} />
          <Route path="/features/:featureId" element={<Feature3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
