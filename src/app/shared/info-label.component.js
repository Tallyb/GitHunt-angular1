const template = `
 <span class="label label-info">{{$ctrl.label}}: {{$ctrl.value}}</span>
  `;

class controller {

}

const infoLabel = {
    template,
    bindings: {
        label: '<',
        value: '<'
    },
    controller,
};

export default infoLabel;