import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [showPara, setShowPara] = useState(false);

  return (
    <div>
      {/* Do not remove this main div */}

      <button
        id="click"
        onClick={() => setShowPara(true)}
      >
        Click me
      </button>

      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
};

export default App;
