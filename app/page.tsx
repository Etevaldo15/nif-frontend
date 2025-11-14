import NifValidatorWrapper from "./components/NifValidatorWrapper";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <NifValidatorWrapper />
      </div>
    </main>
  );
}
