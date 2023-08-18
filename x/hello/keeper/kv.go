package keeper

import (
	"github.com/Murphy-hub/hello/x/hello/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetKv set a specific kv in the store from its index
func (k Keeper) SetKv(ctx sdk.Context, kv types.Kv) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KvKeyPrefix))
	b := k.cdc.MustMarshal(&kv)
	store.Set(types.KvKey(
		kv.Index,
	), b)
}

// GetKv returns a kv from its index
func (k Keeper) GetKv(
	ctx sdk.Context,
	index string,

) (val types.Kv, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KvKeyPrefix))

	b := store.Get(types.KvKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveKv removes a kv from the store
func (k Keeper) RemoveKv(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KvKeyPrefix))
	store.Delete(types.KvKey(
		index,
	))
}

// GetAllKv returns all kv
func (k Keeper) GetAllKv(ctx sdk.Context) (list []types.Kv) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KvKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Kv
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
