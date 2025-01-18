import { scan } from "react-scan";
import { VADModule } from "@/components/VADModule";
import { useState } from "react";
import { VadMode } from "@/types";
import { Button } from "@/components/Button";

if (typeof window !== "undefined") {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

export default function Home() {
  const [vadMode, setVadMode] = useState<VadMode>("command");

  const handleToggleMode = () => {
    setVadMode(vadMode === "command" ? "conversation" : "command");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="my-4">
        <p className="space-x-8">
          <span className="font-bold">VadMode: {vadMode}</span>
          <Button onClick={handleToggleMode}>toggleMode</Button>
        </p>
      </div>
      <VADModule key={vadMode} vadMode={vadMode} />
    </div>
  );
}
