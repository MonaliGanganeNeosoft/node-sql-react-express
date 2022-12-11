var bikedetails = {
  displaydetails: function (regno, brandname) {
    console.log(
      this.name + "," + "bike details" + " ",
      regno + "," + brandname
    );
  },
};

var person = { name: "moni" };
var personbike = bikedetails.displaydetails.bind(person, "123", "bmw");
personbike();
