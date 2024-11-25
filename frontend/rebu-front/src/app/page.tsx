"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ID do Usuário:", userId);
    console.log("Endereço de Origem:", origin);
    console.log("Endereço de Destino:", destination);
    alert("Estimativa enviada! Confira os valores no console.");
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Rebu Transportes</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="userId" className={styles.label}>
            ID do Usuário:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            placeholder="Digite o ID do usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <label htmlFor="origin" className={styles.label}>
            Endereço de Origem:
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Digite o endereço de origem"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />

          <label htmlFor="destination" className={styles.label}>
            Endereço de Destino:
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Digite o endereço de destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}
