(this["webpackJsonpgoogle-clone-react"]=this["webpackJsonpgoogle-clone-react"]||[]).push([[0],{51:function(e,t,a){e.exports=a(69)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(20),o=a.n(l),r=(a(56),a(57),a(2)),n=a(4),c=(a(58),a(41)),m=a.n(c),d=a(83),p=a(36),h=a(16),g=(a(59),a(40)),w=a.n(g),u=a(27),b=a.n(u),f=a(82),T=Object(s.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,l=e.children;return i.a.createElement(T.Provider,{value:Object(s.useReducer)(t,a)},l)},E=function(){return Object(s.useContext)(T)},v=a(28),S="SET_SEARCH_TERM",y=function(e,t){switch(console.log(t),t.type){case S:return Object(v.a)(Object(v.a)({},e),{},{term:t.term});default:return e}},k=function(e){var t=e.hideButtons,a=void 0!==t&&t,l=E(),o=Object(h.a)(l,2);Object(p.a)(o[0]);var c=o[1],m=Object(s.useState)(""),d=Object(h.a)(m,2),g=d[0],u=d[1],T=Object(n.f)(),_=function(e){e.preventDefault(),console.log("You hit search button ->",g),c({type:S,term:g}),T.push("/search")};return i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"search__input"},i.a.createElement(b.a,{className:"search__inputIcon"}),i.a.createElement("input",{type:"text",value:g,onChange:function(e){return u(e.target.value)}}),i.a.createElement(w.a,{className:"search__inputIcon search__inputIcon--clickable"})),a?i.a.createElement("div",{className:"search__buttons "},i.a.createElement(f.a,{className:"search__buttonsHidden",type:"submit",variant:"outlined",onClick:_},"Buscar con Google"),i.a.createElement(f.a,{className:"search__buttonsHidden",variant:"outlined"},"Voy a tener suerte")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"search__buttons"},i.a.createElement(f.a,{type:"submit",variant:"outlined",onClick:_},"Buscar con Google"),i.a.createElement(f.a,{variant:"outlined"},"Voy a tener suerte")),i.a.createElement("div",{className:"search__lenguages"},i.a.createElement("p",null,"Ofrecido por Google en:"),i.a.createElement(r.b,{to:"#"},"English"),i.a.createElement(r.b,{to:"#"},"catal\xe0"),i.a.createElement(r.b,{to:"#"},"galego"),i.a.createElement(r.b,{to:"#"},"euskara"))))},N=(a(66),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"footer__countryInfo"},i.a.createElement("p",null,"Espa\xf1a")),i.a.createElement("div",{className:"footer__links"},i.a.createElement("div",{className:"footer__linksLeft"},i.a.createElement(r.b,{to:"#"},"Publicidad"),i.a.createElement(r.b,{to:"#"},"Empresa"),i.a.createElement(r.b,{to:"#"},"C\xf3mo funciona la B\xfasqueda")),i.a.createElement("div",{className:"footer__linksRight"},i.a.createElement(r.b,{to:"#"},"Privacidad"),i.a.createElement(r.b,{to:"#"},"T\xe9rminos"),i.a.createElement(r.b,{to:"#"},"Configuraci\xf3n"))))}),A=function(){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home__header"},i.a.createElement("div",{className:"home__headerLeft"},i.a.createElement(r.b,{to:"/about"},"Sobre Google"),i.a.createElement(r.b,{to:"/store"},"Tienda")),i.a.createElement("div",{className:"home__headerRight"},i.a.createElement(r.b,{to:"/gmail"},"Gmail"),i.a.createElement(r.b,{to:"/images"},"Im\xe1genes"),i.a.createElement(m.a,null),i.a.createElement(d.a,null))),i.a.createElement("div",{className:"home__body"},i.a.createElement("img",{className:"home__bodyImg",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"Brand Google"}),i.a.createElement("div",{className:"home__inputContainer"},i.a.createElement(k,null))),i.a.createElement("div",{className:"home__footer"},i.a.createElement(N,null)))},C=(a(67),a(31),a(42),Object({NODE_ENV:"production",PUBLIC_URL:"/google-clone-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_API_KEY,Object({NODE_ENV:"production",PUBLIC_URL:"/google-clone-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_SEARCH_ID,{kind:"customsearch#search",url:{type:"application/json",template:"https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"},queries:{request:[{title:"Google Custom Search - tesla",totalResults:"304000000",searchTerms:"tesla",count:10,startIndex:1,inputEncoding:"utf8",outputEncoding:"utf8",safe:"off",cx:"328f6ff0629c75038"}],nextPage:[{title:"Google Custom Search - tesla",totalResults:"304000000",searchTerms:"tesla",count:10,startIndex:11,inputEncoding:"utf8",outputEncoding:"utf8",safe:"off",cx:"328f6ff0629c75038"}]},context:{title:"Google"},searchInformation:{searchTime:.531582,formattedSearchTime:"0.53",totalResults:"304000000",formattedTotalResults:"304,000,000"},items:[{kind:"customsearch#result",title:"Tesla: Electric Cars, Solar & Clean Energy",htmlTitle:"<b>Tesla</b>: Electric Cars, Solar &amp; Clean Energy",link:"https://www.tesla.com/",displayLink:"www.tesla.com",snippet:"Tesla is accelerating the world's transition to sustainable energy with electric cars\n, solar and integrated renewable energy solutions for homes and businesses.",htmlSnippet:"<b>Tesla</b> is accelerating the world&#39;s transition to sustainable energy with electric cars<br>\n, solar and integrated renewable energy solutions for homes and businesses.",cacheId:"rHYp-0etoiEJ",formattedUrl:"https://www.tesla.com/",htmlFormattedUrl:"https://www.<b>tesla</b>.com/",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLwcVTUuHf_VXGFHZNRLAiU19-PuPsuWtM6Gcl5DYeYyD3DrhtMgd688Q",width:"311",height:"162"}],metatags:[{"msapplication-tilecolor":"#cc0000","og:image":"https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg","twitter:card":"summary_large_image","twitter:title":"Electric Cars, Solar & Clean Energy | Tesla","og:type":"website","theme-color":"#000000","og:site_name":"Tesla","og:image:url":"https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg",handheldfriendly:"true","twitter:url":"https://www.tesla.com/","og:title":"Electric Cars, Solar & Clean Energy | Tesla","msapplication-tileimage":"/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png","twitter:creator":"@tesla","og:description":"Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.","twitter:image":"https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg","og:image:secure_url":"https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg","twitter:site":"@tesla","apple-mobile-web-app-status-bar-style":"black",viewport:"width=device-width, initial-scale=1.0","twitter:description":"Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.","apple-mobile-web-app-capable":"yes",mobileoptimized:"width","og:url":"https://www.tesla.com/"}],cse_image:[{src:"https://www.tesla.com/sites/default/files/drupal8/social/ModelY_Social.jpg"}]}},{kind:"customsearch#result",title:"Tesla the Band | Official Website | American Made Rock 'n' Roll",htmlTitle:"<b>Tesla</b> the Band | Official Website | American Made Rock &#39;n&#39; Roll",link:"https://teslatheband.com/",displayLink:"teslatheband.com",snippet:"The Official Website of the rock band Tesla, providing recent news, tour dates, \nmusic, history, and other ways for fans to interact.",htmlSnippet:"The Official Website of the rock band <b>Tesla</b>, providing recent news, tour dates, <br>\nmusic, history, and other ways for fans to interact.",cacheId:"Pw3S9NsLmboJ",formattedUrl:"https://teslatheband.com/",htmlFormattedUrl:"https://<b>tesla</b>theband.com/",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj0Cz3qQotoHoZOO9Jro6e2jrHOWKwrH87bJcUVCT9zc_DyxxFtqt7vzo",width:"310",height:"163"}],metatags:[{"og:image":"https://teslatheband.com/wp-content/uploads/2018/03/cropped-home-hero-1.jpg","og:image:width":"3840","og:type":"website","twitter:card":"summary_large_image","twitter:title":"Tesla the Band | Official Website | American Made Rock 'n' Roll","og:site_name":"TESLA BAND | Official Website","og:title":"Tesla the Band | Official Website | American Made Rock 'n' Roll","og:image:height":"2016","twitter:image:height":"2016","msapplication-tileimage":"/wp-content/uploads/2018/04/cropped-tesla-logo-1-270x270.png","og:description":"The Official Website of the rock band Tesla, providing recent news, tour dates, music, history, and other ways for fans to interact.","twitter:image":"https://teslatheband.com/wp-content/uploads/2018/03/cropped-home-hero-1.jpg","twitter:image:width":"3840",viewport:"width=device-width, initial-scale=1, shrink-to-fit=no","twitter:description":"The Official Website of the rock band Tesla, providing recent news, tour dates, music, history, and other ways for fans to interact.","og:locale":"en_US","og:url":"https://teslatheband.com/"}],cse_image:[{src:"https://teslatheband.com/wp-content/uploads/2018/03/cropped-home-hero-1.jpg"}]}},{kind:"customsearch#result",title:"Model 3 | Tesla",htmlTitle:"Model 3 | <b>Tesla</b>",link:"https://www.tesla.com/model3",displayLink:"www.tesla.com",snippet:"Model 3 is designed for electric-powered performance, with dual motor AWD, \nquick acceleration, long range and fast charging.",htmlSnippet:"Model 3 is designed for electric-powered performance, with dual motor AWD, <br>\nquick acceleration, long range and fast charging.",cacheId:"N4-C0Xr0P-gJ",formattedUrl:"https://www.tesla.com/model3",htmlFormattedUrl:"https://www.<b>tesla</b>.com/model3",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREcihpAvS2vbj0GfOAoWAHw26tYBp8bYm_SZd3g1ZlKmhLix9lLlGlJ46E",width:"284",height:"177"}],metatags:[{"msapplication-tilecolor":"#cc0000","og:image":"https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg","twitter:card":"summary","twitter:title":"Model 3 | Tesla","og:image:alt":"Model 3","theme-color":"#000000","og:site_name":"Tesla","og:image:url":"https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg",handheldfriendly:"true","twitter:url":"https://www.tesla.com/model3","og:title":"Model 3 | Tesla","msapplication-tileimage":"/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png","twitter:creator":"@Tesla","og:description":"Model 3 is designed for electric-powered performance, with dual motor AWD, quick acceleration, long range and fast charging.","twitter:image":"https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg","og:image:secure_url":"https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg","twitter:image:alt":"Model 3","apple-mobile-web-app-status-bar-style":"black",viewport:"width=device-width, initial-scale=1.0","twitter:description":"Model 3 is designed for electric-powered performance, with dual motor AWD, quick acceleration, long range and fast charging.","apple-mobile-web-app-capable":"yes",mobileoptimized:"width","og:url":"https://www.tesla.com/model3"}],cse_image:[{src:"https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg"}]}},{kind:"customsearch#result",title:"Tesla Short Shorts",htmlTitle:"<b>Tesla</b> Short Shorts",link:"https://shop.tesla.com/product/tesla-short-shorts",displayLink:"shop.tesla.com",snippet:"Celebrate summer with Tesla Short Shorts. Run like the wind or entertain like \nLiberace with our red satin and gold trim design. Relax poolside or lounge \nindoors ...",htmlSnippet:"Celebrate summer with <b>Tesla</b> Short Shorts. Run like the wind or entertain like <br>\nLiberace with our red satin and gold trim design. Relax poolside or lounge <br>\nindoors&nbsp;...",cacheId:"W2vM-vU5b2YJ",formattedUrl:"https://shop.tesla.com/product/tesla-short-shorts",htmlFormattedUrl:"https://shop.<b>tesla</b>.com/product/<b>tesla</b>-short-shorts",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvmVpoKKexKNQ0ozCuGWzwL3JAXlEqtftGrmlmuBfuS2B9GZuDnThG3Yk",width:"224",height:"225"}],metatags:[{"msapplication-tilecolor":"#cc0000","og:image":"https://www.tesla.com/ns_videos/commerce/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/shorts/8529140-00-A_0.jpg","og:type":"product","twitter:card":"summary_large_image","twitter:title":"Tesla Short Shorts","twitter:site:id":"13298072","og:title":"Tesla Short Shorts","msapplication-tileimage":"/images/icons/mstile-144x144.png?2","og:description":"Celebrate summer with Tesla Short Shorts. Run like the wind or entertain like Liberace with our red satin and gold trim design. Relax poolside or lounge indoors year-round with our limited-edition Tesla Short Shorts, featuring our signature Tesla logo in front with &ldquo;S3XY&rdquo; across the back. Enjoy exceptional comfort from the closing bell. See Size Chart for sizing and fit guidelines.","twitter:creator":"@teslamotors","twitter:image":"https://www.tesla.com/ns_videos/commerce/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/shorts/8529140-00-A_0.jpg","twitter:site":"@teslamotors","twitter:creator:id":"13298072",viewport:"width=device-width, initial-scale=1","twitter:description":"Celebrate summer with Tesla Short Shorts. Run like the wind or entertain like Liberace with our red satin and gold trim design. Relax poolside or lounge indoors year-round with our limited-edition Tesla Short Shorts, featuring our signature Tesla logo in front with &ldquo;S3XY&rdquo; across the back. Enjoy exceptional comfort from the closing bell. See Size Chart for sizing and fit guidelines."}],cse_image:[{src:"https://www.tesla.com/ns_videos/commerce/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/shorts/8529140-00-A_0.jpg"}]}},{kind:"customsearch#result",title:"Model S | Tesla",htmlTitle:"Model S | <b>Tesla</b>",link:"https://www.tesla.com/models",displayLink:"www.tesla.com",snippet:"Tesla's all-electric powertrain delivers unparalleled performance in all weather \nconditions \u2013 with Dual Motor All-Wheel Drive, adaptive air suspension and ...",htmlSnippet:"<b>Tesla&#39;s</b> all-electric powertrain delivers unparalleled performance in all weather <br>\nconditions \u2013 with Dual Motor All-Wheel Drive, adaptive air suspension and&nbsp;...",cacheId:"Ei43u66-EP0J",formattedUrl:"https://www.tesla.com/models",htmlFormattedUrl:"https://www.<b>tesla</b>.com/models",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTT2Nd2NXY5NKgGlWHbNFy9_6h7tgjuyP5ToVx9rZY4ocFnOz5TgAP9MP4v",width:"284",height:"177"}],metatags:[{"msapplication-tilecolor":"#cc0000","og:image":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg","twitter:card":"summary_large_image","twitter:title":"Model S | Tesla","theme-color":"#000000","og:site_name":"Tesla","og:image:url":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",handheldfriendly:"true","twitter:url":"https://www.tesla.com/models","og:title":"Model S","msapplication-tileimage":"/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png","twitter:creator":"@tesla","og:description":"Model S is built for speed and endurance, with ludicrous acceleration, unparalleled performance and a sleek aesthetic.","twitter:image":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg","og:image:secure_url":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg","twitter:site":"@tesla","apple-mobile-web-app-status-bar-style":"black",viewport:"width=device-width, initial-scale=1.0","twitter:description":"Model S is built for speed and endurance, with ludicrous acceleration, unparalleled performance and a sleek aesthetic.","apple-mobile-web-app-capable":"yes",mobileoptimized:"width","og:url":"https://www.tesla.com/models"}],cse_image:[{src:"https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg"}]}},{kind:"customsearch#result",title:"Investors Overview | Tesla, Inc.",htmlTitle:"Investors Overview | <b>Tesla</b>, Inc.",link:"https://ir.tesla.com/",displayLink:"ir.tesla.com",snippet:"The Investor Relations website contains information about Tesla, Inc.'s business \nfor stockholders, potential investors, and financial analysts.",htmlSnippet:"The Investor Relations website contains information about <b>Tesla</b>, Inc.&#39;s business <br>\nfor stockholders, potential investors, and financial analysts.",cacheId:"DiUql1nUr6gJ",formattedUrl:"https://ir.tesla.com/",htmlFormattedUrl:"https://ir.<b>tesla</b>.com/",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqW5DaCO4ZZ3ycN3SGvz_bjJatGp-Uj1a9bfkxrh5KPRQHT_vOhaz_tweU",width:"263",height:"192"}],metatags:[{"og:image":"https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg","twitter:card":"summary_large_image","og:type":"website","twitter:title":"Investors Overview | Tesla, Inc.","og:site_name":"Tesla, Inc.","og:image:url":"https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg",handheldfriendly:"true","twitter:url":"https://ir.tesla.com/investor-relations","og:title":"Investors Overview | Tesla, Inc.","og:description":"Tesla\u2019s mission is to accelerate the world\u2019s transition to sustainable energy. Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products.","twitter:image":"https://tesla.com/ns_videos/homepage-social.jpg","og:image:secure_url":"https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg",referrer:"no-referrer",viewport:"width=device-width, initial-scale=1.0","twitter:description":"Tesla\u2019s mission is to accelerate the world\u2019s transition to sustainable energy. Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products.",mobileoptimized:"width","og:url":"https://ir.tesla.com/investor-relations"}],cse_image:[{src:"https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg"}]}},{kind:"customsearch#result",title:"Model X | Tesla",htmlTitle:"Model X | <b>Tesla</b>",link:"https://www.tesla.com/modelx",displayLink:"www.tesla.com",snippet:"https://tesla-cdn.thron.com/delivery/public/ ... Tesla's all-electric powertrain \ndelivers unparalleled performance in all weather conditions, with Dual Motor ...",htmlSnippet:"https://<b>tesla</b>-cdn.thron.com/delivery/public/ ... <b>Tesla&#39;s</b> all-electric powertrain <br>\ndelivers unparalleled performance in all weather conditions, with Dual Motor&nbsp;...",cacheId:"nAmbVd5MEZAJ",formattedUrl:"https://www.tesla.com/modelx",htmlFormattedUrl:"https://www.<b>tesla</b>.com/modelx",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReDeZeNqecwCZ-qkqFKmMvhxK3SAIkcMd2CTxnH-iHU4nwUE4S4gwlm4rW",width:"311",height:"162"}],metatags:[{"msapplication-tilecolor":"#cc0000","og:image":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg","twitter:card":"summary_large_image","twitter:title":"Model X | Tesla","theme-color":"#000000","og:site_name":"Tesla","og:image:url":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg",handheldfriendly:"true","twitter:url":"https://www.tesla.com/modelx","og:title":"Model X | Tesla","msapplication-tileimage":"/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png","twitter:creator":"@tesla","og:description":"Model X is built for efficiency, with standard all-wheel drive, best in class storage and seating for up to seven adults.","twitter:image":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg","og:image:secure_url":"https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg","twitter:site":"@tesla","apple-mobile-web-app-status-bar-style":"black",viewport:"width=device-width, initial-scale=1.0","twitter:description":"Model X is built for efficiency, with standard all-wheel drive, best in class storage and seating for up to seven adults.","apple-mobile-web-app-capable":"yes",mobileoptimized:"width","og:url":"https://www.tesla.com/modelx"}],cse_image:[{src:"https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg"}]}},{kind:"customsearch#result",title:"Tesla, Inc. - Wikipedia",htmlTitle:"<b>Tesla</b>, Inc. - Wikipedia",link:"https://en.wikipedia.org/wiki/Tesla,_Inc.",displayLink:"en.wikipedia.org",snippet:"Tesla, Inc. (formerly Tesla Motors, Inc.) is an American electric vehicle and clean \nenergy company based in Palo Alto, California. The company specializes in ...",htmlSnippet:"<b>Tesla</b>, Inc. (formerly <b>Tesla</b> Motors, Inc.) is an American electric vehicle and clean <br>\nenergy company based in Palo Alto, California. The company specializes in&nbsp;...",formattedUrl:"https://en.wikipedia.org/wiki/Tesla,_Inc.",htmlFormattedUrl:"https://en.wikipedia.org/wiki/<b>Tesla</b>,_Inc.",pagemap:{hcard:[{url_text:"www.tesla.com",bday:"2003-07-01",fn:"Tesla, Inc.",nickname:"Tesla Motors, Inc. (2003\u20132017)",logo:"Tesla's headquarters in Palo Alto",category:"Public",url:"www.tesla.com"}],cse_thumbnail:[{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtQ4SIVjsbrM1rg23xZvICpXrQqApgHnt2ZmM27jPhRfXhEEG7GSEacU",width:"198",height:"255"}],metatags:[{referrer:"origin","og:image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"}],cse_image:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"}]}},{kind:"customsearch#result",title:"TSLA: Tesla Inc - Stock Price, Quote and News - CNBC",htmlTitle:"TSLA: <b>Tesla</b> Inc - Stock Price, Quote and News - CNBC",link:"https://www.cnbc.com/quotes/?symbol=TSLA",displayLink:"www.cnbc.com",snippet:"Tesla Inc. TSLA:NASDAQ. Real Time Quote | Last NASDAQ LS, VOL From CTA | \nUSD. Extended Hours. Last Yield | 9:30:00 AM EDT. 1,860.11 %. +-18.42 ...",htmlSnippet:"<b>Tesla</b> Inc. TSLA:NASDAQ. Real Time Quote | Last NASDAQ LS, VOL From CTA | <br>\nUSD. Extended Hours. Last Yield | 9:30:00 AM EDT. 1,860.11 %. +-18.42&nbsp;...",cacheId:"RFrqVtHRbacJ",formattedUrl:"https://www.cnbc.com/quotes/?symbol=TSLA",htmlFormattedUrl:"https://www.cnbc.com/quotes/?symbol=TSLA",pagemap:{cse_thumbnail:[{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZNwGjuwj2R8mk-B_fNrrBEAZqzp1fStevzprMkycFjuNE2mZrtOIenaR",width:"310",height:"163"}],metatags:[{"og:image":"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif","apple-itunes-app":"app-id=398018310","twitter:card":"summary_large_image","og:site_name":"CNBC","twitter:url":"https://www.cnbc.com/quotes/","tp:preferredformats":"M3U,MPEG4","og:description":"TSLA:NASDAQ: Get Tesla Inc real-time stock quotes, news and financial information from CNBC.","twitter:creator":"@CNBC","parsely-metadata":'{"nodeid": "101","originalImage": "https://sc.cnbcfm.com/applications/cnbc.com/resources/img/editorial/2015/03/30/102546467-Most-Popular--Image-Placeholder-Large.jpg"}',"twitter:image":"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif","article:publisher":"https://www.facebook.com/CNBC","al:ios:app_store_id":"398018310",pagenodeid:"101","twitter:site":"@CNBC","tp:preferredruntimes":"universal","tp:initialize":"false",assettype:"franchise","og:type":"website","twitter:title":"Detailed Quote","al:ios:app_name":"CNBC Business News and Finance",author:"CNBC","og:title":"TSLA:498.32 55.64 (12.57%) - Stock Price, Quote and News - CNBC","article:author":"https://www.facebook.com/CNBC",referrer:"unsafe-url",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,shrink-to-fit=no","og:url":"https://www.cnbc.com/quotes/?symbol=TSLA"}],webpage:[{image:"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif",isfamilyfriendly:"true",keywords:"TSLA quote, Tesla Inc, STOCK markets, CNBC",inlanguage:"en-US",lastreviewed:"2017-11-13T14:04:56-0500",sourceorganization:"CNBC",description:"TSLA:NASDAQ: Get Tesla Inc real-time stock quotes, news and financial information from CNBC.",datecreated:"2016-08-23T11:54:02-0400",url:"https://www.cnbc.com/quotes/?symbol=TSLA",contentrating:"NR",datemodified:"2017-11-13T14:04:56-0500",maincontentofpage:"New 52 Week High Today + WATCHLIST Tesla Inc TSLA:NASDAQ Real Time Quote | Last NASDAQ LS, VOL From CTA | USD Extended Hours Last Yield | 9:30:00 AM EDT 1,860.11 % +-18.42 (+-0.98%) Change...",name:"TSLA: Tesla Inc - Stock Price, Quote and News - CNBC"}],cse_image:[{src:"https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif"}]}},{kind:"customsearch#result",title:"Nikola Tesla - Wikipedia",htmlTitle:"Nikola <b>Tesla</b> - Wikipedia",link:"https://en.wikipedia.org/wiki/Nikola_Tesla",displayLink:"en.wikipedia.org",snippet:"Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical \nengineer, and futurist who is best known for his contributions to the design of the\n ...",htmlSnippet:"Nikola <b>Tesla</b> was a Serbian-American inventor, electrical engineer, mechanical <br>\nengineer, and futurist who is best known for his contributions to the design of the<br>\n&nbsp;...",cacheId:"ffC4b7aiemYJ",formattedUrl:"https://en.wikipedia.org/wiki/Nikola_Tesla",htmlFormattedUrl:"https://en.wikipedia.org/wiki/Nikola_<b>Tesla</b>",pagemap:{hcard:[{note:"Projects Alternating current high-voltage, high-frequency power experiments",bday:"1856-07-10",fn:"Nikola Tesla",nickname:"\u041d\u0438\u043a\u043e\u043b\u0430 \u0422\u0435\u0441\u043b\u0430",label:"Nikola Tesla Museum, Belgrade, Serbia",category:"Austrian (1856\u20131891) American (1891\u20131943)"}],cse_thumbnail:[{src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWCFn1zDwTQIBRF9VDd9IfsyYKVtv2UGWDYFby88mPDxjm7AZ3P5uZLbk",width:"196",height:"257"}],metatags:[{referrer:"origin","og:image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/1200px-N.Tesla.JPG"}],cse_image:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/1200px-N.Tesla.JPG"}]}}]}),I=a(43),x=a.n(I),L=a(44),P=a.n(L),j=a(46),M=a.n(j),R=a(45),O=a.n(R),D=a(47),q=a.n(D),G=function(){var e=E(),t=Object(h.a)(e,2),a=t[0].term,s=(t[1],C);return console.log(s),i.a.createElement("div",{className:"searchPage"},i.a.createElement("div",{className:"searchPage__header"},i.a.createElement(r.b,{to:"/"},i.a.createElement("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"Brand Google"})),i.a.createElement("div",{className:"searchPage__headerBody"},i.a.createElement(k,{hideButtons:!0}),i.a.createElement("div",{className:"searchPage__options"},i.a.createElement("div",{className:"searchPage__optionsLeft"},i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(b.a,null),i.a.createElement(r.b,{to:"/all"},"Todo")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(x.a,null),i.a.createElement(r.b,{to:"/news"},"Noticias")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(P.a,null),i.a.createElement(r.b,{to:"/images"},"Im\xe1genes")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(O.a,null),i.a.createElement(r.b,{to:"/shopping"},"Shopping")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(M.a,null),i.a.createElement(r.b,{to:"/videos"},"V\xeddeos")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(q.a,null),i.a.createElement(r.b,{to:"/more"},"more"))),i.a.createElement("div",{className:"searchPage__optionsRight"},i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(r.b,{to:"/settings"},"Configuraci\xf3n")),i.a.createElement("div",{className:"searchPage__option"},i.a.createElement(r.b,{to:"/tools"},"Herramientas")))))),i.a.createElement("div",{className:"searchPage__results"},i.a.createElement("p",{className:"searchPage__resultCount"},"About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," results (",null===s||void 0===s?void 0:s.searchInformation.formattedSearchTime," seconds) for ",a),null===s||void 0===s?void 0:s.items.map((function(e){return i.a.createElement("div",{className:"searchPage__result"},i.a.createElement("a",{href:e.link},e.displayLink),i.a.createElement("a",{href:e.link,className:"searchPage__resultTitle"},i.a.createElement("h2",null,e.title)),i.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))}))))};var U=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(r.a,null,i.a.createElement(n.c,null,i.a.createElement(n.a,{path:"/search"},i.a.createElement(G,null)),i.a.createElement(n.a,{path:"/"},i.a.createElement(A,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,{initialState:{term:null},reducer:y},i.a.createElement(U,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.96cf08d9.chunk.js.map