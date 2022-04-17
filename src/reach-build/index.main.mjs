// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

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
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc8;
  
  
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
  const ctc8 = stdlib.T_Tuple([ctc1, ctc5, ctc7]);
  return {
    mapDataTy: ctc8
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc15 = stdlib.T_Object({
    chosenInsurancePackage: ctc13,
    email: ctc13,
    fullName: ctc13,
    phone: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc10,
    CommunityMember_payMonthlyFee0_47: ctc12,
    CommunityMember_registerMembership0_47: ctc16,
    CommunityMember_respondToClaim0_47: ctc18,
    CommunityMember_stopContract0_47: ctc19
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
  
  
  const [v329, v330, v331, v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v368 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:136:17:application call to [unknown function] (defined at: ./index.rsh:136:17:function exp)', 'at ./index.rsh:95:23:application call to "runCommunityMember_createClaim0_47" (defined at: ./index.rsh:135:14:function exp)', 'at ./index.rsh:95:23:application call to [unknown function] (defined at: ./index.rsh:95:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_createClaim'
    });
  const v373 = ['CommunityMember_createClaim0_47', v368];
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v330, v331, v347, v373],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
      
      switch (v403[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v406 = v403[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_createClaim"
            });
          ;
          const v423 = v406[stdlib.checkedBigNumberify('./index.rsh:135:14:spread', stdlib.UInt_max, '0')];
          const v424 = true;
          const v425 = await txn1.getOutput('CommunityMember_createClaim', 'v424', ctc2, v424);
          
          const v431 = v423.amountRequested;
          const v432 = stdlib.ge(v431, stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000'));
          const v434 = v432 ? v431 : stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000');
          const v437 = {
            accepted: false,
            amountRequested: v431,
            amountSet: v434,
            approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sumOfSetAmounts: v431
            };
          await stdlib.simMapSet(sim_r, 1, v402, v437);
          const v1532 = v347;
          if (v331) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v347,
              kind: 'from',
              to: v329,
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
        case 'CommunityMember_payMonthlyFee0_47': {
          const v495 = v403[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v584 = v403[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v673 = v403[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v762 = v403[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
  switch (v403[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v406 = v403[1];
      undefined /* setApiDetails */;
      ;
      const v423 = v406[stdlib.checkedBigNumberify('./index.rsh:135:14:spread', stdlib.UInt_max, '0')];
      const v424 = true;
      const v425 = await txn1.getOutput('CommunityMember_createClaim', 'v424', ctc2, v424);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v406, v425), {
          at: './index.rsh:135:15:application',
          fs: ['at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)', 'at ./index.rsh:140:29:application call to "sendResponse" (defined at: ./index.rsh:138:13:function exp)', 'at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_createClaim'
          });
        }
      else {
        }
      
      const v431 = v423.amountRequested;
      const v432 = stdlib.ge(v431, stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000'));
      const v434 = v432 ? v431 : stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000');
      const v437 = {
        accepted: false,
        amountRequested: v431,
        amountSet: v434,
        approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sumOfSetAmounts: v431
        };
      await stdlib.mapSet(map1, v402, v437);
      const v1532 = v347;
      if (v331) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v495 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v584 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v673 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v762 = v403[1];
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc15 = stdlib.T_Object({
    chosenInsurancePackage: ctc13,
    email: ctc13,
    fullName: ctc13,
    phone: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc12,
    CommunityMember_payMonthlyFee0_47: ctc10,
    CommunityMember_registerMembership0_47: ctc16,
    CommunityMember_respondToClaim0_47: ctc18,
    CommunityMember_stopContract0_47: ctc19
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
  
  
  const [v329, v330, v331, v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v359 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:17:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:95:23:application call to "runCommunityMember_payMonthlyFee0_47" (defined at: ./index.rsh:122:14:function exp)', 'at ./index.rsh:95:23:application call to [unknown function] (defined at: ./index.rsh:95:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_payMonthlyFee'
    });
  const v360 = v359[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
  const v364 = ['CommunityMember_payMonthlyFee0_47', v359];
  
  const v396 = v360.mfee;
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v330, v331, v347, v364],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v396, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
      
      switch (v403[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v406 = v403[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v495 = v403[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_payMonthlyFee"
            });
          const v502 = v495[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
          const v503 = v502.mfee;
          const v510 = stdlib.add(v347, v503);
          sim_r.txns.push({
            amt: v503,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v531 = true;
          const v532 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v531', ctc2, v531);
          
          const v541 = stdlib.sub(v510, v503);
          sim_r.txns.push({
            amt: v503,
            kind: 'from',
            to: v329,
            tok: undefined /* Nothing */
            });
          const v1544 = v541;
          if (v331) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v541,
              kind: 'from',
              to: v329,
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
        case 'CommunityMember_registerMembership0_47': {
          const v584 = v403[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v673 = v403[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v762 = v403[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
  switch (v403[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v406 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v495 = v403[1];
      undefined /* setApiDetails */;
      const v502 = v495[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
      const v503 = v502.mfee;
      const v510 = stdlib.add(v347, v503);
      ;
      const v531 = true;
      const v532 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v531', ctc2, v531);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v495, v532), {
          at: './index.rsh:122:15:application',
          fs: ['at ./index.rsh:122:15:application call to [unknown function] (defined at: ./index.rsh:122:15:function exp)', 'at ./index.rsh:126:29:application call to "sendResponse" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_payMonthlyFee'
          });
        }
      else {
        }
      
      const v541 = stdlib.sub(v510, v503);
      ;
      const v1544 = v541;
      if (v331) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v584 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v673 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v762 = v403[1];
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc11 = stdlib.T_Object({
    chosenInsurancePackage: ctc9,
    email: ctc9,
    fullName: ctc9,
    phone: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc14,
    CommunityMember_payMonthlyFee0_47: ctc16,
    CommunityMember_registerMembership0_47: ctc12,
    CommunityMember_respondToClaim0_47: ctc18,
    CommunityMember_stopContract0_47: ctc19
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
  
  
  const [v329, v330, v331, v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v350 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:107:17:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)', 'at ./index.rsh:95:23:application call to "runCommunityMember_registerMembership0_47" (defined at: ./index.rsh:106:13:function exp)', 'at ./index.rsh:95:23:application call to [unknown function] (defined at: ./index.rsh:95:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_registerMembership'
    });
  const v355 = ['CommunityMember_registerMembership0_47', v350];
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v330, v331, v347, v355],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v330, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
      
      switch (v403[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v406 = v403[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v495 = v403[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v584 = v403[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_registerMembership"
            });
          const v599 = stdlib.add(v347, v330);
          sim_r.txns.push({
            amt: v330,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v635 = true;
          const v636 = await txn1.getOutput('CommunityMember_registerMembership', 'v635', ctc2, v635);
          
          const v644 = stdlib.sub(v599, v330);
          sim_r.txns.push({
            amt: v330,
            kind: 'from',
            to: v329,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v402, null);
          const v1556 = v644;
          if (v331) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v644,
              kind: 'from',
              to: v329,
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
        case 'CommunityMember_respondToClaim0_47': {
          const v673 = v403[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v762 = v403[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
  switch (v403[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v406 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v495 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v584 = v403[1];
      undefined /* setApiDetails */;
      const v599 = stdlib.add(v347, v330);
      ;
      const v635 = true;
      const v636 = await txn1.getOutput('CommunityMember_registerMembership', 'v635', ctc2, v635);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v584, v636), {
          at: './index.rsh:106:14:application',
          fs: ['at ./index.rsh:106:14:application call to [unknown function] (defined at: ./index.rsh:106:14:function exp)', 'at ./index.rsh:114:29:application call to "sendResponse" (defined at: ./index.rsh:109:13:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_registerMembership'
          });
        }
      else {
        }
      
      const v644 = stdlib.sub(v599, v330);
      ;
      await stdlib.mapSet(map0, v402, null);
      const v1556 = v644;
      if (v331) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v673 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v762 = v403[1];
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc17 = stdlib.T_Object({
    chosenInsurancePackage: ctc15,
    email: ctc15,
    fullName: ctc15,
    phone: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc12,
    CommunityMember_payMonthlyFee0_47: ctc14,
    CommunityMember_registerMembership0_47: ctc18,
    CommunityMember_respondToClaim0_47: ctc10,
    CommunityMember_stopContract0_47: ctc19
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
  
  
  const [v329, v330, v331, v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v377 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:159:17:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)', 'at ./index.rsh:95:23:application call to "runCommunityMember_respondToClaim0_47" (defined at: ./index.rsh:158:14:function exp)', 'at ./index.rsh:95:23:application call to [unknown function] (defined at: ./index.rsh:95:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_respondToClaim'
    });
  const v382 = ['CommunityMember_respondToClaim0_47', v377];
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v330, v331, v347, v382],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:160:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
      
      switch (v403[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v406 = v403[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v495 = v403[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v584 = v403[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v673 = v403[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_respondToClaim"
            });
          ;
          const v740 = true;
          const v741 = await txn1.getOutput('CommunityMember_respondToClaim', 'v740', ctc2, v740);
          
          const v1568 = v347;
          if (v331) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v347,
              kind: 'from',
              to: v329,
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
        case 'CommunityMember_stopContract0_47': {
          const v762 = v403[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
  switch (v403[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v406 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v495 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v584 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v673 = v403[1];
      undefined /* setApiDetails */;
      ;
      const v740 = true;
      const v741 = await txn1.getOutput('CommunityMember_respondToClaim', 'v740', ctc2, v740);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v673, v741), {
          at: './index.rsh:158:15:application',
          fs: ['at ./index.rsh:158:15:application call to [unknown function] (defined at: ./index.rsh:158:15:function exp)', 'at ./index.rsh:164:29:application call to "sendResponse" (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_respondToClaim'
          });
        }
      else {
        }
      
      const v1568 = v347;
      if (v331) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v762 = v403[1];
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc16 = stdlib.T_Object({
    chosenInsurancePackage: ctc14,
    email: ctc14,
    fullName: ctc14,
    phone: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc11,
    CommunityMember_payMonthlyFee0_47: ctc13,
    CommunityMember_registerMembership0_47: ctc17,
    CommunityMember_respondToClaim0_47: ctc19,
    CommunityMember_stopContract0_47: ctc9
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
  
  
  const [v329, v330, v331, v347] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v386 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:182:16:application call to [unknown function] (defined at: ./index.rsh:182:16:function exp)', 'at ./index.rsh:95:23:application call to "runCommunityMember_stopContract0_47" (defined at: ./index.rsh:181:14:function exp)', 'at ./index.rsh:95:23:application call to [unknown function] (defined at: ./index.rsh:95:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_stopContract'
    });
  const v390 = ['CommunityMember_stopContract0_47', v386];
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v330, v331, v347, v390],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:183:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
      
      switch (v403[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v406 = v403[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v495 = v403[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v584 = v403[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v673 = v403[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v762 = v403[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_stopContract"
            });
          ;
          const v844 = true;
          const v845 = await txn1.getOutput('CommunityMember_stopContract', 'v844', ctc2, v844);
          
          const v1580 = v347;
          if (v331) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v347,
              kind: 'from',
              to: v329,
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
    tys: [ctc8, ctc3, ctc2, ctc3, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn1;
  switch (v403[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v406 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v495 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v584 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v673 = v403[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v762 = v403[1];
      undefined /* setApiDetails */;
      ;
      const v844 = true;
      const v845 = await txn1.getOutput('CommunityMember_stopContract', 'v844', ctc2, v844);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v762, v845), {
          at: './index.rsh:181:15:application',
          fs: ['at ./index.rsh:181:15:application call to [unknown function] (defined at: ./index.rsh:181:15:function exp)', 'at ./index.rsh:188:29:application call to "sendResponse" (defined at: ./index.rsh:184:13:function exp)', 'at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_stopContract'
          });
        }
      else {
        }
      
      const v1580 = v347;
      if (v331) {
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    accepted: ctc2,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    claimant: ctc8,
    sumOfSetAmounts: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc15 = stdlib.T_Object({
    chosenInsurancePackage: ctc13,
    email: ctc13,
    fullName: ctc13,
    phone: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc10,
    CommunityMember_payMonthlyFee0_47: ctc12,
    CommunityMember_registerMembership0_47: ctc16,
    CommunityMember_respondToClaim0_47: ctc18,
    CommunityMember_stopContract0_47: ctc19
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
  
  
  const v325 = stdlib.protect(ctc2, interact.contractIsRunning, 'for Insurer\'s interact field contractIsRunning');
  const v326 = stdlib.protect(ctc3, interact.mandatoryEntryFee, 'for Insurer\'s interact field mandatoryEntryFee');
  
  stdlib.protect(ctc0, await interact.seeFeedback(), {
    at: './index.rsh:52:29:application',
    fs: ['at ./index.rsh:49:17:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)'],
    msg: 'seeFeedback',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v326, v325],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v330, v331], secs: v333, time: v332, didSend: v30, from: v329 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v330, v331], secs: v333, time: v332, didSend: v30, from: v329 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v329, v330, v331],
    evt_cnt: 0,
    funcNum: 1,
    lct: v332,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v336, time: v335, didSend: v35, from: v334 } = txn2;
      
      ;
      const v337 = stdlib.addressEq(v329, v334);
      ;
      const v340 = v335;
      const v347 = stdlib.checkedBigNumberify('./index.rsh:47:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v331;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v347,
          kind: 'from',
          to: v329,
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
    tys: [ctc8, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v336, time: v335, didSend: v35, from: v334 } = txn2;
  ;
  const v337 = stdlib.addressEq(v329, v334);
  stdlib.assert(v337, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  let v340 = v335;
  let v347 = stdlib.checkedBigNumberify('./index.rsh:47:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v331;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc20],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v403], secs: v405, time: v404, didSend: v206, from: v402 } = txn3;
    switch (v403[0]) {
      case 'CommunityMember_createClaim0_47': {
        const v406 = v403[1];
        undefined /* setApiDetails */;
        ;
        const v423 = v406[stdlib.checkedBigNumberify('./index.rsh:135:14:spread', stdlib.UInt_max, '0')];
        const v424 = true;
        await txn3.getOutput('CommunityMember_createClaim', 'v424', ctc2, v424);
        stdlib.protect(ctc0, await interact.saveNewClaim(v423), {
          at: './index.rsh:141:46:application',
          fs: ['at ./index.rsh:141:46:application call to [unknown function] (defined at: ./index.rsh:141:46:function exp)', 'at ./index.rsh:141:46:application call to "liftedInteract" (defined at: ./index.rsh:141:46:application)', 'at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)'],
          msg: 'saveNewClaim',
          who: 'Insurer'
          });
        
        const v431 = v423.amountRequested;
        const v432 = stdlib.ge(v431, stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000'));
        const v434 = v432 ? v431 : stdlib.checkedBigNumberify('./index.rsh:150:35:decimal', stdlib.UInt_max, '600000');
        const v437 = {
          accepted: false,
          amountRequested: v431,
          amountSet: v434,
          approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          sumOfSetAmounts: v431
          };
        await stdlib.mapSet(map1, v402, v437);
        const cv340 = v404;
        const cv347 = v347;
        
        v340 = cv340;
        v347 = cv347;
        
        continue;
        break;
        }
      case 'CommunityMember_payMonthlyFee0_47': {
        const v495 = v403[1];
        undefined /* setApiDetails */;
        const v502 = v495[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
        const v503 = v502.mfee;
        const v510 = stdlib.add(v347, v503);
        ;
        const v531 = true;
        await txn3.getOutput('CommunityMember_payMonthlyFee', 'v531', ctc2, v531);
        const v541 = stdlib.sub(v510, v503);
        ;
        const cv340 = v404;
        const cv347 = v541;
        
        v340 = cv340;
        v347 = cv347;
        
        continue;
        break;
        }
      case 'CommunityMember_registerMembership0_47': {
        const v584 = v403[1];
        undefined /* setApiDetails */;
        const v599 = stdlib.add(v347, v330);
        ;
        const v633 = v584[stdlib.checkedBigNumberify('./index.rsh:106:13:spread', stdlib.UInt_max, '0')];
        stdlib.protect(ctc0, await interact.saveNewMemberDetails(v633), {
          at: './index.rsh:113:54:application',
          fs: ['at ./index.rsh:113:54:application call to [unknown function] (defined at: ./index.rsh:113:54:function exp)', 'at ./index.rsh:113:54:application call to "liftedInteract" (defined at: ./index.rsh:113:54:application)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'saveNewMemberDetails',
          who: 'Insurer'
          });
        
        const v635 = true;
        await txn3.getOutput('CommunityMember_registerMembership', 'v635', ctc2, v635);
        const v644 = stdlib.sub(v599, v330);
        ;
        await stdlib.mapSet(map0, v402, null);
        const cv340 = v404;
        const cv347 = v644;
        
        v340 = cv340;
        v347 = cv347;
        
        continue;
        break;
        }
      case 'CommunityMember_respondToClaim0_47': {
        const v673 = v403[1];
        undefined /* setApiDetails */;
        ;
        const v740 = true;
        await txn3.getOutput('CommunityMember_respondToClaim', 'v740', ctc2, v740);
        const cv340 = v404;
        const cv347 = v347;
        
        v340 = cv340;
        v347 = cv347;
        
        continue;
        break;
        }
      case 'CommunityMember_stopContract0_47': {
        const v762 = v403[1];
        undefined /* setApiDetails */;
        ;
        const v844 = true;
        await txn3.getOutput('CommunityMember_stopContract', 'v844', ctc2, v844);
        const cv340 = v404;
        const cv347 = v347;
        
        v340 = cv340;
        v347 = cv347;
        
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
  appApproval: `BiAMAAEEAwg82IK04Qr3o5fUDIba2rUP5NDGxQogwM8kJgMBAAEBACI1ADEYQQNsKmRJIls1ASEEWzUCMRkjEkEACjEAKCEFr2ZCAzg2GgAXSUEAjiI1BCM1BkkhBgxAAE9JIQcMQAAxSSEIDEAAFSEIEkQ2GgE1/yg0/1CBhwGvUEIAeiEHEkQqNf+AAQQ0/1CByAGvUEIAZSEGEkQ2GgE1/4ABAzT/UIGfAa9QQgBOSSEJDEAAFSEJEkQ2GgE1/yk0/1CBoAGvUEIAMoGlrduJAhJENhoBNf+AAQI0/1BCABw2GgIXNQQ2GgM2GgEXSSMMQAG/SSUMQAF8JRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEKWzX+VygBFzX9gSlbNfxJNQU1+4AE6HUB5DT7ULA0+yJVSYECDEAAjUklDEAAQkkkDEAAHyQSRIAJAAAAAAAAA0wBsCk1BzT/NP40/TIGNPxCAZxIgAkAAAAAAAAC5AGwKTUHNP80/jT9MgY0/EIBf0g0/ogCIYAJAAAAAAAAAnsBsCk1B7EisgE0/rIII7IQNP+yB7MxACgxAIgB6ykiTFZmNP80/jT9MgY0/DT+CDT+CUIBOkkjDEAARUg0+1cBKDX6NPoiWzX5NPmIAcmACQAAAAAAAAITAbApNQexIrIBNPmyCCOyEDT/sgezNP80/jT9MgY0/DT5CDT5CUIA70g0+1cBQTX6gAkAAAAAAAABqAGwKTUHNPojWzX5MQAoMQCIAWMpKDT5FlAhCzT5SSELD00WUCEEr1A0+RZQUDX4SVcAATT4UExXIxlQZjT/NP40/TIGNPxCAJQjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQpbNANXKAEXMgYiQgBXSCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIARc1/oAEf/WC8DT/FlA0/hZRBwhQsIGgjQaIAMcxADT/FlA0/hZRBwhQKEsBVwApZ0gjNQEyBjUCQgBcNf81/jX9Nfw1+zT9QQAeNPs0/BZQKVA0/xZQKEsBVwAxZ0gkNQEyBjUCQgAvsSKyATT/sggjshA0+7IHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghBa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 1,
  stateSize: 49,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v331",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v331",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T24",
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
                        "internalType": "struct T13",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_CommunityMember_createClaim0_47",
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
                        "internalType": "struct T15",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_CommunityMember_payMonthlyFee0_47",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T18",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_CommunityMember_registerMembership0_47",
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
                        "internalType": "struct T21",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_CommunityMember_respondToClaim0_47",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_47",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v403",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
    "name": "_reach_oe_v424",
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
    "name": "_reach_oe_v531",
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
    "name": "_reach_oe_v635",
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
    "name": "_reach_oe_v740",
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
    "name": "_reach_oe_v844",
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
        "internalType": "struct T13",
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
        "internalType": "struct T15",
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
            "internalType": "struct T17",
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
            "internalType": "struct T17",
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
            "internalType": "struct T17",
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
            "internalType": "struct T18",
            "name": "_phone",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
        "internalType": "struct T21",
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
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T24",
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
                        "internalType": "struct T13",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_CommunityMember_createClaim0_47",
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
                        "internalType": "struct T15",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_CommunityMember_payMonthlyFee0_47",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T17",
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
                            "internalType": "struct T18",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_CommunityMember_registerMembership0_47",
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
                        "internalType": "struct T21",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_CommunityMember_respondToClaim0_47",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_47",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v403",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
  Bytecode: `0x6080604052604051620020673803806200206783398101604081905262000026916200020f565b60008055436003556040805182518152602080840151805182840152015115158183015290517f091a26643f54c14ebc983b2e12a5bd460b902dc635cdc4f355fedff9bf2b74de9181900360600190a1620000843415600762000108565b6040805160608082018352600060208084018281528486018381523380875288840180515184525184015115158252600194859055439094558651928301939093525194810194909452511515908301529060800160405160208183030381529060405260029080519060200190620000ff92919062000132565b505050620002be565b816200012e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001409062000281565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b604080519081016001600160401b03811182821017156200020957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022357600080fd5b6200022d620001d8565b835181526040601f19830112156200024457600080fd5b6200024e620001d8565b915060208401518252604084015180151581146200026b57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b611d9980620002ce6000396000f3fe6080604052600436106100bd5760003560e01c80633bc5b7bf11610079578063832307571161005657806383230757146101bb578063ab53f2c6146101d0578063cadc2e7a146101f3578063fcb12fce1461022057005b80633bc5b7bf1461014e578063817d57f31461017b5780638185bc9f146101a857005b80630bf03a25146100c65780631442b017146100ee5780631e93b0f1146100f657806329e55c7f146101155780632c10a15914610128578063367678c01461013b57005b366100c457005b005b6100d96100d43660046114ac565b610233565b60405190151581526020015b60405180910390f35b6100d961028a565b34801561010257600080fd5b506003545b6040519081526020016100e5565b6100c46101233660046114cf565b6102d7565b6100c46101363660046114e8565b6102fb565b6100d9610149366004611581565b61031b565b34801561015a57600080fd5b5061016e61016936600461159d565b61036f565b6040516100e591906115e0565b34801561018757600080fd5b5061019b61019636600461159d565b61039b565b6040516100e59190611612565b6100d96101b63660046116cc565b6103da565b3480156101c757600080fd5b50600154610107565b3480156101dc57600080fd5b506101e5610432565b6040516100e59291906116e8565b3480156101ff57600080fd5b5061021361020e36600461159d565b6104cf565b6040516100e59190611745565b6100d961022e36600461189c565b6104e0565b600061023d61103e565b61024561106c565b61024d61108b565b60408051602080820183528782528383019190915260018352815180820190925282825283015261027e8284610538565b50506020015192915050565b600061029461103e565b61029c61106c565b6102a461108b565b600060a082015260048152604080516020808201909252828152908301526102cc8284610538565b505060800151919050565b6102df61103e565b6102f76102f136849003840184611958565b82610538565b5050565b61030361103e565b6102f761031536849003840184611a1f565b82610ada565b600061032561103e565b61032d61106c565b61033561108b565b6040805160208082018352878252838101919091526000835281518082019092528282528301526103668284610538565b50505192915050565b604080516060810182526000808252602082018190529181019190915261039582610c57565b92915050565b6103d160408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b61039582610d30565b60006103e461103e565b6103ec61106c565b6103f461108b565b604080516020808201835287825260808401919091526003835281518082019092528282528301526104268284610538565b50506060015192915050565b60006060600054600280805461044790611a83565b80601f016020809104026020016040519081016040528092919081815260200182805461047390611a83565b80156104c05780601f10610495576101008083540402835291602001916104c0565b820191906000526020600020905b8154815290600101906020018083116104a357829003601f168201915b50505050509050915091509091565b6104d76111a4565b61039582610e2e565b60006104ea61103e565b6104f261106c565b6104fa61108b565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261052c8284610538565b50506040015192915050565b6105486004600054146011610f19565b815161056390158061055c57508251600154145b6012610f19565b60008080556002805461057590611a83565b80601f01602080910402602001604051908101604052809291908181526020018280546105a190611a83565b80156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b50505050508060200190518101906106069190611ab8565b90506106106111f4565b7f5a8d166215fc2d434cbb97a632cac5e52fa7df57621d459e558afcf8e984e1f48460405161063f9190611bb4565b60405180910390a16000602085015151516004811115610661576106616115ba565b14156107bd57602080850151510151815261067e3415600c610f19565b604051600181527fd490ad978a298d4e349f2fdca2dfc06a66bda8efbf69c0921eaf7e46260b6ed89060200160405180910390a160018352602080820180516000905282515182015190518201528151510151620927c011156106e457620927c06106ec565b805151602001515b6020828101805160409081019390935280516000606091820181905285515184015183516080908101919091523382526005808652918690208054600160ff1991821681178355955180519683018054909216961515969096179055948401516002860155948301516003850155908201516004840155920151910155610771611299565b825181516001600160a01b03909116905260208084015182518201526040808501518351901515910152808201805143905260608501519051909101526107b781610f3e565b50610ad4565b60016020850151515160048111156107d7576107d76115ba565b14156108e35760208401515160409081015190820181905251516107fe903414600d610f19565b604051600181527f29f3ee3792d999da32521c05d86e0b69d56f42d52bcff4d400c363ca738ee8cf9060200160405180910390a1600160208401528151604080830151515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610878573d6000803e3d6000fd5b50610881611299565b825181516001600160a01b039091169052602080840151825182015260408085015183519015159082015290820151439052820151515160608401516108c8908290611cbd565b6108d29190611cd5565b60208083015101526107b781610f3e565b60026020850151515160048111156108fd576108fd6115ba565b14156109f65761091482602001513414600e610f19565b604051600181527f07838bb8189c7696811eaaa9bea49d897863110fafb71f18972f5a6166710bbe9060200160405180910390a160016040808501919091528251602084015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561098e573d6000803e3d6000fd5b50336000908152600460205260409020805462ff00ff191660011790556109b3611299565b825181516001600160a01b0390911690526020808401805183518301526040808601518451901515910152908201514390525160608401516108c8908290611cbd565b6003602085015151516004811115610a1057610a106115ba565b1415610a6557610a223415600f610f19565b604051600181527f517b3d28e9f583cad4ce061e2ac362f0bc97ebe3fc1b51404965363210529c479060200160405180910390a160016060840152610771611299565b6004602085015151516004811115610a7f57610a7f6115ba565b1415610ad457610a9134156010610f19565b604051600181527fa140d577bb6ecd8bcb75e98599beac90e30763d5f7c58fe8d1d4ea03344423499060200160405180910390a160016080840152610771611299565b50505050565b610aea600160005414600a610f19565b8151610b05901580610afe57508251600154145b600b610f19565b600080805560028054610b1790611a83565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4390611a83565b8015610b905780601f10610b6557610100808354040283529160200191610b90565b820191906000526020600020905b815481529060010190602001808311610b7357829003601f168201915b5050505050806020019051810190610ba89190611cec565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1610bf634156008610f19565b8051610c0e906001600160a01b031633146009610f19565b610c16611299565b815181516001600160a01b039091169052602080830151825182015260408084015183519015159101528082018051439052516000910152610ad481610f3e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610ca357610ca36115ba565b1415610d20576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ce457610ce46115ba565b6001811115610cf557610cf56115ba565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610d6660408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526006602052604090205460ff166001811115610d9557610d956115ba565b1415610d20576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610dd657610dd66115ba565b6001811115610de757610de76115ba565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b610e366111a4565b60016001600160a01b03831660009081526005602052604090205460ff166001811115610e6557610e656115ba565b1415610d20576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610ea657610ea66115ba565b6001811115610eb757610eb76115ba565b81528154610100900460ff90811615156020808401919091526040805160a08101825260018601549093161515835260028501549183019190915260038401548282015260048401546060830152600590930154608082015291015292915050565b816102f75760405163100960cb60e01b81526004810182905260240160405180910390fd5b80516040015115610fe35760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03168089528a51860151855260018085528b8701518701518352600490975543909655885180860196909652925185890152905115159084015251828401528451808303909301835260a090910190935280519192610fde92600292909101906112df565b505050565b80515160208083015101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611024573d6000803e3d6000fd5b506000808055600181905561103b90600290611363565b50565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180604001604052806000815260200161108661139d565b905290565b6040805160c0810190915280600081526020016110da6040805160e081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c082015290815290565b81526020016110ff604080516060810182526000602082018181529282015290815290565b815260200161116b6040805160e081018252600060a0820181815260c08301829052602080840191825284518086018652838152808201849052848601528451808601865283815280820184905260608501528451908101909452908352608082019290925290815290565b815260200161119760408051608081018252600060208201818152928201819052606082015290815290565b8152600060209091015290565b604080516060810190915280600081526020016000151581526020016110866040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b604051806060016040528061123b6040805160e081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c082015290815290565b81526020016112746040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b8152602001611086604080516060810182526000602082018181529282015290815290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611086604051806040016040528060008152602001600081525090565b8280546112eb90611a83565b90600052602060002090601f01602090048101928261130d5760008555611353565b82601f1061132657805160ff1916838001178555611353565b82800160010185558215611353579182015b82811115611353578251825591602001919060010190611338565b5061135f9291506113b0565b5090565b50805461136f90611a83565b6000825580601f1061137f575050565b601f01602090049060005260206000209081019061103b91906113b0565b604051806020016040528061108661108b565b5b8082111561135f57600081556001016113b1565b6040805190810167ffffffffffffffff811182821017156113f657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff811182821017156113f657634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156113f657634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461103b57600080fd5b60006040828403121561148557600080fd5b61148d6113c5565b90508135815260208201356114a18161145e565b602082015292915050565b6000604082840312156114be57600080fd5b6114c88383611473565b9392505050565b60006102a082840312156114e257600080fd5b50919050565b6000604082840312156114e257600080fd5b801515811461103b57600080fd5b8035610d2b816114fa565b600060c0828403121561152557600080fd5b61152d6113fc565b9050813561153a816114fa565b80825250602082013560208201526040820135604082015260608201356060820152608082013561156a8161145e565b8060808301525060a082013560a082015292915050565b600060c0828403121561159357600080fd5b6114c88383611513565b6000602082840312156115af57600080fd5b81356114c88161145e565b634e487b7160e01b600052602160045260246000fd5b6002811061103b5761103b6115ba565b815160608201906115f0816115d0565b8083525060208301511515602083015260408301511515604083015292915050565b815160a0820190611622816115d0565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b60006060828403121561166457600080fd5b6040516060810181811067ffffffffffffffff8211171561169557634e487b7160e01b600052604160045260246000fd5b60405290508082356116a6816114fa565b815260208301356116b68161145e565b6020820152604092830135920191909152919050565b6000606082840312156116de57600080fd5b6114c88383611652565b82815260006020604081840152835180604085015260005b8181101561171c57858101830151858201606001528201611700565b8181111561172e576000606083870101525b50601f01601f191692909201606001949350505050565b815160e0820190611755816115d0565b8083525060208301511515602083015260408301518051151560408401526020810151606084015260408101516080840152606081015160a0840152608081015160c08401525092915050565b6000604082840312156117b457600080fd5b6117bc6113c5565b823581529050602082013563ffffffff19811681146114a157600080fd5b600081830360e08112156117ed57600080fd5b6040516080810181811067ffffffffffffffff8211171561181e57634e487b7160e01b600052604160045260246000fd5b60405291508161182e85856117a2565b815261183d85604086016117a2565b602082015261184f85608086016117a2565b6040820152602060bf198301121561186657600080fd5b61186e61142d565b915060c08401356bffffffffffffffffffffffff198116811461189057600080fd5b82526060015292915050565b600060e082840312156118ae57600080fd5b6114c883836117da565b600060c082840312156118ca57600080fd5b6118d261142d565b90506118de8383611513565b815292915050565b6000604082840312156118f857600080fd5b61190061142d565b90506118de8383611473565b600060e0828403121561191e57600080fd5b61192661142d565b90506118de83836117da565b60006060828403121561194457600080fd5b61194c61142d565b90506118de8383611652565b60008183036102a081121561196c57600080fd5b6119746113c5565b8335815261028080601f198401121561198c57600080fd5b61199461142d565b925061199e6113fc565b6020860135600581106119b057600080fd5b81526119bf87604088016118b8565b60208201526119d28761010088016118e6565b60408201526119e587610140880161190c565b60608201526119f8876102208801611932565b6080820152611a08828701611508565b60a082015283525060208101919091529392505050565b600060408284031215611a3157600080fd5b6040516040810181811067ffffffffffffffff82111715611a6257634e487b7160e01b600052604160045260246000fd5b604052823581526020830135611a77816114fa565b60208201529392505050565b600181811c90821680611a9757607f821691505b602082108114156114e257634e487b7160e01b600052602260045260246000fd5b600060808284031215611aca57600080fd5b6040516080810181811067ffffffffffffffff82111715611afb57634e487b7160e01b600052604160045260246000fd5b6040528251611b098161145e565b8152602083810151908201526040830151611b23816114fa565b60408201526060928301519281019290925250919050565b8051611b598382518051825260209081015163ffffffff1916910152565b602081810151805160408601529081015163ffffffff1916606085015250604081015180516080850152602081015163ffffffff191660a0850152506bffffffffffffffffffffffff196060820151511660c0840152505050565b8151815260208201515180516102a08301919060058110611bd757611bd76115ba565b806020850152506020810151518051151560408501526020810151606085015260408101516080850152606081015160a085015260018060a01b0360808201511660c085015260a081015160e0850152506040810151611c4f61010085018251805182526020908101516001600160a01b0316910152565b506060810151611c63610140850182611b3b565b506080810151518051151561022085015260208101516001600160a01b03166102408501526040015161026084015260a00151151561028090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611cd057611cd0611ca7565b500190565b600082821015611ce757611ce7611ca7565b500390565b600060608284031215611cfe57600080fd5b6040516060810181811067ffffffffffffffff82111715611d2f57634e487b7160e01b600052604160045260246000fd5b6040528251611d3d8161145e565b8152602083810151908201526040830151611d57816114fa565b6040820152939250505056fea2646970667358221220ce72cae5a884778b2e5eb2998b6bf8c2cb643f52a37e00bdd077f005762a768e64736f6c634300080c0033`,
  BytecodeLen: 8295,
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
    at: './index.rsh:201:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:23:after expr stmt semicolon',
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
