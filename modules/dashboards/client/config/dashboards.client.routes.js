(function () {
  'use strict';

  angular
    .module('dashboards')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboards', {
        url: '/dashboards',
        templateUrl: 'modules/dashboards/views/form-dashboard.client.view.html',
        controller: 'DashboardsController',
        controllerAs: 'vm',
        resolve: {
          dashboardResolve: newDashboard
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Dashboard'
        }
      });
  }

  getDashboard.$inject = ['$stateParams', 'DashboardsService'];

  function getDashboard($stateParams, DashboardsService) {
    return DashboardsService.get({
      dashboardId: $stateParams.dashboardId
    }).$promise;
  }

  newDashboard.$inject = ['DashboardsService'];

  function newDashboard(DashboardsService) {
    return new DashboardsService();
  }
}());
