import { useState } from "react";

import Bg from "./Bg.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bg />
    </>
  );
}

export default App;
