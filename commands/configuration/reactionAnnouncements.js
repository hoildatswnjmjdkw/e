const a29_0x5d12=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exec','reactionAnnouncementsEnableWithoutAnnouncementChannel','tag','compile','Command','reactionAnnouncementsDisable','getString','Constants','client','send','RED','return\x20/\x22\x20+\x20this\x20+\x20\x22/','announcementsChannelId','MANAGE_GUILD','catch','COLORS','apply','test','info','locale','guild','exports','document','author','reactionAnnouncements','GREEN','channel','constructor','language'];(function(_0x351b65,_0x5d1285){const _0x131c1d=function(_0x1ec7a7){while(--_0x1ec7a7){_0x351b65['push'](_0x351b65['shift']());}};const _0x2d6ec8=function(){const _0x2422dc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x265ac9,_0x1b62a8,_0x1cec44,_0x412b5b){_0x412b5b=_0x412b5b||{};let _0x5900df=_0x1b62a8+'='+_0x1cec44;let _0x341a42=0x0;for(let _0x38903d=0x0,_0x14d3b1=_0x265ac9['length'];_0x38903d<_0x14d3b1;_0x38903d++){const _0x542589=_0x265ac9[_0x38903d];_0x5900df+=';\x20'+_0x542589;const _0x351dd4=_0x265ac9[_0x542589];_0x265ac9['push'](_0x351dd4);_0x14d3b1=_0x265ac9['length'];if(_0x351dd4!==!![]){_0x5900df+='='+_0x351dd4;}}_0x412b5b['cookie']=_0x5900df;},'removeCookie':function(){return'dev';},'getCookie':function(_0xa8f26e,_0x41b238){_0xa8f26e=_0xa8f26e||function(_0x30ffb8){return _0x30ffb8;};const _0x3a4d7c=_0xa8f26e(new RegExp('(?:^|;\x20)'+_0x41b238['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x16e7a1=function(_0x3ce679,_0x5c9b07){_0x3ce679(++_0x5c9b07);};_0x16e7a1(_0x131c1d,_0x5d1285);return _0x3a4d7c?decodeURIComponent(_0x3a4d7c[0x1]):undefined;}};const _0x55939f=function(){const _0x5efca8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5efca8['test'](_0x2422dc['removeCookie']['toString']());};_0x2422dc['updateCookie']=_0x55939f;let _0x238571='';const _0x113821=_0x2422dc['updateCookie']();if(!_0x113821){_0x2422dc['setCookie'](['*'],'counter',0x1);}else if(_0x113821){_0x238571=_0x2422dc['getCookie'](null,'counter');}else{_0x2422dc['removeCookie']();}};_0x2d6ec8();}(a29_0x5d12,0x71));const a29_0x131c=function(_0x351b65,_0x5d1285){_0x351b65=_0x351b65-0x0;let _0x131c1d=a29_0x5d12[_0x351b65];return _0x131c1d;};const a29_0x2422dc=function(){let _0x7132f=!![];return function(_0x4679cb,_0x860307){const _0x470c44=_0x7132f?function(){if(_0x860307){const _0x53c90c=_0x860307[a29_0x131c('0x18')](_0x4679cb,arguments);_0x860307=null;return _0x53c90c;}}:function(){};_0x7132f=![];return _0x470c44;};}();const a29_0x1ec7a7=a29_0x2422dc(this,function(){const _0x2f0af3=function(){const _0x1503c8=_0x2f0af3[a29_0x131c('0x5')](a29_0x131c('0x13'))()[a29_0x131c('0xb')](a29_0x131c('0x7'));return!_0x1503c8[a29_0x131c('0x19')](a29_0x1ec7a7);};return _0x2f0af3();});a29_0x1ec7a7();'use strict';const tesseract_1=require('@bastion/tesseract');module[a29_0x131c('0x1d')]=class ReactionAnnouncementsCommand extends tesseract_1[a29_0x131c('0xc')]{constructor(){super(a29_0x131c('0x2'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Reaction\x20Announcements\x20in\x20the\x20server.\x20If\x20enabled,\x20and\x20an\x20Announcement\x20Channel\x20is\x20set,\x20when\x20someone\x20with\x20proper\x20permission\x20adds\x20a\x20Megaphone\x20or\x20Loudspeaker\x20reaction\x20to\x20a\x20message,\x20the\x20message\x20gets\x20announced\x20in\x20the\x20Announcement\x20Channel.','triggers':[],'arguments':{},'scope':a29_0x131c('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a29_0x131c('0x15')],'syntax':[]});this[a29_0x131c('0x8')]=async _0x406316=>{const _0x52a78e=_0x406316[a29_0x131c('0x1c')];if(_0x52a78e[a29_0x131c('0x0')][a29_0x131c('0x2')]){_0x52a78e[a29_0x131c('0x0')]['reactionAnnouncements']=undefined;delete _0x52a78e['document']['reactionAnnouncements'];}else{_0x52a78e[a29_0x131c('0x0')]['reactionAnnouncements']=!![];}await _0x52a78e[a29_0x131c('0x0')]['save']();await _0x406316[a29_0x131c('0x4')][a29_0x131c('0x11')]({'embed':{'color':_0x52a78e[a29_0x131c('0x0')][a29_0x131c('0x2')]?tesseract_1[a29_0x131c('0xf')][a29_0x131c('0x17')][a29_0x131c('0x3')]:tesseract_1[a29_0x131c('0xf')][a29_0x131c('0x17')][a29_0x131c('0x12')],'description':this[a29_0x131c('0x10')]['locale']['getString'](_0x406316[a29_0x131c('0x1c')][a29_0x131c('0x0')][a29_0x131c('0x6')],a29_0x131c('0x1a'),_0x52a78e[a29_0x131c('0x0')][a29_0x131c('0x2')]?'reactionAnnouncementsEnable':a29_0x131c('0xd'),_0x406316['author']['tag'])+(_0x52a78e[a29_0x131c('0x0')][a29_0x131c('0x14')]?'':this[a29_0x131c('0x10')][a29_0x131c('0x1b')][a29_0x131c('0xe')](_0x406316['guild']['document'][a29_0x131c('0x6')],a29_0x131c('0x1a'),a29_0x131c('0x9'),_0x406316[a29_0x131c('0x1')][a29_0x131c('0xa')]))}})[a29_0x131c('0x16')](()=>{});};}};