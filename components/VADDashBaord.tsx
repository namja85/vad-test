import { Button } from "./Button";
import { Vad } from "@/types";

export const VadDashBaord = ({ vad }: { vad: Vad }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>VADModule</h1>
      <div className="w-64 flex flex-col">
        <p>Listening: {vad.listening ? "Yes" : "No"}</p>
        <p>User Speaking: {vad.userSpeaking ? "Yes" : "No"}</p>
        <p>Error: {vad.errored ? vad.errored : "None"}</p>
        <p>Loading: {vad.loading ? "Yes" : "No"}</p>
      </div>

      <hr />

      <Button onClick={() => vad.start()} disabled={vad.listening}>
        Start
      </Button>
      <Button onClick={() => vad.pause()} disabled={!vad.listening}>
        Pause
      </Button>
    </div>
  );
};
