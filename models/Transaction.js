const a188_0x584e=['Guild','mongoose','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','Transaction','return\x20/\x22\x20+\x20this\x20+\x20\x22/','model','defineProperty','test','default','Schema','__esModule'];(function(_0x115251,_0x584eca){const _0x42c755=function(_0x356fd0){while(--_0x356fd0){_0x115251['push'](_0x115251['shift']());}};const _0x1f364d=function(){const _0x4fc143={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1dfc77,_0x491449,_0x356e6f,_0x9e8ef9){_0x9e8ef9=_0x9e8ef9||{};let _0x42dabc=_0x491449+'='+_0x356e6f;let _0x18293a=0x0;for(let _0x414db9=0x0,_0x542d93=_0x1dfc77['length'];_0x414db9<_0x542d93;_0x414db9++){const _0x132e27=_0x1dfc77[_0x414db9];_0x42dabc+=';\x20'+_0x132e27;const _0x33a56c=_0x1dfc77[_0x132e27];_0x1dfc77['push'](_0x33a56c);_0x542d93=_0x1dfc77['length'];if(_0x33a56c!==!![]){_0x42dabc+='='+_0x33a56c;}}_0x9e8ef9['cookie']=_0x42dabc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35f31f,_0x188b1d){_0x35f31f=_0x35f31f||function(_0xa85e1c){return _0xa85e1c;};const _0x33bf8b=_0x35f31f(new RegExp('(?:^|;\x20)'+_0x188b1d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x50b0f9=function(_0x434deb,_0x1cb590){_0x434deb(++_0x1cb590);};_0x50b0f9(_0x42c755,_0x584eca);return _0x33bf8b?decodeURIComponent(_0x33bf8b[0x1]):undefined;}};const _0x12d832=function(){const _0x46fa0e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x46fa0e['test'](_0x4fc143['removeCookie']['toString']());};_0x4fc143['updateCookie']=_0x12d832;let _0x35a103='';const _0x15ad38=_0x4fc143['updateCookie']();if(!_0x15ad38){_0x4fc143['setCookie'](['*'],'counter',0x1);}else if(_0x15ad38){_0x35a103=_0x4fc143['getCookie'](null,'counter');}else{_0x4fc143['removeCookie']();}};_0x1f364d();}(a188_0x584e,0x68));const a188_0x42c7=function(_0x115251,_0x584eca){_0x115251=_0x115251-0x0;let _0x42c755=a188_0x584e[_0x115251];return _0x42c755;};const a188_0x4fc143=function(){let _0x33bf8b=!![];return function(_0x50b0f9,_0xa85e1c){const _0x434deb=_0x33bf8b?function(){if(_0xa85e1c){const _0x1cb590=_0xa85e1c[a188_0x42c7('0x2')](_0x50b0f9,arguments);_0xa85e1c=null;return _0x1cb590;}}:function(){};_0x33bf8b=![];return _0x434deb;};}();const a188_0x356fd0=a188_0x4fc143(this,function(){const _0x46fa0e=function(){const _0x39d9d3=_0x46fa0e[a188_0x42c7('0x4')](a188_0x42c7('0x6'))()['compile'](a188_0x42c7('0x3'));return!_0x39d9d3[a188_0x42c7('0x9')](a188_0x356fd0);};return _0x46fa0e();});a188_0x356fd0();'use strict';Object[a188_0x42c7('0x8')](exports,a188_0x42c7('0xc'),{'value':!![]});const mongoose=require(a188_0x42c7('0x1'));const transactionSchema=new mongoose[(a188_0x42c7('0xb'))]({'guild':{'type':String,'required':!![],'ref':a188_0x42c7('0x0')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[a188_0x42c7('0xa')]=mongoose[a188_0x42c7('0x7')](a188_0x42c7('0x5'),transactionSchema);