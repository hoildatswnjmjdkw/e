const a54_0xdddc=['\x20minutes','score','Game\x20Server\x20Stats','It\x20allows\x20you\x20to\x20fetch\x20information\x20from\x20nearly\x20any\x20game\x20server\x20that\x20makes\x20its\x20status\x20publicly\x20available.','port','filter','\x09PING\x20','guild','channel','toFixed','players','test','time','gameServer','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','Command','COLORS','team','```','ping','Players','sort','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','IRIS','makeRequest','INVALID_COMMAND_SYNTAX','/server/','@bastion/tesseract','/games/','```\x0aSCORE\x20','bots','connect','Constants','join','\x20/\x20','concat','exports','apply','\x20•\x20Password\x20Protected','gameServer\x20GAME\x20--host\x20HOSTNAME\x20--port\x20PORT','BASTION_ERROR_TYPE','send','map','json','DiscordError','host','length','slice','Connect','constructor','Map'];(function(_0xef431b,_0xdddcaa){const _0x35fe83=function(_0x3cc197){while(--_0x3cc197){_0xef431b['push'](_0xef431b['shift']());}},_0x2e2cf4=function(){const _0x385c58={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5318e3,_0x13c930,_0x24dcd7,_0x527b2e){_0x527b2e=_0x527b2e||{};let _0x2ea413=_0x13c930+'='+_0x24dcd7,_0x487fde=0x0;for(let _0xa12e50=0x0,_0x11b290=_0x5318e3['length'];_0xa12e50<_0x11b290;_0xa12e50++){const _0x2d7900=_0x5318e3[_0xa12e50];_0x2ea413+=';\x20'+_0x2d7900;const _0x49aff7=_0x5318e3[_0x2d7900];_0x5318e3['push'](_0x49aff7),_0x11b290=_0x5318e3['length'],_0x49aff7!==!![]&&(_0x2ea413+='='+_0x49aff7);}_0x527b2e['cookie']=_0x2ea413;},'removeCookie':function(){return'dev';},'getCookie':function(_0x176b9a,_0x308b66){_0x176b9a=_0x176b9a||function(_0x48888b){return _0x48888b;};const _0xa5f31d=_0x176b9a(new RegExp('(?:^|;\x20)'+_0x308b66['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4db4e9=function(_0x156cd4,_0x1b3baa){_0x156cd4(++_0x1b3baa);};return _0x4db4e9(_0x35fe83,_0xdddcaa),_0xa5f31d?decodeURIComponent(_0xa5f31d[0x1]):undefined;}},_0xc8fdf1=function(){const _0x534505=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x534505['test'](_0x385c58['removeCookie']['toString']());};_0x385c58['updateCookie']=_0xc8fdf1;let _0x58d430='';const _0x363fb6=_0x385c58['updateCookie']();if(!_0x363fb6)_0x385c58['setCookie'](['*'],'counter',0x1);else _0x363fb6?_0x58d430=_0x385c58['getCookie'](null,'counter'):_0x385c58['removeCookie']();};_0x2e2cf4();}(a54_0xdddc,0x114));const a54_0x35fe=function(_0xef431b,_0xdddcaa){_0xef431b=_0xef431b-0x0;let _0x35fe83=a54_0xdddc[_0xef431b];return _0x35fe83;};const _0x4a4625=a54_0x35fe,a54_0x385c58=function(){let _0x58d430=!![];return function(_0x363fb6,_0x5318e3){const _0x13c930=_0x58d430?function(){const _0x2fbcf6=a54_0x35fe;if(_0x5318e3){const _0x24dcd7=_0x5318e3[_0x2fbcf6('0x1c')](_0x363fb6,arguments);return _0x5318e3=null,_0x24dcd7;}}:function(){};return _0x58d430=![],_0x13c930;};}(),a54_0x3cc197=a54_0x385c58(this,function(){const _0x527b2e=function(){const _0x412244=a54_0x35fe,_0x2ea413=_0x527b2e[_0x412244('0x28')](_0x412244('0xc'))()[_0x412244('0x28')](_0x412244('0x3'));return!_0x2ea413[_0x412244('0x0')](a54_0x3cc197);};return _0x527b2e();});a54_0x3cc197();'use strict';const tesseract_1=require(_0x4a4625('0x12')),errors=require('../../utils/errors'),omnic=require('../../utils/omnic');module[_0x4a4625('0x1b')]=class GameServerCommand extends tesseract_1[_0x4a4625('0x5')]{constructor(){const _0x30f796=_0x4a4625;super(_0x30f796('0x2'),{'description':_0x30f796('0x2d'),'triggers':[],'arguments':{'alias':{'host':['h'],'port':['p']},'string':[_0x30f796('0x24'),_0x30f796('0x2e')]},'scope':_0x30f796('0x31'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x30f796('0x1e')]}),this[_0x30f796('0xd')]=async(_0x487fde,_0xa12e50)=>{const _0x102516=_0x30f796;if(!_0xa12e50['_'][_0x102516('0x25')])throw new errors[(_0x102516('0x23'))](errors[_0x102516('0x1f')][_0x102516('0x10')],this[_0x102516('0x4')]);const _0x11b290=_0xa12e50['_'][_0x102516('0x18')](''),_0x2d7900=await omnic[_0x102516('0xf')](_0x102516('0x13')+_0x11b290+_0x102516('0x11')+_0xa12e50[_0x102516('0x24')]+'/'+_0xa12e50[_0x102516('0x2e')]),_0x49aff7=await _0x2d7900[_0x102516('0x22')]();await _0x487fde[_0x102516('0x32')][_0x102516('0x20')]({'embed':{'color':tesseract_1[_0x102516('0x17')][_0x102516('0x6')][_0x102516('0xe')],'author':{'name':_0x102516('0x2c')},'title':_0x49aff7[_0x102516('0x4')],'description':'','fields':[{'name':_0x102516('0x29'),'value':_0x49aff7[_0x102516('0x21')],'inline':!![]},{'name':_0x102516('0xa'),'value':(_0x49aff7[_0x102516('0x34')]?_0x49aff7[_0x102516('0x34')][_0x102516('0x25')]:0x0)+(_0x49aff7[_0x102516('0x15')]?_0x49aff7[_0x102516('0x15')][_0x102516('0x25')]:0x0)+_0x102516('0x19')+_0x49aff7['maxplayers'],'inline':!![]},{'name':_0x102516('0x27'),'value':'`'+_0x49aff7[_0x102516('0x16')]+'`','inline':!![]}][_0x102516('0x1a')](_0x49aff7[_0x102516('0x34')]?_0x49aff7[_0x102516('0x34')][_0x102516('0x2f')](_0x176b9a=>_0x176b9a[_0x102516('0x4')])[_0x102516('0xb')]((_0x308b66,_0xa5f31d)=>_0xa5f31d[_0x102516('0x1')]-_0x308b66[_0x102516('0x1')])[_0x102516('0xb')]((_0x4db4e9,_0x48888b)=>_0x48888b[_0x102516('0x2b')]-_0x4db4e9[_0x102516('0x2b')])[_0x102516('0x21')](_0x156cd4=>({'name':(_0x156cd4[_0x102516('0x7')]?'['+_0x156cd4[_0x102516('0x7')]+']':'')+_0x156cd4[_0x102516('0x4')],'value':_0x102516('0x14')+(_0x156cd4[_0x102516('0x2b')]||0x0)+(_0x156cd4[_0x102516('0x9')]?_0x102516('0x30')+_0x156cd4[_0x102516('0x9')]+'ms':'')+(_0x156cd4['time']?'\x09'+(_0x156cd4[_0x102516('0x1')]/0x3c)[_0x102516('0x33')](0x2)+_0x102516('0x2a'):'')+_0x102516('0x8')}))[_0x102516('0x26')](0x0,0xa):[]),'footer':{'text':_0x49aff7['ping']+'ms'+(_0x49aff7['password']?_0x102516('0x1d'):'')+'\x20•\x20Powered\x20by\x20Omnic'}}});};}};