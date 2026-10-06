import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./components/ui/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <div className=" bg-blue-500 p-10">
      <h1 className="text-5xl font-bold text-white">
        Tailwind funciona
      </h1>
    </div>

    <div className="flex gap-3">
      <Button>
        Cobrar
      </Button>

      <Button variant="secondary">
        Guardar
      </Button>

      <Button variant="outline">
        Cancelar
      </Button>

      <Button variant="destructive">
        Eliminar
      </Button>
    </div>
    </main>
  );
}

export default App;
