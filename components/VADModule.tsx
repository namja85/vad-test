import { useMicVAD } from "@ricky0123/vad-react";
import clsx from "clsx";

const vadDefaultOptions = {};

export const VADModule = () => {
  // const vad = useMicVAD({ ...vadDefaultOptions });
  const vad = useMicVAD({
    onSpeechEnd(audio: Float32Array) {
      console.log("speech end", audio);
    },
    startOnLoad: false,
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
      <button
        className={clsx(
          "bg-blue-500 text-white p-2 rounded-md",
          vad.listening && "bg-gray-500"
        )}
        onClick={() => vad.start()}
        disabled={vad.listening}
      >
        Start
      </button>
      <button
        className={clsx(
          "bg-blue-500 text-white p-2 rounded-md",
          !vad.listening && "bg-gray-500"
        )}
        onClick={() => vad.pause()}
        disabled={!vad.listening}
      >
        Pause
      </button>
    </div>
  );
};
