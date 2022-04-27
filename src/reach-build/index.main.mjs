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
      4: [ctc0, ctc1, ctc2, ctc1],
      5: [ctc0, ctc1, ctc2, ctc1, ctc1]
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
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
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
    chosenInsurancePackage: ctc3,
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
  
  
  const [v393, v394, v395, v411] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v432 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:120:17:application call to [unknown function] (defined at: ./index.rsh:120:17:function exp)', 'at ./index.rsh:77:23:application call to "runCommunityMember_createClaim0_47" (defined at: ./index.rsh:119:14:function exp)', 'at ./index.rsh:77:23:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_createClaim'
    });
  const v437 = ['CommunityMember_createClaim0_47', v432];
  
  const txn1 = await (ctc.sendrecv({
    args: [v393, v394, v395, v411, v437],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v470 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_createClaim"
            });
          ;
          const v487 = v470[stdlib.checkedBigNumberify('./index.rsh:119:14:spread', stdlib.UInt_max, '0')];
          const v488 = v487.amountRequested;
          const v491 = v487.insrPackageId;
          const v492 = v487.amountDue;
          const v493 = v487.matureBalance;
          const v494 = {
            amountDue: v492,
            insrPackageId: v491,
            matureBalance: v493
            };
          await stdlib.simMapSet(sim_r, 2, v466, v494);
          const v495 = v487.fundLimit;
          const v497 = stdlib.ge(v488, v495);
          const v499 = v497 ? v488 : v495;
          const v502 = {
            accepted: false,
            amountRequested: v488,
            amountSet: v499,
            approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sumOfSetAmounts: v488
            };
          await stdlib.simMapSet(sim_r, 1, v466, v502);
          const v503 = true;
          const v504 = await txn1.getOutput('CommunityMember_createClaim', 'v503', ctc2, v503);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v601 = v467[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v732 = v467[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v863 = v467[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v994 = v467[1];
          
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
  const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
  switch (v467[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v470 = v467[1];
      undefined /* setApiDetails */;
      ;
      const v487 = v470[stdlib.checkedBigNumberify('./index.rsh:119:14:spread', stdlib.UInt_max, '0')];
      const v488 = v487.amountRequested;
      const v491 = v487.insrPackageId;
      const v492 = v487.amountDue;
      const v493 = v487.matureBalance;
      const v494 = {
        amountDue: v492,
        insrPackageId: v491,
        matureBalance: v493
        };
      await stdlib.mapSet(map2, v466, v494);
      const v495 = v487.fundLimit;
      const v497 = stdlib.ge(v488, v495);
      const v499 = v497 ? v488 : v495;
      const v502 = {
        accepted: false,
        amountRequested: v488,
        amountSet: v499,
        approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sumOfSetAmounts: v488
        };
      await stdlib.mapSet(map1, v466, v502);
      const v503 = true;
      const v504 = await txn1.getOutput('CommunityMember_createClaim', 'v503', ctc2, v503);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v470, v504), {
          at: './index.rsh:119:15:application',
          fs: ['at ./index.rsh:119:15:application call to [unknown function] (defined at: ./index.rsh:119:15:function exp)', 'at ./index.rsh:138:29:application call to "sendResponse" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_createClaim'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v601 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v732 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v863 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v994 = v467[1];
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
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc15 = stdlib.T_Object({
    chosenInsurancePackage: ctc3,
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
  
  
  const [v393, v394, v395, v411] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v423 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)', 'at ./index.rsh:77:23:application call to "runCommunityMember_payMonthlyFee0_47" (defined at: ./index.rsh:110:14:function exp)', 'at ./index.rsh:77:23:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_payMonthlyFee'
    });
  const v424 = v423[stdlib.checkedBigNumberify('./index.rsh:110:14:spread', stdlib.UInt_max, '0')];
  const v428 = ['CommunityMember_payMonthlyFee0_47', v423];
  
  const v460 = v424.mfee;
  
  const txn1 = await (ctc.sendrecv({
    args: [v393, v394, v395, v411, v428],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v460, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v470 = v467[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v601 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_payMonthlyFee"
            });
          const v608 = v601[stdlib.checkedBigNumberify('./index.rsh:110:14:spread', stdlib.UInt_max, '0')];
          const v609 = v608.mfee;
          const v616 = stdlib.add(v411, v609);
          sim_r.txns.push({
            amt: v609,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v651 = true;
          const v652 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v651', ctc2, v651);
          
          const v661 = stdlib.sub(v616, v609);
          sim_r.txns.push({
            amt: v609,
            kind: 'from',
            to: v393,
            tok: undefined /* Nothing */
            });
          const v2148 = v661;
          if (v395) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v661,
              kind: 'from',
              to: v393,
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
          const v732 = v467[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v863 = v467[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v994 = v467[1];
          
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
  const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
  switch (v467[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v470 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v601 = v467[1];
      undefined /* setApiDetails */;
      const v608 = v601[stdlib.checkedBigNumberify('./index.rsh:110:14:spread', stdlib.UInt_max, '0')];
      const v609 = v608.mfee;
      const v616 = stdlib.add(v411, v609);
      ;
      const v651 = true;
      const v652 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v651', ctc2, v651);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v601, v652), {
          at: './index.rsh:110:15:application',
          fs: ['at ./index.rsh:110:15:application call to [unknown function] (defined at: ./index.rsh:110:15:function exp)', 'at ./index.rsh:114:29:application call to "sendResponse" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_payMonthlyFee'
          });
        }
      else {
        }
      
      const v661 = stdlib.sub(v616, v609);
      ;
      const v2148 = v661;
      if (v395) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v732 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v863 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v994 = v467[1];
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
    chosenInsurancePackage: ctc3,
    email: ctc9,
    fullName: ctc9,
    phone: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
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
  
  
  const [v393, v394, v395, v411] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v414 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:17:application call to [unknown function] (defined at: ./index.rsh:95:17:function exp)', 'at ./index.rsh:77:23:application call to "runCommunityMember_registerMembership0_47" (defined at: ./index.rsh:94:13:function exp)', 'at ./index.rsh:77:23:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_registerMembership'
    });
  const v419 = ['CommunityMember_registerMembership0_47', v414];
  
  const txn1 = await (ctc.sendrecv({
    args: [v393, v394, v395, v411, v419],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v394, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v470 = v467[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v601 = v467[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v732 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_registerMembership"
            });
          const v747 = stdlib.add(v411, v394);
          sim_r.txns.push({
            amt: v394,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v796 = true;
          const v797 = await txn1.getOutput('CommunityMember_registerMembership', 'v796', ctc2, v796);
          
          const v810 = stdlib.sub(v747, v394);
          sim_r.txns.push({
            amt: v394,
            kind: 'from',
            to: v393,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v466, null);
          const v2162 = v810;
          if (v395) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v810,
              kind: 'from',
              to: v393,
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
          const v863 = v467[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v994 = v467[1];
          
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
  const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
  switch (v467[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v470 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v601 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v732 = v467[1];
      undefined /* setApiDetails */;
      const v747 = stdlib.add(v411, v394);
      ;
      const v796 = true;
      const v797 = await txn1.getOutput('CommunityMember_registerMembership', 'v796', ctc2, v796);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v732, v797), {
          at: './index.rsh:94:14:application',
          fs: ['at ./index.rsh:94:14:application call to [unknown function] (defined at: ./index.rsh:94:14:function exp)', 'at ./index.rsh:99:29:application call to "sendResponse" (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_registerMembership'
          });
        }
      else {
        }
      
      const v810 = stdlib.sub(v747, v394);
      ;
      await stdlib.mapSet(map0, v466, null);
      const v2162 = v810;
      if (v395) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v863 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v994 = v467[1];
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
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
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
    chosenInsurancePackage: ctc3,
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
  
  
  const [v393, v394, v395, v411] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v441 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:148:17:application call to [unknown function] (defined at: ./index.rsh:148:17:function exp)', 'at ./index.rsh:77:23:application call to "runCommunityMember_respondToClaim0_47" (defined at: ./index.rsh:147:14:function exp)', 'at ./index.rsh:77:23:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_respondToClaim'
    });
  const v446 = ['CommunityMember_respondToClaim0_47', v441];
  
  const txn1 = await (ctc.sendrecv({
    args: [v393, v394, v395, v411, v446],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:149:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v470 = v467[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v601 = v467[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v732 = v467[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v863 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_respondToClaim"
            });
          ;
          const v946 = v863[stdlib.checkedBigNumberify('./index.rsh:147:14:spread', stdlib.UInt_max, '0')];
          const v947 = v946.claimant;
          const v948 = true;
          const v949 = await txn1.getOutput('CommunityMember_respondToClaim', 'v948', ctc2, v948);
          
          const v954 = v946.accepted;
          if (v954) {
            const v955 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v947), null);
            let v956;
            switch (v955[0]) {
              case 'None': {
                const v957 = v955[1];
                v956 = stdlib.checkedBigNumberify('./index.rsh:156:73:decimal', stdlib.UInt_max, '1');
                
                break;
                }
              case 'Some': {
                const v958 = v955[1];
                const v959 = v958.approvalsCount;
                v956 = v959;
                
                break;
                }
              }
            let v961;
            switch (v955[0]) {
              case 'None': {
                const v962 = v955[1];
                v961 = stdlib.checkedBigNumberify('./index.rsh:157:73:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v963 = v955[1];
                const v964 = v963.sumOfSetAmounts;
                v961 = v964;
                
                break;
                }
              }
            let v966;
            switch (v955[0]) {
              case 'None': {
                const v967 = v955[1];
                v966 = stdlib.checkedBigNumberify('./index.rsh:158:70:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v968 = v955[1];
                const v969 = v968.amountRequested;
                v966 = v969;
                
                break;
                }
              }
            let v971;
            switch (v955[0]) {
              case 'None': {
                const v972 = v955[1];
                v971 = v966;
                
                break;
                }
              case 'Some': {
                const v973 = v955[1];
                const v974 = v973.amountSet;
                v971 = v974;
                
                break;
                }
              }
            const v975 = stdlib.lt(v956, stdlib.checkedBigNumberify('./index.rsh:160:63:decimal', stdlib.UInt_max, '5'));
            const v976 = stdlib.div(v961, v956);
            const v977 = v975 ? v971 : v976;
            const v978 = stdlib.add(v956, stdlib.checkedBigNumberify('./index.rsh:162:56:decimal', stdlib.UInt_max, '1'));
            const v979 = {
              accepted: true,
              amountRequested: v966,
              amountSet: v977,
              approvalsCount: v978,
              sumOfSetAmounts: v961
              };
            await stdlib.simMapSet(sim_r, 1, v947, v979);
            const v980 = stdlib.ge(v956, stdlib.checkedBigNumberify('./index.rsh:169:41:decimal', stdlib.UInt_max, '5'));
            if (v980) {
              await stdlib.simMapSet(sim_r, 2, v947, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 1, v947, undefined /* Nothing */);
              const v2176 = v411;
              if (v395) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v393,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2178 = v411;
              if (v395) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v393,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v2180 = v411;
            if (v395) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v411,
                kind: 'from',
                to: v393,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v994 = v467[1];
          
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
  const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
  switch (v467[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v470 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v601 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v732 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v863 = v467[1];
      undefined /* setApiDetails */;
      ;
      const v946 = v863[stdlib.checkedBigNumberify('./index.rsh:147:14:spread', stdlib.UInt_max, '0')];
      const v947 = v946.claimant;
      const v948 = true;
      const v949 = await txn1.getOutput('CommunityMember_respondToClaim', 'v948', ctc2, v948);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v863, v949), {
          at: './index.rsh:147:15:application',
          fs: ['at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:15:function exp)', 'at ./index.rsh:153:29:application call to "sendResponse" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_respondToClaim'
          });
        }
      else {
        }
      
      const v954 = v946.accepted;
      if (v954) {
        const v955 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v947), null);
        let v956;
        switch (v955[0]) {
          case 'None': {
            const v957 = v955[1];
            v956 = stdlib.checkedBigNumberify('./index.rsh:156:73:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v958 = v955[1];
            const v959 = v958.approvalsCount;
            v956 = v959;
            
            break;
            }
          }
        let v961;
        switch (v955[0]) {
          case 'None': {
            const v962 = v955[1];
            v961 = stdlib.checkedBigNumberify('./index.rsh:157:73:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v963 = v955[1];
            const v964 = v963.sumOfSetAmounts;
            v961 = v964;
            
            break;
            }
          }
        let v966;
        switch (v955[0]) {
          case 'None': {
            const v967 = v955[1];
            v966 = stdlib.checkedBigNumberify('./index.rsh:158:70:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v968 = v955[1];
            const v969 = v968.amountRequested;
            v966 = v969;
            
            break;
            }
          }
        let v971;
        switch (v955[0]) {
          case 'None': {
            const v972 = v955[1];
            v971 = v966;
            
            break;
            }
          case 'Some': {
            const v973 = v955[1];
            const v974 = v973.amountSet;
            v971 = v974;
            
            break;
            }
          }
        const v975 = stdlib.lt(v956, stdlib.checkedBigNumberify('./index.rsh:160:63:decimal', stdlib.UInt_max, '5'));
        const v976 = stdlib.div(v961, v956);
        const v977 = v975 ? v971 : v976;
        const v978 = stdlib.add(v956, stdlib.checkedBigNumberify('./index.rsh:162:56:decimal', stdlib.UInt_max, '1'));
        const v979 = {
          accepted: true,
          amountRequested: v966,
          amountSet: v977,
          approvalsCount: v978,
          sumOfSetAmounts: v961
          };
        await stdlib.mapSet(map1, v947, v979);
        const v980 = stdlib.ge(v956, stdlib.checkedBigNumberify('./index.rsh:169:41:decimal', stdlib.UInt_max, '5'));
        if (v980) {
          await stdlib.mapSet(map2, v947, undefined /* Nothing */);
          await stdlib.mapSet(map1, v947, undefined /* Nothing */);
          const v2176 = v411;
          if (v395) {
            return;
            }
          else {
            ;
            return;
            }}
        else {
          const v2178 = v411;
          if (v395) {
            return;
            }
          else {
            ;
            return;
            }}}
      else {
        const v2180 = v411;
        if (v395) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v994 = v467[1];
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
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
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
    chosenInsurancePackage: ctc3,
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
  
  
  const [v393, v394, v395, v411] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v450 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:186:16:application call to [unknown function] (defined at: ./index.rsh:186:16:function exp)', 'at ./index.rsh:77:23:application call to "runCommunityMember_stopContract0_47" (defined at: ./index.rsh:185:14:function exp)', 'at ./index.rsh:77:23:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_stopContract'
    });
  const v454 = ['CommunityMember_stopContract0_47', v450];
  
  const txn1 = await (ctc.sendrecv({
    args: [v393, v394, v395, v411, v454],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'CommunityMember_createClaim0_47': {
          const v470 = v467[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_47': {
          const v601 = v467[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_47': {
          const v732 = v467[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_47': {
          const v863 = v467[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_47': {
          const v994 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_stopContract"
            });
          ;
          const v1118 = true;
          const v1119 = await txn1.getOutput('CommunityMember_stopContract', 'v1118', ctc2, v1118);
          
          const v2194 = v411;
          if (v395) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v411,
              kind: 'from',
              to: v393,
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
  const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn1;
  switch (v467[0]) {
    case 'CommunityMember_createClaim0_47': {
      const v470 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_47': {
      const v601 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_47': {
      const v732 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_47': {
      const v863 = v467[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_47': {
      const v994 = v467[1];
      undefined /* setApiDetails */;
      ;
      const v1118 = true;
      const v1119 = await txn1.getOutput('CommunityMember_stopContract', 'v1118', ctc2, v1118);
      if (v206) {
        stdlib.protect(ctc0, await interact.out(v994, v1119), {
          at: './index.rsh:185:15:application',
          fs: ['at ./index.rsh:185:15:application call to [unknown function] (defined at: ./index.rsh:185:15:function exp)', 'at ./index.rsh:194:29:application call to "sendResponse" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_stopContract'
          });
        }
      else {
        }
      
      const v2194 = v411;
      if (v395) {
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
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc15 = stdlib.T_Object({
    chosenInsurancePackage: ctc3,
    email: ctc13,
    fullName: ctc13,
    phone: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc10,
    setAmount: ctc3
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    CommunityMember_createClaim0_47: ctc9,
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
  
  
  const v389 = stdlib.protect(ctc2, interact.contractIsRunning, 'for Insurer\'s interact field contractIsRunning');
  const v390 = stdlib.protect(ctc3, interact.mandatoryEntryFee, 'for Insurer\'s interact field mandatoryEntryFee');
  
  stdlib.protect(ctc0, await interact.seeFeedback(), {
    at: './index.rsh:46:29:application',
    fs: ['at ./index.rsh:43:17:application call to [unknown function] (defined at: ./index.rsh:43:21:function exp)'],
    msg: 'seeFeedback',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v390, v389],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v394, v395], secs: v397, time: v396, didSend: v30, from: v393 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v394, v395], secs: v397, time: v396, didSend: v30, from: v393 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v393, v394, v395],
    evt_cnt: 0,
    funcNum: 1,
    lct: v396,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v400, time: v399, didSend: v35, from: v398 } = txn2;
      
      ;
      const v401 = stdlib.addressEq(v393, v398);
      ;
      const v404 = v399;
      const v411 = stdlib.checkedBigNumberify('./index.rsh:39:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v395;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v411,
          kind: 'from',
          to: v393,
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
  const {data: [], secs: v400, time: v399, didSend: v35, from: v398 } = txn2;
  ;
  const v401 = stdlib.addressEq(v393, v398);
  stdlib.assert(v401, {
    at: './index.rsh:51:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  let v404 = v399;
  let v411 = stdlib.checkedBigNumberify('./index.rsh:39:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v395;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc20],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v467], secs: v469, time: v468, didSend: v206, from: v466 } = txn3;
    switch (v467[0]) {
      case 'CommunityMember_createClaim0_47': {
        const v470 = v467[1];
        undefined /* setApiDetails */;
        ;
        const v487 = v470[stdlib.checkedBigNumberify('./index.rsh:119:14:spread', stdlib.UInt_max, '0')];
        const v488 = v487.amountRequested;
        const v490 = {
          amountRequested: v488
          };
        stdlib.protect(ctc0, await interact.saveNewClaim(v490), {
          at: './index.rsh:125:46:application',
          fs: ['at ./index.rsh:125:46:application call to [unknown function] (defined at: ./index.rsh:125:46:function exp)', 'at ./index.rsh:125:46:application call to "liftedInteract" (defined at: ./index.rsh:125:46:application)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'saveNewClaim',
          who: 'Insurer'
          });
        
        const v491 = v487.insrPackageId;
        const v492 = v487.amountDue;
        const v493 = v487.matureBalance;
        const v494 = {
          amountDue: v492,
          insrPackageId: v491,
          matureBalance: v493
          };
        await stdlib.mapSet(map2, v466, v494);
        const v495 = v487.fundLimit;
        const v497 = stdlib.ge(v488, v495);
        const v499 = v497 ? v488 : v495;
        const v502 = {
          accepted: false,
          amountRequested: v488,
          amountSet: v499,
          approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          sumOfSetAmounts: v488
          };
        await stdlib.mapSet(map1, v466, v502);
        const v503 = true;
        await txn3.getOutput('CommunityMember_createClaim', 'v503', ctc2, v503);
        const txn4 = await (ctc.sendrecv({
          args: [v393, v394, v395, v411, v499],
          evt_cnt: 0,
          funcNum: 4,
          lct: v468,
          onlyIf: true,
          out_tys: [],
          pay: [v499, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v511, time: v510, didSend: v241, from: v509 } = txn4;
            
            const v513 = stdlib.add(v411, v499);
            sim_r.txns.push({
              amt: v499,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v514 = stdlib.addressEq(v393, v509);
            ;
            const cv404 = v510;
            const cv411 = v513;
            
            await (async () => {
              const v404 = cv404;
              const v411 = cv411;
              
              if (await (async () => {
                
                return v395;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v393,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc3, ctc2, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v511, time: v510, didSend: v241, from: v509 } = txn4;
        const v513 = stdlib.add(v411, v499);
        ;
        const v514 = stdlib.addressEq(v393, v509);
        stdlib.assert(v514, {
          at: './index.rsh:143:25:dot',
          fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const cv404 = v510;
        const cv411 = v513;
        
        v404 = cv404;
        v411 = cv411;
        
        continue;
        
        
        break;
        }
      case 'CommunityMember_payMonthlyFee0_47': {
        const v601 = v467[1];
        undefined /* setApiDetails */;
        const v608 = v601[stdlib.checkedBigNumberify('./index.rsh:110:14:spread', stdlib.UInt_max, '0')];
        const v609 = v608.mfee;
        const v616 = stdlib.add(v411, v609);
        ;
        const v651 = true;
        await txn3.getOutput('CommunityMember_payMonthlyFee', 'v651', ctc2, v651);
        const v661 = stdlib.sub(v616, v609);
        ;
        const cv404 = v468;
        const cv411 = v661;
        
        v404 = cv404;
        v411 = cv411;
        
        continue;
        break;
        }
      case 'CommunityMember_registerMembership0_47': {
        const v732 = v467[1];
        undefined /* setApiDetails */;
        const v747 = stdlib.add(v411, v394);
        ;
        const v795 = v732[stdlib.checkedBigNumberify('./index.rsh:94:13:spread', stdlib.UInt_max, '0')];
        const v796 = true;
        await txn3.getOutput('CommunityMember_registerMembership', 'v796', ctc2, v796);
        const v803 = 'backend: Insurer.interact.saveNewMemberDetails(newMemberDetails) ...';
        stdlib.protect(ctc0, await interact.log(v803), {
          at: './index.rsh:100:37:application',
          fs: ['at ./index.rsh:100:37:application call to [unknown function] (defined at: ./index.rsh:100:37:function exp)', 'at ./index.rsh:100:37:application call to "liftedInteract" (defined at: ./index.rsh:100:37:application)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        stdlib.protect(ctc0, await interact.saveNewMemberDetails(v795), {
          at: './index.rsh:101:54:application',
          fs: ['at ./index.rsh:101:54:application call to [unknown function] (defined at: ./index.rsh:101:54:function exp)', 'at ./index.rsh:101:54:application call to "liftedInteract" (defined at: ./index.rsh:101:54:application)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
          msg: 'saveNewMemberDetails',
          who: 'Insurer'
          });
        
        const v806 = 'backend: done.';
        stdlib.protect(ctc0, await interact.log(v806), {
          at: './index.rsh:102:37:application',
          fs: ['at ./index.rsh:102:37:application call to [unknown function] (defined at: ./index.rsh:102:37:function exp)', 'at ./index.rsh:102:37:application call to "liftedInteract" (defined at: ./index.rsh:102:37:application)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v810 = stdlib.sub(v747, v394);
        ;
        await stdlib.mapSet(map0, v466, null);
        const cv404 = v468;
        const cv411 = v810;
        
        v404 = cv404;
        v411 = cv411;
        
        continue;
        break;
        }
      case 'CommunityMember_respondToClaim0_47': {
        const v863 = v467[1];
        undefined /* setApiDetails */;
        ;
        const v946 = v863[stdlib.checkedBigNumberify('./index.rsh:147:14:spread', stdlib.UInt_max, '0')];
        const v947 = v946.claimant;
        const v948 = true;
        await txn3.getOutput('CommunityMember_respondToClaim', 'v948', ctc2, v948);
        const v954 = v946.accepted;
        if (v954) {
          const v955 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v947), null);
          let v956;
          switch (v955[0]) {
            case 'None': {
              const v957 = v955[1];
              v956 = stdlib.checkedBigNumberify('./index.rsh:156:73:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v958 = v955[1];
              const v959 = v958.approvalsCount;
              v956 = v959;
              
              break;
              }
            }
          let v961;
          switch (v955[0]) {
            case 'None': {
              const v962 = v955[1];
              v961 = stdlib.checkedBigNumberify('./index.rsh:157:73:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v963 = v955[1];
              const v964 = v963.sumOfSetAmounts;
              v961 = v964;
              
              break;
              }
            }
          let v966;
          switch (v955[0]) {
            case 'None': {
              const v967 = v955[1];
              v966 = stdlib.checkedBigNumberify('./index.rsh:158:70:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v968 = v955[1];
              const v969 = v968.amountRequested;
              v966 = v969;
              
              break;
              }
            }
          let v971;
          switch (v955[0]) {
            case 'None': {
              const v972 = v955[1];
              v971 = v966;
              
              break;
              }
            case 'Some': {
              const v973 = v955[1];
              const v974 = v973.amountSet;
              v971 = v974;
              
              break;
              }
            }
          const v975 = stdlib.lt(v956, stdlib.checkedBigNumberify('./index.rsh:160:63:decimal', stdlib.UInt_max, '5'));
          const v976 = stdlib.div(v961, v956);
          const v977 = v975 ? v971 : v976;
          const v978 = stdlib.add(v956, stdlib.checkedBigNumberify('./index.rsh:162:56:decimal', stdlib.UInt_max, '1'));
          const v979 = {
            accepted: true,
            amountRequested: v966,
            amountSet: v977,
            approvalsCount: v978,
            sumOfSetAmounts: v961
            };
          await stdlib.mapSet(map1, v947, v979);
          const v980 = stdlib.ge(v956, stdlib.checkedBigNumberify('./index.rsh:169:41:decimal', stdlib.UInt_max, '5'));
          if (v980) {
            await stdlib.mapSet(map2, v947, undefined /* Nothing */);
            await stdlib.mapSet(map1, v947, undefined /* Nothing */);
            stdlib.protect(ctc0, await interact.notifyFundedMember(v947), {
              at: './index.rsh:179:60:application',
              fs: ['at ./index.rsh:179:60:application call to [unknown function] (defined at: ./index.rsh:179:60:function exp)', 'at ./index.rsh:179:60:application call to "liftedInteract" (defined at: ./index.rsh:179:60:application)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
              msg: 'notifyFundedMember',
              who: 'Insurer'
              });
            
            const cv404 = v468;
            const cv411 = v411;
            
            v404 = cv404;
            v411 = cv411;
            
            continue;}
          else {
            const cv404 = v468;
            const cv411 = v411;
            
            v404 = cv404;
            v411 = cv411;
            
            continue;}}
        else {
          const cv404 = v468;
          const cv411 = v411;
          
          v404 = cv404;
          v411 = cv411;
          
          continue;}
        break;
        }
      case 'CommunityMember_stopContract0_47': {
        const v994 = v467[1];
        undefined /* setApiDetails */;
        ;
        stdlib.protect(ctc0, await interact.stopContract(), {
          at: './index.rsh:192:46:application',
          fs: ['at ./index.rsh:192:46:application call to [unknown function] (defined at: ./index.rsh:192:46:function exp)', 'at ./index.rsh:192:46:application call to "liftedInteract" (defined at: ./index.rsh:192:46:application)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'stopContract',
          who: 'Insurer'
          });
        
        const v1118 = true;
        await txn3.getOutput('CommunityMember_stopContract', 'v1118', ctc2, v1118);
        const cv404 = v468;
        const cv411 = v411;
        
        v404 = cv404;
        v411 = cv411;
        
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
    impure: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`],
    pure: [],
    sigs: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`]
    },
  appApproval: `BiAPAAEEBSAIPOTQxsUK2IK04Qr3o5fUDNHZyL4KAykZCSYDAQABAQAiNQAxGEEFJSpkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgTxNhoAF0lBAIsiNQQjNQZJIQcMQABNSSEIDEAAMkkhCQxAABUhCRJEKjX/gAEENP9QgZQBr1BCAMUhCBJENhoBNf+AAQM0/1CBa69QQgCvIQcSRDYaATX/KTT/UIFsr1BCAJtJIQoMQAAUIQoSRDYaATX/KDT/UIFTr1BCAICB66Li0gESRDYaATX/gAECNP9QQgBqNhoCFzUENhoDNhoBF0khCwxAAzhJJAxAAE8kEkQlNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf+BMVs1/oAEkSc087A0/ogERDT/MQASRDT/NAMhBFs0A1coARcyBjQDIQxbNP4IQgN9SCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBFs1/lcoARc1/SEMWzX8STUFNfuABBwXdVU0+1CwNPsiVUmBAgxAAapJIQsMQAFeSSQMQAAfJBJEgAkAAAAAAAAEXgGwKTUHNP80/jT9MgY0/EIDCkg0+1cBKTX6NPpJNflXASA1+IAJAAAAAAAAA7QBsCk1BzT5VwABF0EBAjT4iANzVwEiSTX3IlVAAAYjNfZCABA091cBIUk19YERWzX2QgAANPciVUAABiI19UIAEDT3VwEhSTX0IQ1bNfVCAAA09yJVQAAGIjX0QgAPNPdXASFJNfMjWzX0QgAANPciVUAABzT0NfNCABA091cBIUk18iEOWzXzQgAANPgoNPiIAvMpKTT0FlA09TT2CjTzNPYlDE0WUDT2IwgWUDT1FlBQNfJJVwABNPJQTFcjGVBmNPYlD0EAOzT4KDT4iAK2IQ2vNfJXACM08lBmNPgoNPiIAqKBIq818klXAAE08lBMVyMZUGY0/zT+NP0yBjT8QgHrNP80/jT9MgY0/EIB3jT/NP40/TIGNPxCAdFINP6IAnKACQAAAAAAAAMcAbApNQexIrIBNP6yCCOyEDT/sgezMQAoMQCIAjwpIkxWZjT/NP40/TIGNPw0/gg0/glCAYxJIwxAAEVINPtXASg1+jT6Ils1+TT5iAIagAkAAAAAAAACiwGwKTUHsSKyATT5sggjshA0/7IHszT/NP40/TIGNPw0+Qg0+QlCAUFINPtXAUE1+jT6STX5IQ5bNfgxACgxAIgBvyk0+VcBCDT5VykIUDT5VzEIUFA191cAIzT3UGY0+YEhW0k19zT4STT3D0019jEAKDEAiAGKKSg0+BZQNPYWUCEFr1A0+BZQUDX1SVcAATT1UExXIxlQZoAJAAAAAAAAAfcBsCk1BzT/NP4WUDT9FlEHCFA0/BZQNPYWUChLAVcAOWdIJTUBMgY1AkIA9UkjDEAAPSMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/NAMhBFs0A1coARcyBiJCAFdIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwgBFzX+gAR/9YLwNP8WUDT+FlEHCFCwgaCNBogAxjEANP8WUDT+FlEHCFAoSwFXAClnSCM1ATIGNQJCAFs1/zX+Nf01/DX7NP1BAB40+zT8FlApUDT/FlAoSwFXADFnSCQ1ATIGNQJCAC6xIrIBNP+yCCOyEDT7sgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 1,
  stateSize: 57,
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
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v395",
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
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v395",
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
                            "name": "_amountDue",
                            "type": "uint256"
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
                            "name": "_fundLimit",
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
                            "internalType": "uint256",
                            "name": "_chosenInsurancePackage",
                            "type": "uint256"
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
                "name": "v467",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
    "name": "_reach_e4",
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
    "name": "_reach_oe_v1118",
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
    "name": "_reach_oe_v503",
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
    "name": "_reach_oe_v651",
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
    "name": "_reach_oe_v796",
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
    "name": "_reach_oe_v948",
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
            "name": "_amountDue",
            "type": "uint256"
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
            "name": "_fundLimit",
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
            "internalType": "uint256",
            "name": "_chosenInsurancePackage",
            "type": "uint256"
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
                            "name": "_amountDue",
                            "type": "uint256"
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
                            "name": "_fundLimit",
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
                            "internalType": "uint256",
                            "name": "_chosenInsurancePackage",
                            "type": "uint256"
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
                "name": "v467",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200285e3803806200285e83398101604081905262000026916200020f565b60008055436003556040805182518152602080840151805182840152015115158183015290517f091a26643f54c14ebc983b2e12a5bd460b902dc635cdc4f355fedff9bf2b74de9181900360600190a1620000843415600762000108565b6040805160608082018352600060208084018281528486018381523380875288840180515184525184015115158252600194859055439094558651928301939093525194810194909452511515908301529060800160405160208183030381529060405260029080519060200190620000ff92919062000132565b505050620002be565b816200012e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001409062000281565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b604080519081016001600160401b03811182821017156200020957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022357600080fd5b6200022d620001d8565b835181526040601f19830112156200024457600080fd5b6200024e620001d8565b915060208401518252604084015180151581146200026b57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b61259080620002ce6000396000f3fe6080604052600436106100d55760003560e01c8063817d57f311610079578063a7661d5411610056578063a7661d54146101e8578063ab53f2c6146101fb578063b4dbe0451461021e578063cadc2e7a1461023157005b8063817d57f3146101935780638185bc9f146101c057806383230757146101d357005b80631e93b0f1116100b25780631e93b0f1146101215780632c10a159146101405780633bc5b7bf146101535780634ac446e01461018057005b806302a56e21146100de5780630bf03a25146101065780631442b0171461011957005b366100dc57005b005b6100f16100ec366004611c41565b61025e565b60405190151581526020015b60405180910390f35b6100f1610114366004611cb3565b6102b2565b6100f1610309565b34801561012d57600080fd5b506003545b6040519081526020016100fd565b6100dc61014e366004611ccf565b610356565b34801561015f57600080fd5b5061017361016e366004611ce7565b61037a565b6040516100fd9190611d2a565b6100f161018e366004611e4e565b6103a6565b34801561019f57600080fd5b506101b36101ae366004611ce7565b6103fe565b6040516100fd9190611e6a565b6100f16101ce366004611f24565b61043d565b3480156101df57600080fd5b50600154610132565b6100dc6101f6366004611ccf565b610495565b34801561020757600080fd5b506102106104b5565b6040516100fd929190611f40565b6100dc61022c366004611f9d565b610552565b34801561023d57600080fd5b5061025161024c366004611ce7565b610572565b6040516100fd9190611fb0565b60006102686116ac565b6102706116da565b6102786116f9565b6040805160208082018352878252838101919091526000835281518082019092528282528301526102a98284610583565b50505192915050565b60006102bc6116ac565b6102c46116da565b6102cc6116f9565b6040805160208082018352878252838301919091526001835281518082019092528282528301526102fd8284610583565b50506020015192915050565b60006103136116ac565b61031b6116da565b6103236116f9565b600060a0820152600481526040805160208082019092528281529083015261034b8284610583565b505060800151919050565b61035e6116ac565b6103766103703684900384018461200d565b82610fb2565b5050565b60408051606081018252600080825260208201819052918101919091526103a08261112f565b92915050565b60006103b06116ac565b6103b86116da565b6103c06116f9565b604080516020808201835287825260608401919091526002835281518082019092528282528301526103f28284610583565b50506040015192915050565b61043460408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6103a082611208565b60006104476116ac565b61044f6116da565b6104576116f9565b604080516020808201835287825260808401919091526003835281518082019092528282528301526104898284610583565b50506060015192915050565b61049d6116ac565b6103766104af3684900384018461200d565b82611306565b6000606060005460028080546104ca90612071565b80601f01602080910402602001604051908101604052809291908181526020018280546104f690612071565b80156105435780601f1061051857610100808354040283529160200191610543565b820191906000526020600020905b81548152906001019060200180831161052657829003601f168201915b50505050509050915091509091565b61055a6116ac565b61037661056c36849003840184612147565b82610583565b61057a61177f565b6103a08261149c565b6105936004600054146011611587565b81516105ae9015806105a757508251600154145b6012611587565b6000808055600280546105c090612071565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec90612071565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b5050505050806020019051810190610651919061220e565b905061065b61179e565b7f5cbd3d546ca2b42cad90164f1bc02abffc639a61f7b8e0439ba7af136fa48a5c8460405161068a9190612291565b60405180910390a160006020850151515160048111156106ac576106ac611d04565b14156108d15760208085015151015181526106c93415600c611587565b80515160209081015181830180519190915282515160c00151815183015282515160e00151815160409081019190915233600090815260068452819020805460ff19166001908117825592518051938201939093559282015160028401559081015160039092019190915581515160a081015191015110156107515780515160a00151610759565b805151604001515b604082810191825260608084018051600090819052855151840151825160209081019190915294518251850152815183018190528551518401518251608090810191909152338252600580875291859020805460ff1990811660019081178355945180518684018054911515919093161790915580880151600283015580870151600383015594850151600482015593015192019190915590519081527f0f3459d1a8510a74498b7eef4c36b50773b8914cb1a30897c29bd3a99759938f910160405180910390a160018084526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528d516001600160a01b0316808b528e88015187528e8c0151151586528e85015184528d8c01518252600590985543909b558951808701979097529351868a0152915115159085015251908301529451818301528351808203909201825260c001909252815190926108ca926002929101906118aa565b5050610fac565b60016020850151515160048111156108eb576108eb611d04565b14156109fc5760208401515160400151608082018190525151610911903414600d611587565b604051600181527fbca24be27471fea1ae13fe10882466be83e66c1c4096c1ba7e2e89f05020d0619060200160405180910390a1600160208401528151608082015151516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561098b573d6000803e3d6000fd5b5061099461192e565b825181516001600160a01b039091169052602080840151825182015260408085015183519015159101528101514390526080820151515160608401516109db908290612405565b6109e5919061241d565b60208083015101526109f6816115ac565b50610fac565b6002602085015151516004811115610a1657610a16611d04565b1415610b0f57610a2d82602001513414600e611587565b604051600181527f224d74cc43c7b66971a990aa169011e320927e8bbedb7fed18273c3e32af78599060200160405180910390a160016040808501919091528251602084015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610aa7573d6000803e3d6000fd5b50336000908152600460205260409020805462ff00ff19166001179055610acc61192e565b825181516001600160a01b0390911690526020808401805183518301526040808601518451901515910152908201514390525160608401516109db908290612405565b6003602085015151516004811115610b2957610b29611d04565b1415610f3d576020840151516080015160a0820152610b4a3415600f611587565b604051600181527f305b4511831fb6302cbbb6a510be0a8c7ca98ff7f3007f603d1ff4dc30888f059060200160405180910390a16001606084015260a0810151515115610f355760a08101515160200151610ba49061149c565b60c08201819052516000906001811115610bc057610bc0611d04565b1415610bd257600160e0820152610c0c565b600160c0820151516001811115610beb57610beb611d04565b1415610c0c5760c08101516040015161010082018190526060015160e08201525b600060c0820151516001811115610c2557610c25611d04565b1415610c38576000610120820152610c73565b600160c0820151516001811115610c5157610c51611d04565b1415610c735760c0810151604001516101408201819052608001516101208201525b600060c0820151516001811115610c8c57610c8c611d04565b1415610c9f576000610160820152610cda565b600160c0820151516001811115610cb857610cb8611d04565b1415610cda5760c0810151604001516101808201819052602001516101608201525b600060c0820151516001811115610cf357610cf3611d04565b1415610d0a576101608101516101a0820152610d45565b600160c0820151516001811115610d2357610d23611d04565b1415610d455760c08101516040908101516101c0830181905201516101a08201525b6101e0810180516001905261016082015190516020015260e0810151600511610d82578060e00151816101200151610d7d9190612434565b610d89565b806101a001515b6101e08201516040015260e0810151610da490600190612405565b6101e0820180516060019190915261012082015190516080015260a0810151516020908101516001600160a01b0316600090815260059091526040902080546001919060ff1916828002179055506101e081015160a0820151516020908101516001600160a01b031660009081526005808352604091829020845160018201805460ff1916911515919091179055928401516002840155908301516003830155606083015160048301556080909201519082015560e082015110610f355760a081018051516020908101516001600160a01b039081166000908152600683526040808220805461ffff199081168255600180830185905560028084018690556003938401869055975151870151909516845260059586905291832080549092168255928101805460ff1916905593840181905590830181905560048301819055910155610eef61192e565b825181516001600160a01b03909116905260208084015182518201526040808501518351901515910152808201805143905260608501519051909101526109f6816115ac565b610eef61192e565b6004602085015151516004811115610f5757610f57611d04565b1415610fac57610f6934156010611587565b604051600181527f56b99fc5ece90a970f1f0631dc528d3bd43874b6be4fe12874a210b064afbf079060200160405180910390a160016080840152610eef61192e565b50505050565b610fc2600160005414600a611587565b8151610fdd901580610fd657508251600154145b600b611587565b600080805560028054610fef90612071565b80601f016020809104026020016040519081016040528092919081815260200182805461101b90612071565b80156110685780601f1061103d57610100808354040283529160200191611068565b820191906000526020600020905b81548152906001019060200180831161104b57829003601f168201915b50505050508060200190518101906110809190612456565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16110ce34156008611587565b80516110e6906001600160a01b031633146009611587565b6110ee61192e565b815181516001600160a01b039091169052602080830151825182015260408084015183519015159101528082018051439052516000910152610fac816115ac565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561117b5761117b611d04565b14156111f8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156111bc576111bc611d04565b60018111156111cd576111cd611d04565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61123e60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526006602052604090205460ff16600181111561126d5761126d611d04565b14156111f8576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156112ae576112ae611d04565b60018111156112bf576112bf611d04565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b6113166005600054146015611587565b815161133190158061132a57508251600154145b6016611587565b60008080556002805461134390612071565b80601f016020809104026020016040519081016040528092919081815260200182805461136f90612071565b80156113bc5780601f10611391576101008083540402835291602001916113bc565b820191906000526020600020905b81548152906001019060200180831161139f57829003601f168201915b50505050508060200190518101906113d491906124cd565b60408051855181526020808701511515908201529192507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1611427816080015134146013611587565b805161143f906001600160a01b031633146014611587565b61144761192e565b815181516001600160a01b039091169052602080830151825182015260408084015183519015159101528101514390526080820151606083015161148b9190612405565b6020808301510152610fac816115ac565b6114a461177f565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156114d3576114d3611d04565b14156111f8576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561151457611514611d04565b600181111561152557611525611d04565b81528154610100900460ff90811615156020808401919091526040805160a08101825260018601549093161515835260028501549183019190915260038401548282015260048401546060830152600590930154608082015291015292915050565b816103765760405163100960cb60e01b81526004810182905260240160405180910390fd5b805160400151156116515760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03168089528a51860151855260018085528b8701518701518352600490975543909655885180860196909652925185890152905115159084015251828401528451808303909301835260a09091019093528051919261164c92600292909101906118aa565b505050565b80515160208083015101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611692573d6000803e3d6000fd5b50600080805560018190556116a990600290611974565b50565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060400160405280600081526020016116f46119ae565b905290565b6040805160c0810190915280600081526020016117146119c1565b8152602001611739604080516060810182526000602082018181529282015290815290565b8152602001611746611a1d565b815260200161177260408051608081018252600060208201818152928201819052606082015290815290565b8152600060209091015290565b60408051606081018252600080825260208201529081016116f4611a30565b6040518061020001604052806117b26119c1565b81526020016117db60405180606001604052806000815260200160008152602001600081525090565b8152602001600081526020016117ef611a30565b8152602001611814604080516060810182526000602082018181529282015290815290565b815260200161184060408051608081018252600060208201818152928201819052606082015290815290565b815260200161184d61177f565b815260200160008152602001611861611a30565b815260200160008152602001611875611a30565b815260200160008152602001611889611a30565b81526020016000815260200161189d611a30565b81526020016116f4611a30565b8280546118b690612071565b90600052602060002090601f0160209004810192826118d8576000855561191e565b82601f106118f157805160ff191683800117855561191e565b8280016001018555821561191e579182015b8281111561191e578251825591602001919060010190611903565b5061192a929150611a61565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016116f4604051806040016040528060008152602001600081525090565b50805461198090612071565b6000825580601f10611990575050565b601f0160209004906000526020600020908101906116a99190611a61565b60405180602001604052806116f46116f9565b60405180602001604052806116f460405180610120016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180602001604052806116f4611a76565b6040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b5b8082111561192a5760008155600101611a62565b604051806080016040528060008152602001611aaf604051806040016040528060008019168152602001600063ffffffff191681525090565b8152604080518082018252600080825260208083018290528085019290925282519182018352815291015290565b604051610120810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b80151581146116a957600080fd5b803561120381611ba8565b60006101208284031215611bd457600080fd5b611bdc611add565b9050611be782611bb6565b81526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525092915050565b60006101208284031215611c5457600080fd5b611c5e8383611bc1565b9392505050565b6001600160a01b03811681146116a957600080fd5b600060408284031215611c8c57600080fd5b611c94611b15565b9050813581526020820135611ca881611c65565b602082015292915050565b600060408284031215611cc557600080fd5b611c5e8383611c7a565b600060408284031215611ce157600080fd5b50919050565b600060208284031215611cf957600080fd5b8135611c5e81611c65565b634e487b7160e01b600052602160045260246000fd5b600281106116a9576116a9611d04565b81516060820190611d3a81611d1a565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215611d6e57600080fd5b611d76611b15565b823581529050602082013563ffffffff1981168114611ca857600080fd5b600081830360c0811215611da757600080fd5b6040516080810181811067ffffffffffffffff82111715611dd857634e487b7160e01b600052604160045260246000fd5b60405283358152915081611def8560208601611d5c565b6020820152611e018560608601611d5c565b60408201526020609f1983011215611e1857600080fd5b611e20611b46565b915060a08401356bffffffffffffffffffffffff1981168114611e4257600080fd5b82526060015292915050565b600060c08284031215611e6057600080fd5b611c5e8383611d94565b815160a0820190611e7a81611d1a565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b600060608284031215611ebc57600080fd5b6040516060810181811067ffffffffffffffff82111715611eed57634e487b7160e01b600052604160045260246000fd5b6040529050808235611efe81611ba8565b81526020830135611f0e81611c65565b6020820152604092830135920191909152919050565b600060608284031215611f3657600080fd5b611c5e8383611eaa565b82815260006020604081840152835180604085015260005b81811015611f7457858101830151858201606001528201611f58565b81811115611f86576000606083870101525b50601f01601f191692909201606001949350505050565b60006102e08284031215611ce157600080fd5b815160e0820190611fc081611d1a565b8083525060208301511515602083015260408301518051151560408401526020810151606084015260408101516080840152606081015160a0840152608081015160c08401525092915050565b60006040828403121561201f57600080fd5b6040516040810181811067ffffffffffffffff8211171561205057634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561206581611ba8565b60208201529392505050565b600181811c9082168061208557607f821691505b60208210811415611ce157634e487b7160e01b600052602260045260246000fd5b600061012082840312156120b957600080fd5b6120c1611b46565b90506120cd8383611bc1565b815292915050565b6000604082840312156120e757600080fd5b6120ef611b46565b90506120cd8383611c7a565b600060c0828403121561210d57600080fd5b612115611b46565b90506120cd8383611d94565b60006060828403121561213357600080fd5b61213b611b46565b90506120cd8383611eaa565b60008183036102e081121561215b57600080fd5b612163611b15565b833581526102c080601f198401121561217b57600080fd5b612183611b46565b925061218d611b77565b60208601356005811061219f57600080fd5b81526121ae87604088016120a6565b60208201526121c18761016088016120d5565b60408201526121d4876101a088016120fb565b60608201526121e7876102608801612121565b60808201526121f7828701611bb6565b60a082015283525060208101919091529392505050565b60006080828403121561222057600080fd5b6040516080810181811067ffffffffffffffff8211171561225157634e487b7160e01b600052604160045260246000fd5b604052825161225f81611c65565b815260208381015190820152604083015161227981611ba8565b60408201526060928301519281019290925250919050565b8151815260208201515180516102e083019190600581106122b4576122b4611d04565b806020850152506020810151518051151560408501526020810151606085015260408101516080850152606081015160a0850152608081015160c085015260a081015160e085015260c0810151610100818187015260e083015161012087015280830151610140870152505050604081015161234861016085018251805182526020908101516001600160a01b0316910152565b50606081810151805180516101a087015260208082015180516101c089015281015163ffffffff199081166101e0890152604083015180516102008a0152909101511661022087015290910151516bffffffffffffffffffffffff1916610240850152506080810151518051151561026085015260208101516001600160a01b0316610280850152604001516102a084015260a0015115156102c090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612418576124186123ef565b500190565b60008282101561242f5761242f6123ef565b500390565b60008261245157634e487b7160e01b600052601260045260246000fd5b500490565b60006060828403121561246857600080fd5b6040516060810181811067ffffffffffffffff8211171561249957634e487b7160e01b600052604160045260246000fd5b60405282516124a781611c65565b81526020838101519082015260408301516124c181611ba8565b60408201529392505050565b600060a082840312156124df57600080fd5b60405160a0810181811067ffffffffffffffff8211171561251057634e487b7160e01b600052604160045260246000fd5b604052825161251e81611c65565b815260208381015190820152604083015161253881611ba8565b604082015260608381015190820152608092830151928101929092525091905056fea264697066735822122034e183c23cf6b217bb77933a09992524254f7df7be44c5d2c2ba83244e577ce364736f6c634300080c0033`,
  BytecodeLen: 10334,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:207:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:77:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:141:25:after expr stmt semicolon',
    fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
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
