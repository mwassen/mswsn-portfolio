(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.5d762816.svg"},27:function(e,t,a){e.exports=a(88)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),s=a.n(i),c=(a(33),a(6)),l=a(7),o=a(9),u=a(8),h=a(3),d=a(10),m=a(22),C=a.n(m),f=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSearchBarChange=a.handleSearchBarChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSearchBarChange",value:function(e){this.props.onSearchTextChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search location...",value:this.props.searchText,onChange:this.handleSearchBarChange}))}}]),t}(n.Component)),v=(a(35),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).organiseResults=a.organiseResults.bind(Object(h.a)(a)),a.clickResult=a.clickResult.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"organiseResults",value:function(e){var t=this;return e.map(function(e,a){var n=e.city.state?e.city.displayName+", "+e.city.state.displayName+", "+e.city.country.displayName:e.city.displayName+", "+e.city.country.displayName;return r.a.createElement("li",{className:"result",key:a,onClick:function(a){return t.clickResult(e.metroArea.id,n,a)}},r.a.createElement("div",{className:"city"},e.city.displayName,", "),function(e){return e.city.state?r.a.createElement("div",{className:"state"},e.city.state.displayName,", "):null}(e),r.a.createElement("div",{className:"country"},e.city.country.displayName))})}},{key:"clickResult",value:function(e,t){this.props.locationSearch(e,t),this.props.onResultClick()}},{key:"render",value:function(){return r.a.createElement("ul",{id:"search-results"},this.organiseResults(this.props.apiResults))}}]),t}(n.Component)),p=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={searchText:"",searchResults:null},a.handleSearchTextChange=a.handleSearchTextChange.bind(Object(h.a)(a)),a.handleSearchResultClick=a.handleSearchResultClick.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSearchTextChange",value:function(e){var t=this;this.setState({searchText:e},function(){var e=t.state.searchText;""!==e&&fetch("https://music-forecast.herokuapp.com/locations/"+e).then(function(e){return 200!==e.status?void console.log("Looks like there was a problem with the SongKick location API. Status Code: "+e.status):e.json()}).then(function(e){e.resultsPage.totalEntries>0?t.setState({searchResults:e.resultsPage.results.location.slice(0,7)}):t.setState({searchResults:null})})})}},{key:"handleSearchResultClick",value:function(){this.setState({searchText:"",searchResults:null})}},{key:"render",value:function(){var e;return e=this.state.searchResults?r.a.createElement("div",{id:"searchResults"},r.a.createElement(v,{apiResults:this.state.searchResults,locationSearch:this.props.locationSearch,onResultClick:this.handleSearchResultClick})):null,r.a.createElement("div",{id:"seek"},r.a.createElement("div",{id:"searchbar"},r.a.createElement(f,{searchText:this.state.searchText,onSearchTextChange:this.handleSearchTextChange})),e)}}]),t}(n.Component)),g=a(23),L=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.active?r.a.createElement("div",null,r.a.createElement(g.ScaleLoader,{color:"rgb(50, 50, 50)"}),r.a.createElement("p",null,this.props.text)):null}}]),t}(n.Component),y=a(26),b=a(1),k=(a(65),a(14)),w=a(24),E=a.n(w),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).exitModal=a.exitModal.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"exitModal",value:function(){this.props.exitFunc()}},{key:"render",value:function(){var e=null!==this.props.selectedData?r.a.createElement("div",{className:"modal-container"},r.a.createElement("svg",{className:"close-btn",alt:"close",onClick:this.exitModal,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 802.5 802.5"},r.a.createElement("g",null,r.a.createElement("path",{d:"M401.25,246.25l235-235c15-15,39-15,55,0l100,101a39.24,39.24,0,0,1,0,55l-234,234,234,235c15,15,15,39,0,55l-100,100c-16,15-40,15-55,0l-235-234-234,234a39.24,39.24,0,0,1-55,0l-101-100c-15-16-15-40,0-55l235-235-235-234a39.24,39.24,0,0,1,0-55l101-101a39.24,39.24,0,0,1,55,0Z"}))),r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",null,r.a.createElement("div",{className:"genre-name"},this.props.selectedData.name.toLowerCase()),r.a.createElement("div",{className:"city-name"}," ","in ",this.props.selectedData.location)),r.a.createElement("div",{className:"date-range"},this.props.selectedData.range.join(" to "))),r.a.createElement("div",{className:"event-cont"},this.props.selectedData.events.map(function(e){var t=e.artists.filter(function(e){return e.topGenres}).map(function(e){return e.topGenres.slice(0,5)}).flat().filter(function(e){return"seen live"!==e.name}).sort(function(e,t){return t.count-e.count}).slice(0,3).map(function(e){return e.name.toLowerCase()});return r.a.createElement("a",{href:e.link,key:e.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"event-box"},r.a.createElement("div",{className:"event-header"},r.a.createElement("div",{className:"event-date"},e.date),r.a.createElement("div",{className:"event-genres"},t.join(", "))),r.a.createElement("div",{className:"event-name"},e.name.replace(/\(\w+ \d+, \d+\)/g,""))))})),r.a.createElement("div",{id:"modal-footer"},r.a.createElement("a",{href:"https://www.songkick.com"},r.a.createElement("svg",{id:"songkick-logo",viewBox:"0 0 427 150",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"powered by songkick"),r.a.createElement("g",{id:"powered-by-songkick-white"},r.a.createElement("g",{id:"by-Songkick",transform:"translate(5.000000, 30.000000)"},r.a.createElement("path",{d:"M267.446587,68.6751636 C263.063099,68.6751636 260.168022,67.3898789 257.14048,62.6644252 C254.189142,57.967134 249.242657,50.0641497 249.242657,50.0641497 L270.754354,20.0909948 L252.072041,20.0909948 L234.993595,43.8753242 L234.993595,0.9684029 L219.382088,0.9684029 L219.382088,83.347811 L234.993595,83.347811 L234.993595,57.1989069 C234.993595,57.1989069 243.736169,70.931102 246.390844,75.1636467 C250.672322,81.6934816 256.379389,83.4190458 265.851705,83.4190458 L270.415383,83.4078317 L270.415383,68.6807707 C268.756785,68.6807707 268.75876,68.6751636 267.446587,68.6751636 L267.446587,68.6751636 Z M410.735058,68.6751636 C406.351569,68.6751636 403.457449,67.3898789 400.42997,62.6644252 C397.477613,57.967134 392.531127,50.0641497 392.531127,50.0641497 L414.042825,20.0909948 L395.360512,20.0909948 L378.281046,43.8753242 L378.281046,0.9684029 L362.670559,0.9684029 L362.670559,83.347811 L378.281046,83.347811 L378.281046,57.1989069 C378.281046,57.1989069 387.024639,70.931102 389.680334,75.1636467 C393.960729,81.6934816 399.66735,83.4190458 409.140558,83.4190458 L413.703854,83.4078317 L413.703854,68.6807707 C412.045702,68.6807707 412.047231,68.6751636 410.735058,68.6751636 L410.735058,68.6751636 Z M24.711413,84.0318052 C14.989265,84.0318052 7.04958,82.2480044 0.62921,75.6489736 L10.619666,65.6585803 C13.919469,68.9580639 19.716694,70.1178912 24.799532,70.1178912 C30.954652,70.1178912 33.898535,68.0681387 33.898535,64.4106334 C33.898535,62.8930392 33.544081,61.641333 32.650588,60.6558971 C31.848655,59.8539641 30.508638,59.2262313 28.457292,58.9601522 L20.788402,57.8922037 C15.167925,57.0884229 10.88702,55.2148458 8.032212,52.2713451 C5.0868,49.2397248 3.662678,44.9584372 3.662678,39.5191063 C3.662678,27.9229993 12.403786,19.4465047 26.851387,19.4465047 C35.94988,19.4465047 42.818813,21.5880724 48.2591,27.0292511 L38.447813,36.839837 C34.432158,32.8264126 29.170086,33.0943395 26.405437,33.0943395 C20.96515,33.0943395 18.736546,36.2177113 18.736546,38.9814047 C18.736546,39.7851855 19.00339,40.943165 19.985449,41.9249054 C20.788402,42.7286862 22.122939,43.5306192 24.356513,43.7985461 L32.024384,44.8703176 C37.733426,45.6703391 41.836181,47.4541399 44.51271,50.1316252 C47.902161,53.4311725 49.238164,58.1563714 49.238164,64.0547143 C49.238164,76.9886719 38.09132,84.0318052 24.711413,84.0318052 L24.711413,84.0318052 Z M96.489325,76.8967931 C91.850015,81.5360387 86.496765,84.0318052 78.737843,84.0318052 C70.977392,84.0318052 65.625735,81.5360387 60.98942,76.8967931 C54.298638,70.2078586 54.566437,61.2835661 54.566437,51.7354913 C54.566437,42.1928323 54.298638,33.2722991 60.98942,26.5833646 C65.625735,21.944119 70.977392,19.4465047 78.737843,19.4465047 C86.496765,19.4465047 91.850015,21.944119 96.489325,26.5833646 C103.177048,33.2722991 102.910205,42.1928323 102.910205,51.7354913 C102.910205,61.2835661 103.177048,70.2078586 96.489325,76.8967931 L96.489325,76.8967931 Z M78.737843,33.3622664 C75.883545,33.3622664 73.653476,34.6119974 72.495687,36.1278713 C71.069972,37.9996643 70.175969,40.141232 70.175969,51.7354913 C70.175969,63.3426849 71.069972,65.3925012 72.495687,67.2662057 C73.653476,68.7819521 75.883545,70.1178912 78.737843,70.1178912 C81.592651,70.1178912 83.822211,68.7819521 84.982102,67.2662057 C86.40769,65.3925012 87.299781,63.3426849 87.299781,51.7354913 C87.299781,40.141232 86.40769,37.9996643 84.982102,36.1278713 C83.822211,34.6119974 81.592651,33.3622664 78.737843,33.3622664 L78.737843,33.3622664 Z M332.758253,84.104824 C325.355696,84.104824 319.73624,81.6072098 315.097886,76.9679641 C308.414622,70.2808775 308.680956,61.3528894 308.680956,51.8085101 C308.680956,42.2603078 308.414622,33.3434701 315.097886,26.6563835 C319.73624,22.0172015 325.355696,19.5176758 332.758253,19.5176758 C344.802095,19.5176758 354.52284,26.2086492 356.841539,40.2124031 L340.966757,40.2124031 C339.98508,36.6430811 338.02332,33.4335012 332.848348,33.4335012 C329.99354,33.4335012 327.855095,34.5933286 326.693229,36.109075 C325.266621,37.9827158 324.286474,40.2124031 324.286474,51.8085101 C324.286474,63.4100967 325.266621,65.6416955 326.693229,67.5134885 C327.855095,69.0312102 329.99354,70.1909101 332.848348,70.1909101 C338.02332,70.1909101 339.98508,66.9794824 340.966757,63.4100967 L356.841539,63.4100967 C354.52284,77.4121303 344.802095,84.104824 332.758253,84.104824 L332.758253,84.104824 Z M196.180381,88.174446 C196.180381,96.534722 190.405584,98.013003 186.671746,98.013003 L180.996028,98.050469 L180.996028,111.975597 L187.918674,112 C203.454039,111.900666 211.926775,103.783978 211.926775,88.202609 L211.871533,41.3141212 C211.871533,34.0012132 208.505466,28.2002925 203.579433,24.4567065 C199.185495,21.1196941 193.5431,19.4428092 187.918674,19.4428092 C180.515671,19.4428092 174.89666,21.9422712 170.261811,26.5815168 C163.569117,33.2686035 163.838892,42.1853775 163.838892,51.7335798 C163.838892,61.2779591 163.569117,70.2059471 170.261811,76.8930975 C174.89666,81.5322794 180.515671,84.0298937 187.918674,84.0298937 C190.791895,84.0298937 193.382854,83.4565746 196.180381,82.1130533 L196.180381,88.174446 L196.180381,88.174446 Z M188.009278,70.1159797 C185.154025,70.1159797 183.013986,68.9561524 181.854222,67.4385582 C180.426532,65.5667652 179.446384,63.3351664 179.446384,51.7335798 C179.446384,40.1374727 180.426532,37.9077854 181.854222,36.0341447 C183.013986,34.5182708 185.154025,33.3585709 188.009278,33.3585709 C193.094665,33.3585709 195.072801,36.4593871 196.071872,39.957538 L196.071872,63.5188604 C195.072801,67.0113406 193.094665,70.1159797 188.009278,70.1159797 L188.009278,70.1159797 Z M157.543405,47.510274 C157.543405,41.0292457 157.801775,33.2442002 151.119531,26.5645683 C146.483216,21.9253227 141.132005,19.4278359 133.369578,19.4278359 C125.610593,19.4278359 120.25747,21.9253227 115.620072,26.5645683 C108.930947,33.2535028 109.197217,41.4378582 109.197217,47.5065784 L109.193203,83.477155 L124.790819,83.4733957 L124.806748,47.5065784 C124.806748,39.389826 125.697693,38.1982679 127.126403,36.3263475 C128.28623,34.8106011 130.513815,33.3434701 133.369578,33.3434701 C136.224896,33.3434701 138.454456,34.8106011 139.612308,36.3263475 C141.039425,38.1982679 141.931962,39.1781605 141.931962,47.5458914 L141.903035,83.4471446 L157.504092,83.471548 L157.543405,47.510274 L157.543405,47.510274 Z M292.209854,12.3375526 L292.209854,0.9833762 L276.659578,0.9814648 L276.657539,12.3114289 L292.209854,12.3375526 L292.209854,12.3375526 Z M276.240899,20.0985771 L292.11275,20.1079434 L292.115235,58.8987297 C292.140466,65.4279274 296.549505,68.6695566 301.732952,68.6695566 L303.566897,68.6733159 L303.566897,83.4303235 L300.268433,83.4659409 C284.426974,83.3666073 276.261351,74.6877498 276.261351,59.4229872 L276.240899,20.0985771 L276.240899,20.0985771 Z"})),r.a.createElement("path",{d:"M24.348,21.316 C24.348,18.472 24.456,15.088 22.548,13.18 C21.432,12.064 19.704,11.416 17.832,11.416 C15.816,11.416 14.556,12.028 13.368,13.216 L13.368,11.632 L7.644,11.632 L7.644,37.264 L13.548,37.264 L13.548,29.596 C14.628,30.676 15.96,31.216 17.868,31.216 C19.74,31.216 21.432,30.568 22.548,29.452 C24.456,27.544 24.348,24.16 24.348,21.316 L24.348,21.316 Z M18.444,21.316 C18.444,24.124 18.192,25.888 15.996,25.888 C13.8,25.888 13.548,24.124 13.548,21.316 C13.548,18.508 13.8,16.744 15.996,16.744 C18.192,16.744 18.444,18.508 18.444,21.316 L18.444,21.316 Z M43.148,21.316 C43.148,17.536 42.644,15.664 41.024,13.9 C39.872,12.676 37.928,11.416 34.796,11.416 C31.664,11.416 29.72,12.676 28.568,13.9 C26.948,15.664 26.444,17.536 26.444,21.316 C26.444,25.132 26.948,26.968 28.568,28.732 C29.72,29.956 31.664,31.216 34.796,31.216 C37.928,31.216 39.872,29.956 41.024,28.732 C42.644,26.968 43.148,25.132 43.148,21.316 L43.148,21.316 Z M37.244,21.316 C37.244,23.224 37.136,24.592 36.38,25.348 C36.02,25.708 35.516,25.888 34.796,25.888 C34.076,25.888 33.572,25.708 33.212,25.348 C32.456,24.592 32.348,23.224 32.348,21.316 C32.348,19.408 32.456,18.04 33.212,17.284 C33.572,16.924 34.076,16.744 34.796,16.744 C35.516,16.744 36.02,16.924 36.38,17.284 C37.136,18.04 37.244,19.408 37.244,21.316 L37.244,21.316 Z M71.776,11.632 L65.548,11.632 L63.136,21.676 L59.788,11.632 L55.684,11.632 L52.336,21.676 L49.924,11.632 L43.696,11.632 L49.528,31 L54.244,31 L57.736,20.38 L61.228,31 L65.944,31 L71.776,11.632 Z M89.532,23.224 L89.532,20.596 C89.532,15.52 86.436,11.416 80.82,11.416 C75.744,11.416 72.144,14.98 72.144,21.316 C72.144,29.668 77.076,31.216 81.36,31.216 C84.96,31.216 86.904,30.136 88.884,28.156 L85.356,24.628 C84.312,25.672 83.412,26.248 81.36,26.248 C79.164,26.248 77.94,24.808 77.94,23.224 L89.532,23.224 Z M83.7,19.3 L77.94,19.3 C77.94,18.832 78.012,18.292 78.264,17.788 C78.624,16.96 79.416,16.276 80.82,16.276 C82.224,16.276 83.016,16.96 83.376,17.788 C83.628,18.292 83.7,18.832 83.7,19.3 L83.7,19.3 Z M107,13.216 C105.668,11.884 104.372,11.416 102.464,11.416 C100.448,11.416 98.756,12.352 97.892,13.216 L97.892,11.632 L92.132,11.632 L92.132,31 L98.036,31 L98.036,19.408 C98.036,17.212 99.62,16.744 100.412,16.744 C101.42,16.744 101.96,17.176 102.536,17.752 L107,13.216 Z M124.756,23.224 L124.756,20.596 C124.756,15.52 121.66,11.416 116.044,11.416 C110.968,11.416 107.368,14.98 107.368,21.316 C107.368,29.668 112.3,31.216 116.584,31.216 C120.184,31.216 122.128,30.136 124.108,28.156 L120.58,24.628 C119.536,25.672 118.636,26.248 116.584,26.248 C114.388,26.248 113.164,24.808 113.164,23.224 L124.756,23.224 Z M118.924,19.3 L113.164,19.3 C113.164,18.832 113.236,18.292 113.488,17.788 C113.848,16.96 114.64,16.276 116.044,16.276 C117.448,16.276 118.24,16.96 118.6,17.788 C118.852,18.292 118.924,18.832 118.924,19.3 L118.924,19.3 Z M143.376,31 L143.376,5.368 L137.472,5.368 L137.472,13.036 C136.392,11.956 135.06,11.416 133.152,11.416 C131.28,11.416 129.588,12.064 128.472,13.18 C126.564,15.088 126.672,18.472 126.672,21.316 C126.672,24.16 126.564,27.544 128.472,29.452 C129.588,30.568 131.316,31.216 133.188,31.216 C135.204,31.216 136.464,30.604 137.652,29.416 L137.652,31 L143.376,31 Z M137.472,21.316 C137.472,24.124 137.22,25.888 135.024,25.888 C132.828,25.888 132.576,24.124 132.576,21.316 C132.576,18.508 132.828,16.744 135.024,16.744 C137.22,16.744 137.472,18.508 137.472,21.316 L137.472,21.316 Z M170.536,21.316 C170.536,18.472 170.644,15.088 168.736,13.18 C167.62,12.064 165.928,11.416 164.056,11.416 C162.148,11.416 160.816,11.956 159.736,13.036 L159.736,5.368 L153.832,5.368 L153.832,31 L159.556,31 L159.556,29.416 C160.744,30.604 162.004,31.216 164.02,31.216 C165.892,31.216 167.62,30.568 168.736,29.452 C170.644,27.544 170.536,24.16 170.536,21.316 L170.536,21.316 Z M164.632,21.316 C164.632,24.124 164.38,25.888 162.184,25.888 C159.988,25.888 159.736,24.124 159.736,21.316 C159.736,18.508 159.988,16.744 162.184,16.744 C164.38,16.744 164.632,18.508 164.632,21.316 L164.632,21.316 Z M189.876,11.632 L183.684,11.632 L180.552,21.676 L177.276,11.632 L171.084,11.632 L177.528,29.092 L176.988,30.712 C176.592,31.9 176.052,32.152 175.008,32.152 L173.748,32.152 L173.748,37.48 L175.98,37.48 C177.708,37.48 179.184,37.084 180.336,35.86 C180.948,35.248 181.452,34.42 181.848,33.304 L189.876,11.632 Z",id:"powered-by"})))))):null;return r.a.createElement(E.a,{className:"modal-content",overlayClassName:"modal-overlay",isOpen:function(e,t){return!!(e&&t.events.length>0)}(this.props.active,this.props.selectedData),closeTimeoutMS:200,onRequestClose:this.exitModal,disableAutoFocus:!0,appElement:document.getElementById("root")},e)}}]),t}(r.a.Component),S=a(25),j=a.n(S),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:{},dimensions:{},rectCount:null,xScale:null,modal:!1,selection:null},a.xAxisRef=r.a.createRef(),a.brushRef=r.a.createRef(),a.renderAxes=a.renderAxes.bind(Object(h.a)(a)),a.renderBrushes=a.renderBrushes.bind(Object(h.a)(a)),a.clearModal=a.clearModal.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.renderAxes(),this.renderBrushes()}},{key:"componentDidUpdate",value:function(){this.renderAxes(),this.renderBrushes()}},{key:"renderAxes",value:function(){var e=b.a();e.ticks(window.innerWidth/100),e.scale(this.state.xScale),b.l(this.xAxisRef.current).call(e)}},{key:"renderBrushes",value:function(){var e=this;this.state.data.forEach(function(t,a){var n=[e.state.dimensions.margin.left,e.state.dimensions.margin.top+a*(e.state.dimensions.height/20)+18],r=[e.state.dimensions.width+e.state.dimensions.margin.left,e.state.dimensions.margin.top+(a+1)*(e.state.dimensions.height/20)+18],i=b.l(e.brushRef.current).append("g").attr("id",t.key+"-brush").attr("class","genre-brush"),s=b.b().extent([n,r]).on("end",function(){if(b.c.selection){var a=Object(y.a)(b.c.selection,2),n=a[0],r=a[1],c=[e.state.xScale.invert(n-e.state.dimensions.margin.left),e.state.xScale.invert(r-e.state.dimensions.margin.left)],l=[];t.values.forEach(function(e){if(0!==e.value.weight){var t=new Date(e.key);if(t>=c[0]&&t<=c[1])e.value.details.forEach(function(e){l.push(e)})}}),e.setState({modal:!0,selection:{name:t.key,location:e.props.location,events:l,range:c.map(function(e){return b.n("%B %d, %Y")(e)})}}),i.call(s.move,null)}});i.call(s)})}},{key:"clearModal",value:function(){this.setState({modal:!1})}},{key:"render",value:function(){var e=this.state.dimensions,t=this.state.rectCount;var a=this.state.data;return a?r.a.createElement("div",null,r.a.createElement("svg",{width:e.width+e.margin.left+e.margin.right,height:e.height+e.margin.top+e.margin.bottom},r.a.createElement(k.Trail,{items:function(a){return a.map(function(a,n){return r.a.createElement("g",{key:a.key,className:"genre-group",transform:"translate(".concat(0,", ",(n+1)*(e.height/20),")")},r.a.createElement("text",{x:e.margin.left-10,y:"3",className:"genre-label"},a.key.toLowerCase()),r.a.createElement("g",{transform:"translate(".concat(e.margin.left,", 0)")},function(e,t){return b.h(t).map(function(t,a){var n=e.xScale(t),r=e.xScale.bandwidth(),i=e.yScale(n),s=2*i,c=e.key+"-"+a,l=j.a.scale(["6d76af","ee7943"]),o=l(e.colorScale(n)).hex();return{x:n,width:r,y:i,height:s,id:c,color:o}})}(a,t).map(function(e){var t=e.y<=0;return r.a.createElement("g",{key:e.id,className:t?"empty-bar":"data-bar"},r.a.createElement("rect",{x:e.x,y:t?-.1:-e.y,width:e.width,height:t?.2:e.height,fill:e.color}))})))})}(a),keys:function(e){return e.key+"barz"},from:{opacity:0,transform:"translate3d(0,-40px,0)"},to:{opacity:1,transform:"translate3d(0,0px,0)"}},function(e){return function(t){return r.a.createElement(k.animated.g,{style:t},e)}}),r.a.createElement("g",{ref:this.xAxisRef,transform:"translate(".concat(e.margin.left,", ").concat(this.state.dimensions.margin.top,")")}),r.a.createElement("g",{ref:this.brushRef})),r.a.createElement(x,{active:this.state.modal,exitFunc:this.clearModal,selectedData:this.state.selection})):null}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.dataSet;if(!t)return{};var a={top:30,right:window.innerWidth/8,bottom:30,left:window.innerWidth/8>120?window.innerWidth/8:120},n=window.innerWidth-window.innerWidth/20-a.left-a.right,r=2e3-a.top-a.bottom,i=b.o("%Y-%m-%d"),s=b.g().key(function(e){return e.genre}).key(function(e){return i(e.date)}).rollup(function(e){return{weight:b.m(e,function(e){return e.weight}),details:e.map(function(e){return e.details}).filter(function(e,t,a){return a.findIndex(function(t){return t.place===e.place&&t.name===e.name})===t})}}).entries(t).sort(function(e,t){return b.m(t.values,function(e){return e.value.weight})-b.m(e.values,function(e){return e.value.weight})}),c=b.d(t,function(e){return i(e.date)});var l=function(e,t){var a=[];return e.forEach(function(e){for(var n={key:e.key,values:[]},r=function(t){var a=!1,r=void 0;e.values.forEach(function(e){var n,i,s=new Date(e.key);i=s,(n=t).getFullYear()===i.getFullYear()&&n.getMonth()===i.getMonth()&&n.getDate()===i.getDate()&&(a=!0,r=e)}),a?n.values.push(r):n.values.push({key:new Date(t),value:{weight:0}})},i=new Date(t[0]);i<t[1];i.setDate(i.getDate()+1))r(i);a.push(n)}),a}(s,c),o=b.k().domain(c).range([0,n]),u=b.j().domain([b.f(l,function(e){return b.f(e.values,function(e){return e.value.weight})}),b.e(l,function(e){return b.e(e.values,function(e){return e.value.weight})})]).range([0,1]),h=Math.floor(window.innerWidth/4);return l.forEach(function(e){var t=[b.f(e.values,function(e){return e.value.weight}),b.e(e.values,function(e){return e.value.weight})],a=b.j().domain(t).range([0,r/40-5]);e.colorScale=b.j().domain(e.values.map(function(e){return o(new Date(e.key))})).range(e.values.map(function(e){return u(e.value.weight)})),e.yScale=b.j().domain(e.values.map(function(e){return o(new Date(e.key))})).range(e.values.map(function(e){return a(e.value.weight)})),e.xScale=b.i().domain(b.h(h)).paddingInner(.05).range([0,n])}),{data:l,dimensions:{margin:a,width:n,height:r},rectCount:h,xScale:o,globalYScale:u}}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={location:null,loading:!0,ready:!1,stats:null},a.wakeUpServer=a.wakeUpServer.bind(Object(h.a)(a)),a.locationSearch=a.locationSearch.bind(Object(h.a)(a)),a.homeReset=a.homeReset.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.wakeUpServer()}},{key:"wakeUpServer",value:function(){var e=this;fetch("https://music-forecast.herokuapp.com/status/").then(function(t){200===t.status&&e.setState({loading:!1,ready:!0})})}},{key:"locationSearch",value:function(e,t){var a=this;this.setState({location:t,loading:!0,stats:null}),fetch("https://music-forecast.herokuapp.com/events/"+e).then(function(e){return e.json()}).then(function(e){a.setState({loading:!1,stats:e})})}},{key:"homeReset",value:function(){this.setState({location:null,loading:!1,ready:!1,stats:null}),this.wakeUpServer()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo",onClick:this.homeReset})),this.state.ready?r.a.createElement("div",{id:"main-content"},r.a.createElement(p,{locationSearch:this.locationSearch}),r.a.createElement("div",{className:"locationName"},this.state.location),r.a.createElement(L,{active:this.state.loading,text:"retrieving results"}),this.state.stats?r.a.createElement("div",{className:"data-visuals"},r.a.createElement(O,{dataSet:this.state.stats,location:this.state.location})):this.state.loading?null:r.a.createElement("div",{id:"notes"},r.a.createElement("p",{id:"bug-note"},"(7 April 2019) note: The entire world is not in the midst of some dreamy latvian trippy sludge metal takeover, the last.fm API is currently somewhat broken..."))):r.a.createElement(L,{active:this.state.loading,text:"contacting server"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.2d98a603.chunk.js.map