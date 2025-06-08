import React from "react";

export default function App() {
  const [status, setStatus] = React.useState("idle");

  async function startServer() {
    setStatus("Starting...");
    const res = await fetch("/api/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command: "startServer" }),
    });
    const data = await res.json();
    setStatus(data.result);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Discordサーバー貸出管理</h1>
      <button onClick={startServer}>サーバー起動</button>
      <p>状態: {status}</p>
    </div>
  );
}
