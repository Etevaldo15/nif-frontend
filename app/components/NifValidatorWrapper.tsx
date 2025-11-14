"use client";
import { useEffect, useRef } from "react";

export default function NifValidatorWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptUrl =
      "https://cdn.jsdelivr.net/gh/Etevaldo15/nif-validator-component@main/nif-validator.js";

    if (window.customElements.get("nif-validator")) {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(
          document.createElement("nif-validator")
        );
      }
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(
          document.createElement("nif-validator")
        );
      }
    };
    script.onerror = () => {
      console.error("Falha ao carregar o componente NIF");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={containerRef}>Carregando validador...</div>;
}
