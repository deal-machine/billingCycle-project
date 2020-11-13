(function () {
  angular.module('meanApp').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    'tabs',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs, tabs) {
    const vm = this
    const url = 'http://localhost:3333/api/billingCycles'

    vm.refresh = () => {
      $http.get(url).then((response) => {
        vm.billingCycle = {}
        vm.billingCycle = response.data

        tabs.show(vm, { tabList: true, tabCreate: true })
      })
    }


    vm.create = () => {

      $http.post(url, vm.billingCycle).then(response => {
        vm.refresh()

        msgs.addSuccess("Operacao realizada")

      }).catch((response) => msgs.addError(response.data.errors))
    }

    vm.refresh()

  }
})()