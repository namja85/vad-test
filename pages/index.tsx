import { scan } from "react-scan";
import { VADModule } from "@/components/VADModule";
import { useRef, useState } from "react";
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
  const vadModuleRef = useRef<VADModule | null>(null);

  const handleToggleMode = () => {
    setVadMode(vadMode === "command" ? "conversation" : "command");
  };

  console.log("index");

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="space-x-8">
        <span className="font-bold">VadMode: {vadMode}</span>
        <Button onClick={handleToggleMode}>toggleMode</Button>
      </div>
      <div className="space-x-8">
        <p>use child component's instance</p>
        <Button
          onClick={() => vadModuleRef.current?.instance.start()}
          disabled={vadModuleRef.current?.instance.listening}
        >
          VAD Start
        </Button>
        <Button
          onClick={() => vadModuleRef.current?.instance.pause()}
          disabled={!vadModuleRef.current?.instance.listening}
        >
          VAD Pause
        </Button>
      </div>
      <VADModule ref={vadModuleRef} key={vadMode} vadMode={vadMode} />
    </div>
  );
}
