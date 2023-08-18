package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Murphy-hub/hello/testutil/keeper"
	"github.com/Murphy-hub/hello/x/hello/keeper"
	"github.com/Murphy-hub/hello/x/hello/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.HelloKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
