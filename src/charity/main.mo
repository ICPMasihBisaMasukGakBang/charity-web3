import Debug "mo:base/Debug";
import Array "mo:base/Array";
import List "mo:base/List";

actor Charity {
  var charityDonationMoney = 0;

  type Donators = {
    address : Text;
    date : Text;
    amount : Nat;
  };

  type CharityPost = {
    id : Text;
    disabled : Text;
    typeDonation : Text;
    name : Text;
    phone : Text;
    currentJob: Text;
    workplace : Text;
    event : Text;
    purpose : Text;
    location : Text;
    donationTargetRangeDate : Text;
    detailOfFund : Text;
    amountOfDonation : Nat;
    donators : [Donators]
  };

  // Define the variable to store Charity Posts
  var charityPosts = List.nil<CharityPost>() ;

  // Query function to retrieve all Charity Posts
  public func getCharityPosts() : async [CharityPost] {
    return List.toArray(charityPosts);
  };


  // Function to add a new Charity Post
  public func addCharityPost(post : CharityPost) {
    charityPosts := List.push<CharityPost>(post, charityPosts) // => ?(0, null);
  };

};

// Add the sample CharityPost instance to charityPosts
// Charity.addCharityPost({
//   id = "123";
//   disabled = "no";
//   typeDonation = "money";
//   name = "John Doe";
//   phone = "123-456-7890";
//   currentJob = "Engineer";
//   workplace = "ABC Corp";
//   event = "Charity Event";
//   purpose = "Supporting education";
//   location = "City Center";
//   donationTargetRangeDate = "2024-05-12 to 2024-05-15";
//   detailOfFund = "Funding for school supplies";
//   amountOfDonation = 100;
//   donators = [{ address = "address1"; date = "2024-05-12"; amount = 50 }]
// });