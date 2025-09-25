import React, { useState } from "react";
import TrustWalletConnectButton from "./TrustWalletConnectButton";

const ExchangeForm = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isFormCompleted, setFormCompleted] = useState(false);

  // Пример заполнения формы обмена
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormCompleted(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12 }}>
      <h2>Обмен криптовалюты</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Сумма обмена:</label>
          <input type="number" min="0" required />
        </div>
        <div>
          <label>Метод обмена:</label>
          <select required>
            <option value="">Выберите</option>
            <option value="USDT">Tether USDT</option>
            <option value="BTC">Bitcoin BTC</option>
            <option value="ETH">Ethereum ETH</option>
          </select>
        </div>
        <button type="submit">Продолжить</button>
      </form>

      {/* KYC: Подключение кошелька Trust Wallet */}
      {isFormCompleted && !isWalletConnected && (
        <TrustWalletConnectButton onConnected={() => setWalletConnected(true)} />
      )}

      {/* Кнопка оплаты появляется только после KYC */}
      {isWalletConnected && (
        <button style={{ marginTop: 16, background: "#ffd600", color: "#222", fontWeight: "bold", padding: "12px 36px", borderRadius: 8 }}>
          Перейти к оплате
        </button>
      )}
    </div>
  );
};

export default ExchangeForm;