(function(){
  angular.module("store", [ ])
    .controller("StoreController", function(){
      this.products = [
        { name: 'Some Awesome Product', price: 123.45,
          images: [
            { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Some Other Awesome Product', price: 123.45,
          images: [
            { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];
    })
    .controller("GalleryController", function(){
      var current = 0;

      this.setCurrent = function(index){
        current = index;
      };

      this.getCurrent = function(images){
        return images[current];
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

    .directive("productTitle", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'product-title.html',
      };
    })
    .directive("productGallery", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'product-gallery.html',
      };
    })
  ; // END module(store)
})();
