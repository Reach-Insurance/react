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
    CommunityMember_createClaim0_48: ctc10,
    CommunityMember_payMonthlyFee0_48: ctc12,
    CommunityMember_registerMembership0_48: ctc16,
    CommunityMember_respondToClaim0_48: ctc18,
    CommunityMember_stopContract0_48: ctc19,
    CommunityMember_withDrawClaim0_48: ctc19
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v498 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:17:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_createClaim0_48" (defined at: ./index.rsh:122:14:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_createClaim'
    });
  const v503 = ['CommunityMember_createClaim0_48', v498];
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v503],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_createClaim"
            });
          ;
          const v563 = v545[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
          const v564 = v563.amountRequested;
          const v569 = v563.insrPackageId;
          const v570 = v563.amountDue;
          const v571 = v563.matureBalance;
          const v572 = {
            amountDue: v570,
            insrPackageId: v569,
            matureBalance: v571
            };
          await stdlib.simMapSet(sim_r, 2, v541, v572);
          const v573 = v563.fundLimit;
          const v575 = stdlib.ge(v564, v573);
          const v577 = v575 ? v564 : v573;
          const v580 = {
            accepted: false,
            amountRequested: v564,
            amountSet: v577,
            approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sumOfSetAmounts: v564
            };
          await stdlib.simMapSet(sim_r, 1, v541, v580);
          const v581 = true;
          const v582 = await txn1.getOutput('CommunityMember_createClaim', 'v581', ctc2, v581);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      undefined /* setApiDetails */;
      ;
      const v563 = v545[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
      const v564 = v563.amountRequested;
      const v569 = v563.insrPackageId;
      const v570 = v563.amountDue;
      const v571 = v563.matureBalance;
      const v572 = {
        amountDue: v570,
        insrPackageId: v569,
        matureBalance: v571
        };
      await stdlib.mapSet(map2, v541, v572);
      const v573 = v563.fundLimit;
      const v575 = stdlib.ge(v564, v573);
      const v577 = v575 ? v564 : v573;
      const v580 = {
        accepted: false,
        amountRequested: v564,
        amountSet: v577,
        approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sumOfSetAmounts: v564
        };
      await stdlib.mapSet(map1, v541, v580);
      const v581 = true;
      const v582 = await txn1.getOutput('CommunityMember_createClaim', 'v581', ctc2, v581);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v545, v582), {
          at: './index.rsh:122:15:application',
          fs: ['at ./index.rsh:122:15:application call to [unknown function] (defined at: ./index.rsh:122:15:function exp)', 'at ./index.rsh:142:29:application call to "sendResponse" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_createClaim'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
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
    CommunityMember_createClaim0_48: ctc12,
    CommunityMember_payMonthlyFee0_48: ctc10,
    CommunityMember_registerMembership0_48: ctc16,
    CommunityMember_respondToClaim0_48: ctc18,
    CommunityMember_stopContract0_48: ctc19,
    CommunityMember_withDrawClaim0_48: ctc19
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v489 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:113:17:application call to [unknown function] (defined at: ./index.rsh:113:17:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_payMonthlyFee0_48" (defined at: ./index.rsh:112:14:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_payMonthlyFee'
    });
  const v490 = v489[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
  const v494 = ['CommunityMember_payMonthlyFee0_48', v489];
  
  const v534 = v490.mfee;
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v494],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v534, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_payMonthlyFee"
            });
          const v705 = v698[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
          const v706 = v705.mfee;
          const v714 = stdlib.add(v477, v706);
          sim_r.txns.push({
            amt: v706,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v751 = true;
          const v752 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v751', ctc2, v751);
          
          const v763 = stdlib.sub(v714, v706);
          sim_r.txns.push({
            amt: v706,
            kind: 'from',
            to: v459,
            tok: undefined /* Nothing */
            });
          const v2850 = v763;
          if (v461) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v763,
              kind: 'from',
              to: v459,
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
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      undefined /* setApiDetails */;
      const v705 = v698[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
      const v706 = v705.mfee;
      const v714 = stdlib.add(v477, v706);
      ;
      const v751 = true;
      const v752 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v751', ctc2, v751);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v698, v752), {
          at: './index.rsh:112:15:application',
          fs: ['at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:116:29:application call to "sendResponse" (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_payMonthlyFee'
          });
        }
      else {
        }
      
      const v763 = stdlib.sub(v714, v706);
      ;
      const v2850 = v763;
      if (v461) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
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
    CommunityMember_createClaim0_48: ctc14,
    CommunityMember_payMonthlyFee0_48: ctc16,
    CommunityMember_registerMembership0_48: ctc12,
    CommunityMember_respondToClaim0_48: ctc18,
    CommunityMember_stopContract0_48: ctc19,
    CommunityMember_withDrawClaim0_48: ctc19
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v480 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:17:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_registerMembership0_48" (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_registerMembership'
    });
  const v485 = ['CommunityMember_registerMembership0_48', v480];
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v485],
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
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_registerMembership"
            });
          const v867 = stdlib.add(v477, v460);
          sim_r.txns.push({
            amt: v460,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v920 = true;
          const v921 = await txn1.getOutput('CommunityMember_registerMembership', 'v920', ctc2, v920);
          
          const v936 = stdlib.sub(v867, v460);
          sim_r.txns.push({
            amt: v460,
            kind: 'from',
            to: v459,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v541, null);
          const v2866 = v936;
          if (v461) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v936,
              kind: 'from',
              to: v459,
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
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      undefined /* setApiDetails */;
      const v867 = stdlib.add(v477, v460);
      ;
      const v920 = true;
      const v921 = await txn1.getOutput('CommunityMember_registerMembership', 'v920', ctc2, v920);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v851, v921), {
          at: './index.rsh:95:14:application',
          fs: ['at ./index.rsh:95:14:application call to [unknown function] (defined at: ./index.rsh:95:14:function exp)', 'at ./index.rsh:100:29:application call to "sendResponse" (defined at: ./index.rsh:98:13:function exp)', 'at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_registerMembership'
          });
        }
      else {
        }
      
      const v936 = stdlib.sub(v867, v460);
      ;
      await stdlib.mapSet(map0, v541, null);
      const v2866 = v936;
      if (v461) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
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
    CommunityMember_createClaim0_48: ctc12,
    CommunityMember_payMonthlyFee0_48: ctc14,
    CommunityMember_registerMembership0_48: ctc18,
    CommunityMember_respondToClaim0_48: ctc10,
    CommunityMember_stopContract0_48: ctc19,
    CommunityMember_withDrawClaim0_48: ctc19
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v507 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:17:application call to [unknown function] (defined at: ./index.rsh:152:17:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_respondToClaim0_48" (defined at: ./index.rsh:151:14:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_respondToClaim'
    });
  const v512 = ['CommunityMember_respondToClaim0_48', v507];
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v512],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_respondToClaim"
            });
          ;
          const v1094 = v1004[stdlib.checkedBigNumberify('./index.rsh:151:14:spread', stdlib.UInt_max, '0')];
          const v1095 = v1094.claimant;
          const v1096 = true;
          const v1097 = await txn1.getOutput('CommunityMember_respondToClaim', 'v1096', ctc2, v1096);
          
          const v1104 = v1094.accepted;
          if (v1104) {
            const v1105 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1095), null);
            let v1106;
            switch (v1105[0]) {
              case 'None': {
                const v1107 = v1105[1];
                v1106 = stdlib.checkedBigNumberify('./index.rsh:160:73:decimal', stdlib.UInt_max, '1');
                
                break;
                }
              case 'Some': {
                const v1108 = v1105[1];
                const v1109 = v1108.approvalsCount;
                v1106 = v1109;
                
                break;
                }
              }
            let v1111;
            switch (v1105[0]) {
              case 'None': {
                const v1112 = v1105[1];
                v1111 = stdlib.checkedBigNumberify('./index.rsh:161:73:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1113 = v1105[1];
                const v1114 = v1113.sumOfSetAmounts;
                v1111 = v1114;
                
                break;
                }
              }
            let v1116;
            switch (v1105[0]) {
              case 'None': {
                const v1117 = v1105[1];
                v1116 = stdlib.checkedBigNumberify('./index.rsh:162:70:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1118 = v1105[1];
                const v1119 = v1118.amountRequested;
                v1116 = v1119;
                
                break;
                }
              }
            let v1121;
            switch (v1105[0]) {
              case 'None': {
                const v1122 = v1105[1];
                v1121 = v1116;
                
                break;
                }
              case 'Some': {
                const v1123 = v1105[1];
                const v1124 = v1123.amountSet;
                v1121 = v1124;
                
                break;
                }
              }
            const v1125 = stdlib.lt(v1106, stdlib.checkedBigNumberify('./index.rsh:164:63:decimal', stdlib.UInt_max, '5'));
            const v1126 = stdlib.div(v1111, v1106);
            const v1127 = v1125 ? v1121 : v1126;
            const v1128 = stdlib.add(v1106, stdlib.checkedBigNumberify('./index.rsh:166:56:decimal', stdlib.UInt_max, '1'));
            const v1129 = {
              accepted: true,
              amountRequested: v1116,
              amountSet: v1127,
              approvalsCount: v1128,
              sumOfSetAmounts: v1111
              };
            await stdlib.simMapSet(sim_r, 1, v1095, v1129);
            const v1130 = stdlib.ge(v1106, stdlib.checkedBigNumberify('./index.rsh:173:41:decimal', stdlib.UInt_max, '5'));
            if (v1130) {
              await stdlib.simMapSet(sim_r, 2, v1095, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 1, v1095, undefined /* Nothing */);
              const v2882 = v477;
              if (v461) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v477,
                  kind: 'from',
                  to: v459,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2884 = v477;
              if (v461) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v477,
                  kind: 'from',
                  to: v459,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v2886 = v477;
            if (v461) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v477,
                kind: 'from',
                to: v459,
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
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      undefined /* setApiDetails */;
      ;
      const v1094 = v1004[stdlib.checkedBigNumberify('./index.rsh:151:14:spread', stdlib.UInt_max, '0')];
      const v1095 = v1094.claimant;
      const v1096 = true;
      const v1097 = await txn1.getOutput('CommunityMember_respondToClaim', 'v1096', ctc2, v1096);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v1004, v1097), {
          at: './index.rsh:151:15:application',
          fs: ['at ./index.rsh:151:15:application call to [unknown function] (defined at: ./index.rsh:151:15:function exp)', 'at ./index.rsh:157:29:application call to "sendResponse" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_respondToClaim'
          });
        }
      else {
        }
      
      const v1104 = v1094.accepted;
      if (v1104) {
        const v1105 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1095), null);
        let v1106;
        switch (v1105[0]) {
          case 'None': {
            const v1107 = v1105[1];
            v1106 = stdlib.checkedBigNumberify('./index.rsh:160:73:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v1108 = v1105[1];
            const v1109 = v1108.approvalsCount;
            v1106 = v1109;
            
            break;
            }
          }
        let v1111;
        switch (v1105[0]) {
          case 'None': {
            const v1112 = v1105[1];
            v1111 = stdlib.checkedBigNumberify('./index.rsh:161:73:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1113 = v1105[1];
            const v1114 = v1113.sumOfSetAmounts;
            v1111 = v1114;
            
            break;
            }
          }
        let v1116;
        switch (v1105[0]) {
          case 'None': {
            const v1117 = v1105[1];
            v1116 = stdlib.checkedBigNumberify('./index.rsh:162:70:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1118 = v1105[1];
            const v1119 = v1118.amountRequested;
            v1116 = v1119;
            
            break;
            }
          }
        let v1121;
        switch (v1105[0]) {
          case 'None': {
            const v1122 = v1105[1];
            v1121 = v1116;
            
            break;
            }
          case 'Some': {
            const v1123 = v1105[1];
            const v1124 = v1123.amountSet;
            v1121 = v1124;
            
            break;
            }
          }
        const v1125 = stdlib.lt(v1106, stdlib.checkedBigNumberify('./index.rsh:164:63:decimal', stdlib.UInt_max, '5'));
        const v1126 = stdlib.div(v1111, v1106);
        const v1127 = v1125 ? v1121 : v1126;
        const v1128 = stdlib.add(v1106, stdlib.checkedBigNumberify('./index.rsh:166:56:decimal', stdlib.UInt_max, '1'));
        const v1129 = {
          accepted: true,
          amountRequested: v1116,
          amountSet: v1127,
          approvalsCount: v1128,
          sumOfSetAmounts: v1111
          };
        await stdlib.mapSet(map1, v1095, v1129);
        const v1130 = stdlib.ge(v1106, stdlib.checkedBigNumberify('./index.rsh:173:41:decimal', stdlib.UInt_max, '5'));
        if (v1130) {
          await stdlib.mapSet(map2, v1095, undefined /* Nothing */);
          await stdlib.mapSet(map1, v1095, undefined /* Nothing */);
          const v2882 = v477;
          if (v461) {
            return;
            }
          else {
            ;
            return;
            }}
        else {
          const v2884 = v477;
          if (v461) {
            return;
            }
          else {
            ;
            return;
            }}}
      else {
        const v2886 = v477;
        if (v461) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
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
    CommunityMember_createClaim0_48: ctc11,
    CommunityMember_payMonthlyFee0_48: ctc13,
    CommunityMember_registerMembership0_48: ctc17,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc9,
    CommunityMember_withDrawClaim0_48: ctc9
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v524 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:210:16:application call to [unknown function] (defined at: ./index.rsh:210:16:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_stopContract0_48" (defined at: ./index.rsh:209:14:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_stopContract'
    });
  const v528 = ['CommunityMember_stopContract0_48', v524];
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v528],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:211:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_stopContract"
            });
          ;
          const v1290 = true;
          const v1291 = await txn1.getOutput('CommunityMember_stopContract', 'v1290', ctc2, v1290);
          
          const v2902 = v477;
          if (v461) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v477,
              kind: 'from',
              to: v459,
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
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      undefined /* setApiDetails */;
      ;
      const v1290 = true;
      const v1291 = await txn1.getOutput('CommunityMember_stopContract', 'v1290', ctc2, v1290);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v1157, v1291), {
          at: './index.rsh:209:15:application',
          fs: ['at ./index.rsh:209:15:application call to [unknown function] (defined at: ./index.rsh:209:15:function exp)', 'at ./index.rsh:218:29:application call to "sendResponse" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_stopContract'
          });
        }
      else {
        }
      
      const v2902 = v477;
      if (v461) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
      return;
      break;
      }
    }
  
  
  };
