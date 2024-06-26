import List "mo:base/List";
import Text "mo:base/Text";

actor Charity {
  type Donators = {
    idCharity : Text;
    address : Text;
    date : Text;
    amount : Nat;
    addressWallet : Text;
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

  public func findCharityPostId(id : Text) : async ?CharityPost {
    return List.find<CharityPost>(charityPosts, func post {
      post.idCharity == id
    });
  };

  // Query function to retrieve all Donators
  public func getDonators() : async [Donators] {
    return List.toArray(donators);
  };

    // Function to add a new Donators
  public func donate(donator : Donators) {
    donators := List.push<Donators>(donator, donators);
  };

  public func findDonatorsByCharityId(idCharity : Text): async [Donators] {
    var tempDonators = List.nil<Donators>();
    List.iterate<Donators>(donators, func donator {
      if(donator.idCharity == idCharity) {
        tempDonators := List.push<Donators>(donator, tempDonators);
      }
    });

    return List.toArray(tempDonators);
  };

  public func totalAmountCharityPostById(id: Text) : async Nat {
    var totalAmount : Nat = 0;
    List.iterate<Donators>(donators, func donator {
      totalAmount += donator.amount;
    });

    return totalAmount;
  };
};
