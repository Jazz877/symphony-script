//@ts-nocheck
import * as _74 from "./market/v1beta1/genesis";
import * as _75 from "./market/v1beta1/market";
import * as _76 from "./market/v1beta1/query";
import * as _77 from "./market/v1beta1/tx";
import * as _138 from "./market/v1beta1/tx.amino";
import * as _139 from "./market/v1beta1/tx.registry";
import * as _140 from "./market/v1beta1/query.lcd";
import * as _141 from "./market/v1beta1/query.rpc.Query";
import * as _142 from "./market/v1beta1/tx.rpc.msg";
import * as _146 from "./lcd";
import * as _147 from "./rpc.query";
import * as _148 from "./rpc.tx";
export namespace osmosis {
  export namespace market {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142
    };
  }
  export const ClientFactory = {
    ..._146,
    ..._147,
    ..._148
  };
}