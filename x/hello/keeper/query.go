package keeper

import (
	"github.com/Murphy-hub/hello/x/hello/types"
)

var _ types.QueryServer = Keeper{}
