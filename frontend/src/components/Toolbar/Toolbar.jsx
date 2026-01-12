const Toolbar = ({ color, setColor, size, setSize, tool, setTool }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "15px",
        alignItems: "center",
        background: "#f2f2f2",
      }}
    >
      {/* Color Picker */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* Brush Size */}
      <input
        type="range"
        min="1"
        max="20"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      {/* Pen */}
      <button
        onClick={() => setTool("pen")}
        style={{ background: tool === "pen" ? "#ccc" : "" }}
      >
        Pen
      </button>

      {/* Eraser */}
      <button
        onClick={() => setTool("eraser")}
        style={{ background: tool === "eraser" ? "#ccc" : "" }}
      >
        Eraser
      </button>
    </div>
  );
};

export default Toolbar;
