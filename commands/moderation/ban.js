const a90_0x2068=['COLORS','\x20of\x20','constructor','Constants','cache','join','../../utils/pagination','INVALID_COMMAND_SYNTAX','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name','exports','ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON','document','paginate','DiscordError','unban','Page\x20','ban','../../utils/errors','tag','guildBanAdd','canManage','ban\x20--list','memberSoftBan','values','user','apply','locale','unauthorized','channel','BASTION_ERROR_TYPE','resolveUser','items','\x20/\x20','@bastion/tesseract','catch','members','resolver','ban\x20--list\x20--page\x203','send','get','page','Banned\x20Users','Command','author','soft','test','guild','exec','BAN_MEMBERS','client','ban\x20--user\x20USER_ID\x20--\x20REASON','Reason','has','ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON','reason','getString','member','It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','list','language','errors','days','ORANGE','info'];(function(_0x594f5d,_0x20688f){const _0x2175b4=function(_0x15226f){while(--_0x15226f){_0x594f5d['push'](_0x594f5d['shift']());}},_0x1faf77=function(){const _0x223eb6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1095d4,_0x374cbe,_0x5b2804,_0x5e9fdf){_0x5e9fdf=_0x5e9fdf||{};let _0x3a3728=_0x374cbe+'='+_0x5b2804,_0x1efba6=0x0;for(let _0x28d031=0x0,_0x19ed30=_0x1095d4['length'];_0x28d031<_0x19ed30;_0x28d031++){const _0x5968cf=_0x1095d4[_0x28d031];_0x3a3728+=';\x20'+_0x5968cf;const _0x165d1d=_0x1095d4[_0x5968cf];_0x1095d4['push'](_0x165d1d),_0x19ed30=_0x1095d4['length'],_0x165d1d!==!![]&&(_0x3a3728+='='+_0x165d1d);}_0x5e9fdf['cookie']=_0x3a3728;},'removeCookie':function(){return'dev';},'getCookie':function(_0x328a2d,_0x5aa48a){_0x328a2d=_0x328a2d||function(_0xd6888b){return _0xd6888b;};const _0x27946e=_0x328a2d(new RegExp('(?:^|;\x20)'+_0x5aa48a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x464068=function(_0x47a862,_0x3c3323){_0x47a862(++_0x3c3323);};return _0x464068(_0x2175b4,_0x20688f),_0x27946e?decodeURIComponent(_0x27946e[0x1]):undefined;}},_0x599a15=function(){const _0x48ce4f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x48ce4f['test'](_0x223eb6['removeCookie']['toString']());};_0x223eb6['updateCookie']=_0x599a15;let _0x13877a='';const _0x4551a5=_0x223eb6['updateCookie']();if(!_0x4551a5)_0x223eb6['setCookie'](['*'],'counter',0x1);else _0x4551a5?_0x13877a=_0x223eb6['getCookie'](null,'counter'):_0x223eb6['removeCookie']();};_0x1faf77();}(a90_0x2068,0x174));const a90_0x2175=function(_0x594f5d,_0x20688f){_0x594f5d=_0x594f5d-0x0;let _0x2175b4=a90_0x2068[_0x594f5d];return _0x2175b4;};const _0x24fe5c=a90_0x2175,a90_0x223eb6=function(){let _0x13877a=!![];return function(_0x4551a5,_0x1095d4){const _0x374cbe=_0x13877a?function(){const _0x4f1f27=a90_0x2175;if(_0x1095d4){const _0x5b2804=_0x1095d4[_0x4f1f27('0x2c')](_0x4551a5,arguments);return _0x1095d4=null,_0x5b2804;}}:function(){};return _0x13877a=![],_0x374cbe;};}(),a90_0x15226f=a90_0x223eb6(this,function(){const _0x5e9fdf=function(){const _0x183551=a90_0x2175,_0x3a3728=_0x5e9fdf[_0x183551('0x14')](_0x183551('0x1a'))()[_0x183551('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a3728[_0x183551('0x40')](a90_0x15226f);};return _0x5e9fdf();});a90_0x15226f();'use strict';const tesseract_1=require(_0x24fe5c('0x34')),errors=require(_0x24fe5c('0x24')),pagination=require(_0x24fe5c('0x18'));module[_0x24fe5c('0x1c')]=class Ban extends tesseract_1[_0x24fe5c('0x3d')]{constructor(){const _0x576ba5=_0x24fe5c;super('ban',{'description':_0x576ba5('0xb'),'triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[_0x576ba5('0xc'),_0x576ba5('0x3f')],'default':{'days':0x0,'page':0x1},'number':['days',_0x576ba5('0x3b')],'string':[_0x576ba5('0x2b')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x576ba5('0x2')],'userPermissions':[_0x576ba5('0x2')],'syntax':[_0x576ba5('0x28'),_0x576ba5('0x38'),_0x576ba5('0x4'),_0x576ba5('0x7'),_0x576ba5('0x1d')]}),this[_0x576ba5('0x1')]=async(_0x1efba6,_0x28d031)=>{const _0x302cc1=_0x576ba5;if(_0x28d031['list']){const _0x165d1d=await _0x1efba6[_0x302cc1('0x0')]['fetchBans'](),_0x328a2d=pagination[_0x302cc1('0x1f')]([..._0x165d1d[_0x302cc1('0x2a')]()],_0x28d031[_0x302cc1('0x3b')]);return await _0x1efba6[_0x302cc1('0x2f')][_0x302cc1('0x39')]({'embed':{'color':tesseract_1['Constants'][_0x302cc1('0x12')][_0x302cc1('0x10')],'title':_0x302cc1('0x3c'),'description':'Users\x20banned\x20in\x20'+_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x1b')],'fields':_0x328a2d[_0x302cc1('0x32')]['map'](_0x5aa48a=>({'name':_0x5aa48a[_0x302cc1('0x2b')]['tag']+_0x302cc1('0x33')+_0x5aa48a[_0x302cc1('0x2b')]['id'],'value':_0x5aa48a[_0x302cc1('0x8')]||'-'})),'footer':{'text':_0x302cc1('0x22')+_0x328a2d[_0x302cc1('0x3b')]+_0x302cc1('0x13')+_0x328a2d['pages']}}});}const _0x19ed30=this['client'][_0x302cc1('0x37')][_0x302cc1('0x31')](_0x28d031[_0x302cc1('0x2b')]);if(!_0x19ed30)throw new errors[(_0x302cc1('0x20'))](errors[_0x302cc1('0x30')][_0x302cc1('0x19')],this[_0x302cc1('0x1b')]);if(_0x1efba6[_0x302cc1('0x3e')]['id']!==_0x1efba6[_0x302cc1('0x0')]['ownerID']&&_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x36')][_0x302cc1('0x16')][_0x302cc1('0x6')](_0x19ed30['id'])&&!_0x1efba6[_0x302cc1('0xa')][_0x302cc1('0x27')](_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x36')]['cache'][_0x302cc1('0x3a')](_0x19ed30['id'])))return await _0x1efba6[_0x302cc1('0x2f')][_0x302cc1('0x39')]({'embed':{'color':tesseract_1[_0x302cc1('0x15')][_0x302cc1('0x12')]['RED'],'title':this['client'][_0x302cc1('0x2d')]['getString'](_0x1efba6[_0x302cc1('0x0')]['document'][_0x302cc1('0xd')],'errors',_0x302cc1('0x2e')),'description':this[_0x302cc1('0x3')][_0x302cc1('0x2d')][_0x302cc1('0x9')](_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x1e')][_0x302cc1('0xd')],_0x302cc1('0xe'),'rolePosition',_0x1efba6[_0x302cc1('0x3e')][_0x302cc1('0x25')],_0x19ed30[_0x302cc1('0x25')])}})[_0x302cc1('0x35')](()=>{});const _0x5968cf=_0x28d031['_'][_0x302cc1('0x17')]('\x20')||'-';await _0x1efba6['guild'][_0x302cc1('0x36')][_0x302cc1('0x23')](_0x19ed30,{'days':_0x28d031[_0x302cc1('0xf')],'reason':_0x5968cf}),_0x28d031[_0x302cc1('0x3f')]&&await _0x1efba6['guild'][_0x302cc1('0x36')][_0x302cc1('0x21')](_0x19ed30,_0x5968cf),await _0x1efba6[_0x302cc1('0x2f')]['send']({'embed':{'color':tesseract_1[_0x302cc1('0x15')]['COLORS']['DARK_BUT_NOT_BLACK'],'description':_0x28d031[_0x302cc1('0x3f')]?this[_0x302cc1('0x3')][_0x302cc1('0x2d')][_0x302cc1('0x9')](_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x1e')][_0x302cc1('0xd')],_0x302cc1('0x11'),_0x302cc1('0x29'),_0x1efba6[_0x302cc1('0x3e')][_0x302cc1('0x25')],_0x19ed30[_0x302cc1('0x25')]):this[_0x302cc1('0x3')][_0x302cc1('0x2d')][_0x302cc1('0x9')](_0x1efba6[_0x302cc1('0x0')][_0x302cc1('0x1e')][_0x302cc1('0xd')],_0x302cc1('0x11'),_0x302cc1('0x26'),_0x1efba6[_0x302cc1('0x3e')][_0x302cc1('0x25')],_0x19ed30[_0x302cc1('0x25')]),'fields':[{'name':_0x302cc1('0x5'),'value':_0x5968cf}],'footer':{'text':_0x19ed30['id']}}})[_0x302cc1('0x35')](()=>{});};}};