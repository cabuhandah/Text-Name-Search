﻿angular.module('Extractor', [])
    .controller('NameExtractorController', function ($scope, $http) {
        $scope.model = {};       
        $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas Connor Smith dignissim erat consequat, placerat erat in, lobortis nulla. Vestibulum scelerisque magna ut urna hendrerit, finibus rutrum dolor faucibus. Seth David Greenly Aliquam feugiat urna vel tellus congue, non dictum orci varius. Vivamus tristique, lorem ut hendrerit aliquet, nulla nisl eleifend quam, sed laoreet erat lorem non diam. Nulla facilisi. Etiam bibendum Seth D. Greenly nec diam sed vestibulum. Nunc ipsum enim, imperdiet eu feugiat vel, vestibulum a justo. Donec efficitur velit porta odio consequat viverra. Quisque in tristique enim, sed euismod purus. Nullam eu leo pellentesque, porta leo in, maximus risus. Morbi in risus id risus feugiat egestas. David Black Nunc egestas, metus at volutpat tempus, massa justo venenatis arcu, a ornare mauris arcu at justo. Sed accumsan, David W. Black erat vitae euismod facilisis, risus odio bibendum neque, sit amet tincidunt diam ante et dolor. Morbi leo felis, posuere id ex ut, varius ornare libero. Suspendisse lacus ipsum, molestie vel nulla id, commodo hendrerit est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus magna libero, vehicula David Black luctus lorem varius non. Integer ut tempor massa, eget sollicitudin purus. Mauris efficitur in ipsum eu consectetur. Aliquam vitae nulla vitae sapien laoreet vehicula et et ex. Donec molestie auctor lorem eget rhoncus. Donec ornare sapien in turpis auctor, ut commodo David Warren Black augue cursus. Pellentesque fermentum nunc turpis, eu vulputate Connor Smith leo aliquet eu. Nam quis pretium felis. Sed id turpis sed lacus malesuada pulvinar et eget leo. Vestibulum eget dapibus mi. Duis tempor nec tellus vitae aliquet. Nam sapien massa, ornare non posuere sit amet, cursus a velit. Curabitur nec consectetur metus. Donec porttitor at libero a blandit. Proin luctus augue sit amet sem varius ultricies. Vestibulum nibh ligula, sollicitudin ac lectus eu, congue imperdiet quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ac nisl sed risus tincidunt finibus. Curabitur viverra eget justo non dignissim. Proin varius malesuada enim non vulputate. Integer fermentum interdum felis, luctus commodo nisi pulvinar quis. Donec pharetra faucibus urna a semper. Morbi tempor maximus Connor G Smith lectus sit amet interdum. Integer pretium ut est non vulputate. Aliquam pulvinar turpis laoreet dictum ultrices. Aenean diam metus, semper at quam et, iaculis viverra ante. Sed efficitur lorem quis consectetur mollis. Vivamus ut purus mauris. Quisque at gravida dolor. Fusce congue magna enim, ut placerat est porttitor a. Phasellus rutrum, neque lacinia cursus mattis, est lacus placerat nunc, a ornare enim nunc at justo. Sed urna leo, tincidunt elementum consequat vel, condimentum sed lacus.";
        $scope.new = {
            model: {}
        };
        $scope.states = {
            revealthis: false
        };
        $scope.revealed = function (show) {
            $scope.states.revealthis = show;
        };
        $scope.extract = function () {
            $.getJSON("http://localhost:2817/NameExtractor?words=Thispartisforshow").success(function (data) {
                $scope.new.model = data;
                $scope.revealed(true);
            });
        };
    });
