define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!components/intro/view.html",[],function(){return'<div class="intro">\r\n    INTRO\r\n</div>'}),define("components/intro/vm",["ko","text!./view.html"],function(e,t){function n(e){}return{viewModel:n,template:t}}),requirejs.config({paths:{ko:"//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-debug",text:"vendor/text"}}),require(["ko","text","components/intro/vm"],function(e,t,n){e.components.register("intro",n),e.applyBindings({})}),define("main",function(){});