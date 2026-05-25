import React from "react";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        color: "#111",
        fontFamily: "Inter, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "white",
          border: "1px solid #e5e5e5",
          borderRadius: "32px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <img
            src="data:image/svg+xml,%3Csvg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M27 25C23 21 16 24 18 30L31 84C33 92 42 95 49 90L78 69C84 65 84 56 78 52L27 25Z' fill='%23B487EA'/%3E%3Crect x='48' y='60' width='34' height='8' rx='4' fill='%235B21B6'/%3E%3Cpath d='M76 74C82 72.5 85.5 69 87 63C88.5 69 92 72.5 98 74C92 75.5 88.5 79 87 85C85.5 79 82 75.5 76 74Z' fill='%237C1DFF'/%3E%3C/svg%3E"
            alt="Aether AI"
            style={{
              width: "56px",
              height: "56px",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "42px",
                fontWeight: 700,
              }}
            >
              Aether AI
            </h1>

            <p
              style={{
                margin: "4px 0 0 0",
                color: "#666",
              }}
            >
              Safe AI-powered screen sharing assistant.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <h2>Shared screen</h2>

            <div
              style={{
                aspectRatio: "16 / 9",
                borderRadius: "20px",
                background: "#0f0f0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                marginTop: "16px",
              }}
            >
              No shared screen
            </div>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                border: "none",
                background: "#111827",
                color: "white",
                padding: "16px",
                borderRadius: "999px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Share screen
            </button>
          </div>

          <div
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <h2>Prompt</h2>

            <textarea
              placeholder="Describe what Aether should do..."
              style={{
                width: "100%",
                minHeight: "180px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                padding: "16px",
                resize: "none",
                marginTop: "16px",
                fontSize: "15px",
              }}
            />

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                border: "none",
                background: "#111827",
                color: "white",
                padding: "16px",
                borderRadius: "999px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Start
            </button>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            color: "#999",
            fontSize: "13px",
          }}
        >
          Made with &lt;3 from the Aether AI Dev
        </p>
      </div>
    </main>
  );
}
