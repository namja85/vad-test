import { useMicVAD } from "@ricky0123/vad-react";
import { Vad, VadMode, VadOptions } from "@/types";
import { VadDashBaord } from "./VADDashBaord";
import { forwardRef, useImperativeHandle } from "react";

const vadOptionsByMode: { [key in VadMode]: VadOptions } = {
  command: {
    redemptionFrames: 5,
  },
  conversation: {
    redemptionFrames: 20,
  },
};

export interface VADModule {
  instance: Vad;
}

export const VADModule = forwardRef(
  ({ vadMode }: { vadMode: VadMode }, ref) => {
    useImperativeHandle(ref, () => ({
      instance: vad,

      // start: () => {
      //   console.log("VADModule vad.start()");
      //   vad.start();
      // },
      // pause: () => {
      //   console.log("VADModule vad.pause()");
      //   vad.pause();
      // },
      // toggle: () => {
      //   console.log("VADModule vad.toggle()");
      //   vad.toggle();
      // },
    }));

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
  }
);

VADModule.displayName = "VADModule";
