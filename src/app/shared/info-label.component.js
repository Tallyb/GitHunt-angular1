const template = `
 <span class="label label-info">{{$ctrl.label}}: {{$ctrl.value}}</span>
  `;

class controller {
}

const InfoLabel = {
    template,
    bindings: {
        label: '@',
        value: '<'
    },
    controller,
};

export default InfoLabel;