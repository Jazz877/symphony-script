//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./capability/module/v1/module";
import * as _26 from "./consensus/module/v1/module";
import * as _27 from "./consensus/v1/query";
import * as _28 from "./consensus/v1/tx";
import * as _29 from "./crisis/module/v1/module";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/hd/v1/hd";
import * as _32 from "./crypto/keyring/v1/record";
import * as _33 from "./crypto/multisig/keys";
import * as _34 from "./crypto/secp256k1/keys";
import * as _35 from "./crypto/secp256r1/keys";
import * as _36 from "./distribution/module/v1/module";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/module/v1/module";
import * as _42 from "./feegrant/module/v1/module";
import * as _43 from "./genutil/module/v1/module";
import * as _44 from "./gov/module/v1/module";
import * as _45 from "./gov/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/gov";
import * as _47 from "./gov/v1beta1/query";
import * as _48 from "./gov/v1beta1/tx";
import * as _49 from "./group/module/v1/module";
import * as _50 from "./mint/module/v1/module";
import * as _51 from "./nft/module/v1/module";
import * as _52 from "./orm/module/v1alpha1/module";
import * as _53 from "./orm/query/v1alpha1/query";
import * as _54 from "./params/module/v1/module";
import * as _55 from "./query/v1/query";
import * as _56 from "./reflection/v1/reflection";
import * as _57 from "./slashing/module/v1/module";
import * as _58 from "./staking/module/v1/module";
import * as _59 from "./staking/v1beta1/authz";
import * as _60 from "./staking/v1beta1/genesis";
import * as _61 from "./staking/v1beta1/query";
import * as _62 from "./staking/v1beta1/staking";
import * as _63 from "./staking/v1beta1/tx";
import * as _64 from "./tx/config/v1/config";
import * as _65 from "./tx/signing/v1beta1/signing";
import * as _66 from "./tx/v1beta1/service";
import * as _67 from "./tx/v1beta1/tx";
import * as _68 from "./upgrade/module/v1/module";
import * as _69 from "./upgrade/v1beta1/query";
import * as _70 from "./upgrade/v1beta1/tx";
import * as _71 from "./upgrade/v1beta1/upgrade";
import * as _72 from "./vesting/module/v1/module";
import * as _93 from "./auth/v1beta1/tx.amino";
import * as _94 from "./authz/v1beta1/tx.amino";
import * as _95 from "./bank/v1beta1/tx.amino";
import * as _96 from "./consensus/v1/tx.amino";
import * as _97 from "./distribution/v1beta1/tx.amino";
import * as _98 from "./gov/v1beta1/tx.amino";
import * as _99 from "./staking/v1beta1/tx.amino";
import * as _100 from "./upgrade/v1beta1/tx.amino";
import * as _101 from "./auth/v1beta1/tx.registry";
import * as _102 from "./authz/v1beta1/tx.registry";
import * as _103 from "./bank/v1beta1/tx.registry";
import * as _104 from "./consensus/v1/tx.registry";
import * as _105 from "./distribution/v1beta1/tx.registry";
import * as _106 from "./gov/v1beta1/tx.registry";
import * as _107 from "./staking/v1beta1/tx.registry";
import * as _108 from "./upgrade/v1beta1/tx.registry";
import * as _109 from "./auth/v1beta1/query.lcd";
import * as _110 from "./authz/v1beta1/query.lcd";
import * as _111 from "./bank/v1beta1/query.lcd";
import * as _112 from "./base/node/v1beta1/query.lcd";
import * as _113 from "./consensus/v1/query.lcd";
import * as _114 from "./distribution/v1beta1/query.lcd";
import * as _115 from "./gov/v1beta1/query.lcd";
import * as _116 from "./staking/v1beta1/query.lcd";
import * as _117 from "./tx/v1beta1/service.lcd";
import * as _118 from "./upgrade/v1beta1/query.lcd";
import * as _119 from "./auth/v1beta1/query.rpc.Query";
import * as _120 from "./authz/v1beta1/query.rpc.Query";
import * as _121 from "./bank/v1beta1/query.rpc.Query";
import * as _122 from "./base/node/v1beta1/query.rpc.Service";
import * as _123 from "./consensus/v1/query.rpc.Query";
import * as _124 from "./distribution/v1beta1/query.rpc.Query";
import * as _125 from "./gov/v1beta1/query.rpc.Query";
import * as _126 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _127 from "./staking/v1beta1/query.rpc.Query";
import * as _128 from "./tx/v1beta1/service.rpc.Service";
import * as _129 from "./upgrade/v1beta1/query.rpc.Query";
import * as _130 from "./auth/v1beta1/tx.rpc.msg";
import * as _131 from "./authz/v1beta1/tx.rpc.msg";
import * as _132 from "./bank/v1beta1/tx.rpc.msg";
import * as _133 from "./consensus/v1/tx.rpc.msg";
import * as _134 from "./distribution/v1beta1/tx.rpc.msg";
import * as _135 from "./gov/v1beta1/tx.rpc.msg";
import * as _136 from "./staking/v1beta1/tx.rpc.msg";
import * as _137 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _143 from "./lcd";
import * as _144 from "./rpc.query";
import * as _145 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._93,
      ..._101,
      ..._109,
      ..._119,
      ..._130
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._94,
      ..._102,
      ..._110,
      ..._120,
      ..._131
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._95,
      ..._103,
      ..._111,
      ..._121,
      ..._132
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._112,
        ..._122
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._26
      };
    }
    export const v1 = {
      ..._27,
      ..._28,
      ..._96,
      ..._104,
      ..._113,
      ..._123,
      ..._133
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._29
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._30
    };
    export namespace hd {
      export const v1 = {
        ..._31
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._32
      };
    }
    export const multisig = {
      ..._33
    };
    export const secp256k1 = {
      ..._34
    };
    export const secp256r1 = {
      ..._35
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._97,
      ..._105,
      ..._114,
      ..._124,
      ..._134
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._98,
      ..._106,
      ..._115,
      ..._125,
      ..._135
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._52
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._53,
        ..._126
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._55
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._56
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._99,
      ..._107,
      ..._116,
      ..._127,
      ..._136
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._64
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._65
      };
    }
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._117,
      ..._128
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._100,
      ..._108,
      ..._118,
      ..._129,
      ..._137
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
  }
  export const ClientFactory = {
    ..._143,
    ..._144,
    ..._145
  };
}