// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateKv } from "./types/hello/hello/tx";
import { MsgDeleteKv } from "./types/hello/hello/tx";
import { MsgCreateKv } from "./types/hello/hello/tx";

import { Kv as typeKv} from "./types"
import { Params as typeParams} from "./types"

export { MsgUpdateKv, MsgDeleteKv, MsgCreateKv };

type sendMsgUpdateKvParams = {
  value: MsgUpdateKv,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteKvParams = {
  value: MsgDeleteKv,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateKvParams = {
  value: MsgCreateKv,
  fee?: StdFee,
  memo?: string
};


type msgUpdateKvParams = {
  value: MsgUpdateKv,
};

type msgDeleteKvParams = {
  value: MsgDeleteKv,
};

type msgCreateKvParams = {
  value: MsgCreateKv,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUpdateKv({ value, fee, memo }: sendMsgUpdateKvParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateKv: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateKv({ value: MsgUpdateKv.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateKv: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteKv({ value, fee, memo }: sendMsgDeleteKvParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteKv: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteKv({ value: MsgDeleteKv.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteKv: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateKv({ value, fee, memo }: sendMsgCreateKvParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateKv: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateKv({ value: MsgCreateKv.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateKv: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateKv({ value }: msgUpdateKvParams): EncodeObject {
			try {
				return { typeUrl: "/murphyhub.hello.hello.MsgUpdateKv", value: MsgUpdateKv.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateKv: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteKv({ value }: msgDeleteKvParams): EncodeObject {
			try {
				return { typeUrl: "/murphyhub.hello.hello.MsgDeleteKv", value: MsgDeleteKv.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteKv: Could not create message: ' + e.message)
			}
		},
		
		msgCreateKv({ value }: msgCreateKvParams): EncodeObject {
			try {
				return { typeUrl: "/murphyhub.hello.hello.MsgCreateKv", value: MsgCreateKv.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateKv: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Kv: getStructure(typeKv.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			MurphyhubHelloHello: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;