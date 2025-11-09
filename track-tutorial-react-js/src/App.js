import React, { useState } from 'react';

// 必要に応じて、他のimport文（例：import './App.css';）は残しておいてください。

function App() {
  // ステートでテキストの表示/非表示を管理
  const [showText, setShowText] = useState(false);

  // クリック時のハンドラ
  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div>
      {/* 仕様通り ID: track-button を設定 */}
      <button id="track-button" onClick={handleClick}>
        Click me!!
      </button>

      {/* 仕様通り ID: track-text を設定し、条件付きでテキストを表示 */}
      <div id="track-text">
        {showText ? 'hello track' : null}
      </div>
    </div>
  );
}

export default App;
