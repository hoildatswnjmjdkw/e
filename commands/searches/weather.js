const a120_0x46d7=['Cloudiness','\x20cm\x20(Snow)\x0a','snow','South','temp_max','getMinutes','degreesToDirection','Powered\x20by\x20OpenWeatherMap','Weather','exports','wind','Low','guild','South\x20-\x20South\x20West','join','test','visibility','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','deg','weather\x20LOCATION','rain','name','grnd_level','apply','Visibility','json','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Condition','lon','South\x20-South\x20East','kelvinToCelcius','It\x20allows\x20you\x20to\x20see\x20the\x20current\x20weather\x20forcast\x20of\x20the\x20specified\x20location.','clouds','@2x.png','Temperature','\x20m/s\x0a','IRIS','sys','timezone','country','COLORS','message','constructor','feels_like','Constants','temp','Sunrise','°C\x20/\x20','temp_min','../../utils/omnic','West','cod','sunrise','/weather/','kelvinToFahrenheit','West\x20-\x20South\x20West','https://openweathermap.org/img/wn/','High','main','North\x20East','North\x20-\x20North\x20West','round','West\x20-\x20North\x20West','Precipitation','getHours','compile','South\x20West','weather','Feels\x20Like','pressure','Sunset','UTC','coord','humidity','exec','sunset','Command','Humidity','Wind','Coordinates','@bastion/tesseract','channel','\x20hPa\x20(Sea\x20Level)\x0a'];(function(_0x6c6cdd,_0x46d79b){const _0x16dd47=function(_0x683670){while(--_0x683670){_0x6c6cdd['push'](_0x6c6cdd['shift']());}};const _0x121854=function(){const _0x2cc5be={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x61d29e,_0x42cf55,_0x3bbcd0,_0x4079a9){_0x4079a9=_0x4079a9||{};let _0x29c26c=_0x42cf55+'='+_0x3bbcd0;let _0x4a19b7=0x0;for(let _0xf2e3f7=0x0,_0x43ddf1=_0x61d29e['length'];_0xf2e3f7<_0x43ddf1;_0xf2e3f7++){const _0x3d18ef=_0x61d29e[_0xf2e3f7];_0x29c26c+=';\x20'+_0x3d18ef;const _0xc34b61=_0x61d29e[_0x3d18ef];_0x61d29e['push'](_0xc34b61);_0x43ddf1=_0x61d29e['length'];if(_0xc34b61!==!![]){_0x29c26c+='='+_0xc34b61;}}_0x4079a9['cookie']=_0x29c26c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x23cc81,_0x6ced6e){_0x23cc81=_0x23cc81||function(_0x2fb81c){return _0x2fb81c;};const _0xef64e5=_0x23cc81(new RegExp('(?:^|;\x20)'+_0x6ced6e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x531941=function(_0xa3d9b0,_0x122bf3){_0xa3d9b0(++_0x122bf3);};_0x531941(_0x16dd47,_0x46d79b);return _0xef64e5?decodeURIComponent(_0xef64e5[0x1]):undefined;}};const _0xe4e6bd=function(){const _0x405e12=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x405e12['test'](_0x2cc5be['removeCookie']['toString']());};_0x2cc5be['updateCookie']=_0xe4e6bd;let _0x3ce42b='';const _0x31516d=_0x2cc5be['updateCookie']();if(!_0x31516d){_0x2cc5be['setCookie'](['*'],'counter',0x1);}else if(_0x31516d){_0x3ce42b=_0x2cc5be['getCookie'](null,'counter');}else{_0x2cc5be['removeCookie']();}};_0x121854();}(a120_0x46d7,0x80));const a120_0x16dd=function(_0x6c6cdd,_0x46d79b){_0x6c6cdd=_0x6c6cdd-0x0;let _0x16dd47=a120_0x46d7[_0x6c6cdd];return _0x16dd47;};const a120_0x2cc5be=function(){let _0x56f70e=!![];return function(_0x43f1cc,_0xa7208a){const _0x5cb0c6=_0x56f70e?function(){if(_0xa7208a){const _0x3b1a02=_0xa7208a[a120_0x16dd('0x40')](_0x43f1cc,arguments);_0xa7208a=null;return _0x3b1a02;}}:function(){};_0x56f70e=![];return _0x5cb0c6;};}();const a120_0x683670=a120_0x2cc5be(this,function(){const _0x24e7b8=function(){const _0x24f171=_0x24e7b8[a120_0x16dd('0x53')](a120_0x16dd('0x43'))()[a120_0x16dd('0x16')](a120_0x16dd('0x39'));return!_0x24f171[a120_0x16dd('0x37')](a120_0x683670);};return _0x24e7b8();});a120_0x683670();'use strict';const tesseract_1=require(a120_0x16dd('0x25'));const errors=require('../../utils/errors');const omnic=require(a120_0x16dd('0x6'));module[a120_0x16dd('0x31')]=class WeatherCommand extends tesseract_1[a120_0x16dd('0x21')]{constructor(){super(a120_0x16dd('0x18'),{'description':a120_0x16dd('0x48'),'triggers':[],'arguments':{},'scope':a120_0x16dd('0x34'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a120_0x16dd('0x3c')]});this['getTime']=_0x4d6f4f=>{const _0x224c70=_0x4d6f4f[a120_0x16dd('0x15')]();const _0x3ef0e7=_0x4d6f4f[a120_0x16dd('0x2d')]();return(_0x224c70<0xa?'0':'')+_0x224c70+':'+(_0x3ef0e7<0xa?'0':'')+_0x3ef0e7;};this[a120_0x16dd('0x47')]=_0x410dd4=>Math[a120_0x16dd('0x12')](_0x410dd4-273.15);this[a120_0x16dd('0xb')]=_0x2d1de8=>Math['round'](_0x2d1de8*1.8-459.67);this['degreesToDirection']=_0xc00df2=>{const _0x42f513=['North','North\x20-\x20North\x20East',a120_0x16dd('0x10'),'East\x20-\x20North\x20East','East','East\x20-\x20South\x20East','South\x20East',a120_0x16dd('0x46'),a120_0x16dd('0x2b'),a120_0x16dd('0x35'),a120_0x16dd('0x17'),a120_0x16dd('0xc'),a120_0x16dd('0x7'),a120_0x16dd('0x13'),'North\x20West',a120_0x16dd('0x11')];return _0x42f513[Math[a120_0x16dd('0x12')](_0xc00df2/22.5+0.5)%0x8];};this[a120_0x16dd('0x1f')]=async(_0x598d1c,_0x2b5d59)=>{if(!_0x2b5d59['_'][a120_0x16dd('0x3a')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0xce5227=_0x2b5d59['_'][a120_0x16dd('0x36')]('\x20');const _0x515a24=await omnic['makeRequest'](a120_0x16dd('0xa')+_0xce5227);const _0x44c6d5=await _0x515a24[a120_0x16dd('0x42')]();if(_0x44c6d5[a120_0x16dd('0x8')]!==0xc8)throw new Error(_0x44c6d5[a120_0x16dd('0x52')]);await _0x598d1c[a120_0x16dd('0x26')]['send']({'embed':{'color':tesseract_1[a120_0x16dd('0x1')][a120_0x16dd('0x51')][a120_0x16dd('0x4d')],'author':{'name':a120_0x16dd('0x30')},'title':_0x44c6d5[a120_0x16dd('0x3e')]+(_0x44c6d5[a120_0x16dd('0x4e')]['country']?',\x20'+_0x44c6d5[a120_0x16dd('0x4e')][a120_0x16dd('0x50')]:''),'fields':[{'name':a120_0x16dd('0x44'),'value':_0x44c6d5[a120_0x16dd('0x18')][0x0][a120_0x16dd('0xf')],'inline':!![]},{'name':a120_0x16dd('0x24'),'value':_0x44c6d5['coord']['lat']+',\x20'+_0x44c6d5[a120_0x16dd('0x1d')][a120_0x16dd('0x45')],'inline':!![]},{'name':'Time\x20Zone','value':a120_0x16dd('0x1c')+(_0x44c6d5[a120_0x16dd('0x4f')]<0x0?'':'+')+_0x44c6d5[a120_0x16dd('0x4f')]/0x3c/0x3c,'inline':!![]},{'name':a120_0x16dd('0x4b'),'value':this[a120_0x16dd('0x47')](_0x44c6d5[a120_0x16dd('0xf')]['temp'])+a120_0x16dd('0x4')+this[a120_0x16dd('0xb')](_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x2')])+'°F','inline':!![]},{'name':a120_0x16dd('0x33'),'value':this[a120_0x16dd('0x47')](_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x5')])+a120_0x16dd('0x4')+this[a120_0x16dd('0xb')](_0x44c6d5['main'][a120_0x16dd('0x5')])+'°F','inline':!![]},{'name':a120_0x16dd('0xe'),'value':this['kelvinToCelcius'](_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x2c')])+a120_0x16dd('0x4')+this['kelvinToFahrenheit'](_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x2c')])+'°F','inline':!![]},{'name':a120_0x16dd('0x19'),'value':this[a120_0x16dd('0x47')](_0x44c6d5[a120_0x16dd('0xf')]['feels_like'])+a120_0x16dd('0x4')+this[a120_0x16dd('0xb')](_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x0')])+'°F','inline':!![]},{'name':a120_0x16dd('0x22'),'value':_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x1e')]+'%','inline':!![]},{'name':'Pressure','value':_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x1a')]+a120_0x16dd('0x27')+(_0x44c6d5[a120_0x16dd('0xf')][a120_0x16dd('0x3f')]?_0x44c6d5['main'][a120_0x16dd('0x3f')]:'-')+'\x20hPa\x20(Ground\x20Level)','inline':!![]},{'name':a120_0x16dd('0x23'),'value':_0x44c6d5[a120_0x16dd('0x32')]['speed']+a120_0x16dd('0x4c')+(_0x44c6d5[a120_0x16dd('0x32')][a120_0x16dd('0x3b')]?this[a120_0x16dd('0x2e')](_0x44c6d5['wind'][a120_0x16dd('0x3b')]):_0x44c6d5['wind'][a120_0x16dd('0x3b')]),'inline':!![]},{'name':a120_0x16dd('0x28'),'value':(_0x44c6d5[a120_0x16dd('0x49')]?_0x44c6d5['clouds']['all']:0x0)+'%','inline':!![]},{'name':a120_0x16dd('0x14'),'value':(_0x44c6d5[a120_0x16dd('0x3d')]?_0x44c6d5['rain']['1h']:'-')+'\x20cm\x20(Rain)\x0a'+(_0x44c6d5[a120_0x16dd('0x2a')]?_0x44c6d5[a120_0x16dd('0x2a')]['1h']:'-')+a120_0x16dd('0x29'),'inline':!![]},{'name':a120_0x16dd('0x41'),'value':(_0x44c6d5[a120_0x16dd('0x38')]?_0x44c6d5[a120_0x16dd('0x38')]:'-')+'\x20m','inline':!![]},{'name':a120_0x16dd('0x3'),'value':_0x44c6d5[a120_0x16dd('0x4e')][a120_0x16dd('0x9')]?this['getTime'](new Date(_0x44c6d5['sys'][a120_0x16dd('0x9')]*0x3e8)):'-','inline':!![]},{'name':a120_0x16dd('0x1b'),'value':_0x44c6d5[a120_0x16dd('0x4e')][a120_0x16dd('0x20')]?this['getTime'](new Date(_0x44c6d5[a120_0x16dd('0x4e')][a120_0x16dd('0x20')]*0x3e8)):'-','inline':!![]}],'thumbnail':{'url':a120_0x16dd('0xd')+_0x44c6d5[a120_0x16dd('0x18')][0x0]['icon']+a120_0x16dd('0x4a')},'footer':{'text':a120_0x16dd('0x2f')},'timestamp':new Date(_0x44c6d5['dt']*0x3e8)}});};}};