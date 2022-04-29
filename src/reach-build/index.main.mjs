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
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc10 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc9,
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
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc11,
    CommunityMember_payMonthlyFee0_48: ctc13,
    CommunityMember_registerMembership0_48: ctc17,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc20,
    CommunityMember_withDrawClaim0_48: ctc20
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v496 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:143:17:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_createClaim0_48" (defined at: ./index.rsh:142:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_createClaim'
    });
  const v501 = ['CommunityMember_createClaim0_48', v496];
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v501],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:144:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_createClaim"
            });
          ;
          const v561 = v543[stdlib.checkedBigNumberify('./index.rsh:142:14:spread', stdlib.UInt_max, '0')];
          const v562 = v561.amountRequested;
          const v568 = v561.insrPackageId;
          const v569 = v561.amountDue;
          const v570 = v561.matureBalance;
          const v571 = {
            amountDue: v569,
            insrPackageId: v568,
            matureBalance: v570
            };
          await stdlib.simMapSet(sim_r, 2, v539, v571);
          const v572 = v561.fundLimit;
          const v574 = stdlib.ge(v562, v572);
          const v575 = v574 ? v562 : v572;
          const v576 = {
            accepted: false,
            amountRequested: v562,
            amountSet: v575,
            approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sumOfSetAmounts: v562
            };
          await stdlib.simMapSet(sim_r, 1, v539, v576);
          const v577 = true;
          const v578 = await txn1.getOutput('CommunityMember_createClaim', 'v577', ctc2, v577);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v845 = v540[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v996 = v540[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1147 = v540[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1298 = v540[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      undefined /* setApiDetails */;
      ;
      const v561 = v543[stdlib.checkedBigNumberify('./index.rsh:142:14:spread', stdlib.UInt_max, '0')];
      const v562 = v561.amountRequested;
      const v568 = v561.insrPackageId;
      const v569 = v561.amountDue;
      const v570 = v561.matureBalance;
      const v571 = {
        amountDue: v569,
        insrPackageId: v568,
        matureBalance: v570
        };
      await stdlib.mapSet(map2, v539, v571);
      const v572 = v561.fundLimit;
      const v574 = stdlib.ge(v562, v572);
      const v575 = v574 ? v562 : v572;
      const v576 = {
        accepted: false,
        amountRequested: v562,
        amountSet: v575,
        approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sumOfSetAmounts: v562
        };
      await stdlib.mapSet(map1, v539, v576);
      const v577 = true;
      const v578 = await txn1.getOutput('CommunityMember_createClaim', 'v577', ctc2, v577);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v543, v578), {
          at: './index.rsh:142:15:application',
          fs: ['at ./index.rsh:142:15:application call to [unknown function] (defined at: ./index.rsh:142:15:function exp)', 'at ./index.rsh:169:29:application call to "sendResponse" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
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
      const v694 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
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
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc12 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc11,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
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
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc13,
    CommunityMember_payMonthlyFee0_48: ctc10,
    CommunityMember_registerMembership0_48: ctc17,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc20,
    CommunityMember_withDrawClaim0_48: ctc20
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v487 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:133:17:application call to [unknown function] (defined at: ./index.rsh:133:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_payMonthlyFee0_48" (defined at: ./index.rsh:132:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_payMonthlyFee'
    });
  const v488 = v487[stdlib.checkedBigNumberify('./index.rsh:132:14:spread', stdlib.UInt_max, '0')];
  const v492 = ['CommunityMember_payMonthlyFee0_48', v487];
  
  const v532 = v488.mfee;
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v492],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [v532, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_payMonthlyFee"
            });
          const v701 = v694[stdlib.checkedBigNumberify('./index.rsh:132:14:spread', stdlib.UInt_max, '0')];
          const v702 = v701.mfee;
          const v710 = stdlib.add(v475, v702);
          sim_r.txns.push({
            amt: v702,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v745 = true;
          const v746 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v745', ctc2, v745);
          
          const v757 = stdlib.sub(v710, v702);
          sim_r.txns.push({
            amt: v702,
            kind: 'from',
            to: v457,
            tok: undefined /* Nothing */
            });
          const v2890 = v757;
          if (v459) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v757,
              kind: 'from',
              to: v457,
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
          const v845 = v540[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v996 = v540[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1147 = v540[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1298 = v540[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v694 = v540[1];
      undefined /* setApiDetails */;
      const v701 = v694[stdlib.checkedBigNumberify('./index.rsh:132:14:spread', stdlib.UInt_max, '0')];
      const v702 = v701.mfee;
      const v710 = stdlib.add(v475, v702);
      ;
      const v745 = true;
      const v746 = await txn1.getOutput('CommunityMember_payMonthlyFee', 'v745', ctc2, v745);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v694, v746), {
          at: './index.rsh:132:15:application',
          fs: ['at ./index.rsh:132:15:application call to [unknown function] (defined at: ./index.rsh:132:15:function exp)', 'at ./index.rsh:136:29:application call to "sendResponse" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_payMonthlyFee'
          });
        }
      else {
        }
      
      const v757 = stdlib.sub(v710, v702);
      ;
      const v2890 = v757;
      if (v459) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
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
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc14 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc13,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc15,
    CommunityMember_payMonthlyFee0_48: ctc17,
    CommunityMember_registerMembership0_48: ctc12,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc20,
    CommunityMember_withDrawClaim0_48: ctc20
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v478 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:17:application call to [unknown function] (defined at: ./index.rsh:116:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_registerMembership0_48" (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_registerMembership'
    });
  const v483 = ['CommunityMember_registerMembership0_48', v478];
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v483],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [v458, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v845 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_registerMembership"
            });
          const v861 = stdlib.add(v475, v458);
          sim_r.txns.push({
            amt: v458,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v912 = true;
          const v913 = await txn1.getOutput('CommunityMember_registerMembership', 'v912', ctc2, v912);
          
          const v928 = stdlib.sub(v861, v458);
          sim_r.txns.push({
            amt: v458,
            kind: 'from',
            to: v457,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v539, null);
          const v2906 = v928;
          if (v459) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v928,
              kind: 'from',
              to: v457,
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
          const v996 = v540[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1147 = v540[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1298 = v540[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v694 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      undefined /* setApiDetails */;
      const v861 = stdlib.add(v475, v458);
      ;
      const v912 = true;
      const v913 = await txn1.getOutput('CommunityMember_registerMembership', 'v912', ctc2, v912);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v845, v913), {
          at: './index.rsh:115:14:application',
          fs: ['at ./index.rsh:115:14:application call to [unknown function] (defined at: ./index.rsh:115:14:function exp)', 'at ./index.rsh:120:29:application call to "sendResponse" (defined at: ./index.rsh:118:13:function exp)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_registerMembership'
          });
        }
      else {
        }
      
      const v928 = stdlib.sub(v861, v458);
      ;
      await stdlib.mapSet(map0, v539, null);
      const v2906 = v928;
      if (v459) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
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
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc12 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc11,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc8
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc18 = stdlib.T_Object({
    chosenInsurancePackage: ctc3,
    email: ctc16,
    fullName: ctc16,
    phone: ctc17
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc13,
    CommunityMember_payMonthlyFee0_48: ctc15,
    CommunityMember_registerMembership0_48: ctc19,
    CommunityMember_respondToClaim0_48: ctc10,
    CommunityMember_stopContract0_48: ctc20,
    CommunityMember_withDrawClaim0_48: ctc20
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v505 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:179:17:application call to [unknown function] (defined at: ./index.rsh:179:17:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_respondToClaim0_48" (defined at: ./index.rsh:178:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_respondToClaim'
    });
  const v510 = ['CommunityMember_respondToClaim0_48', v505];
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v510],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:180:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v845 = v540[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v996 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_respondToClaim"
            });
          ;
          const v1084 = v996[stdlib.checkedBigNumberify('./index.rsh:178:14:spread', stdlib.UInt_max, '0')];
          const v1085 = v1084.claimant;
          const v1086 = true;
          const v1087 = await txn1.getOutput('CommunityMember_respondToClaim', 'v1086', ctc2, v1086);
          
          const v1094 = v1084.accepted;
          if (v1094) {
            const v1095 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1085), null);
            let v1096;
            switch (v1095[0]) {
              case 'None': {
                const v1097 = v1095[1];
                v1096 = stdlib.checkedBigNumberify('./index.rsh:187:73:decimal', stdlib.UInt_max, '1');
                
                break;
                }
              case 'Some': {
                const v1098 = v1095[1];
                const v1099 = v1098.approvalsCount;
                v1096 = v1099;
                
                break;
                }
              }
            let v1101;
            switch (v1095[0]) {
              case 'None': {
                const v1102 = v1095[1];
                v1101 = stdlib.checkedBigNumberify('./index.rsh:188:73:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1103 = v1095[1];
                const v1104 = v1103.sumOfSetAmounts;
                v1101 = v1104;
                
                break;
                }
              }
            let v1106;
            switch (v1095[0]) {
              case 'None': {
                const v1107 = v1095[1];
                v1106 = stdlib.checkedBigNumberify('./index.rsh:189:70:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1108 = v1095[1];
                const v1109 = v1108.amountRequested;
                v1106 = v1109;
                
                break;
                }
              }
            let v1111;
            switch (v1095[0]) {
              case 'None': {
                const v1112 = v1095[1];
                v1111 = v1106;
                
                break;
                }
              case 'Some': {
                const v1113 = v1095[1];
                const v1114 = v1113.amountSet;
                v1111 = v1114;
                
                break;
                }
              }
            const v1115 = stdlib.lt(v1096, stdlib.checkedBigNumberify('./index.rsh:191:63:decimal', stdlib.UInt_max, '5'));
            const v1116 = stdlib.div(v1101, v1096);
            const v1117 = v1115 ? v1111 : v1116;
            const v1118 = stdlib.add(v1096, stdlib.checkedBigNumberify('./index.rsh:193:56:decimal', stdlib.UInt_max, '1'));
            const v1119 = {
              accepted: true,
              amountRequested: v1106,
              amountSet: v1117,
              approvalsCount: v1118,
              sumOfSetAmounts: v1101
              };
            await stdlib.simMapSet(sim_r, 1, v1085, v1119);
            const v1120 = stdlib.ge(v1096, stdlib.checkedBigNumberify('./index.rsh:200:41:decimal', stdlib.UInt_max, '5'));
            if (v1120) {
              await stdlib.simMapSet(sim_r, 2, v1085, undefined /* Nothing */);
              await stdlib.simMapSet(sim_r, 1, v1085, undefined /* Nothing */);
              const v2922 = v475;
              if (v459) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v475,
                  kind: 'from',
                  to: v457,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2924 = v475;
              if (v459) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v475,
                  kind: 'from',
                  to: v457,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v2926 = v475;
            if (v459) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v475,
                kind: 'from',
                to: v457,
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
          const v1147 = v540[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1298 = v540[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v694 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      undefined /* setApiDetails */;
      ;
      const v1084 = v996[stdlib.checkedBigNumberify('./index.rsh:178:14:spread', stdlib.UInt_max, '0')];
      const v1085 = v1084.claimant;
      const v1086 = true;
      const v1087 = await txn1.getOutput('CommunityMember_respondToClaim', 'v1086', ctc2, v1086);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v996, v1087), {
          at: './index.rsh:178:15:application',
          fs: ['at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:15:function exp)', 'at ./index.rsh:184:29:application call to "sendResponse" (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_respondToClaim'
          });
        }
      else {
        }
      
      const v1094 = v1084.accepted;
      if (v1094) {
        const v1095 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1085), null);
        let v1096;
        switch (v1095[0]) {
          case 'None': {
            const v1097 = v1095[1];
            v1096 = stdlib.checkedBigNumberify('./index.rsh:187:73:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v1098 = v1095[1];
            const v1099 = v1098.approvalsCount;
            v1096 = v1099;
            
            break;
            }
          }
        let v1101;
        switch (v1095[0]) {
          case 'None': {
            const v1102 = v1095[1];
            v1101 = stdlib.checkedBigNumberify('./index.rsh:188:73:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1103 = v1095[1];
            const v1104 = v1103.sumOfSetAmounts;
            v1101 = v1104;
            
            break;
            }
          }
        let v1106;
        switch (v1095[0]) {
          case 'None': {
            const v1107 = v1095[1];
            v1106 = stdlib.checkedBigNumberify('./index.rsh:189:70:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1108 = v1095[1];
            const v1109 = v1108.amountRequested;
            v1106 = v1109;
            
            break;
            }
          }
        let v1111;
        switch (v1095[0]) {
          case 'None': {
            const v1112 = v1095[1];
            v1111 = v1106;
            
            break;
            }
          case 'Some': {
            const v1113 = v1095[1];
            const v1114 = v1113.amountSet;
            v1111 = v1114;
            
            break;
            }
          }
        const v1115 = stdlib.lt(v1096, stdlib.checkedBigNumberify('./index.rsh:191:63:decimal', stdlib.UInt_max, '5'));
        const v1116 = stdlib.div(v1101, v1096);
        const v1117 = v1115 ? v1111 : v1116;
        const v1118 = stdlib.add(v1096, stdlib.checkedBigNumberify('./index.rsh:193:56:decimal', stdlib.UInt_max, '1'));
        const v1119 = {
          accepted: true,
          amountRequested: v1106,
          amountSet: v1117,
          approvalsCount: v1118,
          sumOfSetAmounts: v1101
          };
        await stdlib.mapSet(map1, v1085, v1119);
        const v1120 = stdlib.ge(v1096, stdlib.checkedBigNumberify('./index.rsh:200:41:decimal', stdlib.UInt_max, '5'));
        if (v1120) {
          await stdlib.mapSet(map2, v1085, undefined /* Nothing */);
          await stdlib.mapSet(map1, v1085, undefined /* Nothing */);
          const v2922 = v475;
          if (v459) {
            return;
            }
          else {
            ;
            return;
            }}
        else {
          const v2924 = v475;
          if (v459) {
            return;
            }
          else {
            ;
            return;
            }}}
      else {
        const v2926 = v475;
        if (v459) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
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
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc10,
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
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc12,
    CommunityMember_payMonthlyFee0_48: ctc14,
    CommunityMember_registerMembership0_48: ctc18,
    CommunityMember_respondToClaim0_48: ctc20,
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v522 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:237:16:application call to [unknown function] (defined at: ./index.rsh:237:16:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_stopContract0_48" (defined at: ./index.rsh:236:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_stopContract'
    });
  const v526 = ['CommunityMember_stopContract0_48', v522];
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v526],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:238:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v845 = v540[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v996 = v540[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1147 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_stopContract"
            });
          ;
          const v1278 = true;
          const v1279 = await txn1.getOutput('CommunityMember_stopContract', 'v1278', ctc2, v1278);
          
          const v2942 = v475;
          if (v459) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v475,
              kind: 'from',
              to: v457,
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
          const v1298 = v540[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v694 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      undefined /* setApiDetails */;
      ;
      const v1278 = true;
      const v1279 = await txn1.getOutput('CommunityMember_stopContract', 'v1278', ctc2, v1278);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v1147, v1279), {
          at: './index.rsh:236:15:application',
          fs: ['at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)', 'at ./index.rsh:245:29:application call to "sendResponse" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'out',
          who: 'CommunityMember_stopContract'
          });
        }
      else {
        }
      
      const v2942 = v475;
      if (v459) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
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
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc11 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc10,
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
  const ctc19 = stdlib.T_Object({
    accepted: ctc2,
    claimant: ctc8,
    setAmount: ctc3
    });
  const ctc20 = stdlib.T_Tuple([ctc19]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc12,
    CommunityMember_payMonthlyFee0_48: ctc14,
    CommunityMember_registerMembership0_48: ctc18,
    CommunityMember_respondToClaim0_48: ctc20,
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
  
  
  const [v457, v458, v459, v475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc8, ctc3, ctc2, ctc3]);
  const v514 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:217:16:application call to [unknown function] (defined at: ./index.rsh:217:16:function exp)', 'at ./index.rsh:93:23:application call to "runCommunityMember_withDrawClaim0_48" (defined at: ./index.rsh:216:14:function exp)', 'at ./index.rsh:93:23:application call to [unknown function] (defined at: ./index.rsh:93:23:function exp)'],
    msg: 'in',
    who: 'CommunityMember_withDrawClaim'
    });
  const v518 = ['CommunityMember_withDrawClaim0_48', v514];
  
  const txn1 = await (ctc.sendrecv({
    args: [v457, v458, v459, v475, v518],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:218:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
      
      switch (v540[0]) {
        case 'CommunityMember_createClaim0_48': {
          const v543 = v540[1];
          
          break;
          }
        case 'CommunityMember_payMonthlyFee0_48': {
          const v694 = v540[1];
          
          break;
          }
        case 'CommunityMember_registerMembership0_48': {
          const v845 = v540[1];
          
          break;
          }
        case 'CommunityMember_respondToClaim0_48': {
          const v996 = v540[1];
          
          break;
          }
        case 'CommunityMember_stopContract0_48': {
          const v1147 = v540[1];
          
          break;
          }
        case 'CommunityMember_withDrawClaim0_48': {
          const v1298 = v540[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CommunityMember_withDrawClaim"
            });
          ;
          const v1437 = true;
          const v1438 = await txn1.getOutput('CommunityMember_withDrawClaim', 'v1437', ctc2, v1437);
          
          await stdlib.simMapSet(sim_r, 1, v539, undefined /* Nothing */);
          await stdlib.simMapSet(sim_r, 2, v539, undefined /* Nothing */);
          const v2958 = v475;
          if (v459) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v475,
              kind: 'from',
              to: v457,
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
    tys: [ctc8, ctc3, ctc2, ctc3, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn1;
  switch (v540[0]) {
    case 'CommunityMember_createClaim0_48': {
      const v543 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_payMonthlyFee0_48': {
      const v694 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_registerMembership0_48': {
      const v845 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_respondToClaim0_48': {
      const v996 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_stopContract0_48': {
      const v1147 = v540[1];
      return;
      break;
      }
    case 'CommunityMember_withDrawClaim0_48': {
      const v1298 = v540[1];
      undefined /* setApiDetails */;
      ;
      const v1437 = true;
      const v1438 = await txn1.getOutput('CommunityMember_withDrawClaim', 'v1437', ctc2, v1437);
      if (v233) {
        stdlib.protect(ctc0, await interact.out(v1298, v1438), {
          at: './index.rsh:216:15:application',
          fs: ['at ./index.rsh:216:15:application call to [unknown function] (defined at: ./index.rsh:216:15:function exp)', 'at ./index.rsh:221:29:application call to "sendResponse" (defined at: ./index.rsh:219:28:function exp)', 'at ./index.rsh:219:28:application call to [unknown function] (defined at: ./index.rsh:219:28:function exp)'],
          msg: 'out',
          who: 'CommunityMember_withDrawClaim'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map1, v539, undefined /* Nothing */);
      await stdlib.mapSet(map2, v539, undefined /* Nothing */);
      const v2958 = v475;
      if (v459) {
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc9 = stdlib.T_Object({
    accepted: ctc2,
    amountDue: ctc3,
    amountRequested: ctc3,
    amountSet: ctc3,
    approvalsCount: ctc3,
    description: ctc8,
    fundLimit: ctc3,
    insrPackageId: ctc3,
    matureBalance: ctc3,
    sumOfSetAmounts: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Object({
    mfee: ctc3,
    who: ctc11
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
    claimant: ctc11,
    setAmount: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Data({
    CommunityMember_createClaim0_48: ctc10,
    CommunityMember_payMonthlyFee0_48: ctc13,
    CommunityMember_registerMembership0_48: ctc17,
    CommunityMember_respondToClaim0_48: ctc19,
    CommunityMember_stopContract0_48: ctc20,
    CommunityMember_withDrawClaim0_48: ctc20
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
  
  
  const v453 = stdlib.protect(ctc2, interact.contractIsRunning, 'for Insurer\'s interact field contractIsRunning');
  const v454 = stdlib.protect(ctc3, interact.mandatoryEntryFee, 'for Insurer\'s interact field mandatoryEntryFee');
  
  stdlib.protect(ctc0, await interact.seeFeedback(), {
    at: './index.rsh:61:29:application',
    fs: ['at ./index.rsh:58:17:application call to [unknown function] (defined at: ./index.rsh:58:21:function exp)'],
    msg: 'seeFeedback',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v454, v453],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v458, v459], secs: v461, time: v460, didSend: v30, from: v457 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v458, v459], secs: v461, time: v460, didSend: v30, from: v457 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v457, v458, v459],
    evt_cnt: 0,
    funcNum: 1,
    lct: v460,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v464, time: v463, didSend: v35, from: v462 } = txn2;
      
      ;
      const v465 = stdlib.addressEq(v457, v462);
      ;
      const v468 = v463;
      const v475 = stdlib.checkedBigNumberify('./index.rsh:53:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v459;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v475,
          kind: 'from',
          to: v457,
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
    tys: [ctc11, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v464, time: v463, didSend: v35, from: v462 } = txn2;
  ;
  const v465 = stdlib.addressEq(v457, v462);
  stdlib.assert(v465, {
    at: './index.rsh:66:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  let v468 = v463;
  let v475 = stdlib.checkedBigNumberify('./index.rsh:53:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v459;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc21],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v540], secs: v542, time: v541, didSend: v233, from: v539 } = txn3;
    switch (v540[0]) {
      case 'CommunityMember_createClaim0_48': {
        const v543 = v540[1];
        undefined /* setApiDetails */;
        ;
        const v561 = v543[stdlib.checkedBigNumberify('./index.rsh:142:14:spread', stdlib.UInt_max, '0')];
        const v562 = v561.amountRequested;
        const v563 = v561.description;
        const v565 = {
          amountRequested: v562,
          description: v563
          };
        stdlib.protect(ctc0, await interact.saveNewClaim(v565), {
          at: './index.rsh:147:46:application',
          fs: ['at ./index.rsh:147:46:application call to [unknown function] (defined at: ./index.rsh:147:46:function exp)', 'at ./index.rsh:147:46:application call to "liftedInteract" (defined at: ./index.rsh:147:46:application)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'saveNewClaim',
          who: 'Insurer'
          });
        
        const v567 = 'backend: API.CommunityMember.createClaim ...';
        stdlib.protect(ctc0, await interact.log(v567), {
          at: './index.rsh:151:37:application',
          fs: ['at ./index.rsh:151:37:application call to [unknown function] (defined at: ./index.rsh:151:37:function exp)', 'at ./index.rsh:151:37:application call to "liftedInteract" (defined at: ./index.rsh:151:37:application)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v568 = v561.insrPackageId;
        const v569 = v561.amountDue;
        const v570 = v561.matureBalance;
        const v571 = {
          amountDue: v569,
          insrPackageId: v568,
          matureBalance: v570
          };
        await stdlib.mapSet(map2, v539, v571);
        const v572 = v561.fundLimit;
        const v574 = stdlib.ge(v562, v572);
        const v575 = v574 ? v562 : v572;
        const v576 = {
          accepted: false,
          amountRequested: v562,
          amountSet: v575,
          approvalsCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          sumOfSetAmounts: v562
          };
        await stdlib.mapSet(map1, v539, v576);
        const v577 = true;
        await txn3.getOutput('CommunityMember_createClaim', 'v577', ctc2, v577);
        const txn4 = await (ctc.sendrecv({
          args: [v457, v458, v459, v475, v575],
          evt_cnt: 0,
          funcNum: 4,
          lct: v541,
          onlyIf: true,
          out_tys: [],
          pay: [v575, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v585, time: v584, didSend: v271, from: v583 } = txn4;
            
            const v587 = stdlib.add(v475, v575);
            sim_r.txns.push({
              amt: v575,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v588 = stdlib.addressEq(v457, v583);
            ;
            const cv468 = v584;
            const cv475 = v587;
            
            await (async () => {
              const v468 = cv468;
              const v475 = cv475;
              
              if (await (async () => {
                
                return v459;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  amt: v475,
                  kind: 'from',
                  to: v457,
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
          tys: [ctc11, ctc3, ctc2, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v585, time: v584, didSend: v271, from: v583 } = txn4;
        const v587 = stdlib.add(v475, v575);
        ;
        const v588 = stdlib.addressEq(v457, v583);
        stdlib.assert(v588, {
          at: './index.rsh:174:25:dot',
          fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const cv468 = v584;
        const cv475 = v587;
        
        v468 = cv468;
        v475 = cv475;
        
        continue;
        
        
        break;
        }
      case 'CommunityMember_payMonthlyFee0_48': {
        const v694 = v540[1];
        undefined /* setApiDetails */;
        const v701 = v694[stdlib.checkedBigNumberify('./index.rsh:132:14:spread', stdlib.UInt_max, '0')];
        const v702 = v701.mfee;
        const v710 = stdlib.add(v475, v702);
        ;
        const v745 = true;
        await txn3.getOutput('CommunityMember_payMonthlyFee', 'v745', ctc2, v745);
        const v752 = 'backend: API.CommunityMember.payMonthlyFee invoked.';
        stdlib.protect(ctc0, await interact.log(v752), {
          at: './index.rsh:137:37:application',
          fs: ['at ./index.rsh:137:37:application call to [unknown function] (defined at: ./index.rsh:137:37:function exp)', 'at ./index.rsh:137:37:application call to "liftedInteract" (defined at: ./index.rsh:137:37:application)', 'at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v757 = stdlib.sub(v710, v702);
        ;
        const cv468 = v541;
        const cv475 = v757;
        
        v468 = cv468;
        v475 = cv475;
        
        continue;
        break;
        }
      case 'CommunityMember_registerMembership0_48': {
        const v845 = v540[1];
        undefined /* setApiDetails */;
        const v861 = stdlib.add(v475, v458);
        ;
        const v911 = v845[stdlib.checkedBigNumberify('./index.rsh:115:13:spread', stdlib.UInt_max, '0')];
        const v912 = true;
        await txn3.getOutput('CommunityMember_registerMembership', 'v912', ctc2, v912);
        const v919 = 'backend: API.CommunityMember.registerMembership ...';
        stdlib.protect(ctc0, await interact.log(v919), {
          at: './index.rsh:121:37:application',
          fs: ['at ./index.rsh:121:37:application call to [unknown function] (defined at: ./index.rsh:121:37:function exp)', 'at ./index.rsh:121:37:application call to "liftedInteract" (defined at: ./index.rsh:121:37:application)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v921 = 'backend: Insurer.interact.saveNewMemberDetails invoked ...';
        stdlib.protect(ctc0, await interact.log(v921), {
          at: './index.rsh:122:37:application',
          fs: ['at ./index.rsh:122:37:application call to [unknown function] (defined at: ./index.rsh:122:37:function exp)', 'at ./index.rsh:122:37:application call to "liftedInteract" (defined at: ./index.rsh:122:37:application)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        stdlib.protect(ctc0, await interact.saveNewMemberDetails(v911), {
          at: './index.rsh:123:54:application',
          fs: ['at ./index.rsh:123:54:application call to [unknown function] (defined at: ./index.rsh:123:54:function exp)', 'at ./index.rsh:123:54:application call to "liftedInteract" (defined at: ./index.rsh:123:54:application)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'saveNewMemberDetails',
          who: 'Insurer'
          });
        
        const v924 = 'backend: done.';
        stdlib.protect(ctc0, await interact.log(v924), {
          at: './index.rsh:124:37:application',
          fs: ['at ./index.rsh:124:37:application call to [unknown function] (defined at: ./index.rsh:124:37:function exp)', 'at ./index.rsh:124:37:application call to "liftedInteract" (defined at: ./index.rsh:124:37:application)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v928 = stdlib.sub(v861, v458);
        ;
        await stdlib.mapSet(map0, v539, null);
        const cv468 = v541;
        const cv475 = v928;
        
        v468 = cv468;
        v475 = cv475;
        
        continue;
        break;
        }
      case 'CommunityMember_respondToClaim0_48': {
        const v996 = v540[1];
        undefined /* setApiDetails */;
        ;
        const v1084 = v996[stdlib.checkedBigNumberify('./index.rsh:178:14:spread', stdlib.UInt_max, '0')];
        const v1085 = v1084.claimant;
        const v1086 = true;
        await txn3.getOutput('CommunityMember_respondToClaim', 'v1086', ctc2, v1086);
        const v1093 = 'backend: API.CommunityMember.respondToClaim ...';
        stdlib.protect(ctc0, await interact.log(v1093), {
          at: './index.rsh:185:37:application',
          fs: ['at ./index.rsh:185:37:application call to [unknown function] (defined at: ./index.rsh:185:37:function exp)', 'at ./index.rsh:185:37:application call to "liftedInteract" (defined at: ./index.rsh:185:37:application)', 'at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
          msg: 'log',
          who: 'Insurer'
          });
        
        const v1094 = v1084.accepted;
        if (v1094) {
          const v1095 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1085), null);
          let v1096;
          switch (v1095[0]) {
            case 'None': {
              const v1097 = v1095[1];
              v1096 = stdlib.checkedBigNumberify('./index.rsh:187:73:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v1098 = v1095[1];
              const v1099 = v1098.approvalsCount;
              v1096 = v1099;
              
              break;
              }
            }
          let v1101;
          switch (v1095[0]) {
            case 'None': {
              const v1102 = v1095[1];
              v1101 = stdlib.checkedBigNumberify('./index.rsh:188:73:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1103 = v1095[1];
              const v1104 = v1103.sumOfSetAmounts;
              v1101 = v1104;
              
              break;
              }
            }
          let v1106;
          switch (v1095[0]) {
            case 'None': {
              const v1107 = v1095[1];
              v1106 = stdlib.checkedBigNumberify('./index.rsh:189:70:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1108 = v1095[1];
              const v1109 = v1108.amountRequested;
              v1106 = v1109;
              
              break;
              }
            }
          let v1111;
          switch (v1095[0]) {
            case 'None': {
              const v1112 = v1095[1];
              v1111 = v1106;
              
              break;
              }
            case 'Some': {
              const v1113 = v1095[1];
              const v1114 = v1113.amountSet;
              v1111 = v1114;
              
              break;
              }
            }
          const v1115 = stdlib.lt(v1096, stdlib.checkedBigNumberify('./index.rsh:191:63:decimal', stdlib.UInt_max, '5'));
          const v1116 = stdlib.div(v1101, v1096);
          const v1117 = v1115 ? v1111 : v1116;
          const v1118 = stdlib.add(v1096, stdlib.checkedBigNumberify('./index.rsh:193:56:decimal', stdlib.UInt_max, '1'));
          const v1119 = {
            accepted: true,
            amountRequested: v1106,
            amountSet: v1117,
            approvalsCount: v1118,
            sumOfSetAmounts: v1101
            };
          await stdlib.mapSet(map1, v1085, v1119);
          const v1120 = stdlib.ge(v1096, stdlib.checkedBigNumberify('./index.rsh:200:41:decimal', stdlib.UInt_max, '5'));
          if (v1120) {
            await stdlib.mapSet(map2, v1085, undefined /* Nothing */);
            await stdlib.mapSet(map1, v1085, undefined /* Nothing */);
            stdlib.protect(ctc0, await interact.notifyFundedMember(v1085), {
              at: './index.rsh:210:60:application',
              fs: ['at ./index.rsh:210:60:application call to [unknown function] (defined at: ./index.rsh:210:60:function exp)', 'at ./index.rsh:210:60:application call to "liftedInteract" (defined at: ./index.rsh:210:60:application)', 'at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
              msg: 'notifyFundedMember',
              who: 'Insurer'
              });
            
            const cv468 = v541;
            const cv475 = v475;
            
            v468 = cv468;
            v475 = cv475;
            
            continue;}
          else {
            const cv468 = v541;
            const cv475 = v475;
            
            v468 = cv468;
            v475 = cv475;
            
            continue;}}
        else {
          const cv468 = v541;
          const cv475 = v475;
          
          v468 = cv468;
          v475 = cv475;
          
          continue;}
        break;
        }
      case 'CommunityMember_stopContract0_48': {
        const v1147 = v540[1];
        undefined /* setApiDetails */;
        ;
        stdlib.protect(ctc0, await interact.stopContract(), {
          at: './index.rsh:243:46:application',
          fs: ['at ./index.rsh:243:46:application call to [unknown function] (defined at: ./index.rsh:243:46:function exp)', 'at ./index.rsh:243:46:application call to "liftedInteract" (defined at: ./index.rsh:243:46:application)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'stopContract',
          who: 'Insurer'
          });
        
        const v1278 = true;
        await txn3.getOutput('CommunityMember_stopContract', 'v1278', ctc2, v1278);
        const cv468 = v541;
        const cv475 = v475;
        
        v468 = cv468;
        v475 = cv475;
        
        continue;
        break;
        }
      case 'CommunityMember_withDrawClaim0_48': {
        const v1298 = v540[1];
        undefined /* setApiDetails */;
        ;
        const v1437 = true;
        await txn3.getOutput('CommunityMember_withDrawClaim', 'v1437', ctc2, v1437);
        await stdlib.mapSet(map1, v539, undefined /* Nothing */);
        await stdlib.mapSet(map2, v539, undefined /* Nothing */);
        const cv468 = v541;
        const cv475 = v475;
        
        v468 = cv468;
        v475 = cv475;
        
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
    impure: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,byte[200],uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`, `CommunityMember_withDrawClaim()byte`],
    pure: [],
    sigs: [`CommunityMember_createClaim((byte,uint64,uint64,uint64,uint64,byte[200],uint64,uint64,uint64,uint64))byte`, `CommunityMember_payMonthlyFee((uint64,address))byte`, `CommunityMember_registerMembership((uint64,byte[60],byte[60],byte[20]))byte`, `CommunityMember_respondToClaim((byte,address,uint64))byte`, `CommunityMember_stopContract()byte`, `CommunityMember_withDrawClaim()byte`]
    },
  appApproval: `BiASAAEFBIkCIBkIPMPv7IIL7fX92wv3o5fUDOTQxsUK2IK04QoDKSIJJgMBAAEBACI1ADEYQQWUKmRJIls1ASEHWzUCMRkjEkEACjEAKCEIr2ZCBWA2GgAXSUEApyI1BCM1BkkhCQxAAEZJIQoMQAAvSSELDEAAFCELEkQqNf+AAQQ0/1AhBK9QQgDiIQoSRCo1/4ABBTT/UCEEr1BCAM4hCRJENhoBNf8oNP9QQgC+SSEMDEAAM0khDQxAABchDRJENhoBNf+AAQM0/1CB4AGvUEIAmSEMEkQ2GgE1/yk0/1CB4QGvUEIAhIHrouLSARJENhoBNf+AAQI0/1CBda9QQgBqNhoCFzUENhoDNhoBF0khDgxAA4tJJQxAAE8lEkQkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf+BMVs1/oAEkSc087A0/ogElzT/MQASRDT/NAMhBVs0A1coARcyBjQDIQ9bNP4IQgPQSCU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/lcoARc1/SEPWzX8STUFNfuABC6KxkU0+1CwNPsiVUkhDgxAAa9JJQxAAHBJJAxAAE0kEkSACQAAAAAAAAWdAbApNQcxACgxAIgD+yEQrzX6SVcAATT6UExXIxlQZjEAKDEAiAPhIQavNfpXACM0+lBmNP80/jT9MgY0/EIDMEiACQAAAAAAAAT+AbApNQc0/zT+NP0yBjT8QgMTSDT7VwEpNfo0+kk1+VcBIDX4gAkAAAAAAAAEPgGwKTUHNPlXAAEXQQECNPiIA3xXASJJNfciVUAABiM19kIAEDT3VwEhSTX1gRFbNfZCAAA09yJVQAAGIjX1QgAQNPdXASFJNfQhBls19UIAADT3IlVAAAYiNfRCAA8091cBIUk18yNbNfRCAAA09yJVQAAHNPQ180IAEDT3VwEhSTXyIRFbNfNCAAA0+Cg0+IgC/CkpNPQWUDT1NPYKNPM09iQMTRZQNPYjCBZQNPUWUFA18klXAAE08lBMVyMZUGY09iQPQQA7NPgoNPiIAr8hBq818lcAIzTyUGY0+Cg0+IgCqyEQrzXySVcAATTyUExXIxlQZjT/NP40/TIGNPxCAfQ0/zT+NP0yBjT8QgHnNP80/jT9MgY0/EIB2kkjDEAAkUmBAgxAAEVINP6IAm6ACQAAAAAAAAOQAbApNQexIrIBNP6yCCOyEDT/sgezMQAoMQCIAjgpIkxWZjT/NP40/TIGNPw0/gg0/glCAYhINPtXASg1+jT6Ils1+TT5iAIcgAkAAAAAAAAC6QGwKTUHsSKyATT5sggjshA0/7IHszT/NP40/TIGNPw0+Qg0+QlCAUNINPsjIQRYNfo0+kk1+SERWzX4MQAoMQCIAcApNPlXAQg0+VfxCFA0+Vf5CFBQNfdXACM091BmNPmB6QFbSTX3NPhJNPcPTTX2MQAoMQCIAYopKDT4FlA09hZQIQevUDT4FlBQNfVJVwABNPVQTFcjGVBmgAkAAAAAAAACQQGwKTUHNP80/hZQNP0WUQcIUDT8FlA09hZQKEsBVwA5Z0gkNQEyBjUCQgD1SSMMQAA9IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80AyEFWzQDVygBFzIGIkIAV0giNAESRDQESSISTDQCEhFESTUFSSJbNf9XCAEXNf6ABH/1gvA0/xZQNP4WUQcIULCBoI0GiADGMQA0/xZQNP4WUQcIUChLAVcAKWdIIzUBMgY1AkIAWzX/Nf41/TX8Nfs0/UEAHjT7NPwWUClQNP8WUChLAVcAMWdIJTUBMgY1AkIALrEisgE0/7III7IQNPuyB7NCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 1,
  stateSize: 57,
  unsupported: [],
  version: 10,
  warnings: []
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
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v459",
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
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v459",
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
                    "internalType": "enum _enum_T25",
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
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes8",
                                "name": "elem6",
                                "type": "bytes8"
                              }
                            ],
                            "internalType": "struct T13",
                            "name": "_description",
                            "type": "tuple"
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
                        "internalType": "struct T14",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
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
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
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
                            "internalType": "struct T18",
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
                            "internalType": "struct T18",
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
                            "internalType": "struct T19",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
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
                        "internalType": "struct T22",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T23",
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
                "internalType": "struct T25",
                "name": "v540",
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
    "name": "_reach_oe_v1086",
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
    "name": "_reach_oe_v1278",
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
    "name": "_reach_oe_v1437",
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
    "name": "_reach_oe_v577",
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
    "name": "_reach_oe_v745",
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
    "name": "_reach_oe_v912",
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
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "elem6",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T13",
            "name": "_description",
            "type": "tuple"
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
        "internalType": "struct T14",
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
        "internalType": "struct T16",
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
            "internalType": "struct T18",
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
            "internalType": "struct T18",
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
            "internalType": "struct T19",
            "name": "_phone",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
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
        "internalType": "struct T22",
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
                    "internalType": "enum _enum_T25",
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
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes8",
                                "name": "elem6",
                                "type": "bytes8"
                              }
                            ],
                            "internalType": "struct T13",
                            "name": "_description",
                            "type": "tuple"
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
                        "internalType": "struct T14",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
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
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
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
                            "internalType": "struct T18",
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
                            "internalType": "struct T18",
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
                            "internalType": "struct T19",
                            "name": "_phone",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
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
                        "internalType": "struct T22",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T23",
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
                "internalType": "struct T25",
                "name": "v540",
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
  Bytecode: `0x608060405260405162002ab938038062002ab983398101604081905262000026916200020f565b60008055436003556040805182518152602080840151805182840152015115158183015290517f091a26643f54c14ebc983b2e12a5bd460b902dc635cdc4f355fedff9bf2b74de9181900360600190a1620000843415600762000108565b6040805160608082018352600060208084018281528486018381523380875288840180515184525184015115158252600194859055439094558651928301939093525194810194909452511515908301529060800160405160208183030381529060405260029080519060200190620000ff92919062000132565b505050620002be565b816200012e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001409062000281565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b604080519081016001600160401b03811182821017156200020957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022357600080fd5b6200022d620001d8565b835181526040601f19830112156200024457600080fd5b6200024e620001d8565b915060208401518252604084015180151581146200026b57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b6127eb80620002ce6000396000f3fe6080604052600436106100e05760003560e01c80637980f6c311610084578063a7661d5411610056578063a7661d54146101fb578063ab53f2c61461020e578063bc720d8a14610231578063cadc2e7a1461024457005b80637980f6c31461019e578063817d57f3146101a65780638185bc9f146101d357806383230757146101e657005b80631e93b0f1116100bd5780631e93b0f11461012c5780632c10a1591461014b5780633bc5b7bf1461015e5780634ac446e01461018b57005b80630bf03a25146100e957806310e0ac7e146101115780631442b0171461012457005b366100e757005b005b6100fc6100f7366004611d52565b610271565b60405190151581526020015b60405180910390f35b6100fc61011f366004611e9f565b6102c8565b6100fc61031c565b34801561013857600080fd5b506003545b604051908152602001610108565b6100e7610159366004611ebc565b610369565b34801561016a57600080fd5b5061017e610179366004611ed4565b61038d565b6040516101089190611f17565b6100fc61019936600461203b565b6103a4565b6100fc6103fc565b3480156101b257600080fd5b506101c66101c1366004611ed4565b610449565b6040516101089190612057565b6100fc6101e1366004612111565b610488565b3480156101f257600080fd5b5060015461013d565b6100e7610209366004611ebc565b6104e0565b34801561021a57600080fd5b50610223610500565b60405161010892919061212d565b6100e761023f36600461218a565b61059d565b34801561025057600080fd5b5061026461025f366004611ed4565b6105bd565b604051610108919061219d565b600061027b6117b9565b6102836117ee565b61028b61180d565b6040805160208082018352878252838301919091526001835281518082019092528282528301526102bc82846105ce565b50506020015192915050565b60006102d26117b9565b6102da6117ee565b6102e261180d565b60408051602080820183528782528381019190915260008352815180820190925282825283015261031382846105ce565b50505192915050565b60006103266117b9565b61032e6117ee565b61033661180d565b600060a0820152600481526040805160208082019092528281529083015261035e82846105ce565b505060800151919050565b6103716117b9565b610389610383368490038401846121fa565b826110d4565b5050565b61039561189a565b61039e82611251565b92915050565b60006103ae6117b9565b6103b66117ee565b6103be61180d565b604080516020808201835287825260608401919091526002835281518082019092528282528301526103f082846105ce565b50506040015192915050565b60006104066117b9565b61040e6117ee565b61041661180d565b600060c0820152600581526040805160208082019092528281529083015261043e82846105ce565b505060a00151919050565b61047f60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b61039e82611315565b60006104926117b9565b61049a6117ee565b6104a261180d565b604080516020808201835287825260808401919091526003835281518082019092528282528301526104d482846105ce565b50506060015192915050565b6104e86117b9565b6103896104fa368490038401846121fa565b82611413565b6000606060005460028080546105159061225e565b80601f01602080910402602001604051908101604052809291908181526020018280546105419061225e565b801561058e5780601f106105635761010080835404028352916020019161058e565b820191906000526020600020905b81548152906001019060200180831161057157829003601f168201915b50505050509050915091509091565b6105a56117b9565b6103896105b736849003840184612334565b826105ce565b6105c56118ad565b61039e826115a9565b6105de6004600054146012611694565b81516105f99015806105f257508251600154145b6013611694565b60008080556002805461060b9061225e565b80601f01602080910402602001604051908101604052809291908181526020018280546106379061225e565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b505050505080602001905181019061069c919061240d565b90506106a66118cc565b7fec4e4be436c56913f9f02d499557210f598ab6d60e0163bdbef74991db977804846040516106d59190612490565b60405180910390a160006020850151515160058111156106f7576106f7611ef1565b141561091d5760208085015151015181526107143415600c611694565b80515160209081015181830180519190915282515160e0015181518301528251516101000151815160409081019190915233600090815260068452819020805460ff19166001908117825592518051938201939093559282015160028401559081015160039092019190915581515160c0810151910151101561079d5780515160c001516107a5565b805151604001515b604082810191825260608084018051600090819052855151840151825160209081019190915294518251850152815183018190528551518401518251608090810191909152338252600580875291859020805460ff1990811660019081178355945180518684018054911515919093161790915580880151600283015580870151600383015594850151600482015593015192019190915590519081527ffedbf445eb7f79e7b29d452a6af329b1a6968060608f6c7477c53f12f79b7b57910160405180910390a160018084526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528d516001600160a01b0316808b528e88015187528e8c0151151586528e85015184528d8c01518252600590985543909b558951808701979097529351868a0152915115159085015251908301529451818301528351808203909201825260c00190925281519092610916926002929101906119d8565b50506110ce565b600160208501515151600581111561093757610937611ef1565b1415610a48576020840151516040015160808201819052515161095d903414600d611694565b604051600181527f767ce9b34de21645ae43310aa2757e880cbd237b60ec5afe48571283516e2f049060200160405180910390a1600160208401528151608082015151516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109d7573d6000803e3d6000fd5b506109e0611a5c565b825181516001600160a01b03909116905260208084015182518201526040808501518351901515910152810151439052608082015151516060840151610a27908290612660565b610a319190612678565b6020808301510152610a42816116b9565b506110ce565b6002602085015151516005811115610a6257610a62611ef1565b1415610b5b57610a7982602001513414600e611694565b604051600181527f44038119335a8342163ee27a6a74c7444c83d93293a54429e51149d4eb5ce8409060200160405180910390a160016040808501919091528251602084015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610af3573d6000803e3d6000fd5b50336000908152600460205260409020805462ff00ff19166001179055610b18611a5c565b825181516001600160a01b039091169052602080840180518351830152604080860151845190151591015290820151439052516060840151610a27908290612660565b6003602085015151516005811115610b7557610b75611ef1565b1415610f89576020840151516080015160a0820152610b963415600f611694565b604051600181527f882fa68ac03b3fa79f3936461f4afc8b07b8affac4f977ccfab42c24839a3c309060200160405180910390a16001606084015260a0810151515115610f815760a08101515160200151610bf0906115a9565b60c08201819052516000906001811115610c0c57610c0c611ef1565b1415610c1e57600160e0820152610c58565b600160c0820151516001811115610c3757610c37611ef1565b1415610c585760c08101516040015161010082018190526060015160e08201525b600060c0820151516001811115610c7157610c71611ef1565b1415610c84576000610120820152610cbf565b600160c0820151516001811115610c9d57610c9d611ef1565b1415610cbf5760c0810151604001516101408201819052608001516101208201525b600060c0820151516001811115610cd857610cd8611ef1565b1415610ceb576000610160820152610d26565b600160c0820151516001811115610d0457610d04611ef1565b1415610d265760c0810151604001516101808201819052602001516101608201525b600060c0820151516001811115610d3f57610d3f611ef1565b1415610d56576101608101516101a0820152610d91565b600160c0820151516001811115610d6f57610d6f611ef1565b1415610d915760c08101516040908101516101c0830181905201516101a08201525b6101e0810180516001905261016082015190516020015260e0810151600511610dce578060e00151816101200151610dc9919061268f565b610dd5565b806101a001515b6101e08201516040015260e0810151610df090600190612660565b6101e0820180516060019190915261012082015190516080015260a0810151516020908101516001600160a01b0316600090815260059091526040902080546001919060ff1916828002179055506101e081015160a0820151516020908101516001600160a01b031660009081526005808352604091829020845160018201805460ff1916911515919091179055928401516002840155908301516003830155606083015160048301556080909201519082015560e082015110610f815760a081018051516020908101516001600160a01b039081166000908152600683526040808220805461ffff199081168255600180830185905560028084018690556003938401869055975151870151909516845260059586905291832080549092168255928101805460ff1916905593840181905590830181905560048301819055910155610f3b611a5c565b825181516001600160a01b0390911690526020808401518251820152604080850151835190151591015280820180514390526060850151905190910152610a42816116b9565b610f3b611a5c565b6004602085015151516005811115610fa357610fa3611ef1565b1415610ff857610fb534156010611694565b604051600181527f7097e06603ef446fd4e3c1a893cc86bac9d2ed34ebfb1b9a94a98050a7d6db4f9060200160405180910390a160016080840152610f3b611a5c565b600560208501515151600581111561101257611012611ef1565b14156110ce5761102434156011611694565b604051600181527f9e00e9caf087882727264614f603188a81a5a3b2979a28a207a63887c89548399060200160405180910390a1600160a08401819052336000908152600560208181526040808420805461ffff199081168255818701805460ff1916905560028083018790556003808401889055600484018890559290950186905560069093529084208054909216825593810183905590810182905590910155610f3b611a5c565b50505050565b6110e4600160005414600a611694565b81516110ff9015806110f857508251600154145b600b611694565b6000808055600280546111119061225e565b80601f016020809104026020016040519081016040528092919081815260200182805461113d9061225e565b801561118a5780601f1061115f5761010080835404028352916020019161118a565b820191906000526020600020905b81548152906001019060200180831161116d57829003601f168201915b50505050508060200190518101906111a291906126b1565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111f034156008611694565b8051611208906001600160a01b031633146009611694565b611210611a5c565b815181516001600160a01b0390911690526020808301518251820152604080840151835190151591015280820180514390525160009101526110ce816116b9565b61125961189a565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561128857611288611ef1565b1415611305576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112c9576112c9611ef1565b60018111156112da576112da611ef1565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61134b60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526006602052604090205460ff16600181111561137a5761137a611ef1565b1415611305576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156113bb576113bb611ef1565b60018111156113cc576113cc611ef1565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301548184015291015292915050565b6114236005600054146016611694565b815161143e90158061143757508251600154145b6017611694565b6000808055600280546114509061225e565b80601f016020809104026020016040519081016040528092919081815260200182805461147c9061225e565b80156114c95780601f1061149e576101008083540402835291602001916114c9565b820191906000526020600020905b8154815290600101906020018083116114ac57829003601f168201915b50505050508060200190518101906114e19190612728565b60408051855181526020808701511515908201529192507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1611534816080015134146014611694565b805161154c906001600160a01b031633146015611694565b611554611a5c565b815181516001600160a01b03909116905260208083015182518201526040808401518351901515910152810151439052608082015160608301516115989190612660565b60208083015101526110ce816116b9565b6115b16118ad565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156115e0576115e0611ef1565b1415611305576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561162157611621611ef1565b600181111561163257611632611ef1565b81528154610100900460ff90811615156020808401919091526040805160a08101825260018601549093161515835260028501549183019190915260038401548282015260048401546060830152600590930154608082015291015292915050565b816103895760405163100960cb60e01b81526004810182905260240160405180910390fd5b8051604001511561175e5760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03168089528a51860151855260018085528b8701518701518352600490975543909655885180860196909652925185890152905115159084015251828401528451808303909301835260a09091019093528051919261175992600292909101906119d8565b505050565b80515160208083015101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561179f573d6000803e3d6000fd5b50600080805560018190556117b690600290611aa2565b50565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611808611adc565b905290565b6040805160e081019091528060008152602001611828611aef565b815260200161184d604080516060810182526000602082018181529282015290815290565b815260200161185a611b79565b815260200161188660408051608081018252600060208201818152928201819052606082015290815290565b815260006020820181905260409091015290565b6040805160608101909152806000611886565b6040805160608101825260008082526020820152908101611808611b8c565b6040518061020001604052806118e0611aef565b815260200161190960405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200161191d611b8c565b8152602001611942604080516060810182526000602082018181529282015290815290565b815260200161196e60408051608081018252600060208201818152928201819052606082015290815290565b815260200161197b6118ad565b81526020016000815260200161198f611b8c565b8152602001600081526020016119a3611b8c565b8152602001600081526020016119b7611b8c565b8152602001600081526020016119cb611b8c565b8152602001611808611b8c565b8280546119e49061225e565b90600052602060002090601f016020900481019282611a065760008555611a4c565b82601f10611a1f57805160ff1916838001178555611a4c565b82800160010185558215611a4c579182015b82811115611a4c578251825591602001919060010190611a31565b50611a58929150611bbd565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611808604051806040016040528060008152602001600081525090565b508054611aae9061225e565b6000825580601f10611abe575050565b601f0160209004906000526020600020908101906117b69190611bbd565b604051806020016040528061180861180d565b6040805161016081018252600060208083018281528385018390526060808501849052608080860185905260a0808701869052875160e08082018a528782529581018790529788018690529187018590528601849052850183905260c080860184905284019490945282018190526101008201819052610120820181905261014082015290815290565b6040518060200160405280611808611bd2565b6040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b5b80821115611a585760008155600101611bbe565b604051806080016040528060008152602001611c0b604051806040016040528060008019168152602001600063ffffffff191681525090565b8152604080518082018252600080825260208083018290528085019290925282519182018352815291015290565b6040805190810167ffffffffffffffff81118282101715611c6a57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e0810167ffffffffffffffff81118282101715611c6a57634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611c6a57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611c6a57634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146117b657600080fd5b600060408284031215611d2b57600080fd5b611d33611c39565b9050813581526020820135611d4781611d04565b602082015292915050565b600060408284031215611d6457600080fd5b611d6e8383611d19565b9392505050565b80151581146117b657600080fd5b803561131081611d75565b600060e08284031215611da057600080fd5b611da8611c70565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013567ffffffffffffffff60c01b81168114611dfe57600080fd5b60c082015292915050565b60006102008284031215611e1c57600080fd5b611e24611ca1565b9050611e2f82611d83565b815260208201356020820152604082013560408201526060820135606082015260808201356080820152611e668360a08401611d8e565b60a082015261018082013560c08201526101a082013560e08201526101c08201356101008201526101e082013561012082015292915050565b60006102008284031215611eb257600080fd5b611d6e8383611e09565b600060408284031215611ece57600080fd5b50919050565b600060208284031215611ee657600080fd5b8135611d6e81611d04565b634e487b7160e01b600052602160045260246000fd5b600281106117b6576117b6611ef1565b81516060820190611f2781611f07565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215611f5b57600080fd5b611f63611c39565b823581529050602082013563ffffffff1981168114611d4757600080fd5b600081830360c0811215611f9457600080fd5b6040516080810181811067ffffffffffffffff82111715611fc557634e487b7160e01b600052604160045260246000fd5b60405283358152915081611fdc8560208601611f49565b6020820152611fee8560608601611f49565b60408201526020609f198301121561200557600080fd5b61200d611cd3565b915060a08401356bffffffffffffffffffffffff198116811461202f57600080fd5b82526060015292915050565b600060c0828403121561204d57600080fd5b611d6e8383611f81565b815160a082019061206781611f07565b82526020838101511515818401526040938401518051858501529081015160608401529092015160809091015290565b6000606082840312156120a957600080fd5b6040516060810181811067ffffffffffffffff821117156120da57634e487b7160e01b600052604160045260246000fd5b60405290508082356120eb81611d75565b815260208301356120fb81611d04565b6020820152604092830135920191909152919050565b60006060828403121561212357600080fd5b611d6e8383612097565b82815260006020604081840152835180604085015260005b8181101561216157858101830151858201606001528201612145565b81811115612173576000606083870101525b50601f01601f191692909201606001949350505050565b60006103e08284031215611ece57600080fd5b815160e08201906121ad81611f07565b8083525060208301511515602083015260408301518051151560408401526020810151606084015260408101516080840152606081015160a0840152608081015160c08401525092915050565b60006040828403121561220c57600080fd5b6040516040810181811067ffffffffffffffff8211171561223d57634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561225281611d75565b60208201529392505050565b600181811c9082168061227257607f821691505b60208210811415611ece57634e487b7160e01b600052602260045260246000fd5b600061020082840312156122a657600080fd5b6122ae611cd3565b90506122ba8383611e09565b815292915050565b6000604082840312156122d457600080fd5b6122dc611cd3565b90506122ba8383611d19565b600060c082840312156122fa57600080fd5b612302611cd3565b90506122ba8383611f81565b60006060828403121561232057600080fd5b612328611cd3565b90506122ba8383612097565b60008183036103e081121561234857600080fd5b612350611c39565b833581526103c080601f198401121561236857600080fd5b612370611cd3565b925061237a611c70565b60208601356006811061238c57600080fd5b815261239b8760408801612293565b60208201526123ae8761024088016122c2565b60408201526123c18761028088016122e8565b60608201526123d487610340880161230e565b60808201526123e66103a08701611d83565b60a08201526123f6828701611d83565b60c082015283525060208101919091529392505050565b60006080828403121561241f57600080fd5b6040516080810181811067ffffffffffffffff8211171561245057634e487b7160e01b600052604160045260246000fd5b604052825161245e81611d04565b815260208381015190820152604083015161247881611d75565b60408201526060928301519281019290925250919050565b8151815260208201515180516103e083019190600681106124b3576124b3611ef1565b806020850152506020810151516124cf60408501825115159052565b6020810151606085015260408101516080850152606081015160a0850152608081015160c085015260a081015161255560e0860182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015267ffffffffffffffff60c01b60c08201511660c08301525050565b5060c0818101516101c086015260e08201516101e0860152610100820151610200860152610120909101516102208501526040828101515180516102408701526020908101516001600160a01b039081166102608801526060808601515180516102808a01528084015180516102a08b015284015163ffffffff199081166102c08b01528186015180516102e08c0152850151166103008a01520151516bffffffffffffffffffffffff1916610320880152608085015151805115156103408901529182015116610360870152015161038085015260a082015115156103a0850152015115156103c090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156126735761267361264a565b500190565b60008282101561268a5761268a61264a565b500390565b6000826126ac57634e487b7160e01b600052601260045260246000fd5b500490565b6000606082840312156126c357600080fd5b6040516060810181811067ffffffffffffffff821117156126f457634e487b7160e01b600052604160045260246000fd5b604052825161270281611d04565b815260208381015190820152604083015161271c81611d75565b60408201529392505050565b600060a0828403121561273a57600080fd5b60405160a0810181811067ffffffffffffffff8211171561276b57634e487b7160e01b600052604160045260246000fd5b604052825161277981611d04565b815260208381015190820152604083015161279381611d75565b604082015260608381015190820152608092830151928101929092525091905056fea2646970667358221220a23dd261217d940b22ca8c09b82990c266970fd1c83ef7e2209e804ea5cf725264736f6c634300080c0033`,
  BytecodeLen: 10937,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:258:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:93:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:172:25:after expr stmt semicolon',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
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
