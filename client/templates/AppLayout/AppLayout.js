Template.home.onRendered(function () {
    var template = this;
    var menu = this.find('#menu');
    var panel = this.find('#panel');
    var slideout = new Slideout({
        'panel': panel,
        'menu': menu,
        'padding': 256,
        'tolerance': 70
    });

    // Toggle button
    var togglebtn = this.find('#togglebtn');
    togglebtn.addEventListener('click', function() {
        slideout.toggle();
    });
});