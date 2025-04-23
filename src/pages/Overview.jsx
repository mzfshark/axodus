// src/pages/Overview.jsx
import React, { useEffect, useState } from "react";
import { getOverviewStats } from "../api/protocolData";
import styles from "../styles/Global.module.css";

const Overview = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      const data = await getOverviewStats();
      setStats(data);
    }
    fetchStats();
  }, []);

  if (!stats) return <p>Loading protocol data...</p>;

  return (
    <div className={styles["dashboard-container"]}>
      <h1>Axodus Protocol Overview</h1>

      <div className={styles["dashboard-summary"]}>
        <div>
          <strong>TVL:</strong> ${stats.totalValueLocked.toLocaleString()}
        </div>
        <div>
          <strong>Users:</strong> {stats.totalUsers}
        </div>
        <div>
          <strong>Products:</strong> {stats.totalProducts}
        </div>
        <div>
          <strong>Protocol Fee:</strong> {stats.protocolFee}%
        </div>
      </div>

      <div className={styles["dashboard-section"]}>
        <h2>Registered Investment Products</h2>
        <ul>
          {stats.products.map((p) => (
            <li key={p.address}>
              {p.name} — {p.type} ({p.chain}) | ROI: {p.roi}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
