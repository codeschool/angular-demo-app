(function(){
  angular.module("store", [ ])
    .controller("StoreController", function(){
      this.products = [
        { name: 'Some Awesome Product', price: 123.45,
          images: [ ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Some Other Awesome Product', price: 123.45,
          images: [ ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];
    })
    .controller("GalleryController", function(){
      var current;

      this.setCurrent = function(image){
        current = image;
      };

      this.isCurrent = function(image){
        return image === current;
      };
    })
    .controller("PanelController", function(){
      var current = 1;

      this.setCurrent = function(index){
        current = index;
      };

      this.isCurrent = function(index){
        return index === current;
      };
    })
    .controller("ReviewController", function(){
      this.review = { };

      this.addReview = function(reviews){
        reviews.push(this.review);

        this.review = { };
      }
    })
  ; // END module(store)
})();
