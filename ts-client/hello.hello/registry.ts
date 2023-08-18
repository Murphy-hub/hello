import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateKv } from "./types/hello/hello/tx";
import { MsgUpdateKv } from "./types/hello/hello/tx";
import { MsgDeleteKv } from "./types/hello/hello/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/hello.hello.MsgCreateKv", MsgCreateKv],
    ["/hello.hello.MsgUpdateKv", MsgUpdateKv],
    ["/hello.hello.MsgDeleteKv", MsgDeleteKv],
    
];

export { msgTypes }