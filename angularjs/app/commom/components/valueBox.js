angular.module('meanApp').component('valueBox', {
  bindings: {
    grid: '@',
    color: '@',
    value: '@',
    text: '@',
    icon: '@'
  },
  controller: [
    'gridSystem',
    function (gridSystem) {
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  template:
    `
  <div class="{{$ctrl.gridClasses}}">
    <div class="small-box {{$ctrl.color}}">
      <div class="inner">
        <h4>{{ $ctrl.value }}</h4>
        <p>{{$ctrl.text}}</p>
      </div>
      <div class="icon">
        <i class="fas {{$ctrl.icon}}"></i>
      </div>
    </div>
  </div>
  `
})