export async function CommunityMember_withDrawClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CommunityMember_withDrawClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CommunityMember_withDrawClaim expects to receive an interact object as its second argument.`));}
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
    CommunityMember_createClaim0_48: ctc11,
    CommunityMember_payMonthlyFee0_48: ctc13,
    CommunityMember_registerMembership0_48: ctc17,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc9,
    CommunityMember_withDrawClaim0_48: ctc9
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
  
  
  const [v459, v460, v461, v477] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v516 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:190:16:application call to [unknown function] (defined at: ./index.rsh:190:16:function exp)', 'at ./index.rsh:78:23:application call to "runCommunityMember_withDrawClaim0_48" (defined at: ./index.rsh:189:14:function exp)', 'at ./index.rsh:78:23:application call to [unknown function] (defined at: ./index.rsh:78:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_withDrawClaim'
    });
  const v520 = ['CommunityMember_withDrawClaim0_48', v516];
  
  const txn1 = await (ctc.sendrecv({
    args: [v459, v460, v461, v477, v520],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:191:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
      
      switch (v542[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v545 = v542[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v698 = v542[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v851 = v542[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v1004 = v542[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1157 = v542[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1310 = v542[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_withDrawClaim"
            });
          ;
          const v1451 = true;
          const v1452 = await txn1.getOutput('CommunityMember_withDrawClaim', 'v1451', ctc2, v1451);
          
          await stdlib.simMapSet(sim_r, 1, v541, undefined /* Nothing */);
          await stdlib.simMapSet(sim_r, 2, v541, undefined /* Nothing */);
          const v2918 = v477;
          if (v461) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v477,
              kind: 'from',
              to: v459,
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
  const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn1;
  switch (v542[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v545 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v698 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v851 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v1004 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1157 = v542[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1310 = v542[1];
      undefined /* setApiDetails */;
      ;
      const v1451 = true;
      const v1452 = await txn1.getOutput('CommunityMember_withDrawClaim', 'v1451', ctc2, v1451);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v1310, v1452), {
          at: './index.rsh:189:15:application',
          fs: ['at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)', 'at ./index.rsh:194:29:application call to "sendResponse" (defined at: ./index.rsh:192:28:function exp)', 'at ./index.rsh:192:28:application call to [unknown function] (defined at: ./index.rsh:192:28:function exp)'],
          msg: 'out',
          who: 'CommunityMember_withDrawClaim'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map1, v541, undefined /* Nothing */);
      await stdlib.mapSet(map2, v541, undefined /* Nothing */);
      const v2918 = v477;
      if (v461) {
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
    CommunityMember_createClaim0_48: ctc9,
    CommunityMember_payMonthlyFee0_48: ctc12,
    CommunityMember_registerMembership0_48: ctc16,
    CommunityMember_respondToClaim0_48: ctc18,
    CommunityMember_stopContract0_48: ctc19,
    CommunityMember_withDrawClaim0_48: ctc19
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
  
  
  const v455 = stdlib.protect(ctc2, interact.contractIsRunning, 'for Insurer\'s interact field contractIsRunning');
  const v456 = stdlib.protect(ctc3, interact.mandatoryEntryFee, 'for Insurer\'s interact field mandatoryEntryFee');
  
  stdlib.protect(ctc0, await interact.seeFeedback(), {
    at: './index.rsh:47:29:application',
    fs: ['at ./index.rsh:44:17:application call to [unknown function] (defined at: ./index.rsh:44:21:function exp)'],
    msg: 'seeFeedback',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v456, v455],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v460, v461], secs: v463, time: v462, didSend: v30, from: v459 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v460, v461], secs: v463, time: v462, didSend: v30, from: v459 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v459, v460, v461],
    evt_cnt: 0,
    funcNum: 1,
    lct: v462,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v466, time: v465, didSend: v35, from: v464 } = txn2;
      
      ;
      const v467 = stdlib.addressEq(v459, v464);
      ;
      const v470 = v465;
      const v477 = stdlib.checkedBigNumberify('./index.rsh:40:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v461;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v477,
          kind: 'from',
          to: v459,
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
  const {data: [], secs: v466, time: v465, didSend: v35, from: v464 } = txn2;
  ;
  const v467 = stdlib.addressEq(v459, v464);
  stdlib.assert(v467, {
    at: './index.rsh:52:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  let v470 = v465;
  let v477 = stdlib.checkedBigNumberify('./index.rsh:40:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v461;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc20],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v542], secs: v544, time: v543, didSend: v233, from: v541 } = txn3;
    switch (v542[0]) {
      case 'CommunityMember_createClaim0_48': {
        const v545 = v542[1];
        undefined /* setApiDetails */;
        ;
        const v563 = v545[stdlib.checkedBigNumberify('./index.rsh:122:14:spread', stdlib.UInt_max, '0')];
        const v564 = v563.amountRequested;
        const v566 = {
          amountRequested: v564
          };
        stdlib.protect(ctc0, await interact.saveNewClaim(v566), {
          at: './index.rsh:128:46:application',
          fs: ['at ./index.rsh:128:46:application call to [unknown function] (defined at: ./index.rsh:128:46:function exp)', 'at ./index.rsh:128:46:application call to "liftedInteract" (defined at: ./index.rsh:128:46:application)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
          msg: 'saveNewClaim',
          who: 'Insurer'
          });
        
        const v568 = 'backend: API.CommunityMember.createClaim ...';
        stdlib.protect(ctc0, await interact.log(v568), {
          at: './index.rsh:129:37:application',
          fs: ['at ./index.rsh:129:37:application call to [unknown function] (defined at: ./index.rsh:129:37:function exp)', 'at ./index.rsh:129:37:application call to "liftedInteract" (defined at: ./index.rsh:129:37:application)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v569 = v563.insrPackageId;
        const v570 = v563.amountDue;
        const v571 = v563.matureBalance;
        const v572 = {
          amountDue: v570,
          insrPackageId: v569,
          matureBalance: v571
          };
        await stdlib.mapSet(map2, v541, v572);
        const v573 = v563.fundLimit;
        const v575 = stdlib.ge(v564, v573);
        const v577 = v575 ? v564 : v573;
        const v580 = {
          accepted: false,
          amountRequested: v564,
          amountSet: v577,
          approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          sumOfSetAmounts: v564
          };
        await stdlib.mapSet(map1, v541, v580);
        const v581 = true;
        await txn3.getOutput('CommunityMember_createClaim', 'v581', ctc2, v581);
        const txn4 = await (ctc.sendrecv({
          args: [v459, v460, v461, v477, v577],
          evt_cnt: 0,
          funcNum: 4,
          lct: v543,
          onlyIf: true,
          out_tys: [],
          pay: [v577, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v589, time: v588, didSend: v273, from: v587 } = txn4;
            
            const v591 = stdlib.add(v477, v577);
            sim_r.txns.push({
              amt: v577,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v592 = stdlib.addressEq(v459, v587);
            ;
            const cv470 = v588;
            const cv477 = v591;
            
            await (async () => {
              const v470 = cv470;
              const v477 = cv477;
              
              if (await (async () => {
                
                return v461;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v477,
                  kind: 'from',
                  to: v459,
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
        const {data: [], secs: v589, time: v588, didSend: v273, from: v587 } = txn4;
        const v591 = stdlib.add(v477, v577);
        ;
        const v592 = stdlib.addressEq(v459, v587);
        stdlib.assert(v592, {
          at: './index.rsh:147:25:dot',
          fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const cv470 = v588;
        const cv477 = v591;
        
        v470 = cv470;
        v477 = cv477;
        
        continue;
        
        
        break;
        }
      case 'CommunityMember_payMonthlyFee0_48': {
        const v698 = v542[1];
        undefined /* setApiDetails */;
        const v705 = v698[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
        const v706 = v705.mfee;
        const v714 = stdlib.add(v477, v706);
        ;
        const v751 = true;
        await txn3.getOutput('CommunityMember_payMonthlyFee', 'v751', ctc2, v751);
        const v758 = 'backend: API.CommunityMember.payMonthlyFee ...ob.mfee=';
        stdlib.protect(ctc0, await interact.log(v758), {
          at: './index.rsh:117:37:application',
          fs: ['at ./index.rsh:117:37:application call to [unknown function] (defined at: ./index.rsh:117:37:function exp)', 'at ./index.rsh:117:37:application call to "liftedInteract" (defined at: ./index.rsh:117:37:application)', 'at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v763 = stdlib.sub(v714, v706);
        ;
        const cv470 = v543;
        const cv477 = v763;
        
        v470 = cv470;
        v477 = cv477;
        
        continue;
        break;
        }
      case 'CommunityMember_registerMembership0_48': {
        const v851 = v542[1];
        undefined /* setApiDetails */;
        const v867 = stdlib.add(v477, v460);
        ;
        const v919 = v851[stdlib.checkedBigNumberify('./index.rsh:95:13:spread', stdlib.UInt_max, '0')];
        const v920 = true;
        await txn3.getOutput('CommunityMember_registerMembership', 'v920', ctc2, v920);
        const v927 = 'backend: API.CommunityMember.registerMembership ...';
        stdlib.protect(ctc0, await interact.log(v927), {
          at: './index.rsh:101:37:application',
          fs: ['at ./index.rsh:101:37:application call to [unknown function] (defined at: ./index.rsh:101:37:function exp)', 'at ./index.rsh:101:37:application call to "liftedInteract" (defined at: ./index.rsh:101:37:application)', 'at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v929 = 'backend: Insurer.interact.saveNewMemberDetails(newMemberDetails) ...';
        stdlib.protect(ctc0, await interact.log(v929), {
          at: './index.rsh:102:37:application',
          fs: ['at ./index.rsh:102:37:application call to [unknown function] (defined at: ./index.rsh:102:37:function exp)', 'at ./index.rsh:102:37:application call to "liftedInteract" (defined at: ./index.rsh:102:37:application)', 'at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        stdlib.protect(ctc0, await interact.saveNewMemberDetails(v919), {
          at: './index.rsh:103:54:application',
          fs: ['at ./index.rsh:103:54:application call to [unknown function] (defined at: ./index.rsh:103:54:function exp)', 'at ./index.rsh:103:54:application call to "liftedInteract" (defined at: ./index.rsh:103:54:application)', 'at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'saveNewMemberDetails',
          who: 'Insurer'
          });
        
        const v932 = 'backend: done.';
        stdlib.protect(ctc0, await interact.log(v932), {
          at: './index.rsh:104:37:application',
          fs: ['at ./index.rsh:104:37:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:104:37:application call to "liftedInteract" (defined at: ./index.rsh:104:37:application)', 'at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v936 = stdlib.sub(v867, v460);
        ;
        await stdlib.mapSet(map0, v541, null);
        const cv470 = v543;
        const cv477 = v936;
        
        v470 = cv470;
        v477 = cv477;
        
        continue;
        break;
        }
      case 'CommunityMember_respondToClaim0_48': {
        const v1004 = v542[1];
        undefined /* setApiDetails */;
        ;
        const v1094 = v1004[stdlib.checkedBigNumberify('./index.rsh:151:14:spread', stdlib.UInt_max, '0')];
        const v1095 = v1094.claimant;
        const v1096 = true;
        await txn3.getOutput('CommunityMember_respondToClaim', 'v1096', ctc2, v1096);
        const v1103 = 'backend: API.CommunityMember.respondToClaim ...';
        stdlib.protect(ctc0, await interact.log(v1103), {
          at: './index.rsh:158:37:application',
          fs: ['at ./index.rsh:158:37:application call to [unknown function] (defined at: ./index.rsh:158:37:function exp)', 'at ./index.rsh:158:37:application call to "liftedInteract" (defined at: ./index.rsh:158:37:application)', 'at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v1104 = v1094.accepted;
        if (v1104) {
          const v1105 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1095), null);
          let v1106;
          switch (v1105[0]) {
            case 'None': {
              const v1107 = v1105[1];
              v1106 = stdlib.checkedBigNumberify('./index.rsh:160:73:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v1108 = v1105[1];
              const v1109 = v1108.approvalsCount;
              v1106 = v1109;
              
              break;
              }
            }
          let v1111;
          switch (v1105[0]) {
            case 'None': {
              const v1112 = v1105[1];
              v1111 = stdlib.checkedBigNumberify('./index.rsh:161:73:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1113 = v1105[1];
              const v1114 = v1113.sumOfSetAmounts;
              v1111 = v1114;
              
              break;
              }
            }
          let v1116;
          switch (v1105[0]) {
            case 'None': {
              const v1117 = v1105[1];
              v1116 = stdlib.checkedBigNumberify('./index.rsh:162:70:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1118 = v1105[1];
              const v1119 = v1118.amountRequested;
              v1116 = v1119;
              
              break;
              }
            }
          let v1121;
          switch (v1105[0]) {
            case 'None': {
              const v1122 = v1105[1];
              v1121 = v1116;
              
              break;
              }
            case 'Some': {
              const v1123 = v1105[1];
              const v1124 = v1123.amountSet;
              v1121 = v1124;
              
              break;
              }
            }
          const v1125 = stdlib.lt(v1106, stdlib.checkedBigNumberify('./index.rsh:164:63:decimal', stdlib.UInt_max, '5'));
          const v1126 = stdlib.div(v1111, v1106);
          const v1127 = v1125 ? v1121 : v1126;
          const v1128 = stdlib.add(v1106, stdlib.checkedBigNumberify('./index.rsh:166:56:decimal', stdlib.UInt_max, '1'));
          const v1129 = {
            accepted: true,
            amountRequested: v1116,
            amountSet: v1127,
            approvalsCount: v1128,
            sumOfSetAmounts: v1111
            };
          await stdlib.mapSet(map1, v1095, v1129);
          const v1130 = stdlib.ge(v1106, stdlib.checkedBigNumberify('./index.rsh:173:41:decimal', stdlib.UInt_max, '5'));
          if (v1130) {
            await stdlib.mapSet(map2, v1095, undefined /* Nothing */);
            await stdlib.mapSet(map1, v1095, undefined /* Nothing */);
            stdlib.protect(ctc0, await interact.notifyFundedMember(v1095), {
              at: './index.rsh:183:60:application',
              fs: ['at ./index.rsh:183:60:application call to [unknown function] (defined at: ./index.rsh:183:60:function exp)', 'at ./index.rsh:183:60:application call to "liftedInteract" (defined at: ./index.rsh:183:60:application)', 'at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)'],
              msg: 'notifyFundedMember',
              who: 'Insurer'
              });
            
            const cv470 = v543;
            const cv477 = v477;
            
            v470 = cv470;
            v477 = cv477;
            
            continue;}
          else {
            const cv470 = v543;
            const cv477 = v477;
            
            v470 = cv470;
            v477 = cv477;
            
            continue;}}
        else {
          const cv470 = v543;
          const cv477 = v477;
          
          v470 = cv470;
          v477 = cv477;
          
          continue;}
        break;
        }
      case 'CommunityMember_stopContract0_48': {
        const v1157 = v542[1];
        undefined /* setApiDetails */;
        ;
        stdlib.protect(ctc0, await interact.stopContract(), {
          at: './index.rsh:216:46:application',
          fs: ['at ./index.rsh:216:46:application call to [unknown function] (defined at: ./index.rsh:216:46:function exp)', 'at ./index.rsh:216:46:application call to "liftedInteract" (defined at: ./index.rsh:216:46:application)', 'at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
          msg: 'stopContract',
          who: 'Insurer'
          });
        
        const v1290 = true;
        await txn3.getOutput('CommunityMember_stopContract', 'v1290', ctc2, v1290);
        const cv470 = v543;
        const cv477 = v477;
        
        v470 = cv470;
        v477 = cv477;
        
        continue;
        break;
        }
      case 'CommunityMember_withDrawClaim0_48': {
        const v1310 = v542[1];
        undefined /* setApiDetails */;
        ;
        const v1451 = true;
        await txn3.getOutput('CommunityMember_withDrawClaim', 'v1451', ctc2, v1451);
        await stdlib.mapSet(map1, v541, undefined /* Nothing */);
        await stdlib.mapSet(map2, v541, undefined /* Nothing */);
        const cv470 = v543;
        const cv477 = v477;
        
        v470 = cv470;
        v477 = cv477;
        
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
    impure: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`, `CommunityMember_withDrawClaim()byte`],
    pure: [],
    sigs: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`, `CommunityMember_withDrawClaim()byte`]
    },
  appApproval: `BiASAAEFBCAZCDzYgrThCu31/dsL96OX1AyUAdHZyL4K5NDGxQoDKSIJJgMBAAEBACI1ADEYQQWQKmRJIls1ASEGWzUCMRkjEkEACjEAKCEHr2ZCBVw2GgAXSUEApSI1BCM1BkkhCAxAAExJIQkMQAAvSSEKDEAAFCEKEkQqNf+AAQQ0/1AhC69QQgDgIQkSRCo1/4ABBTT/UCELr1BCAMwhCBJENhoBNf+AAQM0/1CBa69QQgC2SSEMDEAAL0khDQxAABQhDRJENhoBNf8pNP9QgWyvUEIAlCEMEkQ2GgE1/yg0/1CBU69QQgCAgeui4tIBEkQ2GgE1/4ABAjT/UEIAajYaAhc1BDYaAzYaARdJIQ4MQAOJSSUMQABPJRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/gTFbNf6ABJEnNPOwNP6IBJU0/zEAEkQ0/zQDIQRbNANXKAEXMgY0AyEPWzT+CEIDzkglNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XKAEXNf0hD1s1/Ek1BTX7gAQcF3VVNPtQsDT7IlVJIQ4MQAGvSSUMQABwSSQMQABNJBJEgAkAAAAAAAAFqwGwKTUHMQAoMQCIA/khEK81+klXAAE0+lBMVyMZUGYxACgxAIgD3yEFrzX6VwAjNPpQZjT/NP40/TIGNPxCAy5IgAkAAAAAAAAFCgGwKTUHNP80/jT9MgY0/EIDEUg0+1cBKTX6NPpJNflXASA1+IAJAAAAAAAABEgBsCk1BzT5VwABF0EBAjT4iAN6VwEiSTX3IlVAAAYjNfZCABA091cBIUk19YERWzX2QgAANPciVUAABiI19UIAEDT3VwEhSTX0IQVbNfVCAAA09yJVQAAGIjX0QgAPNPdXASFJNfMjWzX0QgAANPciVUAABzT0NfNCABA091cBIUk18iERWzXzQgAANPgoNPiIAvopKTT0FlA09TT2CjTzNPYkDE0WUDT2IwgWUDT1FlBQNfJJVwABNPJQTFcjGVBmNPYkD0EAOzT4KDT4iAK9IQWvNfJXACM08lBmNPgoNPiIAqkhEK818klXAAE08lBMVyMZUGY0/zT+NP0yBjT8QgHyNP80/jT9MgY0/EIB5TT/NP40/TIGNPxCAdhJIwxAAJFJgQIMQABFSDT+iAJsgAkAAAAAAAADmAGwKTUHsSKyATT+sggjshA0/7IHszEAKDEAiAI2KSJMVmY0/zT+NP0yBjT8NP4INP4JQgGGSDT7VwEoNfo0+iJbNfk0+YgCGoAJAAAAAAAAAu8BsCk1B7EisgE0+bIII7IQNP+yB7M0/zT+NP0yBjT8NPkINPkJQgFBSDT7VwFBNfo0+kk1+SERWzX4MQAoMQCIAb8pNPlXAQg0+VcpCFA0+VcxCFBQNfdXACM091BmNPmBIVtJNfc0+Ek09w9NNfYxACgxAIgBiikoNPgWUDT2FlAhBq9QNPgWUFA19UlXAAE09VBMVyMZUGaACQAAAAAAAAJFAbApNQc0/zT+FlA0/RZRBwhQNPwWUDT2FlAoSwFXADlnSCQ1ATIGNQJCAPVJIwxAAD0jEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQRbNANXKAEXMgYiQgBXSCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIARc1/oAEf/WC8DT/FlA0/hZRBwhQsIGgjQaIAMYxADT/FlA0/hZRBwhQKEsBVwApZ0gjNQEyBjUCQgBbNf81/jX9Nfw1+zT9QQAeNPs0/BZQKVA0/xZQKEsBVwAxZ0glNQEyBjUCQgAusSKyATT/sggjshA0+7IHs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEHr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v460",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v461",
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
                "name": "v460",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v461",
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
                    "name": "_CommunityMember_createClaim0_48",
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
                    "name": "_CommunityMember_payMonthlyFee0_48",
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
                    "name": "_CommunityMember_registerMembership0_48",
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
                    "name": "_CommunityMember_respondToClaim0_48",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_48",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_withDrawClaim0_48",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v542",
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
    "name": "_reach_oe_v1096",
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
    "name": "_reach_oe_v1290",
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
    "name": "_reach_oe_v1451",
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
    "name": "_reach_oe_v581",
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
    "name": "_reach_oe_v751",
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
    "name": "_reach_oe_v920",
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
    "name": "CommunityMember_withDrawClaim",
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
                    "name": "_CommunityMember_createClaim0_48",
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
                    "name": "_CommunityMember_payMonthlyFee0_48",
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
                    "name": "_CommunityMember_registerMembership0_48",
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
                    "name": "_CommunityMember_respondToClaim0_48",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_stopContract0_48",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CommunityMember_withDrawClaim0_48",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v542",
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
  Bytecode: `0x6080604052604051620029aa380380620029aa83398101604081905262000026916200020f565b60008055436003556040805182518152602080840151805182840152015115158183015290517f091a26643f54c14ebc983b2e12a5bd460b902dc635cdc4f355fedff9bf2b74de9181900360600190a1620000843415600762000108565b6040805160608082018352600060208084018281528486018381523380875288840180515184525184015115158252600194859055439094558651928301939093525194810194909452511515908301529060800160405160208183030381529060405260029080519060200190620000ff92919062000132565b505050620002be565b816200012e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001409062000281565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b604080519081016001600160401b03811182821017156200020957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022357600080fd5b6200022d620001d8565b835181526040601f19830112156200024457600080fd5b6200024e620001d8565b915060208401518252604084015180151581146200026b57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b6126dc80620002ce6000396000f3fe6080604052600436106100e05760003560e01c80637619058c11610084578063832307571161005657806383230757146101f9578063a7661d541461020e578063ab53f2c614610221578063cadc2e7a1461024457005b80637619058c1461019e5780637980f6c3146101b1578063817d57f3146101b95780638185bc9f146101e657005b80631e93b0f1116100bd5780631e93b0f11461012c5780632c10a1591461014b5780633bc5b7bf1461015e5780634ac446e01461018b57005b806302a56e21146100e95780630bf03a25146101115780631442b0171461012457005b366100e757005b005b6100fc6100f7366004611d6e565b610271565b60405190151581526020015b60405180910390f35b6100fc61011f366004611de0565b6102c5565b6100fc61031c565b34801561013857600080fd5b506003545b604051908152602001610108565b6100e7610159366004611dfc565b610369565b34801561016a57600080fd5b5061017e610179366004611e14565b61038d565b6040516101089190611e57565b6100fc610199366004611f7b565b6103a4565b6100e76101ac366004611f97565b6103fc565b6100fc61041c565b3480156101c557600080fd5b506101d96101d4366004611e14565b610469565b6040516101089190611faa565b6100fc6101f4366004612064565b6104a8565b34801561020557600080fd5b5060015461013d565b6100e761021c366004611dfc565b610500565b34801561022d57600080fd5b50610236610520565b604051610108929190612080565b34801561025057600080fd5b5061026461025f366004611e14565b6105bd565b60405161010891906120dd565b600061027b6117b8565b6102836117ed565b61028b61180c565b6040805160208082018352878252838101919091526000835281518082019092528282528301526102bc82846105ce565b50505192915050565b60006102cf6117b8565b6102d76117ed565b6102df61180c565b60408051602080820183528782528383019190915260018352815180820190925282825283015261031082846105ce565b50506020015192915050565b60006103266117b8565b61032e6117ed565b61033661180c565b600060a0820152600481526040805160208082019092528281529083015261035e82846105ce565b505060800151919050565b6103716117b8565b6103896103833684900384018461213a565b826110d3565b5050565b610395611899565b61039e82611250565b92915050565b60006103ae6117b8565b6103b66117ed565b6103be61180c565b604080516020808201835287825260608401919091526002835281518082019092528282528301526103f082846105ce565b50506040015192915050565b6104046117b8565b6103896104163684900384018461223f565b826105ce565b60006104266117b8565b61042e6117ed565b61043661180c565b600060c0820152600581526040805160208082019092528281529083015261045e82846105ce565b505060a00151919050565b61049f60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b61039e82611314565b60006104b26117b8565b6104ba6117ed565b6104c261180c565b604080516020808201835287825260808401919091526003835281518082019092528282528301526104f482846105ce565b50506060015192915050565b6105086117b8565b61038961051a3684900384018461213a565b82611412565b60006060600054600280805461053590612318565b80601f016020809104026020016040519081016040528092919081815260200182805461056190612318565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b50505050509050915091509091565b6105c56118ac565b61039e826115a8565b6105de6004600054146012611693565b81516105f99015806105f257508251600154145b6013611693565b60008080556002805461060b90612318565b80601f016020809104026020016040519081016040528092919081815260200182805461063790612318565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b505050505080602001905181019061069c919061234d565b90506106a66118cb565b7ff80428e95431c7e7f311e0de75c002a56f9ee362f32c553194f30e86e7cdfef3846040516106d591906123d0565b60405180910390a160006020850151515160058111156106f7576106f7611e31565b141561091c5760208085015151015181526107143415600c611693565b80515160209081015181830180519190915282515160c00151815183015282515160e00151815160409081019190915233600090815260068452819020805460ff19166001908117825592518051938201939093559282015160028401559081015160039092019190915581515160a0810151910151101561079c5780515160a001516107a4565b805151604001515b604082810191825260608084018051600090819052855151840151825160209081019190915294518251850152815183018190528551518401518251608090810191909152338252600580875291859020805460ff1990811660019081178355945180518684018054911515919093161790915580880151600283015580870151600383015594850151600482015593015192019190915590519081527f227fe5af38265f442d709f9aa05dd3658b06e30aa5b9c763587c876930b3b3cf910160405180910390a160018084526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528d516001600160a01b0316808b528e88015187528e8c0151151586528e85015184528d8c01518252600590985543909b558951808701979097529351868a0152915115159085015251908301529451818301528351808203909201825260c00190925281519092610915926002929101906119d7565b50506110cd565b600160208501515151600581111561093657610936611e31565b1415610a47576020840151516040015160808201819052515161095c903414600d611693565b604051600181527f0263d614a6d19d5c17186d034203d1adf2151d6bd25d11489774b52a61b1cfb49060200160405180910390a1600160208401528151608082015151516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109d6573d6000803e3d6000fd5b506109df611a5b565b825181516001600160a01b03909116905260208084015182518201526040808501518351901515910152810151439052608082015151516060840151610a26908290612551565b610a309190612569565b6020808301510152610a41816116b8565b506110cd565b6002602085015151516005811115610a6157610a61611e31565b1415610b5a57610a7882602001513414600e611693565b604051600181527f78508e2cbf97e17b659b77539fa4eaa778b5820ad46aeb78734549abd194f1249060200160405180910390a160016040808501919091528251602084015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610af2573d6000803e3d6000fd5b50336000908152600460205260409020805462ff00ff19166001179055610b17611a5b565b825181516001600160a01b039091169052602080840180518351830152604080860151845190151591015290820151439052516060840151610a26908290612551565b6003602085015151516005811115610b7457610b74611e31565b1415610f88576020840151516080015160a0820152610b953415600f611693565b604051600181527fa09195fde2a1798104bb30eb4f406977c85d91c7004ae03f18e7064c0245649b9060200160405180910390a16001606084015260a0810151515115610f805760a08101515160200151610bef906115a8565b60c08201819052516000906001811115610c0b57610c0b611e31565b1415610c1d57600160e0820152610c57565b600160c0820151516001811115610c3657610c36611e31565b1415610c575760c08101516040015161010082018190526060015160e08201525b600060c0820151516001811115610c7057610c70611e31565b1415610c83576000610120820152610cbe565b600160c0820151516001811115610c9c57610c9c611e31565b1415610cbe5760c0810151604001516101408201819052608001516101208201525b600060c0820151516001811115610cd757610cd7611e31565b1415610cea576000610160820152610d25565b600160c0820151516001811115610d0357610d03611e31565b1415610d255760c0810151604001516101808201819052602001516101608201525b600060c0820151516001811115610d3e57610d3e611e31565b1415610d55576101608101516101a0820152610d90565b600160c0820151516001811115610d6e57610d6e611e31565b1415610d905760c08101516040908101516101c0830181905201516101a08201525b6101e0810180516001905261016082015190516020015260e0810151600511610dcd578060e00151816101200151610dc89190612580565b610dd4565b806101a001515b6101e08201516040015260e0810151610def90600190612551565b6101e0820180516060019190915261012082015190516080015260a0810151516020908101516001600160a01b0316600090815260059091526040902080546001919060ff1916828002179055506101e081015160a0820151516020908101516001600160a01b031660009081526005808352604091829020845160018201805460ff1916911515919091179055928401516002840155908301516003830155606083015160048301556080909201519082015560e082015110610f805760a081018051516020908101516001600160a01b039081166000908152600683526040808220805461ffff199081168255600180830185905560028084018690556003938401869055975151870151909516845260059586905291832080549092168255928101805460ff1916905593840181905590830181905560048301819055910155610f3a611a5b565b825181516001600160a01b0390911690526020808401518251820152604080850151835190151591015280820180514390526060850151905190910152610a41816116b8565b610f3a611a5b565b6004602085015151516005811115610fa257610fa2611e31565b1415610ff757610fb434156010611693565b604051600181527f2186fb942561f0924d53d9e0ef01cb4030bcd0fdffb6279467e37550cc6232329060200160405180910390a160016080840152610f3a611a5b565b600560208501515151600581111561101157611011611e31565b14156110cd5761102334156011611693565b604051600181527f9e40f7e99af01b84d5fea66b3d940711de592c127262e18ee83c8f033c6fa3b09060200160405180910390a1600160a08401819052336000908152600560208181526040808420805461ffff199081168255818701805460ff1916905560028083018790556003808401889055600484018890559290950186905560069093529084208054909216825593810183905590810182905590910155610f3a611a5b565b50505050565b6110e3600160005414600a611693565b81516110fe9015806110f757508251600154145b600b611693565b60008080556002805461111090612318565b80601f016020809104026020016040519081016040528092919081815260200182805461113c90612318565b80156111895780601f1061115e57610100808354040283529160200191611189565b820191906000526020600020905b81548152906001019060200180831161116c57829003601f168201915b50505050508060200190518101906111a191906125a2565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111ef34156008611693565b8051611207906001600160a01b031633146009611693565b61120f611a5b565b815181516001600160a01b0390911690526020808301518251820152604080840151835190151591015280820180514390525160009101526110cd816116b8565b611258611899565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561128757611287611e31565b1415611304576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112c8576112c8611e31565b60018111156112d9576112d9611e31565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61134a60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526006602052604090205460ff16600181111561137957611379611e31565b1415611304576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156113ba576113ba611e31565b60018111156113cb576113cb611e31565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b6114226005600054146016611693565b815161143d90158061143657508251600154145b6017611693565b60008080556002805461144f90612318565b80601f016020809104026020016040519081016040528092919081815260200182805461147b90612318565b80156114c85780601f1061149d576101008083540402835291602001916114c8565b820191906000526020600020905b8154815290600101906020018083116114ab57829003601f168201915b50505050508060200190518101906114e09190612619565b60408051855181526020808701511515908201529192507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1611533816080015134146014611693565b805161154b906001600160a01b031633146015611693565b611553611a5b565b815181516001600160a01b03909116905260208083015182518201526040808401518351901515910152810151439052608082015160608301516115979190612551565b60208083015101526110cd816116b8565b6115b06118ac565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156115df576115df611e31565b1415611304576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561162057611620611e31565b600181111561163157611631611e31565b81528154610100900460ff90811615156020808401919091526040805160a08101825260018601549093161515835260028501549183019190915260038401548282015260048401546060830152600590930154608082015291015292915050565b816103895760405163100960cb60e01b81526004810182905260240160405180910390fd5b8051604001511561175d5760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03168089528a51860151855260018085528b8701518701518352600490975543909655885180860196909652925185890152905115159084015251828401528451808303909301835260a09091019093528051919261175892600292909101906119d7565b505050565b80515160208083015101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561179e573d6000803e3d6000fd5b50600080805560018190556117b590600290611aa1565b50565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611807611adb565b905290565b6040805160e081019091528060008152602001611827611aee565b815260200161184c604080516060810182526000602082018181529282015290815290565b8152602001611859611b4a565b815260200161188560408051608081018252600060208201818152928201819052606082015290815290565b815260006020820181905260409091015290565b6040805160608101909152806000611885565b6040805160608101825260008082526020820152908101611807611b5d565b6040518061020001604052806118df611aee565b815260200161190860405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200161191c611b5d565b8152602001611941604080516060810182526000602082018181529282015290815290565b815260200161196d60408051608081018252600060208201818152928201819052606082015290815290565b815260200161197a6118ac565b81526020016000815260200161198e611b5d565b8152602001600081526020016119a2611b5d565b8152602001600081526020016119b6611b5d565b8152602001600081526020016119ca611b5d565b8152602001611807611b5d565b8280546119e390612318565b90600052602060002090601f016020900481019282611a055760008555611a4b565b82601f10611a1e57805160ff1916838001178555611a4b565b82800160010185558215611a4b579182015b82811115611a4b578251825591602001919060010190611a30565b50611a57929150611b8e565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611807604051806040016040528060008152602001600081525090565b508054611aad90612318565b6000825580601f10611abd575050565b601f0160209004906000526020600020908101906117b59190611b8e565b604051806020016040528061180761180c565b604051806020016040528061180760405180610120016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280611807611ba3565b6040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b5b80821115611a575760008155600101611b8f565b604051806080016040528060008152602001611bdc604051806040016040528060008019168152602001600063ffffffff191681525090565b8152604080518082018252600080825260208083018290528085019290925282519182018352815291015290565b604051610120810167ffffffffffffffff81118282101715611c3c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff81118282101715611c3c57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611c3c57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611c3c57634e487b7160e01b600052604160045260246000fd5b80151581146117b557600080fd5b803561130f81611cd5565b60006101208284031215611d0157600080fd5b611d09611c0a565b9050611d1482611ce3565b81526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525092915050565b60006101208284031215611d8157600080fd5b611d8b8383611cee565b9392505050565b6001600160a01b03811681146117b557600080fd5b600060408284031215611db957600080fd5b611dc1611c42565b9050813581526020820135611dd581611d92565b602082015292915050565b600060408284031215611df257600080fd5b611d8b8383611da7565b600060408284031215611e0e57600080fd5b50919050565b600060208284031215611e2657600080fd5b8135611d8b81611d92565b634e487b7160e01b600052602160045260246000fd5b600281106117b5576117b5611e31565b81516060820190611e6781611e47565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215611e9b57600080fd5b611ea3611c42565b823581529050602082013563ffffffff1981168114611dd557600080fd5b600081830360c0811215611ed457600080fd5b6040516080810181811067ffffffffffffffff82111715611f0557634e487b7160e01b600052604160045260246000fd5b60405283358152915081611f1c8560208601611e89565b6020820152611f2e8560608601611e89565b60408201526020609f1983011215611f4557600080fd5b611f4d611c73565b915060a08401356bffffffffffffffffffffffff1981168114611f6f57600080fd5b82526060015292915050565b600060c08284031215611f8d57600080fd5b611d8b8383611ec1565b60006103008284031215611e0e57600080fd5b815160a0820190611fba81611e47565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b600060608284031215611ffc57600080fd5b6040516060810181811067ffffffffffffffff8211171561202d57634e487b7160e01b600052604160045260246000fd5b604052905080823561203e81611cd5565b8152602083013561204e81611d92565b6020820152604092830135920191909152919050565b60006060828403121561207657600080fd5b611d8b8383611fea565b82815260006020604081840152835180604085015260005b818110156120b457858101830151858201606001528201612098565b818111156120c6576000606083870101525b50601f01601f191692909201606001949350505050565b815160e08201906120ed81611e47565b8083525060208301511515602083015260408301518051151560408401526020810151606084015260408101516080840152606081015160a0840152608081015160c08401525092915050565b60006040828403121561214c57600080fd5b6040516040810181811067ffffffffffffffff8211171561217d57634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561219281611cd5565b60208201529392505050565b600061012082840312156121b157600080fd5b6121b9611c73565b90506121c58383611cee565b815292915050565b6000604082840312156121df57600080fd5b6121e7611c73565b90506121c58383611da7565b600060c0828403121561220557600080fd5b61220d611c73565b90506121c58383611ec1565b60006060828403121561222b57600080fd5b612233611c73565b90506121c58383611fea565b600081830361030081121561225357600080fd5b61225b611c42565b833581526102e080601f198401121561227357600080fd5b61227b611c73565b9250612285611ca4565b60208601356006811061229757600080fd5b81526122a6876040880161219e565b60208201526122b98761016088016121cd565b60408201526122cc876101a088016121f3565b60608201526122df876102608801612219565b60808201526122f16102c08701611ce3565b60a0820152612301828701611ce3565b60c082015283525060208101919091529392505050565b600181811c9082168061232c57607f821691505b60208210811415611e0e57634e487b7160e01b600052602260045260246000fd5b60006080828403121561235f57600080fd5b6040516080810181811067ffffffffffffffff8211171561239057634e487b7160e01b600052604160045260246000fd5b604052825161239e81611d92565b81526020838101519082015260408301516123b881611cd5565b60408201526060928301519281019290925250919050565b81518152602082015151805161030083019190600681106123f3576123f3611e31565b806020850152506020810151518051151560408501526020810151606085015260408101516080850152606081015160a0850152608081015160c085015260a081015160e085015260c0810151610100818187015260e083015161012087015280830151610140870152505050604081015161248761016085018251805182526020908101516001600160a01b0316910152565b50606081810151805180516101a087015260208082015180516101c089015281015163ffffffff199081166101e0890152604083015180516102008a0152909101511661022087015290910151516bffffffffffffffffffffffff1916610240850152506080810151518051151561026085015260208101516001600160a01b0316610280850152604001516102a084015260a081015115156102c084015260c0015115156102e090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156125645761256461253b565b500190565b60008282101561257b5761257b61253b565b500390565b60008261259d57634e487b7160e01b600052601260045260246000fd5b500490565b6000606082840312156125b457600080fd5b6040516060810181811067ffffffffffffffff821117156125e557634e487b7160e01b600052604160045260246000fd5b60405282516125f381611d92565b815260208381015190820152604083015161260d81611cd5565b60408201529392505050565b600060a0828403121561262b57600080fd5b60405160a0810181811067ffffffffffffffff8211171561265c57634e487b7160e01b600052604160045260246000fd5b604052825161266a81611d92565b815260208381015190820152604083015161268481611cd5565b604082015260608381015190820152608092830151928101929092525091905056fea2646970667358221220b0943307b7f862e21d19526e5fa33422ae5470f843c5474bb58563449f86766264736f6c634300080c0033`,
  BytecodeLen: 10666,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:231:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:78:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:145:25:after expr stmt semicolon',
    fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)'],
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
  "CommunityMember_withDrawClaim": CommunityMember_withDrawClaim,
  "Insurer": Insurer
  };
export const _APIs = {
  CommunityMember: {
    createClaim: CommunityMember_createClaim,
    payMonthlyFee: CommunityMember_payMonthlyFee,
    registerMembership: CommunityMember_registerMembership,
    respondToClaim: CommunityMember_respondToClaim,
    stopContract: CommunityMember_stopContract,
    withDrawClaim: CommunityMember_withDrawClaim
    }
  };
