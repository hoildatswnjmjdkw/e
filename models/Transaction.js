const a210_0x532a=['Transaction','default','test','mongoose','__esModule','constructor','Guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','model','return\x20/\x22\x20+\x20this\x20+\x20\x22/','defineProperty'];(function(_0x5f3728,_0x532a99){const _0x42d8e4=function(_0x3f35bf){while(--_0x3f35bf){_0x5f3728['push'](_0x5f3728['shift']());}},_0x23d42a=function(){const _0x1531b0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xdd5c71,_0x1bc978,_0x47c00d,_0x3cc5c9){_0x3cc5c9=_0x3cc5c9||{};let _0x399a96=_0x1bc978+'='+_0x47c00d,_0x4b69bc=0x0;for(let _0x57315b=0x0,_0x190f72=_0xdd5c71['length'];_0x57315b<_0x190f72;_0x57315b++){const _0x37fdfb=_0xdd5c71[_0x57315b];_0x399a96+=';\x20'+_0x37fdfb;const _0x444f26=_0xdd5c71[_0x37fdfb];_0xdd5c71['push'](_0x444f26),_0x190f72=_0xdd5c71['length'],_0x444f26!==!![]&&(_0x399a96+='='+_0x444f26);}_0x3cc5c9['cookie']=_0x399a96;},'removeCookie':function(){return'dev';},'getCookie':function(_0x554ece,_0x1d9ea8){_0x554ece=_0x554ece||function(_0x55d179){return _0x55d179;};const _0x3819ea=_0x554ece(new RegExp('(?:^|;\x20)'+_0x1d9ea8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x38d31f=function(_0x2528fe,_0x537c0b){_0x2528fe(++_0x537c0b);};return _0x38d31f(_0x42d8e4,_0x532a99),_0x3819ea?decodeURIComponent(_0x3819ea[0x1]):undefined;}},_0x105ed2=function(){const _0x450469=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x450469['test'](_0x1531b0['removeCookie']['toString']());};_0x1531b0['updateCookie']=_0x105ed2;let _0x44f9bd='';const _0x8e083=_0x1531b0['updateCookie']();if(!_0x8e083)_0x1531b0['setCookie'](['*'],'counter',0x1);else _0x8e083?_0x44f9bd=_0x1531b0['getCookie'](null,'counter'):_0x1531b0['removeCookie']();};_0x23d42a();}(a210_0x532a,0x1c4));const a210_0x42d8=function(_0x5f3728,_0x532a99){_0x5f3728=_0x5f3728-0x0;let _0x42d8e4=a210_0x532a[_0x5f3728];return _0x42d8e4;};const _0x56400a=a210_0x42d8,a210_0x1531b0=function(){let _0x44f9bd=!![];return function(_0x8e083,_0xdd5c71){const _0x1bc978=_0x44f9bd?function(){if(_0xdd5c71){const _0x47c00d=_0xdd5c71['apply'](_0x8e083,arguments);return _0xdd5c71=null,_0x47c00d;}}:function(){};return _0x44f9bd=![],_0x1bc978;};}(),a210_0x3f35bf=a210_0x1531b0(this,function(){const _0x3cc5c9=function(){const _0x2ce45c=a210_0x42d8,_0x399a96=_0x3cc5c9['constructor'](_0x2ce45c('0x8'))()[_0x2ce45c('0x4')](_0x2ce45c('0x6'));return!_0x399a96[_0x2ce45c('0x1')](a210_0x3f35bf);};return _0x3cc5c9();});a210_0x3f35bf();'use strict';Object[_0x56400a('0x9')](exports,_0x56400a('0x3'),{'value':!![]});const mongoose=require(_0x56400a('0x2')),transactionSchema=new mongoose['Schema']({'guild':{'type':String,'required':!![],'ref':_0x56400a('0x5')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[_0x56400a('0x0')]=mongoose[_0x56400a('0x7')](_0x56400a('0xa'),transactionSchema);