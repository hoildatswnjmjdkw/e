const a135_0x5702=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','posterImage','\x0a...','original','../../utils/omnic','join','test','exec','titles','endDate','Publishing','INVALID_COMMAND_SYNTAX','\x20-\x20Present','Command','/kitsu/manga/','@bastion/tesseract','IRIS','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20manga.','manga','synopsis','attributes','length','Manga','json','DiscordError','Constants','data','COLORS','exports','NOT_FOUND','Published','slice','\x20-\x20','send','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','startDate','manga\x20TITLE','Status','apply','BASTION_ERROR_TYPE','makeRequest','name','Finished','Powered\x20by\x20Kitsu'];(function(_0x115dca,_0x570214){const _0x1a7041=function(_0x17d58d){while(--_0x17d58d){_0x115dca['push'](_0x115dca['shift']());}},_0x3efe75=function(){const _0x3bb18b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x47b47e,_0x276133,_0x4951e3,_0x5b1d06){_0x5b1d06=_0x5b1d06||{};let _0x1fa36e=_0x276133+'='+_0x4951e3,_0x5984a2=0x0;for(let _0x4da6f1=0x0,_0x59c823=_0x47b47e['length'];_0x4da6f1<_0x59c823;_0x4da6f1++){const _0x2e56fb=_0x47b47e[_0x4da6f1];_0x1fa36e+=';\x20'+_0x2e56fb;const _0x638b30=_0x47b47e[_0x2e56fb];_0x47b47e['push'](_0x638b30),_0x59c823=_0x47b47e['length'],_0x638b30!==!![]&&(_0x1fa36e+='='+_0x638b30);}_0x5b1d06['cookie']=_0x1fa36e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x21da8e,_0x33359b){_0x21da8e=_0x21da8e||function(_0x361c53){return _0x361c53;};const _0x34ed73=_0x21da8e(new RegExp('(?:^|;\x20)'+_0x33359b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4de729=function(_0x1061da,_0x4e94fa){_0x1061da(++_0x4e94fa);};return _0x4de729(_0x1a7041,_0x570214),_0x34ed73?decodeURIComponent(_0x34ed73[0x1]):undefined;}},_0x3eadb2=function(){const _0xd01762=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xd01762['test'](_0x3bb18b['removeCookie']['toString']());};_0x3bb18b['updateCookie']=_0x3eadb2;let _0x1a9b7b='';const _0x5005e5=_0x3bb18b['updateCookie']();if(!_0x5005e5)_0x3bb18b['setCookie'](['*'],'counter',0x1);else _0x5005e5?_0x1a9b7b=_0x3bb18b['getCookie'](null,'counter'):_0x3bb18b['removeCookie']();};_0x3efe75();}(a135_0x5702,0x15c));const a135_0x1a70=function(_0x115dca,_0x570214){_0x115dca=_0x115dca-0x0;let _0x1a7041=a135_0x5702[_0x115dca];return _0x1a7041;};const _0x2a20a4=a135_0x1a70,a135_0x3bb18b=function(){let _0x1a9b7b=!![];return function(_0x5005e5,_0x47b47e){const _0x276133=_0x1a9b7b?function(){const _0x493aee=a135_0x1a70;if(_0x47b47e){const _0x4951e3=_0x47b47e[_0x493aee('0x2a')](_0x5005e5,arguments);return _0x47b47e=null,_0x4951e3;}}:function(){};return _0x1a9b7b=![],_0x276133;};}(),a135_0x17d58d=a135_0x3bb18b(this,function(){const _0x5b1d06=function(){const _0x16f0d8=a135_0x1a70,_0x1fa36e=_0x5b1d06['constructor'](_0x16f0d8('0x4'))()['constructor'](_0x16f0d8('0x26'));return!_0x1fa36e[_0x16f0d8('0xa')](a135_0x17d58d);};return _0x5b1d06();});a135_0x17d58d();'use strict';const tesseract_1=require(_0x2a20a4('0x13')),errors=require('../../utils/errors'),omnic=require(_0x2a20a4('0x8'));module[_0x2a20a4('0x20')]=class MangaCommand extends tesseract_1[_0x2a20a4('0x11')]{constructor(){const _0x52b3a4=_0x2a20a4;super(_0x52b3a4('0x16'),{'description':_0x52b3a4('0x15'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x52b3a4('0x28')]}),this['sanitize']=_0x5984a2=>{const _0x310a9d=_0x52b3a4;return _0x5984a2[_0x310a9d('0x19')]>0x7d0?_0x5984a2[_0x310a9d('0x23')](0x0,0x7d0)+_0x310a9d('0x6'):_0x5984a2;},this[_0x52b3a4('0xb')]=async(_0x4da6f1,_0x59c823)=>{const _0x11a5fa=_0x52b3a4;if(!_0x59c823['_'][_0x11a5fa('0x19')])throw new errors[(_0x11a5fa('0x1c'))](errors[_0x11a5fa('0x2b')][_0x11a5fa('0xf')],this[_0x11a5fa('0x1')]);const _0x2e56fb=_0x59c823['_'][_0x11a5fa('0x9')]('\x20'),_0x638b30=await omnic[_0x11a5fa('0x0')](_0x11a5fa('0x12')+encodeURIComponent(_0x2e56fb)),_0x21da8e=await _0x638b30[_0x11a5fa('0x1b')]();if(!_0x21da8e||!_0x21da8e[_0x11a5fa('0x1e')]||!_0x21da8e[_0x11a5fa('0x1e')][_0x11a5fa('0x19')])throw new Error(_0x11a5fa('0x21'));await _0x4da6f1['channel'][_0x11a5fa('0x25')]({'embed':{'color':tesseract_1[_0x11a5fa('0x1d')][_0x11a5fa('0x1f')][_0x11a5fa('0x14')],'author':{'name':_0x11a5fa('0x1a')},'title':Object['values'](_0x21da8e['data'][0x0][_0x11a5fa('0x18')][_0x11a5fa('0xc')])[0x0],'url':'https://kitsu.io/manga/'+_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')]['slug'],'description':this['sanitize'](_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')][_0x11a5fa('0x17')]),'fields':[{'name':_0x11a5fa('0x29'),'value':_0x21da8e[_0x11a5fa('0x1e')][0x0]['attributes']['endDate']?_0x11a5fa('0x2'):_0x11a5fa('0xe'),'inline':!![]},{'name':_0x11a5fa('0x22'),'value':_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')][_0x11a5fa('0xd')]?_0x21da8e['data'][0x0][_0x11a5fa('0x18')][_0x11a5fa('0x27')]+_0x11a5fa('0x24')+_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')][_0x11a5fa('0xd')]:_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')][_0x11a5fa('0x27')]+_0x11a5fa('0x10'),'inline':!![]}],'image':{'url':_0x21da8e[_0x11a5fa('0x1e')][0x0][_0x11a5fa('0x18')][_0x11a5fa('0x5')][_0x11a5fa('0x7')]},'footer':{'text':_0x11a5fa('0x3')}}});};}};