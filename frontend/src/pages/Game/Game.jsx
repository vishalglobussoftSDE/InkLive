import { useState } from "react";
import Canvas from "../../components/Canvas/Canvas";
import Toolbar from "../../components/Toolbar/Toolbar";

const Game = () => {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(3);
  const [tool, setTool] = useState("pen"); // pen | eraser

  return (
    <div>
      <Toolbar
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        tool={tool}
        setTool={setTool}
      />

      <Canvas color={color} size={size} tool={tool} />
    </div>
  );
};

export default Game;
