const a139_0x1c3e=['permalink','channel','exports','Powered\x20by\x20Urban\x20Dictionary','@bastion/tesseract','DiscordError','guild','definition','urbanDictionary\x20WORD','../../utils/errors','IRIS','It\x20allows\x20you\x20to\x20search\x20the\x20Urban\x20Dictionary\x20for\x20definitions\x20of\x20the\x20specified\x20word.','written_on','join','list','thumbs_up','makeRequest','urbanDictionary','send','apply','Downvotes','length','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Urban\x20Dictionary','NO_DEFINITIONS_FOUND','/urbandictionary/definitions/','Upvotes','Constants'];(function(_0x35a5e8,_0x1c3e62){const _0x4e2f7e=function(_0x4ff5fb){while(--_0x4ff5fb){_0x35a5e8['push'](_0x35a5e8['shift']());}},_0x2d59d5=function(){const _0x3ef002={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4fa7be,_0x242327,_0x320ae6,_0x22b8b4){_0x22b8b4=_0x22b8b4||{};let _0x5cbd94=_0x242327+'='+_0x320ae6,_0x5a5df3=0x0;for(let _0x513f08=0x0,_0x3e0010=_0x4fa7be['length'];_0x513f08<_0x3e0010;_0x513f08++){const _0x586beb=_0x4fa7be[_0x513f08];_0x5cbd94+=';\x20'+_0x586beb;const _0x4562ff=_0x4fa7be[_0x586beb];_0x4fa7be['push'](_0x4562ff),_0x3e0010=_0x4fa7be['length'],_0x4562ff!==!![]&&(_0x5cbd94+='='+_0x4562ff);}_0x22b8b4['cookie']=_0x5cbd94;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14d921,_0x287563){_0x14d921=_0x14d921||function(_0x1c978c){return _0x1c978c;};const _0x34d3af=_0x14d921(new RegExp('(?:^|;\x20)'+_0x287563['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4c09cf=function(_0x295d76,_0x392f7a){_0x295d76(++_0x392f7a);};return _0x4c09cf(_0x4e2f7e,_0x1c3e62),_0x34d3af?decodeURIComponent(_0x34d3af[0x1]):undefined;}},_0x193c22=function(){const _0x100700=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x100700['test'](_0x3ef002['removeCookie']['toString']());};_0x3ef002['updateCookie']=_0x193c22;let _0x104264='';const _0x2f4093=_0x3ef002['updateCookie']();if(!_0x2f4093)_0x3ef002['setCookie'](['*'],'counter',0x1);else _0x2f4093?_0x104264=_0x3ef002['getCookie'](null,'counter'):_0x3ef002['removeCookie']();};_0x2d59d5();}(a139_0x1c3e,0xe6));const a139_0x4e2f=function(_0x35a5e8,_0x1c3e62){_0x35a5e8=_0x35a5e8-0x0;let _0x4e2f7e=a139_0x1c3e[_0x35a5e8];return _0x4e2f7e;};const _0x1a1513=a139_0x4e2f,a139_0x3ef002=function(){let _0x104264=!![];return function(_0x2f4093,_0x4fa7be){const _0x242327=_0x104264?function(){const _0x1784c2=a139_0x4e2f;if(_0x4fa7be){const _0x320ae6=_0x4fa7be[_0x1784c2('0x15')](_0x2f4093,arguments);return _0x4fa7be=null,_0x320ae6;}}:function(){};return _0x104264=![],_0x242327;};}(),a139_0x4ff5fb=a139_0x3ef002(this,function(){const _0x22b8b4=function(){const _0x35d293=a139_0x4e2f,_0x5cbd94=_0x22b8b4[_0x35d293('0x18')](_0x35d293('0x19'))()[_0x35d293('0x18')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5cbd94['test'](a139_0x4ff5fb);};return _0x22b8b4();});a139_0x4ff5fb();'use strict';const tesseract_1=require(_0x1a1513('0x6')),errors=require(_0x1a1513('0xb')),omnic=require('../../utils/omnic');module[_0x1a1513('0x4')]=class UrbanDictionaryCommand extends tesseract_1['Command']{constructor(){const _0x3c337e=_0x1a1513;super(_0x3c337e('0x13'),{'description':_0x3c337e('0xd'),'triggers':['ud'],'arguments':{},'scope':_0x3c337e('0x8'),'owner':![],'nsfw':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x3c337e('0xa')]}),this['exec']=async(_0x5a5df3,_0x513f08)=>{const _0x4177bb=_0x3c337e;if(!_0x513f08['_']['length'])throw new errors[(_0x4177bb('0x7'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0x3e0010=_0x513f08['_'][_0x4177bb('0xf')]('\x20'),_0x586beb=await omnic[_0x4177bb('0x12')](_0x4177bb('0x1c')+encodeURIComponent(_0x3e0010)),_0x4562ff=await _0x586beb['json']();if(!_0x4562ff||!_0x4562ff['list']||!_0x4562ff['list'][_0x4177bb('0x17')])throw new Error(_0x4177bb('0x1b'));await _0x5a5df3[_0x4177bb('0x3')][_0x4177bb('0x14')]({'embed':{'color':tesseract_1[_0x4177bb('0x1')]['COLORS'][_0x4177bb('0xc')],'author':{'name':_0x4177bb('0x1a'),'url':'https://urbandictionary.com'},'title':_0x4562ff[_0x4177bb('0x10')][0x0]['word'],'url':_0x4562ff[_0x4177bb('0x10')][0x0][_0x4177bb('0x2')],'description':_0x4562ff[_0x4177bb('0x10')][0x0][_0x4177bb('0x9')],'fields':[{'name':'Examples','value':_0x4562ff[_0x4177bb('0x10')][0x0]['example']},{'name':_0x4177bb('0x0'),'value':_0x4562ff[_0x4177bb('0x10')][0x0][_0x4177bb('0x11')],'inline':!![]},{'name':_0x4177bb('0x16'),'value':_0x4562ff[_0x4177bb('0x10')][0x0]['thumbs_down'],'inline':!![]}],'footer':{'text':_0x4177bb('0x5')},'timestamp':new Date(_0x4562ff[_0x4177bb('0x10')][0x0][_0x4177bb('0xe')])}});};}};