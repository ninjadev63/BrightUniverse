import "./App.scss";
import i18n from "./i18n";
import Landing from "./pages/Landing";
import Loading from "./components/Loading";
import React, { Suspense } from "react";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    </div>
  );
}

export default App;
