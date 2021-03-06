(function () {

  angular.module('meanApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this

    vm.getSummary = () => {
      const url = 'http://localhost:3333/api/billingSummary'
      $http.get(url).then(function (response) {
        const { credit = 0, debt = 0 } = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt

      })
    }

    vm.getSummary()
  }
})()