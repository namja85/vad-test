import { scan } from "react-scan";
import { VADModule } from "@/components/VADModule";

if (typeof window !== "undefined") {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <VADModule />
    </div>
  );
}
