requirejs.config({
    paths: {
        ko: '//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-debug',
        text: 'vendor/text'
        //text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
        //ko: '//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min'
    }
});

require(['ko', 'text', 'components/intro/vm'],
    function (ko, text, introViewModel) {
        ko.components.register('intro', introViewModel );
        ko.applyBindings({});
    });

