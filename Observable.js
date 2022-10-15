//Neselerin event'a sahip olmasini saglayan observerimiz.
var Onbservable = function() {
  //private venet nesnesi
  var events ={};
  //Yeni bir venet tetikleyicisi tanımlanıyor
  this.on = function(name,func){
    //Eğer hiç yoksa, bir adet boş tanımlanmalı
    if(!events[name]) events[name] = [];
    //İçeriye koyuyoruz
    events[name].push(func);
  };

  this.trigger = function(name,data){
    if(events[name] && events[name].length>0){
      for(var i = 0; l = events[name].length;i <l;i++ ){
        events[name][i].call(this,data);
      }
    }
  };

  this.off = function(name,func){
    var l = arguments.length;

    if(l == 0){
      events = {};
    } else if (l == 1 && events[name]){
      delete events[name];
    } else if (l == 2 && events[name] && events[name].length >0){

      for(var i = 0; _l = events[name].length; i <_l;i++){
        delete events[name];
        return;
        }
      }
    }
  };

var MVVM = {
  value:function(def){
    var self = this;
    var _value;
    var setter = function(value){
      _value = value || def;
      self.trigger('change:model',{});
    };
    setter.toString = function(){
      return _value || def;
    };
    return setter;
  }
};
