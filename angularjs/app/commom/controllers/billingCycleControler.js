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
        vm.billingCycle = { credits: [{}], debts: [{}] }
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

    vm.update = () => {
      const updateUrl = `${url}/${vm.billingCycle._id}`
      $http.put(updateUrl, vm.billingCycle).then((response) => {
        vm.refresh()

        msgs.addSuccess("Atualizado com sucesso")
      }).catch((response) => {
        msgs.addError(response.data.errors)
      })
    }

    vm.delete = () => {
      const deleteUrl = `${url}/${vm.billingCycle._id}`
      $http.delete(deleteUrl, vm.billingCycle).then((response) => {
        vm.refresh()
        msgs.addSuccess('Operação realizada!')
      }).catch((response) => {
        msgs.addError(response.data.errors)
      })
    }

    vm.showTabUpdate = (billingCycle) => {
      vm.billingCycle = billingCycle

      tabs.show(vm, { tabUpdate: true })
    }

    vm.showTabDelete = (billingCycle) => {
      vm.billingCycle = billingCycle

      tabs.show(vm, { tabDelete: true })
    }


    vm.refresh()

  }
})()