(function(){function c(g,f,e){if(g.addEventListener){g.addEventListener(f,e,false)}else{if(g.attachEvent){g["e"+f+e]=e;g[f+e]=function(){g["e"+f+e](window.event)};g.attachEvent("on"+f,g[f+e])}}}function b(f){if(f.stopPropagation){f.stopPropagation()}if(f.preventDefault){f.preventDefault()}f.cancelBubble=true;f.returnValue=false;return false}var a={name:"Entity Picker",rows:{length:0,last:null,add:function(e){this[this.length++]=e},changeTo:function(h,g){var k=(typeof g=="undefined")?0:(this.lastrow==null)?0:this.lastrow;var j=(typeof g=="undefined")?this.length:g+1;for(var e=Math.min(k,j),f=Math.max(k,j);e<f;e++){this[e].parentNode.parentNode.checked=this[e].checked=h}},update:function(){var e=true;for(var f=0,g=this.length;f<g;f++){e=e&&this[f].checked}a.topcheckbox.checked=e},toString:function(){var f=[];for(var e=0,g=this.length;e<g;e++){if(this[e].checked){f.push(this[e].value.replace(/([\\,])/g,"\\$1"))}}return f.join(", ")}}};function d(){var k=document.getElementById("entitySearchResults");if(k){try{a.topcheckbox=k.getElementsByTagName("thead")[0].getElementsByTagName("input")[0];if(!a.topcheckbox){throw"Top checkbox does not exist"}a.topcheckbox.onclick=function(){a.rows.changeTo(this.checked)};a.button=document.getElementById("select-entities");if(!a.button){throw"Select button does not exist"}a.button.onclick=function(){var i=opener;var e=this.className.split(".");while(e.length){i=i[e.shift()]}i(a.rows.toString());window.close()};var g=k.getElementsByTagName("tbody")[0].getElementsByTagName("tr");for(var h=0,j=g.length;h<j;h++){var f=g[h].getElementsByTagName("input")[0];if(f.type="checkbox"){g[h].checked=f.checked;a.rows.add(f)}g[h].number=h;g[h].onclick=function(m){var i=m||window.event;if(i.shiftKey){a.rows.changeTo(!this.checked,this.number)}else{a.rows[this.number].checked=this.checked=!this.checked}if(this.checked){a.rows.last=this.number}a.rows.update()}}}catch(l){if(typeof console!="undefined"){console.log(l)}}}}c(window,"load",d)})();