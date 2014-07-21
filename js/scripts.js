var Package = {
  weight: 0,
  volume: 0,
  speed: 0,
  baseCost : 5,
  finalCost : 0,
  shipCost: function() {
    this.finalCost = (this.baseCost * this.weight * this.volume * this.speed).toFixed(2);
  }
};

$(document).ready(function(){
  $("form#user-input-form").submit(function(event){
    event.preventDefault();
    var newPackage = Object.create(Package)
    newPackage.weight = $("#weight-input").val();
    newPackage.volume = $("#volume-input").val();
    newPackage.speed = $("#speed-input").val();
    newPackage.shipCost();
    $("#final-cost").text(newPackage.finalCost);
    $("#cost-column").show();
  })
});
