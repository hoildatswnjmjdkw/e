const a6_0x1727=['send','tag','author','language','user','client','COLORS','relayDirectMessages','locale','Constants','document','getString','constructor','findById','It\x20allows\x20you\x20to\x20toggle\x20Bastion\x27s\x20Direct\x20Message\x20Relay.\x20If\x20enabled,\x20Bastion\x20will\x20relay\x20all\x20direct\x20messages\x20to\x20the\x20bot\x20owners.','exports','relayDMs','default','directMessagesRelayEnable','apply','GREEN','exec','Direct\x20Messages\x20Relay','guild','test'];(function(_0x2a1363,_0x17270e){const _0x5b01c5=function(_0x305d0f){while(--_0x305d0f){_0x2a1363['push'](_0x2a1363['shift']());}},_0x4f8053=function(){const _0x216ede={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bf11f,_0x3c9afd,_0x2dbdcc,_0x1c6916){_0x1c6916=_0x1c6916||{};let _0x7c8055=_0x3c9afd+'='+_0x2dbdcc,_0x43d592=0x0;for(let _0x238bd6=0x0,_0x1a919b=_0x5bf11f['length'];_0x238bd6<_0x1a919b;_0x238bd6++){const _0x5879dd=_0x5bf11f[_0x238bd6];_0x7c8055+=';\x20'+_0x5879dd;const _0x35dff1=_0x5bf11f[_0x5879dd];_0x5bf11f['push'](_0x35dff1),_0x1a919b=_0x5bf11f['length'],_0x35dff1!==!![]&&(_0x7c8055+='='+_0x35dff1);}_0x1c6916['cookie']=_0x7c8055;},'removeCookie':function(){return'dev';},'getCookie':function(_0x55aa66,_0x505c2d){_0x55aa66=_0x55aa66||function(_0x4c7e73){return _0x4c7e73;};const _0x8d03fe=_0x55aa66(new RegExp('(?:^|;\x20)'+_0x505c2d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1cb047=function(_0x269f1a,_0x4d0510){_0x269f1a(++_0x4d0510);};return _0x1cb047(_0x5b01c5,_0x17270e),_0x8d03fe?decodeURIComponent(_0x8d03fe[0x1]):undefined;}},_0x2317bb=function(){const _0x54ce8f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x54ce8f['test'](_0x216ede['removeCookie']['toString']());};_0x216ede['updateCookie']=_0x2317bb;let _0x3e0e8e='';const _0x3bd810=_0x216ede['updateCookie']();if(!_0x3bd810)_0x216ede['setCookie'](['*'],'counter',0x1);else _0x3bd810?_0x3e0e8e=_0x216ede['getCookie'](null,'counter'):_0x216ede['removeCookie']();};_0x4f8053();}(a6_0x1727,0x16d));const a6_0x5b01=function(_0x2a1363,_0x17270e){_0x2a1363=_0x2a1363-0x0;let _0x5b01c5=a6_0x1727[_0x2a1363];return _0x5b01c5;};const _0x56e5b3=a6_0x5b01,a6_0x216ede=function(){let _0x3e0e8e=!![];return function(_0x3bd810,_0x5bf11f){const _0x3c9afd=_0x3e0e8e?function(){const _0x5f49a9=a6_0x5b01;if(_0x5bf11f){const _0x2dbdcc=_0x5bf11f[_0x5f49a9('0x4')](_0x3bd810,arguments);return _0x5bf11f=null,_0x2dbdcc;}}:function(){};return _0x3e0e8e=![],_0x3c9afd;};}(),a6_0x305d0f=a6_0x216ede(this,function(){const _0x1c6916=function(){const _0x537fe9=a6_0x5b01,_0x7c8055=_0x1c6916[_0x537fe9('0x16')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x537fe9('0x16')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x7c8055[_0x537fe9('0x9')](a6_0x305d0f);};return _0x1c6916();});a6_0x305d0f();'use strict';const tesseract_1=require('@bastion/tesseract'),Config_1=require('../../models/Config');module[_0x56e5b3('0x0')]=class RelayDirectMessages extends tesseract_1['Command']{constructor(){const _0x3bb7a0=_0x56e5b3;super(_0x3bb7a0('0x11'),{'description':_0x3bb7a0('0x18'),'triggers':[_0x3bb7a0('0x1')],'arguments':{},'scope':_0x3bb7a0('0x8'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x3bb7a0('0x6')]=async _0x43d592=>{const _0x6f25d7=_0x3bb7a0,_0x238bd6=await Config_1[_0x6f25d7('0x2')][_0x6f25d7('0x17')](this[_0x6f25d7('0xf')][_0x6f25d7('0xe')]['id']);_0x238bd6['relayDirectMessages']=_0x238bd6[_0x6f25d7('0x11')]?undefined:!![],await _0x238bd6['save'](),await _0x43d592['channel'][_0x6f25d7('0xa')]({'embed':{'color':_0x238bd6['relayDirectMessages']?tesseract_1[_0x6f25d7('0x13')][_0x6f25d7('0x10')][_0x6f25d7('0x5')]:tesseract_1[_0x6f25d7('0x13')][_0x6f25d7('0x10')]['RED'],'title':_0x6f25d7('0x7'),'description':this[_0x6f25d7('0xf')][_0x6f25d7('0x12')][_0x6f25d7('0x15')](_0x43d592[_0x6f25d7('0x8')][_0x6f25d7('0x14')][_0x6f25d7('0xd')],'info',_0x238bd6[_0x6f25d7('0x11')]?_0x6f25d7('0x3'):'directMessagesRelayDisable',_0x43d592[_0x6f25d7('0xc')][_0x6f25d7('0xb')])}})['catch'](()=>{});};}};