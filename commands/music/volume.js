const a114_0x35fc=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channel','client','music','send','volume\x2042','catch','It\x20allows\x20you\x20to\x20set\x20the\x20volume\x20of\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','DiscordError','BASTION_ERROR_TYPE','voice','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','parseInt','queue','apply','COLORS','INVALID_COMMAND_SYNTAX','getString','name','PINK','@bastion/tesseract','musicDisabledPublic','guild','volume','info','language','tag','locale','\x20•\x20','constructor','dispatcher','connection','enabled','length','isPublicBastion','isInteger','paused','Command','RED','Volume','author','document','../../utils/constants','../../utils/errors','playing'];(function(_0x3da9e8,_0x35fcb5){const _0x4af54c=function(_0x331ab9){while(--_0x331ab9){_0x3da9e8['push'](_0x3da9e8['shift']());}},_0x5a8587=function(){const _0x545981={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2649e5,_0x519d75,_0x45dbed,_0x37c82f){_0x37c82f=_0x37c82f||{};let _0x4769a8=_0x519d75+'='+_0x45dbed,_0x1941ca=0x0;for(let _0x4e0079=0x0,_0x1d9c81=_0x2649e5['length'];_0x4e0079<_0x1d9c81;_0x4e0079++){const _0x1bff20=_0x2649e5[_0x4e0079];_0x4769a8+=';\x20'+_0x1bff20;const _0x1b45dd=_0x2649e5[_0x1bff20];_0x2649e5['push'](_0x1b45dd),_0x1d9c81=_0x2649e5['length'],_0x1b45dd!==!![]&&(_0x4769a8+='='+_0x1b45dd);}_0x37c82f['cookie']=_0x4769a8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2a100c,_0x46ae10){_0x2a100c=_0x2a100c||function(_0x2da236){return _0x2da236;};const _0x3eafe1=_0x2a100c(new RegExp('(?:^|;\x20)'+_0x46ae10['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2bbe37=function(_0xf7e76a,_0x376f78){_0xf7e76a(++_0x376f78);};return _0x2bbe37(_0x4af54c,_0x35fcb5),_0x3eafe1?decodeURIComponent(_0x3eafe1[0x1]):undefined;}},_0x325ae3=function(){const _0x16d39d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x16d39d['test'](_0x545981['removeCookie']['toString']());};_0x545981['updateCookie']=_0x325ae3;let _0xbcb330='';const _0x16b224=_0x545981['updateCookie']();if(!_0x16b224)_0x545981['setCookie'](['*'],'counter',0x1);else _0x16b224?_0xbcb330=_0x545981['getCookie'](null,'counter'):_0x545981['removeCookie']();};_0x5a8587();}(a114_0x35fc,0x1be));const a114_0x4af5=function(_0x3da9e8,_0x35fcb5){_0x3da9e8=_0x3da9e8-0x0;let _0x4af54c=a114_0x35fc[_0x3da9e8];return _0x4af54c;};const _0x545960=a114_0x4af5,a114_0x545981=function(){let _0xbcb330=!![];return function(_0x16b224,_0x2649e5){const _0x519d75=_0xbcb330?function(){const _0x42d15d=a114_0x4af5;if(_0x2649e5){const _0x45dbed=_0x2649e5[_0x42d15d('0x1d')](_0x16b224,arguments);return _0x2649e5=null,_0x45dbed;}}:function(){};return _0xbcb330=![],_0x519d75;};}(),a114_0x331ab9=a114_0x545981(this,function(){const _0x37c82f=function(){const _0x17526d=a114_0x4af5,_0x4769a8=_0x37c82f[_0x17526d('0x2c')](_0x17526d('0x1a'))()[_0x17526d('0x2c')](_0x17526d('0xe'));return!_0x4769a8['test'](a114_0x331ab9);};return _0x37c82f();});a114_0x331ab9();'use strict';const tesseract_1=require(_0x545960('0x23')),constants=require(_0x545960('0xb')),errors=require(_0x545960('0xc'));module[_0x545960('0x19')]=class Volume extends tesseract_1[_0x545960('0x6')]{constructor(){const _0x100fdb=_0x545960;super(_0x100fdb('0x26'),{'description':_0x100fdb('0x15'),'triggers':[],'arguments':{},'scope':_0x100fdb('0x25'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x100fdb('0x13')]}),this['exec']=async(_0x1941ca,_0x4e0079)=>{const _0x1f1882=_0x100fdb;let _0x1d9c81=Number[_0x1f1882('0x1b')](_0x4e0079['_'][0x0]);if(!_0x4e0079['_'][_0x1f1882('0x2')]||!Number[_0x1f1882('0x4')](_0x1d9c81))throw new errors[(_0x1f1882('0x16'))](errors[_0x1f1882('0x17')][_0x1f1882('0x1f')],this[_0x1f1882('0x21')]);const _0x1bff20=_0x1941ca['guild'];if(!_0x1bff20[_0x1f1882('0xa')]['music']||!_0x1bff20[_0x1f1882('0xa')][_0x1f1882('0x11')][_0x1f1882('0x1')])return await _0x1941ca[_0x1f1882('0xf')]['send']({'embed':{'color':tesseract_1['Constants'][_0x1f1882('0x1e')][_0x1f1882('0x7')],'description':this[_0x1f1882('0x10')][_0x1f1882('0x2a')][_0x1f1882('0x20')](_0x1941ca[_0x1f1882('0x25')][_0x1f1882('0xa')][_0x1f1882('0x28')],'errors',constants[_0x1f1882('0x3')](_0x1941ca['author'])?_0x1f1882('0x24'):'musicDisabled')}})['catch'](()=>{});if(!_0x1941ca['member']['isMusicMaster']())return;if(_0x1bff20[_0x1f1882('0x11')][_0x1f1882('0xd')]&&_0x1bff20[_0x1f1882('0x18')]&&_0x1bff20['voice'][_0x1f1882('0x0')]['dispatcher']&&!_0x1bff20[_0x1f1882('0x18')][_0x1f1882('0x0')][_0x1f1882('0x2d')][_0x1f1882('0x5')]){_0x1d9c81=_0x1d9c81<0x1?0x1:_0x1d9c81>0xc8?0xc8:_0x1d9c81,_0x1bff20['voice'][_0x1f1882('0x0')]['dispatcher']['setVolume'](_0x1d9c81/0x64);const _0x1b45dd=_0x1bff20[_0x1f1882('0x11')][_0x1f1882('0x1c')][0x0];_0x1bff20[_0x1f1882('0x11')]['textChannel'][_0x1f1882('0x12')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x1f1882('0x22')],'title':_0x1f1882('0x8'),'description':this[_0x1f1882('0x10')][_0x1f1882('0x2a')][_0x1f1882('0x20')](_0x1941ca[_0x1f1882('0x25')][_0x1f1882('0xa')]['language'],_0x1f1882('0x27'),'setVolume',_0x1941ca[_0x1f1882('0x9')][_0x1f1882('0x29')],_0x1d9c81),'footer':{'text':_0x1b45dd['track']+_0x1f1882('0x2b')+_0x1bff20[_0x1f1882('0x18')][_0x1f1882('0x0')][_0x1f1882('0xf')][_0x1f1882('0x21')]}}})[_0x1f1882('0x14')](()=>{});}};}};