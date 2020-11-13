(function () {
  angular.module('meanApp').controller('BillingCycleCtrl', [
    '$http',
    BillingCycleController
  ])

  function BillingCycleController($http) {
    const vm = this

    vm.create = () => {
      const url = 'http://localhost:3333/api/billingCycles'

      $http.post(url, vm.billingCycle).then(function (response) {
        vm.billingCycle = {}
        console.log("Success")
      })
    }

  }
})()