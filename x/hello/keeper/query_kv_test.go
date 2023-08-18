package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/Murphy-hub/hello/testutil/keeper"
	"github.com/Murphy-hub/hello/testutil/nullify"
	"github.com/Murphy-hub/hello/x/hello/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestKvQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.HelloKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKv(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetKvRequest
		response *types.QueryGetKvResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetKvRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetKvResponse{Kv: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetKvRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetKvResponse{Kv: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetKvRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Kv(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestKvQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.HelloKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKv(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllKvRequest {
		return &types.QueryAllKvRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.KvAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Kv), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Kv),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.KvAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Kv), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Kv),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.KvAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Kv),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.KvAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
