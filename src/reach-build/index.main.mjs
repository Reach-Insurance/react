// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc1,
    amountSet: ctc1,
    approvalsCount: ctc1,
    sumOfSetAmounts: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Object({
    amountDue: ctc1,
    insrPackageId: ctc1,
    matureBalance: ctc1
    });
  const ctc8 = stdlib.T_Data({
    None: ctc3,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    fundingLimit: ctc1,
    monthlyFee: ctc1
    });
  const ctc10 = stdlib.T_Data({
    None: ctc3,
    Some: ctc9
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc8;
  
  const map3_ctc = ctc10;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc5, ctc7, ctc9]);
  return {
    mapDataTy: ctc10
    };
  };
export async function CommunityMember_createClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_createClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_createClaim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc17 = stdlib.T_Object({
    chosenInsurancePackage: ctc15,
    email: ctc15,
    fullName: ctc15,
    phone: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc12,
    CommunityMember_payMonthlyFee0_53: ctc14,
    CommunityMember_registerMembership0_53: ctc18,
    CommunityMember_respondToClaim0_53: ctc20,
    CommunityMember_stopContract0_53: ctc21
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v335, v336, v337, v359] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc10, ctc3, ctc2, ctc3]);
  const v380 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:134:17:application call to [unknown function] (defined at: ./index.rsh:134:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_createClaim0_53" (defined at: ./index.rsh:133:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_createClaim'
    });
  const v385 = ['CommunityMember_createClaim0_53', v380];
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v336, v337, v359, v385],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:135:20:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
      
      switch (v415[0]) {
        case 'CommunityMember_createClaim0_53': {
          const v418 = v415[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_createClaim"
            });
          ;
          const v435 = v418[stdlib.checkedBigNumberify('./index.rsh:133:14:spread', stdlib.UInt_max, 0)];
          const v436 = true;
          const v437 = await txn1.getOutput('CommunityMember_createClaim', 'v436', ctc2, v436);
          
          const v443 = v435.amountRequested;
          const v444 = stdlib.ge(v443, stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000));
          const v446 = v444 ? v443 : stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000);
          const v449 = {
            accepted: false,
            amountRequested: v443,
            amountSet: v446,
            approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            sumOfSetAmounts: v443
            };
          await stdlib.simMapSet(sim_r, 1, v414, v449);
          const v1561 = v359;
          if (v337) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v359,
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'CommunityMember_payMonthlyFee0_53': {
          const v507 = v415[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_53': {
          const v596 = v415[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_53': {
          const v685 = v415[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_53': {
          const v774 = v415[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2, ctc3, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
  switch (v415[0]) {
    case 'CommunityMember_createClaim0_53': {
      const v418 = v415[1];
      undefined /* setApiDetails */;
      ;
      const v435 = v418[stdlib.checkedBigNumberify('./index.rsh:133:14:spread', stdlib.UInt_max, 0)];
      const v436 = true;
      const v437 = await txn1.getOutput('CommunityMember_createClaim', 'v436', ctc2, v436);
      if (v212) {
        stdlib.protect(ctc0, await interact.out(v418, v437), {
          at: './index.rsh:133:15:application',
          fs: ['at ./index.rsh:133:15:application call to [unknown function] (defined at: ./index.rsh:133:15:function exp)', 'at ./index.rsh:138:29:application call to "sendResponse" (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_createClaim'
          });
        }
      else {
        }
      
      const v443 = v435.amountRequested;
      const v444 = stdlib.ge(v443, stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000));
      const v446 = v444 ? v443 : stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000);
      const v449 = {
        accepted: false,
        amountRequested: v443,
        amountSet: v446,
        approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        sumOfSetAmounts: v443
        };
      await stdlib.mapSet(map1, v414, v449);
      const v1561 = v359;
      if (v337) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_payMonthlyFee0_53': {
      const v507 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_53': {
      const v596 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_53': {
      const v685 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_53': {
      const v774 = v415[1];
      return;
      break;
      }
    }
  
  
  };
export async function CommunityMember_payMonthlyFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_payMonthlyFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_payMonthlyFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc17 = stdlib.T_Object({
    chosenInsurancePackage: ctc15,
    email: ctc15,
    fullName: ctc15,
    phone: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc14,
    CommunityMember_payMonthlyFee0_53: ctc12,
    CommunityMember_registerMembership0_53: ctc18,
    CommunityMember_respondToClaim0_53: ctc20,
    CommunityMember_stopContract0_53: ctc21
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v335, v336, v337, v359] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc10, ctc3, ctc2, ctc3]);
  const v371 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:17:application call to [unknown function] (defined at: ./index.rsh:121:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_payMonthlyFee0_53" (defined at: ./index.rsh:120:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_payMonthlyFee'
    });
  const v372 = v371[stdlib.checkedBigNumberify('./index.rsh:120:14:spread', stdlib.UInt_max, 0)];
  const v376 = ['CommunityMember_payMonthlyFee0_53', v371];
  
  const v408 = v372.mfee;
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v336, v337, v359, v376],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [v408, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
      
      switch (v415[0]) {
        case 'CommunityMember_createClaim0_53': {
          const v418 = v415[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_53': {
          const v507 = v415[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_payMonthlyFee"
            });
          const v514 = v507[stdlib.checkedBigNumberify('./index.rsh:120:14:spread', stdlib.UInt_max, 0)];
          const v515 = v514.mfee;
          const v522 = stdlib.add(v359, v515);
          sim_r.txns.push({
            amt: v515,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v543 = true;
          const v544 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v543', ctc2, v543);
          
          const v553 = stdlib.sub(v522, v515);
          sim_r.txns.push({
            amt: v515,
            kind: 'from',
            to: v335,
            tok: undefined /* Nothing */
            });
          const v1573 = v553;
          if (v337) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v553,
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'CommunityMember_registerMembership0_53': {
          const v596 = v415[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_53': {
          const v685 = v415[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_53': {
          const v774 = v415[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2, ctc3, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
  switch (v415[0]) {
    case 'CommunityMember_createClaim0_53': {
      const v418 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_53': {
      const v507 = v415[1];
      undefined /* setApiDetails */;
      const v514 = v507[stdlib.checkedBigNumberify('./index.rsh:120:14:spread', stdlib.UInt_max, 0)];
      const v515 = v514.mfee;
      const v522 = stdlib.add(v359, v515);
      ;
      const v543 = true;
      const v544 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v543', ctc2, v543);
      if (v212) {
        stdlib.protect(ctc0, await interact.out(v507, v544), {
          at: './index.rsh:120:15:application',
          fs: ['at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)', 'at ./index.rsh:124:29:application call to "sendResponse" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_payMonthlyFee'
          });
        }
      else {
        }
      
      const v553 = stdlib.sub(v522, v515);
      ;
      const v1573 = v553;
      if (v337) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_registerMembership0_53': {
      const v596 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_53': {
      const v685 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_53': {
      const v774 = v415[1];
      return;
      break;
      }
    }
  
  
  };
export async function CommunityMember_registerMembership(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_registerMembership expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_registerMembership expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc13 = stdlib.T_Object({
    chosenInsurancePackage: ctc11,
    email: ctc11,
    fullName: ctc11,
    phone: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc16,
    CommunityMember_payMonthlyFee0_53: ctc18,
    CommunityMember_registerMembership0_53: ctc14,
    CommunityMember_respondToClaim0_53: ctc20,
    CommunityMember_stopContract0_53: ctc21
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v335, v336, v337, v359] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc10, ctc3, ctc2, ctc3]);
  const v362 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:17:application call to [unknown function] (defined at: ./index.rsh:105:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_registerMembership0_53" (defined at: ./index.rsh:104:13:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_registerMembership'
    });
  const v367 = ['CommunityMember_registerMembership0_53', v362];
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v336, v337, v359, v367],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
      
      switch (v415[0]) {
        case 'CommunityMember_createClaim0_53': {
          const v418 = v415[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_53': {
          const v507 = v415[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_53': {
          const v596 = v415[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_registerMembership"
            });
          const v611 = stdlib.add(v359, v336);
          sim_r.txns.push({
            amt: v336,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v647 = true;
          const v648 = await txn1.getOutput('CommunityMember_registerMembership', 'v647', ctc2, v647);
          
          const v656 = stdlib.sub(v611, v336);
          sim_r.txns.push({
            amt: v336,
            kind: 'from',
            to: v335,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v414, null);
          const v1585 = v656;
          if (v337) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v656,
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'CommunityMember_respondToClaim0_53': {
          const v685 = v415[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_53': {
          const v774 = v415[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2, ctc3, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
  switch (v415[0]) {
    case 'CommunityMember_createClaim0_53': {
      const v418 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_53': {
      const v507 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_53': {
      const v596 = v415[1];
      undefined /* setApiDetails */;
      const v611 = stdlib.add(v359, v336);
      ;
      const v647 = true;
      const v648 = await txn1.getOutput('CommunityMember_registerMembership', 'v647', ctc2, v647);
      if (v212) {
        stdlib.protect(ctc0, await interact.out(v596, v648), {
          at: './index.rsh:104:14:application',
          fs: ['at ./index.rsh:104:14:application call to [unknown function] (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:112:29:application call to "sendResponse" (defined at: ./index.rsh:107:13:function exp)', 'at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_registerMembership'
          });
        }
      else {
        }
      
      const v656 = stdlib.sub(v611, v336);
      ;
      await stdlib.mapSet(map0, v414, null);
      const v1585 = v656;
      if (v337) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_respondToClaim0_53': {
      const v685 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_53': {
      const v774 = v415[1];
      return;
      break;
      }
    }
  
  
  };
export async function CommunityMember_respondToClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_respondToClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_respondToClaim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc18 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc19 = stdlib.T_Object({
    chosenInsurancePackage: ctc17,
    email: ctc17,
    fullName: ctc17,
    phone: ctc18
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc14,
    CommunityMember_payMonthlyFee0_53: ctc16,
    CommunityMember_registerMembership0_53: ctc20,
    CommunityMember_respondToClaim0_53: ctc12,
    CommunityMember_stopContract0_53: ctc21
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v335, v336, v337, v359] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc10, ctc3, ctc2, ctc3]);
  const v389 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:157:17:application call to [unknown function] (defined at: ./index.rsh:157:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_respondToClaim0_53" (defined at: ./index.rsh:156:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_respondToClaim'
    });
  const v394 = ['CommunityMember_respondToClaim0_53', v389];
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v336, v337, v359, v394],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
      
      switch (v415[0]) {
        case 'CommunityMember_createClaim0_53': {
          const v418 = v415[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_53': {
          const v507 = v415[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_53': {
          const v596 = v415[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_53': {
          const v685 = v415[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_respondToClaim"
            });
          ;
          const v752 = true;
          const v753 = await txn1.getOutput('CommunityMember_respondToClaim', 'v752', ctc2, v752);
          
          const v1597 = v359;
          if (v337) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v359,
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'CommunityMember_stopContract0_53': {
          const v774 = v415[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2, ctc3, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
  switch (v415[0]) {
    case 'CommunityMember_createClaim0_53': {
      const v418 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_53': {
      const v507 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_53': {
      const v596 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_53': {
      const v685 = v415[1];
      undefined /* setApiDetails */;
      ;
      const v752 = true;
      const v753 = await txn1.getOutput('CommunityMember_respondToClaim', 'v752', ctc2, v752);
      if (v212) {
        stdlib.protect(ctc0, await interact.out(v685, v753), {
          at: './index.rsh:156:15:application',
          fs: ['at ./index.rsh:156:15:application call to [unknown function] (defined at: ./index.rsh:156:15:function exp)', 'at ./index.rsh:162:29:application call to "sendResponse" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_respondToClaim'
          });
        }
      else {
        }
      
      const v1597 = v359;
      if (v337) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_stopContract0_53': {
      const v774 = v415[1];
      return;
      break;
      }
    }
  
  
  };
export async function CommunityMember_stopContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_stopContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_stopContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc18 = stdlib.T_Object({
    chosenInsurancePackage: ctc16,
    email: ctc16,
    fullName: ctc16,
    phone: ctc17
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc21 = stdlib.T_Tuple([ctc20]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc13,
    CommunityMember_payMonthlyFee0_53: ctc15,
    CommunityMember_registerMembership0_53: ctc19,
    CommunityMember_respondToClaim0_53: ctc21,
    CommunityMember_stopContract0_53: ctc11
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v335, v336, v337, v359] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc10, ctc3, ctc2, ctc3]);
  const v398 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:180:16:application call to [unknown function] (defined at: ./index.rsh:180:16:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_stopContract0_53" (defined at: ./index.rsh:179:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_stopContract'
    });
  const v402 = ['CommunityMember_stopContract0_53', v398];
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v336, v337, v359, v402],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:19:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
      
      switch (v415[0]) {
        case 'CommunityMember_createClaim0_53': {
          const v418 = v415[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_53': {
          const v507 = v415[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_53': {
          const v596 = v415[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_53': {
          const v685 = v415[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_53': {
          const v774 = v415[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_stopContract"
            });
          ;
          const v856 = true;
          const v857 = await txn1.getOutput('CommunityMember_stopContract', 'v856', ctc2, v856);
          
          const v1609 = v359;
          if (v337) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v359,
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2, ctc3, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn1;
  switch (v415[0]) {
    case 'CommunityMember_createClaim0_53': {
      const v418 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_53': {
      const v507 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_53': {
      const v596 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_53': {
      const v685 = v415[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_53': {
      const v774 = v415[1];
      undefined /* setApiDetails */;
      ;
      const v856 = true;
      const v857 = await txn1.getOutput('CommunityMember_stopContract', 'v856', ctc2, v856);
      if (v212) {
        stdlib.protect(ctc0, await interact.out(v774, v857), {
          at: './index.rsh:179:15:application',
          fs: ['at ./index.rsh:179:15:application call to [unknown function] (defined at: ./index.rsh:179:15:function exp)', 'at ./index.rsh:186:29:application call to "sendResponse" (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_stopContract'
          });
        }
      else {
        }
      
      const v1609 = v359;
      if (v337) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Insurer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Insurer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Insurer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    amountDue: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Object({
    fundingLimit: ctc3,
    monthlyFee: ctc3
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc10,
    sumOfSetAmounts: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60));
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  const ctc17 = stdlib.T_Object({
    chosenInsurancePackage: ctc15,
    email: ctc15,
    fullName: ctc15,
    phone: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Data({
    CommunityMember_createClaim0_53: ctc12,
    CommunityMember_payMonthlyFee0_53: ctc14,
    CommunityMember_registerMembership0_53: ctc18,
    CommunityMember_respondToClaim0_53: ctc20,
    CommunityMember_stopContract0_53: ctc21
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc7;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v331 = stdlib.protect(ctc2, interact.contractIsRunning, 'for Insurer\'s interact field contractIsRunning');
  const v332 = stdlib.protect(ctc3, interact.mandatoryEntryFee, 'for Insurer\'s interact field mandatoryEntryFee');
  
  stdlib.protect(ctc0, await interact.seeFeedback(), {
    at: './index.rsh:52:29:application',
    fs: ['at ./index.rsh:49:17:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)'],
    msg: 'seeFeedback',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v331],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v336, v337], secs: v339, time: v338, didSend: v30, from: v335 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v336, v337], secs: v339, time: v338, didSend: v30, from: v335 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v335, v336, v337],
    evt_cnt: 0,
    funcNum: 1,
    lct: v338,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v342, time: v341, didSend: v35, from: v340 } = txn2;
      
      ;
      const v343 = stdlib.addressEq(v335, v340);
      ;
      const v344 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 120000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:81:23:decimal', stdlib.UInt_max, 1), v344);
      const v345 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 600000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:82:23:decimal', stdlib.UInt_max, 2), v345);
      const v346 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1200000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:83:23:decimal', stdlib.UInt_max, 3), v346);
      const v347 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6000000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 50000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:84:23:decimal', stdlib.UInt_max, 4), v347);
      const v348 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12000000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:85:23:decimal', stdlib.UInt_max, 5), v348);
      const v349 = {
        fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60000000),
        monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 500000)
        };
      await stdlib.simMapSet(sim_r, 3, stdlib.checkedBigNumberify('./index.rsh:86:23:decimal', stdlib.UInt_max, 6), v349);
      const v352 = v341;
      const v359 = stdlib.checkedBigNumberify('./index.rsh:47:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v337;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v359,
          kind: 'from',
          to: v335,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v342, time: v341, didSend: v35, from: v340 } = txn2;
  ;
  const v343 = stdlib.addressEq(v335, v340);
  stdlib.assert(v343, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  const v344 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 120000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:81:23:decimal', stdlib.UInt_max, 1), v344);
  const v345 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 600000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:82:23:decimal', stdlib.UInt_max, 2), v345);
  const v346 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1200000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:83:23:decimal', stdlib.UInt_max, 3), v346);
  const v347 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6000000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 50000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:84:23:decimal', stdlib.UInt_max, 4), v347);
  const v348 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12000000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:85:23:decimal', stdlib.UInt_max, 5), v348);
  const v349 = {
    fundingLimit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 60000000),
    monthlyFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 500000)
    };
  await stdlib.mapSet(map3, stdlib.checkedBigNumberify('./index.rsh:86:23:decimal', stdlib.UInt_max, 6), v349);
  let v352 = v341;
  let v359 = stdlib.checkedBigNumberify('./index.rsh:47:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v337;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc22],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v415], secs: v417, time: v416, didSend: v212, from: v414 } = txn3;
    switch (v415[0]) {
      case 'CommunityMember_createClaim0_53': {
        const v418 = v415[1];
        undefined /* setApiDetails */;
        ;
        const v435 = v418[stdlib.checkedBigNumberify('./index.rsh:133:14:spread', stdlib.UInt_max, 0)];
        const v436 = true;
        await txn3.getOutput('CommunityMember_createClaim', 'v436', ctc2, v436);
        stdlib.protect(ctc0, await interact.saveNewClaim(v435), {
          at: './index.rsh:139:46:application',
          fs: ['at ./index.rsh:139:46:application call to [unknown function] (defined at: ./index.rsh:139:46:function exp)', 'at ./index.rsh:139:46:application call to "liftedInteract" (defined at: ./index.rsh:139:46:application)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)'],
          msg: 'saveNewClaim',
          who: 'Insurer'
          });
        
        const v443 = v435.amountRequested;
        const v444 = stdlib.ge(v443, stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000));
        const v446 = v444 ? v443 : stdlib.checkedBigNumberify('./index.rsh:148:35:decimal', stdlib.UInt_max, 600000);
        const v449 = {
          accepted: false,
          amountRequested: v443,
          amountSet: v446,
          approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
          sumOfSetAmounts: v443
          };
        await stdlib.mapSet(map1, v414, v449);
        const cv352 = v416;
        const cv359 = v359;
        
        v352 = cv352;
        v359 = cv359;
        
        continue;
        break;
        }
      case 'CommunityMember_payMonthlyFee0_53': {
        const v507 = v415[1];
        undefined /* setApiDetails */;
        const v514 = v507[stdlib.checkedBigNumberify('./index.rsh:120:14:spread', stdlib.UInt_max, 0)];
        const v515 = v514.mfee;
        const v522 = stdlib.add(v359, v515);
        ;
        const v543 = true;
        await txn3.getOutput('CommunityMember_payMonthlyFee', 'v543', ctc2, v543);
        const v553 = stdlib.sub(v522, v515);
        ;
        const cv352 = v416;
        const cv359 = v553;
        
        v352 = cv352;
        v359 = cv359;
        
        continue;
        break;
        }
      case 'CommunityMember_registerMembership0_53': {
        const v596 = v415[1];
        undefined /* setApiDetails */;
        const v611 = stdlib.add(v359, v336);
        ;
        const v645 = v596[stdlib.checkedBigNumberify('./index.rsh:104:13:spread', stdlib.UInt_max, 0)];
        stdlib.protect(ctc0, await interact.saveNewMemberDetails(v645), {
          at: './index.rsh:111:54:application',
          fs: ['at ./index.rsh:111:54:application call to [unknown function] (defined at: ./index.rsh:111:54:function exp)', 'at ./index.rsh:111:54:application call to "liftedInteract" (defined at: ./index.rsh:111:54:application)', 'at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:13:function exp)'],
          msg: 'saveNewMemberDetails',
          who: 'Insurer'
          });
        
        const v647 = true;
        await txn3.getOutput('CommunityMember_registerMembership', 'v647', ctc2, v647);
        const v656 = stdlib.sub(v611, v336);
        ;
        await stdlib.mapSet(map0, v414, null);
        const cv352 = v416;
        const cv359 = v656;
        
        v352 = cv352;
        v359 = cv359;
        
        continue;
        break;
        }
      case 'CommunityMember_respondToClaim0_53': {
        const v685 = v415[1];
        undefined /* setApiDetails */;
        ;
        const v752 = true;
        await txn3.getOutput('CommunityMember_respondToClaim', 'v752', ctc2, v752);
        const cv352 = v416;
        const cv359 = v359;
        
        v352 = cv352;
        v359 = cv359;
        
        continue;
        break;
        }
      case 'CommunityMember_stopContract0_53': {
        const v774 = v415[1];
        undefined /* setApiDetails */;
        ;
        const v856 = true;
        await txn3.getOutput('CommunityMember_stopContract', 'v856', ctc2, v856);
        const cv352 = v416;
        const cv359 = v359;
        
        v352 = cv352;
        v359 = cv359;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,address,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((byte[60],byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`],
    pure: [],
    sigs: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,address,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((byte[60],byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`]
    },
  appApproval: `BiAPAAEEAwIFCE3YgrThCvejl9QMhtratQ/k0MbFCiDAzyQGJgMBAAEBACI1ADEYQQQ+KmRJIls1ASEGWzUCMRkjEkEACjEAKCEHr2ZCBAo2GgAXSUEAjiI1BCM1BkkhCAxAAE9JIQkMQAAxSSEKDEAAFSEKEkQ2GgE1/yg0/1CBhwGvUEIAeiEJEkQqNf+AAQQ0/1CByAGvUEIAZSEIEkQ2GgE1/4ABAzT/UIGfAa9QQgBOSSELDEAAFSELEkQ2GgE1/yk0/1CBoAGvUEIAMoGlrduJAhJENhoBNf+AAQI0/1BCABw2GgIXNQQ2GgM2GgEXSSMMQAKRSSUMQAF8JRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEMWzX+VygBFzX9gSlbNfxJNQU1+4AE6HUB5DT7ULA0+yJVSSEEDEAAjUklDEAAQkkkDEAAHyQSRIAJAAAAAAAAA1gBsCk1BzT/NP40/TIGNPxCAm5IgAkAAAAAAAAC8AGwKTUHNP80/jT9MgY0/EICUUg0/ogC84AJAAAAAAAAAocBsCk1B7EisgE0/rIII7IQNP+yB7MxACgxAIgCvSkiTFZmNP80/jT9MgY0/DT+CDT+CUICDEkjDEAARUg0+1cBKDX6NPoiWzX5NPmIApuACQAAAAAAAAIfAbApNQexIrIBNPmyCCOyEDT/sgezNP80/jT9MgY0/DT5CDT5CUIBwUg0+1cBQTX6gAkAAAAAAAABtAGwKTUHNPojWzX5MQAoMQCIAjUpKDT5FlAhDTT5SSEND00WUCEGr1A0+RZQUDX4SVcAATT4UExXIypQZjT/NP40/TIGNPxCAWYjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQjKCOIAc+AEQEAAAAAAAHUwAAAAAAAAAPoNf5XADw0/lBmIQQoIQSIAauAEQEAAAAAAAknwAAAAAAAABOINf5XADw0/lBmJSgliAGJgBEBAAAAAAAST4AAAAAAAAAnEDX+VwA8NP5QZiQoJIgBZ4ARAQAAAAAAW42AAAAAAAAAw1A1/lcAPDT+UGYhBSghBYgBQ4ARAQAAAAAAtxsAAAAAAAABhqA1/lcAPDT+UGYhDighDogBH4ARAQAAAAADk4cAAAAAAAAHoSA1/lcAPDT+UGY0/zQDIQxbNANXKAEXMgYiQgBXSCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIARc1/oAEf/WC8DT/FlA0/hZRBwhQsIGgjQaIAMcxADT/FlA0/hZRBwhQKEsBVwApZ0gjNQEyBjUCQgBcNf81/jX9Nfw1+zT9QQAeNPs0/BZQKVA0/xZQKEsBVwAxZ0gkNQEyBjUCQgAvsSKyATT/sggjshA0+7IHs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 77,
  stateKeys: 1,
  stateSize: 49,
  unsupported: [`Cannot use 'UInt' as Map key. Only 'Address' keys are allowed.`],
  version: 10,
  warnings: [`Step 1 may use up to 7 accounts, but the limit is 4. Step 1 starts at /app/index.rsh:57:13:dot.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v337",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v337",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bool",
                            "name": "_accepted",
                            "type": "bool"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amountRequested",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amountSet",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_approvalsCount",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_claimant",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_sumOfSetAmounts",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T15",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_CommunityMember_createClaim0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "_mfee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_who",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T17",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_CommunityMember_payMonthlyFee0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_chosenInsurancePackage",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_email",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_fullName",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T20",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T21",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_CommunityMember_registerMembership0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bool",
                            "name": "_accepted",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_claimant",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_setAmount",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T23",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T24",
                    "name": "_CommunityMember_respondToClaim0_53",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_53",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v415",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v436",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v543",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v647",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v752",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v856",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "_accepted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_amountRequested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amountSet",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_approvalsCount",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_sumOfSetAmounts",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "CommunityMember_createClaim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_mfee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_who",
            "type": "address"
          }
        ],
        "internalType": "struct T17",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "CommunityMember_payMonthlyFee",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes28",
                "name": "elem1",
                "type": "bytes28"
              }
            ],
            "internalType": "struct T19",
            "name": "_chosenInsurancePackage",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes28",
                "name": "elem1",
                "type": "bytes28"
              }
            ],
            "internalType": "struct T19",
            "name": "_email",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes28",
                "name": "elem1",
                "type": "bytes28"
              }
            ],
            "internalType": "struct T19",
            "name": "_fullName",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "elem0",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T20",
            "name": "_phone",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "CommunityMember_registerMembership",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "_accepted",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_claimant",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_setAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "CommunityMember_respondToClaim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CommunityMember_stopContract",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "_accepted",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_amountRequested",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_amountSet",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_approvalsCount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_sumOfSetAmounts",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_amountDue",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_insrPackageId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_matureBalance",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "addr",
        "type": "uint256"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T6",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_fundingLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_monthlyFee",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bool",
                            "name": "_accepted",
                            "type": "bool"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amountRequested",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_amountSet",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_approvalsCount",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_claimant",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_sumOfSetAmounts",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T15",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_CommunityMember_createClaim0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "_mfee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_who",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T17",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_CommunityMember_payMonthlyFee0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_chosenInsurancePackage",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_email",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes28",
                                "name": "elem1",
                                "type": "bytes28"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "_fullName",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T20",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T21",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_CommunityMember_registerMembership0_53",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bool",
                            "name": "_accepted",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_claimant",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_setAmount",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T23",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T24",
                    "name": "_CommunityMember_respondToClaim0_53",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_53",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v415",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200261b3803806200261b83398101604081905262000026916200020f565b60008055436003556040805182518152602080840151805182840152015115158183015290517f091a26643f54c14ebc983b2e12a5bd460b902dc635cdc4f355fedff9bf2b74de9181900360600190a1620000843415600762000108565b6040805160608082018352600060208084018281528486018381523380875288840180515184525184015115158252600194859055439094558651928301939093525194810194909452511515908301529060800160405160208183030381529060405260029080519060200190620000ff92919062000132565b505050620002be565b816200012e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001409062000281565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b604080519081016001600160401b03811182821017156200020957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022357600080fd5b6200022d620001d8565b835181526040601f19830112156200024457600080fd5b6200024e620001d8565b915060208401518252604084015180151581146200026b57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b61234d80620002ce6000396000f3fe6080604052600436106100d55760003560e01c80633eca74551161007957806383230757116100565780638323075714610200578063ab53f2c614610215578063cadc2e7a14610238578063fcb12fce1461026557005b80633eca745514610193578063817d57f3146101c05780638185bc9f146101ed57005b806329e55c7f116100b257806329e55c7f1461012d5780632c10a15914610140578063367678c0146101535780633bc5b7bf1461016657005b80630bf03a25146100de5780631442b017146101065780631e93b0f11461010e57005b366100dc57005b005b6100f16100ec366004611a0a565b610278565b60405190151581526020015b60405180910390f35b6100f16102cf565b34801561011a57600080fd5b506003545b6040519081526020016100fd565b6100dc61013b366004611a2d565b61031c565b6100dc61014e366004611a46565b610340565b6100f1610161366004611adf565b610360565b34801561017257600080fd5b50610186610181366004611afb565b6103b4565b6040516100fd9190611b3e565b34801561019f57600080fd5b506101b36101ae366004611b70565b6103e0565b6040516100fd9190611b89565b3480156101cc57600080fd5b506101e06101db366004611afb565b6103f1565b6040516100fd9190611bc6565b6100f16101fb366004611c80565b610430565b34801561020c57600080fd5b5060015461011f565b34801561022157600080fd5b5061022a610488565b6040516100fd929190611c9c565b34801561024457600080fd5b50610258610253366004611afb565b610525565b6040516100fd9190611cf9565b6100f1610273366004611e50565b610536565b60006102826114bb565b61028a6114e9565b610292611508565b6040805160208082018352878252838301919091526001835281518082019092528282528301526102c3828461058e565b50506020015192915050565b60006102d96114bb565b6102e16114e9565b6102e9611508565b600060a08201526004815260408051602080820190925282815290830152610311828461058e565b505060800151919050565b6103246114bb565b61033c61033636849003840184611f0c565b8261058e565b5050565b6103486114bb565b61033c61035a36849003840184611fd3565b82610b30565b600061036a6114bb565b6103726114e9565b61037a611508565b6040805160208082018352878252838101919091526000835281518082019092528282528301526103ab828461058e565b50505192915050565b60408051606081018252600080825260208201819052918101919091526103da82611023565b92915050565b6103e8611621565b6103da826110fc565b61042760408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6103da826111ad565b600061043a6114bb565b6104426114e9565b61044a611508565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261047c828461058e565b50506060015192915050565b60006060600054600280805461049d90612037565b80601f01602080910402602001604051908101604052809291908181526020018280546104c990612037565b80156105165780601f106104eb57610100808354040283529160200191610516565b820191906000526020600020905b8154815290600101906020018083116104f957829003601f168201915b50505050509050915091509091565b61052d61165a565b6103da826112ab565b60006105406114bb565b6105486114e9565b610550611508565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610582828461058e565b50506040015192915050565b61059e6004600054146011611396565b81516105b99015806105b257508251600154145b6012611396565b6000808055600280546105cb90612037565b80601f01602080910402602001604051908101604052809291908181526020018280546105f790612037565b80156106445780601f1061061957610100808354040283529160200191610644565b820191906000526020600020905b81548152906001019060200180831161062757829003601f168201915b505050505080602001905181019061065c919061206c565b90506106666116aa565b7f5a8d166215fc2d434cbb97a632cac5e52fa7df57621d459e558afcf8e984e1f4846040516106959190612168565b60405180910390a160006020850151515160048111156106b7576106b7611b18565b14156108135760208085015151015181526106d43415600c611396565b604051600181527f9865049d10e59a454d4b128329a1d773eae7d24b99c015890a0ec7ca88ed82519060200160405180910390a160018352602080820180516000905282515182015190518201528151510151620927c0111561073a57620927c0610742565b805151602001515b6020828101805160409081019390935280516000606091820181905285515184015183516080908101919091523382526005808652918690208054600160ff19918216811783559551805196830180549092169615159690961790559484015160028601559483015160038501559082015160048401559201519101556107c761174f565b825181516001600160a01b039091169052602080840151825182015260408085015183519015159101528082018051439052606085015190519091015261080d816113bb565b50610b2a565b600160208501515151600481111561082d5761082d611b18565b1415610939576020840151516040908101519082018190525151610854903414600d611396565b604051600181527f4d094e5b3d090c3598f351e39d67acc81c91db1c818b810e2714ec3522211fdc9060200160405180910390a1600160208401528151604080830151515190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108ce573d6000803e3d6000fd5b506108d761174f565b825181516001600160a01b0390911690526020808401518251820152604080850151835190151590820152908201514390528201515151606084015161091e908290612271565b6109289190612289565b602080830151015261080d816113bb565b600260208501515151600481111561095357610953611b18565b1415610a4c5761096a82602001513414600e611396565b604051600181527f39ca770d04bcc4bb03c0af498d37d9f7779d442d2e4602e927289a587d68a7ff9060200160405180910390a160016040808501919091528251602084015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156109e4573d6000803e3d6000fd5b50336000908152600460205260409020805462ff00ff19166001179055610a0961174f565b825181516001600160a01b03909116905260208084018051835183015260408086015184519015159101529082015143905251606084015161091e908290612271565b6003602085015151516004811115610a6657610a66611b18565b1415610abb57610a783415600f611396565b604051600181527fd9e075d91f0eb215b35444f352ea7b3b5967ec95c7bc0b6cc101fc407c841dc59060200160405180910390a1600160608401526107c761174f565b6004602085015151516004811115610ad557610ad5611b18565b1415610b2a57610ae734156010611396565b604051600181527f64db559c3551e6be30a6482af0e2481c00ca31f86360e33095288a50f14138d79060200160405180910390a1600160808401526107c761174f565b50505050565b610b40600160005414600a611396565b8151610b5b901580610b5457508251600154145b600b611396565b600080805560028054610b6d90612037565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9990612037565b8015610be65780601f10610bbb57610100808354040283529160200191610be6565b820191906000526020600020905b815481529060010190602001808311610bc957829003601f168201915b5050505050806020019051810190610bfe91906122a0565b9050610c08611796565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1610c5334156008611396565b8151610c6b906001600160a01b031633146009611396565b80516201d4c0905280516103e86020918201526001600081815260078084527fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828805460ff199081168517909155855180517fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b829558501517fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b82a558486018051620927c09052805161138890870152600284528286527fb7c774451310d1be4108bc180d1b52823cb0ee0274a6c0081bcaf94f115fb96d80548316861790555180517fb7c774451310d1be4108bc180d1b52823cb0ee0274a6c0081bcaf94f115fb96e558501517fb7c774451310d1be4108bc180d1b52823cb0ee0274a6c0081bcaf94f115fb96f5560408601805162124f809052805161271090870152600384528286527f3be6fd20d5acfde5b873b48692cd31f4d3c7e8ee8a813af4696af8859e5ca6c680548316861790555180517f3be6fd20d5acfde5b873b48692cd31f4d3c7e8ee8a813af4696af8859e5ca6c7558501517f3be6fd20d5acfde5b873b48692cd31f4d3c7e8ee8a813af4696af8859e5ca6c855606086018051625b8d809052805161c35090870152600484528286527fb805995a7ec585a251200611a61d179cfd7fb105e1ab17dc415a7336783786f780548316861790555180517fb805995a7ec585a251200611a61d179cfd7fb105e1ab17dc415a7336783786f8558501517fb805995a7ec585a251200611a61d179cfd7fb105e1ab17dc415a7336783786f95560808601805162b71b0090528051620186a090870152600584528286527fbcdda56b5d08466ec462cbbe0adfa57cb0a15fcc8940ef68f702f21b787bc93580548316861790555180517fbcdda56b5d08466ec462cbbe0adfa57cb0a15fcc8940ef68f702f21b787bc936558501517fbcdda56b5d08466ec462cbbe0adfa57cb0a15fcc8940ef68f702f21b787bc9375560a0860180516303938700905280516207a1209087015260069093529084527f55c5b153ab560fcde54a63b18c7f53d75501706907cef8767fbded79ab9997c780549091169092179091555180517f55c5b153ab560fcde54a63b18c7f53d75501706907cef8767fbded79ab9997c85501517f55c5b153ab560fcde54a63b18c7f53d75501706907cef8767fbded79ab9997c955610fdb61174f565b825181516001600160a01b03909116905260208084015182518201526040808501518351901515910152808201805143905251600091015261101c816113bb565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561106f5761106f611b18565b14156110ec576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156110b0576110b0611b18565b60018111156110c1576110c1611b18565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b611104611621565b600160008381526007602052604090205460ff16600181111561112957611129611b18565b14156110ec57600082815260076020526040908190208151606081019092528054829060ff16600181111561116057611160611b18565b600181111561117157611171611b18565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b6111e360408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526006602052604090205460ff16600181111561121257611212611b18565b14156110ec576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561125357611253611b18565b600181111561126457611264611b18565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b6112b361165a565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156112e2576112e2611b18565b14156110ec576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561132357611323611b18565b600181111561133457611334611b18565b81528154610100900460ff90811615156020808401919091526040805160a08101825260018601549093161515835260028501549183019190915260038401548282015260048401546060830152600590930154608082015291015292915050565b8161033c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b805160400151156114605760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03168089528a51860151855260018085528b8701518701518352600490975543909655885180860196909652925185890152905115159084015251828401528451808303909301835260a09091019093528051919261145b926002929091019061183d565b505050565b80515160208083015101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156114a1573d6000803e3d6000fd5b50600080805560018190556114b8906002906118c1565b50565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060400160405280600081526020016115036118fb565b905290565b6040805160c0810190915280600081526020016115576040805160e081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c082015290815290565b815260200161157c604080516060810182526000602082018181529282015290815290565b81526020016115e86040805160e081018252600060a0820181815260c08301829052602080840191825284518086018652838152808201849052848601528451808601865283815280820184905260608501528451908101909452908352608082019290925290815290565b815260200161161460408051608081018252600060208201818152928201819052606082015290815290565b8152600060209091015290565b60408051606081019091528060008152602001600015158152602001611503604051806040016040528060008152602001600081525090565b604080516060810190915280600081526020016000151581526020016115036040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b60405180606001604052806116f16040805160e081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c082015290815290565b815260200161172a6040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b8152602001611503604080516060810182526000602082018181529282015290815290565b6040805160a08101825260009181018281526060820183905260808201929092529081905b8152602001611503604051806040016040528060008152602001600081525090565b604080516101008101909152600060c0820181815260e0830191909152819081526020016117d7604051806040016040528060008152602001600081525090565b81526020016117f9604051806040016040528060008152602001600081525090565b815260200161181b604051806040016040528060008152602001600081525090565b8152602001611774604051806040016040528060008152602001600081525090565b82805461184990612037565b90600052602060002090601f01602090048101928261186b57600085556118b1565b82601f1061188457805160ff19168380011785556118b1565b828001600101855582156118b1579182015b828111156118b1578251825591602001919060010190611896565b506118bd92915061190e565b5090565b5080546118cd90612037565b6000825580601f106118dd575050565b601f0160209004906000526020600020908101906114b8919061190e565b6040518060200160405280611503611508565b5b808211156118bd576000815560010161190f565b6040805190810167ffffffffffffffff8111828210171561195457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff8111828210171561195457634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561195457634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146114b857600080fd5b6000604082840312156119e357600080fd5b6119eb611923565b90508135815260208201356119ff816119bc565b602082015292915050565b600060408284031215611a1c57600080fd5b611a2683836119d1565b9392505050565b60006102a08284031215611a4057600080fd5b50919050565b600060408284031215611a4057600080fd5b80151581146114b857600080fd5b80356110f781611a58565b600060c08284031215611a8357600080fd5b611a8b61195a565b90508135611a9881611a58565b808252506020820135602082015260408201356040820152606082013560608201526080820135611ac8816119bc565b8060808301525060a082013560a082015292915050565b600060c08284031215611af157600080fd5b611a268383611a71565b600060208284031215611b0d57600080fd5b8135611a26816119bc565b634e487b7160e01b600052602160045260246000fd5b600281106114b8576114b8611b18565b81516060820190611b4e81611b2e565b8083525060208301511515602083015260408301511515604083015292915050565b600060208284031215611b8257600080fd5b5035919050565b81516080820190611b9981611b2e565b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b815160a0820190611bd681611b2e565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b600060608284031215611c1857600080fd5b6040516060810181811067ffffffffffffffff82111715611c4957634e487b7160e01b600052604160045260246000fd5b6040529050808235611c5a81611a58565b81526020830135611c6a816119bc565b6020820152604092830135920191909152919050565b600060608284031215611c9257600080fd5b611a268383611c06565b82815260006020604081840152835180604085015260005b81811015611cd057858101830151858201606001528201611cb4565b81811115611ce2576000606083870101525b50601f01601f191692909201606001949350505050565b815160e0820190611d0981611b2e565b8083525060208301511515602083015260408301518051151560408401526020810151606084015260408101516080840152606081015160a0840152608081015160c08401525092915050565b600060408284031215611d6857600080fd5b611d70611923565b823581529050602082013563ffffffff19811681146119ff57600080fd5b600081830360e0811215611da157600080fd5b6040516080810181811067ffffffffffffffff82111715611dd257634e487b7160e01b600052604160045260246000fd5b604052915081611de28585611d56565b8152611df18560408601611d56565b6020820152611e038560808601611d56565b6040820152602060bf1983011215611e1a57600080fd5b611e2261198b565b915060c08401356bffffffffffffffffffffffff1981168114611e4457600080fd5b82526060015292915050565b600060e08284031215611e6257600080fd5b611a268383611d8e565b600060c08284031215611e7e57600080fd5b611e8661198b565b9050611e928383611a71565b815292915050565b600060408284031215611eac57600080fd5b611eb461198b565b9050611e9283836119d1565b600060e08284031215611ed257600080fd5b611eda61198b565b9050611e928383611d8e565b600060608284031215611ef857600080fd5b611f0061198b565b9050611e928383611c06565b60008183036102a0811215611f2057600080fd5b611f28611923565b8335815261028080601f1984011215611f4057600080fd5b611f4861198b565b9250611f5261195a565b602086013560058110611f6457600080fd5b8152611f738760408801611e6c565b6020820152611f86876101008801611e9a565b6040820152611f99876101408801611ec0565b6060820152611fac876102208801611ee6565b6080820152611fbc828701611a66565b60a082015283525060208101919091529392505050565b600060408284031215611fe557600080fd5b6040516040810181811067ffffffffffffffff8211171561201657634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561202b81611a58565b60208201529392505050565b600181811c9082168061204b57607f821691505b60208210811415611a4057634e487b7160e01b600052602260045260246000fd5b60006080828403121561207e57600080fd5b6040516080810181811067ffffffffffffffff821117156120af57634e487b7160e01b600052604160045260246000fd5b60405282516120bd816119bc565b81526020838101519082015260408301516120d781611a58565b60408201526060928301519281019290925250919050565b805161210d8382518051825260209081015163ffffffff1916910152565b602081810151805160408601529081015163ffffffff1916606085015250604081015180516080850152602081015163ffffffff191660a0850152506bffffffffffffffffffffffff196060820151511660c0840152505050565b8151815260208201515180516102a0830191906005811061218b5761218b611b18565b806020850152506020810151518051151560408501526020810151606085015260408101516080850152606081015160a085015260018060a01b0360808201511660c085015260a081015160e085015250604081015161220361010085018251805182526020908101516001600160a01b0316910152565b5060608101516122176101408501826120ef565b506080810151518051151561022085015260208101516001600160a01b03166102408501526040015161026084015260a00151151561028090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156122845761228461225b565b500190565b60008282101561229b5761229b61225b565b500390565b6000606082840312156122b257600080fd5b6040516060810181811067ffffffffffffffff821117156122e357634e487b7160e01b600052604160045260246000fd5b60405282516122f1816119bc565b815260208381015190820152604083015161230b81611a58565b6040820152939250505056fea2646970667358221220372ba4fd5e0933cbb0a7f7a4319a311bd31690b715e13db407c24b1e96b70fb664736f6c634300080c0033`,
  BytecodeLen: 9755,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:199:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:93:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "CommunityMember_createClaim": CommunityMember_createClaim,
  "CommunityMember_payMonthlyFee": CommunityMember_payMonthlyFee,
  "CommunityMember_registerMembership": CommunityMember_registerMembership,
  "CommunityMember_respondToClaim": CommunityMember_respondToClaim,
  "CommunityMember_stopContract": CommunityMember_stopContract,
  "Insurer": Insurer
  };
export const _APIs = {
  CommunityMember: {
    createClaim: CommunityMember_createClaim,
    payMonthlyFee: CommunityMember_payMonthlyFee,
    registerMembership: CommunityMember_registerMembership,
    respondToClaim: CommunityMember_respondToClaim,
    stopContract: CommunityMember_stopContract
    }
  };
