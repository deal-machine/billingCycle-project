(function () {
  angular.module('meanApp').factory('msgs', [
    'toastr',
    ErrorFactory
  ])

  function ErrorFactory(toastr) {

    function addMsg(msgs, title, method) {
      if (msgs instanceof Array) {
        msgs.forEach(msg => toastr[method](msg, title))
      } else {
        toastr[method](msgs, title)
      }
    }

    function addSuccess(msgs) {
      addMsg(msgs, 'Success', 'success')
    }

    function addError(msgs) {
      addMsg(msgs, 'Error', 'error')
    }

    return { addSuccess, addError }
  }
})()