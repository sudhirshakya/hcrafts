angular.module('itemService', ['ngResource'])
    .factory('ItemService', function ($resource) {
        return $resource(
            '/data/items.json',
            {Id: '@Id' },
            {
                'list': {'method': 'GET', isArray: true},
                'delete': {'method': 'DELETE'},
                "update": {method: "PUT"},
                "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}
     
            }
        );
});