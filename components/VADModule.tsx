import { useMicVAD } from "@ricky0123/vad-react";
import { VadMode, VadOptions } from "@/types";
import { VadDashBaord } from "./VADDashBaord";

const vadOptionsByMode: { [key in VadMode]: VadOptions } = {
  command: {
    redemptionFrames: 5,
  },
  conversation: {
    redemptionFrames: 20,
  },
};

export const VADModule = ({ vadMode }: { vadMode: VadMode }) => {
  const vad = useMicVAD({
    onSpeechEnd(audio: Float32Array) {
      console.log("speech end", audio);
    },
    baseAssetPath: "/",
    onnxWASMBasePath: "/",
    startOnLoad: false,
    ...vadOptionsByMode[vadMode],
  });

  return <VadDashBaord vad={vad} />;
};
