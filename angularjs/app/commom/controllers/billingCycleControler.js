(function () {
  angular.module('meanApp').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs) {
    const vm = this

    vm.create = () => {
      const url = 'http://localhost:3333/api/billingCycles'

      $http.post(url, vm.billingCycle).then(response => {
        vm.billingCycle = {}
        console.log(response.data)

        //problem with toastr in javascript minified
        msgs.addSuccess("Operacao realizada")

      }).catch((response) => msgs.addError(response.data.errors))
    }

  }
})()