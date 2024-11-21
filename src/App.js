import "./App.css";
import React, { useState } from "react";
import Menubar from "./components/Menubar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div>
      <Router>
        <Menubar />
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Routes>
          {categories.map((category) => (
            <Route
              key={category}
              path={`/${category === "general" ? "" : category}`}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key={category}
                  pageSize={pageSize}
                  country="in"
                  category={category}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
