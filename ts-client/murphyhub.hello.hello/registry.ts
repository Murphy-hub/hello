import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateKv } from "./types/hello/hello/tx";
import { MsgDeleteKv } from "./types/hello/hello/tx";
import { MsgCreateKv } from "./types/hello/hello/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/murphyhub.hello.hello.MsgUpdateKv", MsgUpdateKv],
    ["/murphyhub.hello.hello.MsgDeleteKv", MsgDeleteKv],
    ["/murphyhub.hello.hello.MsgCreateKv", MsgCreateKv],
    
];

export { msgTypes }