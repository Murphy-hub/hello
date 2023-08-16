package hello

import (
	"math/rand"

	"github.com/Murphy-hub/hello/testutil/sample"
	hellosimulation "github.com/Murphy-hub/hello/x/hello/simulation"
	"github.com/Murphy-hub/hello/x/hello/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = hellosimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgCreateKv = "op_weight_msg_kv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateKv int = 100

	opWeightMsgUpdateKv = "op_weight_msg_kv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateKv int = 100

	opWeightMsgDeleteKv = "op_weight_msg_kv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteKv int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	helloGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		KvList: []types.Kv{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&helloGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateKv int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateKv, &weightMsgCreateKv, nil,
		func(_ *rand.Rand) {
			weightMsgCreateKv = defaultWeightMsgCreateKv
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateKv,
		hellosimulation.SimulateMsgCreateKv(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateKv int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateKv, &weightMsgUpdateKv, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateKv = defaultWeightMsgUpdateKv
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateKv,
		hellosimulation.SimulateMsgUpdateKv(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteKv int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteKv, &weightMsgDeleteKv, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteKv = defaultWeightMsgDeleteKv
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteKv,
		hellosimulation.SimulateMsgDeleteKv(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateKv,
			defaultWeightMsgCreateKv,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hellosimulation.SimulateMsgCreateKv(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateKv,
			defaultWeightMsgUpdateKv,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hellosimulation.SimulateMsgUpdateKv(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteKv,
			defaultWeightMsgDeleteKv,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				hellosimulation.SimulateMsgDeleteKv(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
