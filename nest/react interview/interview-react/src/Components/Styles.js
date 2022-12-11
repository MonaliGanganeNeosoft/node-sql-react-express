import React, { useState } from "react";
import "./Styles.css";

const Styles = () => {
  const [theme, setTheme] = useState(false);
  const styles = {
    internal: {
      color: "green",
    },
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
  };
  const toggletheme = () => {
    setTheme(!theme);
  };
  return (
    // <>
    //   <h1 className="external">External</h1>
    //   <h1 style={styles.internal}>Internal</h1>
    //   <h1 style={{ color: "blue", backgroundColor: "black" }}>inline</h1>
    //   <button onClick={toggletheme}>Toggle theme</button>
    // </>

    // <>
    //   <h1 className="external">External</h1>
    //   <h1 style={theme ? styles.light : styles.dark}>Internal</h1>
    //   <h1 style={{ color: "blue", backgroundColor: "black" }}>inline</h1>
    //   <button onClick={toggletheme}>Toggle theme</button>
    // </>

    <>
      <div style={theme ? styles.light : styles.dark}>
        <h1>External</h1>
        <h1>Internal</h1>
        <h1>inline</h1>
        <button onClick={toggletheme}>Toggle theme</button>
      </div>
    </>
  );
};

export default Styles;
