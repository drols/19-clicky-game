(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Luigi",image:"https://www.mariowiki.com/images/1/1d/LuigiSSBU.png",game:"Super Mario Bros."},{id:2,name:"Mario",image:"https://www.mariowiki.com/images/3/3e/Mario_SSBUltimate.png",game:"Super Mario Bros."},{id:3,name:"Donkey Kong",image:"https://www.mariowiki.com/images/7/7e/DonkeyKong_SSBU.png",game:"Donkey Kong"},{id:4,name:"Link",image:"https://www.mariowiki.com/images/5/5e/LinkSSBU.png",game:"The Legend of Zelda"},{id:5,name:"Samus",image:"https://www.mariowiki.com/images/0/03/Samus_SSBU.png",game:"Metroid"},{id:6,name:"Captain Falcon",image:"https://www.mariowiki.com/images/7/76/CaptainFalcon_SSBU.png",game:"F-Zero"},{id:7,name:"Ness",image:"https://www.mariowiki.com/images/8/82/Ness_SSBU.png",game:"Earthbound"},{id:8,name:"Yoshi",image:"https://www.mariowiki.com/images/c/ce/YoshiSSBU.png",game:"Super Mario World"},{id:9,name:"Kirby",image:"https://www.mariowiki.com/images/0/07/Kirby_SSBU.png",game:"Kirby's Dreamland"},{id:10,name:"Fox",image:"https://www.mariowiki.com/images/2/2f/Fox_SSBU.png",game:"Star Fox"},{id:11,name:"Pikachu",image:"https://www.mariowiki.com/images/9/93/Pikachu_SSBU.png",game:"Pokemon"},{id:12,name:"Jigglypuff",image:"https://www.mariowiki.com/images/6/6a/Jigglypuff_SSBU.png",game:"Pokemon"}]},,,,,,,,function(e,a,i){e.exports=i(19)},,,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var n=i(0),t=i.n(n),m=i(3),r=i.n(m),o=i(4),s=i(5),c=i(7),g=i(6),w=i(8);i(15);var p=function(e){return t.a.createElement("div",{className:"card"},t.a.createElement("div",{className:"img-container"},t.a.createElement("img",{onClick:function(){return e.randomizeImages(e.id)},alt:e.name,src:e.image})))};i(16);var u=function(e){return t.a.createElement("div",{className:"wrapper"},e.children)};i(17);var d=function(e){return t.a.createElement("a",{className:"title",href:"https://fontmeme.com/super-smash-bros-font/"},t.a.createElement("img",{src:"https://fontmeme.com/permalink/190311/abff6ad9cd5908842b2f49261e630871.png",alt:"super-smash-bros-font",border:"0"}))},l=i(1),h=function(e){function a(){var e,i;Object(o.a)(this,a);for(var n=arguments.length,t=new Array(n),m=0;m<n;m++)t[m]=arguments[m];return(i=Object(c.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(t)))).state={characters:l},i.randomizeImages=function(e){i.state.characters.sort(function(){return Math.random()-.25}),i.setState({characters:l})},i}return Object(w.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement(u,null,t.a.createElement(d,null),this.state.characters.map(function(a){return t.a.createElement(p,{randomizeImages:e.randomizeImages,id:a.id,key:a.id,image:a.image})}))}}]),a}(n.Component);i(18);r.a.render(t.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.519aca2b.chunk.js.map