import { ReactRealTimeVADOptions, type useMicVAD } from "@ricky0123/vad-react";

export type VadMode = "command" | "conversation";

export type VadOptions = Partial<ReactRealTimeVADOptions>;

export type Vad = ReturnType<typeof useMicVAD>;
