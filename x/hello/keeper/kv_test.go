package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/Murphy-hub/hello/testutil/keeper"
	"github.com/Murphy-hub/hello/testutil/nullify"
	"github.com/Murphy-hub/hello/x/hello/keeper"
	"github.com/Murphy-hub/hello/x/hello/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNKv(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Kv {
	items := make([]types.Kv, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetKv(ctx, items[i])
	}
	return items
}

func TestKvGet(t *testing.T) {
	keeper, ctx := keepertest.HelloKeeper(t)
	items := createNKv(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKv(ctx,
			item.Index,
			item.Creator,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestKvRemove(t *testing.T) {
	keeper, ctx := keepertest.HelloKeeper(t)
	items := createNKv(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKv(ctx,
			item.Index,
			item.Creator,
		)
		_, found := keeper.GetKv(ctx,
			item.Index,
			item.Creator,
		)
		require.False(t, found)
	}
}

func TestKvGetAll(t *testing.T) {
	keeper, ctx := keepertest.HelloKeeper(t)
	items := createNKv(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllKv(ctx, items[0].Creator)),
	)
}
