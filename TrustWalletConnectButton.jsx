import React, { useState } from "react";

const TrustWalletConnectButton = ({ onConnected }) => {
  const [status, setStatus] = useState("disconnected");

  const handleConnect = async () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("connected");
      if (onConnected) onConnected();
    }, 1000);
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <button
        onClick={handleConnect}
        disabled={status === "connecting" || status === "connected"}
        style={{ padding: "12px 24px", fontSize: "16px", borderRadius: "8px" }}
      >
        {status === "connected" ? "Кошелек подключен" : "Подключить Trust Wallet"}
      </button>
      {status === "connecting" && <p>Подключение...</p>}
      {status === "connected" && <p>Trust Wallet успешно привязан!"}</p>}
    </div>
  );
};

export default TrustWalletConnectButton;