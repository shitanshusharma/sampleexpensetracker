(function () {
  'use strict';

  angular
    .module('dashboards')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Dashboard',
      state: 'dashboards',
      roles: ['user','admin']
    });
  }
}());
