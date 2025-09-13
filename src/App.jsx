import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav>
          <Link to="/" className={styles.navButton}>Главная</Link>
          <Link to="/login" className={styles.navButton}>Вход</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;