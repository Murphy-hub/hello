/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "murphyhub.hello.hello";

export interface MsgCreateKv {
  creator: string;
  index: string;
  value: string;
}

export interface MsgCreateKvResponse {
}

export interface MsgUpdateKv {
  creator: string;
  index: string;
  value: string;
}

export interface MsgUpdateKvResponse {
}

export interface MsgDeleteKv {
  creator: string;
  index: string;
}

export interface MsgDeleteKvResponse {
}

function createBaseMsgCreateKv(): MsgCreateKv {
  return { creator: "", index: "", value: "" };
}

export const MsgCreateKv = {
  encode(message: MsgCreateKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgCreateKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateKv>, I>>(object: I): MsgCreateKv {
    const message = createBaseMsgCreateKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgCreateKvResponse(): MsgCreateKvResponse {
  return {};
}

export const MsgCreateKvResponse = {
  encode(_: MsgCreateKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateKvResponse {
    return {};
  },

  toJSON(_: MsgCreateKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateKvResponse>, I>>(_: I): MsgCreateKvResponse {
    const message = createBaseMsgCreateKvResponse();
    return message;
  },
};

function createBaseMsgUpdateKv(): MsgUpdateKv {
  return { creator: "", index: "", value: "" };
}

export const MsgUpdateKv = {
  encode(message: MsgUpdateKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgUpdateKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateKv>, I>>(object: I): MsgUpdateKv {
    const message = createBaseMsgUpdateKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgUpdateKvResponse(): MsgUpdateKvResponse {
  return {};
}

export const MsgUpdateKvResponse = {
  encode(_: MsgUpdateKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateKvResponse {
    return {};
  },

  toJSON(_: MsgUpdateKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateKvResponse>, I>>(_: I): MsgUpdateKvResponse {
    const message = createBaseMsgUpdateKvResponse();
    return message;
  },
};

function createBaseMsgDeleteKv(): MsgDeleteKv {
  return { creator: "", index: "" };
}

export const MsgDeleteKv = {
  encode(message: MsgDeleteKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: MsgDeleteKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteKv>, I>>(object: I): MsgDeleteKv {
    const message = createBaseMsgDeleteKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgDeleteKvResponse(): MsgDeleteKvResponse {
  return {};
}

export const MsgDeleteKvResponse = {
  encode(_: MsgDeleteKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKvResponse {
    return {};
  },

  toJSON(_: MsgDeleteKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteKvResponse>, I>>(_: I): MsgDeleteKvResponse {
    const message = createBaseMsgDeleteKvResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateKv(request: MsgCreateKv): Promise<MsgCreateKvResponse>;
  UpdateKv(request: MsgUpdateKv): Promise<MsgUpdateKvResponse>;
  DeleteKv(request: MsgDeleteKv): Promise<MsgDeleteKvResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateKv = this.CreateKv.bind(this);
    this.UpdateKv = this.UpdateKv.bind(this);
    this.DeleteKv = this.DeleteKv.bind(this);
  }
  CreateKv(request: MsgCreateKv): Promise<MsgCreateKvResponse> {
    const data = MsgCreateKv.encode(request).finish();
    const promise = this.rpc.request("murphyhub.hello.hello.Msg", "CreateKv", data);
    return promise.then((data) => MsgCreateKvResponse.decode(new _m0.Reader(data)));
  }

  UpdateKv(request: MsgUpdateKv): Promise<MsgUpdateKvResponse> {
    const data = MsgUpdateKv.encode(request).finish();
    const promise = this.rpc.request("murphyhub.hello.hello.Msg", "UpdateKv", data);
    return promise.then((data) => MsgUpdateKvResponse.decode(new _m0.Reader(data)));
  }

  DeleteKv(request: MsgDeleteKv): Promise<MsgDeleteKvResponse> {
    const data = MsgDeleteKv.encode(request).finish();
    const promise = this.rpc.request("murphyhub.hello.hello.Msg", "DeleteKv", data);
    return promise.then((data) => MsgDeleteKvResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
