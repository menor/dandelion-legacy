webpackJsonp([0,3],[function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){var r=e.DOM.select(".get-random").events("click"),t="http://jsonplaceholder.typicode.com/users/",n=r.map(function(){var e=Math.round(9*Math.random())+1;return{url:t+String(e),method:"GET"}}),u=e.HTTP.filter(function(e){return 0===e.request.url.indexOf(t)}).mergeAll().map(function(e){return e.body}).startWith(null),a=u.map(function(e){return(0,l.div)(".users",[(0,l.button)(".get-random","Get Random album"),null===e?null:(0,l.div)(".user-details",[(0,l.h1)(".user-name",e.name),(0,l.h4)(".user-email",e.email),(0,l.a)(".user-website",{href:e.website},e.website)])])}),i={DOM:a,HTTP:n};return i}var a=t(1),i=n(a),l=t(5),o=t(63),s={DOM:(0,l.makeDOMDriver)("#app"),HTTP:(0,o.makeHTTPDriver)()};i["default"].run(u,s)}]);
//# sourceMappingURL=app.23475f9825af25f88c13.js.map