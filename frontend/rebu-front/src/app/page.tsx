"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { fetchEstimate } from "./service/requests";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEstimate({
      customer_id: userId,
      origin: origin,
      destination: destination,
    });
    // alert("Estimativa enviada! Confira os valores no console.");
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Rebu Transportes</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.labelDiv}>
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
          </div>

          <div className={styles.labelDiv}>
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
          </div>

          <div className={styles.labelDiv}>
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
          </div>

          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}
