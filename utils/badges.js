const a203_0x35ff=['./omnic','resolveBadges','MANAGE_CHANNELS','makeRequest','PLATINUM','getMembership','BASTION_DIAMOND_GUILD','permissions','apply','GOLD','GUILD_2Y_CLUB','BASTION_DIAMOND_USER','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getMemberBadgeValue','fetchBadges','GUILD_4Y_CLUB','GUILD_5Y_CLUB','BADGES','compile','return\x20/\x22\x20+\x20this\x20+\x20\x22/','GUILD_OWNER','GUILD_9Y_CLUB','GUILD_STAFF','has','constructor','now','__esModule','BASTION_PLATINUM_USER','COLORS','MANAGE_GUILD','length','GUILD_1Y_CLUB','/badges/user/','guild','joinedTimestamp','GUILD_NEW_MEMBER','BASTION_GOLD_USER','test','string','MANAGE_MESSAGES','keys','MANAGE_ROLES','MANAGE_EMOJIS','DIAMOND'];(function(_0x4fc360,_0x35fff5){const _0x5297af=function(_0x3f0a70){while(--_0x3f0a70){_0x4fc360['push'](_0x4fc360['shift']());}};const _0x2c3135=function(){const _0x5c4387={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3ada5c,_0x341803,_0x1172dd,_0x2c5cc2){_0x2c5cc2=_0x2c5cc2||{};let _0x532ad7=_0x341803+'='+_0x1172dd;let _0x29bd35=0x0;for(let _0x1020c5=0x0,_0x49b402=_0x3ada5c['length'];_0x1020c5<_0x49b402;_0x1020c5++){const _0x2e97b8=_0x3ada5c[_0x1020c5];_0x532ad7+=';\x20'+_0x2e97b8;const _0x12c544=_0x3ada5c[_0x2e97b8];_0x3ada5c['push'](_0x12c544);_0x49b402=_0x3ada5c['length'];if(_0x12c544!==!![]){_0x532ad7+='='+_0x12c544;}}_0x2c5cc2['cookie']=_0x532ad7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14fcd9,_0x57a03a){_0x14fcd9=_0x14fcd9||function(_0x32e0d4){return _0x32e0d4;};const _0x140669=_0x14fcd9(new RegExp('(?:^|;\x20)'+_0x57a03a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5cc700=function(_0x57fbc3,_0x3ff709){_0x57fbc3(++_0x3ff709);};_0x5cc700(_0x5297af,_0x35fff5);return _0x140669?decodeURIComponent(_0x140669[0x1]):undefined;}};const _0x1bde22=function(){const _0x53b279=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53b279['test'](_0x5c4387['removeCookie']['toString']());};_0x5c4387['updateCookie']=_0x1bde22;let _0x26960f='';const _0x18101a=_0x5c4387['updateCookie']();if(!_0x18101a){_0x5c4387['setCookie'](['*'],'counter',0x1);}else if(_0x18101a){_0x26960f=_0x5c4387['getCookie'](null,'counter');}else{_0x5c4387['removeCookie']();}};_0x2c3135();}(a203_0x35ff,0x1b3));const a203_0x5297=function(_0x4fc360,_0x35fff5){_0x4fc360=_0x4fc360-0x0;let _0x5297af=a203_0x35ff[_0x4fc360];return _0x5297af;};const a203_0x5c4387=function(){let _0x25e38c=!![];return function(_0x968e2,_0xb21eb9){const _0x3b102a=_0x25e38c?function(){if(_0xb21eb9){const _0x2ae446=_0xb21eb9[a203_0x5297('0xd')](_0x968e2,arguments);_0xb21eb9=null;return _0x2ae446;}}:function(){};_0x25e38c=![];return _0x3b102a;};}();const a203_0x3f0a70=a203_0x5c4387(this,function(){const _0x847154=function(){const _0xb33b5a=_0x847154[a203_0x5297('0x1d')](a203_0x5297('0x18'))()[a203_0x5297('0x17')](a203_0x5297('0x11'));return!_0xb33b5a[a203_0x5297('0x2a')](a203_0x3f0a70);};return _0x847154();});a203_0x3f0a70();'use strict';Object['defineProperty'](exports,a203_0x5297('0x1f'),{'value':!![]});exports[a203_0x5297('0xa')]=exports['has']=exports[a203_0x5297('0x12')]=exports[a203_0x5297('0x13')]=exports[a203_0x5297('0x6')]=void 0x0;const constants=require('./constants');const omnic=require(a203_0x5297('0x5'));const BADGES=require('../assets/badges.json');exports[a203_0x5297('0x6')]=_0xd14414=>{const _0x23fb57=[];for(let _0x38dc70=0x0;_0x38dc70<Object['keys'](BADGES)[a203_0x5297('0x23')];_0x38dc70++){const _0x39fab1=0x1<<_0x38dc70;if((_0xd14414&_0x39fab1)===_0x39fab1)_0x23fb57['push'](BADGES[Object[a203_0x5297('0x1')](BADGES)[_0x38dc70]]);}return _0x23fb57;};exports['fetchBadges']=(_0x56391b,_0x88db19)=>{return omnic[a203_0x5297('0x8')](a203_0x5297('0x25')+_0x56391b+(_0x88db19?'/'+_0x88db19:''));};exports['getMemberBadgeValue']=_0x539e4b=>{let _0x21b206=0x0;if(_0x539e4b[a203_0x5297('0x26')]['ownerID']===_0x539e4b['id'])_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0x19')];if(_0x539e4b['permissions']['has'](a203_0x5297('0x22'))||_0x539e4b['permissions'][a203_0x5297('0x1c')](a203_0x5297('0x2'))||_0x539e4b[a203_0x5297('0xc')][a203_0x5297('0x1c')](a203_0x5297('0x7'))||_0x539e4b['permissions'][a203_0x5297('0x1c')](a203_0x5297('0x0'))||_0x539e4b[a203_0x5297('0xc')][a203_0x5297('0x1c')]('MANAGE_WEBHOOKS')||_0x539e4b['permissions']['has']('MANAGE_NICKNAMES')||_0x539e4b['permissions'][a203_0x5297('0x1c')](a203_0x5297('0x3')))_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0x1b')];if(Date['now']()-_0x539e4b[a203_0x5297('0x27')]>=0x9*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0x1a')];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]>=0x8*0x758f0dfc0)_0x21b206|=constants['BADGES']['GUILD_8Y_CLUB'];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]>=0x7*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')]['GUILD_7Y_CLUB'];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]>=0x6*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')]['GUILD_6Y_CLUB'];else if(Date['now']()-_0x539e4b[a203_0x5297('0x27')]>=0x5*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0x15')];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b['joinedTimestamp']>=0x4*0x758f0dfc0)_0x21b206|=constants['BADGES'][a203_0x5297('0x14')];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]>=0x3*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')]['GUILD_3Y_CLUB'];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b['joinedTimestamp']>=0x2*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0xf')];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]>=0x1*0x758f0dfc0)_0x21b206|=constants[a203_0x5297('0x16')][a203_0x5297('0x24')];else if(Date[a203_0x5297('0x1e')]()-_0x539e4b[a203_0x5297('0x27')]<=0xd84b1800)_0x21b206|=constants['BADGES'][a203_0x5297('0x28')];return _0x21b206;};exports[a203_0x5297('0x1c')]=(_0x1d7b8c,_0x38dea6)=>{if(typeof _0x38dea6===a203_0x5297('0x2b')){return(_0x1d7b8c&constants[a203_0x5297('0x16')][_0x38dea6])===constants[a203_0x5297('0x16')][_0x38dea6];}return(_0x1d7b8c&_0x38dea6)===_0x38dea6;};exports[a203_0x5297('0xa')]=_0x135a2b=>{if(exports[a203_0x5297('0x1c')](_0x135a2b,a203_0x5297('0x10'))){return{...BADGES['BASTION_DIAMOND_USER'],'color':constants[a203_0x5297('0x21')]['DIAMOND']};}if(exports['has'](_0x135a2b,'BASTION_DIAMOND_GUILD')){return{...BADGES[a203_0x5297('0xb')],'color':constants[a203_0x5297('0x21')][a203_0x5297('0x4')]};}if(exports[a203_0x5297('0x1c')](_0x135a2b,a203_0x5297('0x20'))){return{...BADGES[a203_0x5297('0x20')],'color':constants[a203_0x5297('0x21')]['PLATINUM']};}if(exports['has'](_0x135a2b,a203_0x5297('0x20'))){return{...BADGES[a203_0x5297('0x20')],'color':constants[a203_0x5297('0x21')][a203_0x5297('0x9')]};}if(exports['has'](_0x135a2b,a203_0x5297('0x29'))){return{...BADGES[a203_0x5297('0x29')],'color':constants['COLORS'][a203_0x5297('0xe')]};}if(exports[a203_0x5297('0x1c')](_0x135a2b,'BASTION_GOLD_USER')){return{...BADGES[a203_0x5297('0x29')],'color':constants['COLORS'][a203_0x5297('0xe')]};}};