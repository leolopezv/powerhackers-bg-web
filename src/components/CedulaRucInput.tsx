import { useState } from "react";

export function CedulaRucInput() {
  const [valor, setValor] = useState("");
  const [mostrarInputAdicional, setMostrarInputAdicional] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!/^\d*$/.test(inputValue)) {
      setError("Solo se permiten números");
      return;
    }
    
    setError(""); 
    setValor(inputValue);

    if (inputValue.length === 10) {
      setMostrarInputAdicional(false);
    } else if (inputValue.length === 13) {
      setMostrarInputAdicional(true);
    }
  };

  return (
    <div>
      <label>Cédula o RUC:</label>
      <input 
        type="text" 
        value={valor} 
        onChange={handleChange} 
        maxLength={13} 
        placeholder="Ingrese su número"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      {mostrarInputAdicional && (
        <div>
          <label>Información adicional:</label>
          <input type="text" placeholder="Ingrese más datos" />
        </div>
      )}
    </div>
  );
}
