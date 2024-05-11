import Debug "mo:base/Debug";

actor Charity {
  var charityDonationMoney = 0;



  
  public query func getCharityDonationMoney() : async Nat {
    return charityDonationMoney;
  };

  public func donate(amount: Nat) : async Nat {
    charityDonationMoney += amount;

    return charityDonationMoney;
  }


}