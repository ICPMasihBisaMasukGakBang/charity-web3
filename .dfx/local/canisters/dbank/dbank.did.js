export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'donate' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'getCharityDonationMoney' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
