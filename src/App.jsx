import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ImageLoading from "./Page/ImageLoading";

const Home = React.lazy(() => import('./Page/Home/Home'));

function App() {
  return (
    <Suspense fallback={<ImageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
export default App;
