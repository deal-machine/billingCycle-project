(function () {

  angular.module('meanApp').component('field', {
    bindings: {
      id: '@',
      label: '@',
      grid: '@',
      placeholder: '@',
      type: '@',
      model: '=', //binding bi-direcional reflete no controller e no componente
      readonly: '<'
    },
    controller: [
      'gridSystem',
      function (gridSystem) {
        this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template:
      `

    <div class="{{ $ctrl.grid }}">
      <div class="form-group">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        
        <input ng-model="$ctrl.model"
        id="{{ $ctrl.id }}"
        class="form-control"
        placeholder="{{$ctrl.placeholder}}"
        type="{{ $ctrl.type }}"
        ng-readonly="$ctrl.readonly">
      </div>
    </div>
    `
  })
})()