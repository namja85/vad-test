import clsx from "clsx";
import { useMicVAD } from "@ricky0123/vad-react";
import { VadMode, VadOptions } from "@/types";
import { Button } from "./Button";

const vadDefaultOptions: VadOptions = {};
const vadOptionsByMode: { [key in VadMode]: VadOptions } = {
  command: {
    redemptionFrames: 5,
  },
  conversation: {
    redemptionFrames: 20,
  },
};

export const VADModule = ({ vadMode }: { vadMode: VadMode }) => {
  // const vad = useMicVAD({ ...vadDefaultOptions });
  const vad = useMicVAD({
    onSpeechEnd(audio: Float32Array) {
      console.log("speech end", audio);
    },
    baseAssetPath: "/",
    onnxWASMBasePath: "/",
    startOnLoad: false,
    ...vadOptionsByMode[vadMode],
  });

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
