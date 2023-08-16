package keeper_test

import (
	"testing"

	testkeeper "github.com/Murphy-hub/hello/testutil/keeper"
	"github.com/Murphy-hub/hello/x/hello/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HelloKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
