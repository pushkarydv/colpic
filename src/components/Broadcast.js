import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Broadcast() {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    axios
      .get("https://broadcasts-pushkaryadav.netlify.app/api/broadcast")
      .then((res) => {
        if (res.data.title) {
          setApiData({
            text: res.data.title,
            link: res.data.link,
          });
          setTimeout(() => {
            setApiData(null);
          }, 10000);
        }
      });
  }, []);
  return (
    <>
      {apiData && (
        <div style={{ transition: "all 0.6s ease" }}>
          <div
            style={{
              transition: "all 0.6s ease",
              display: "flex",
              justifyContent: "center",
              background: "linear-gradient(to right, #d946ef , #d946ef)",
              minHeight: "2rem",
              fontSize: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              color: "#fff",
              padding: "0.1rem",
            }}
          >
            <a
              href={apiData.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {apiData.text}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
