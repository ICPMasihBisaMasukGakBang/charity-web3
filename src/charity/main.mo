import Debug "mo:base/Debug";
import Array "mo:base/Array";
import List "mo:base/List";
import Text "mo:base/Text";

actor Charity {
  type Donators = {
    idCharity : Text;
    address : Text;
    date : Text;
    amount : Nat;
  };

  type CharityPost = {
    idCharity : Text;
    category : Text;
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
  };

  // Define the variable to store Charity Posts
  var charityPosts = List.nil<CharityPost>() ;
  var donators = List.nil<Donators>() ;

  // Query function to retrieve all Charity Posts
  public func getCharityPosts() : async [CharityPost] {
    return List.toArray(charityPosts);
  };

  // Function to add a new Charity Post
  public func createCharityPost(post : CharityPost) {
    charityPosts := List.push<CharityPost>(post, charityPosts)
  };

  // Query function to retrieve all Donators
  public func getDonators() : async [Donators] {
    return List.toArray(donators);
  };

    // Function to add a new Donators
  public func donate(donator : Donators) {
    donators := List.push<Donators>(donator, donators);
  };
};
