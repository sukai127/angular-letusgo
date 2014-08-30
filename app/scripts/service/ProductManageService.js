'use strict';
angular.module('angularLetusgoApp')
    .service('CategoryManageService',function(localStorageService){
        this.loadAllCategories = function(){
            var categories = [
              {id : 1, name: 'grocery'},
              {id : 2, name: 'device'}
            ];
            var temp = localStorageService.get('categories');
            return temp ? temp : (localStorageService.add('categories',categories),categories);
        };
        this.add = function(categories){
          localStorageService.add('categories',categories);
          return categories;
        };
        this.getCategoryNameById = function(id){
          return _.find(this.loadAllCategories(),function(category){
            console.log(category.id + ".................."+ id);
            return category.id == id;
          }).name;
        };
    });
