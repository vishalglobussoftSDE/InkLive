  import { useRef, useState, useEffect } from "react";
  import socket from "../../socket/socket";

  const Canvas = ({ color, size, tool }) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 60;

      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctxRef.current = ctx;
    }, []);

    useEffect(() => {
      const ctx = ctxRef.current;

      socket.on("draw-start", ({ x, y, color, size, tool }) => {
        if (tool === "eraser") {
          ctx.globalCompositeOperation = "destination-out";
          ctx.lineWidth = size * 2;
        } else {
          ctx.globalCompositeOperation = "source-over";
          ctx.strokeStyle = color;
          ctx.lineWidth = size;
        }

        ctx.beginPath();
        ctx.moveTo(x, y);
      });

      socket.on("draw-move", ({ x, y }) => {
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      socket.on("draw-end", () => {
        ctx.closePath();
      });

      return () => {
        socket.off("draw-start");
        socket.off("draw-move");
        socket.off("draw-end");
      };
    }, []);

 const startDrawing = (e) => {
  const x = e.nativeEvent.offsetX;
  const y = e.nativeEvent.offsetY;

  const ctx = ctxRef.current;

  // 🔥 APPLY TOOL CONFIG LOCALLY
  if (tool === "eraser") {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = size * 2;
  } else {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
  }

  ctx.beginPath();
  ctx.moveTo(x, y);
  setIsDrawing(true);

  socket.emit("draw-start", { x, y, color, size, tool });
};


    const draw = (e) => {
      if (!isDrawing) return;

      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;

      ctxRef.current.lineTo(x, y);
      ctxRef.current.stroke();

      socket.emit("draw-move", { x, y });
    };

    const stopDrawing = () => {
      ctxRef.current.closePath();
      setIsDrawing(false);
      socket.emit("draw-end");
    };

    return (
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ background: "white", display: "block" }}
      />
    );
  };

  export default Canvas;
