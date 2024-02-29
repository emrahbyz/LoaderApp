import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css";
const App = () => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PacmanLoader
          color={"#36d7b7"}
          loading={loading}
          size={100}
          aria-label="Loading ScaleLoader "
          data-testid="loader"
        />
      ) : (
        <img
          src="https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif"
          alt=""
        />
      )}
    </div>
  );
};

export default App;
