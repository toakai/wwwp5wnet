﻿$(function(){$('.photo-news').hover(function(){$('a.prev',$('.photo-news')).show();$('a.next',$('.photo-news')).show()},function(){$('a.prev',$('.photo-news')).hide();$('a.next',$('.photo-news')).hide()}).slides({preload:true,preloadImage:'images13/loading_24X24.gif',play:5000,pause:2500,hoverPause:true});if(p5w.ie6){p5w.runJs('http://www.p5w.net/scripts/DD_belatedPNG_0.0.8a-min.js',function(){DD_belatedPNG.fix('a.prev img,a.next img')})}if(typeof tradingdayData!="undefined"){var data=tradingdayData.czxlist||[];var html=new Array();for(var i=0;i<data.length&&i<5;i++){var a=data[i];html.push('<div class="mod-tw"><div class="mod-img"><a href="'+a.url+'" target="_blank" title="'+a.title+'"><img src="'+a.img+'" alt="'+a.title+'" width="90" height="60" /></a></div>');html.push('<div class="mod-text3"><p class="mod-lt"><a href="'+a.url+'" target="_blank" title="'+a.title+'">'+a.title+'</a></p>');html.push('</div></div>');i++;a=data[i];html.push('<div class="mod-tw"><div class="mod-img"><a href="'+a.url+'" target="_blank" title="'+a.title+'"><img src="'+a.img+'" alt="'+a.title+'" width="90" height="60" /></a></div>');html.push('<div class="mod-text3"><p class="mod-lt"><a href="'+a.url+'" target="_blank" title="'+a.title+'">'+a.title+'</a></p>');html.push('</div></div>');html.push('<ul>');i++;a=data[i];html.push('<li class="video"><a href="'+a.url+'" target="_blank" title="'+a.title+'">'+a.title+'</a></li>');i++;a=data[i];html.push('<li class="video"><a href="'+a.url+'" target="_blank" title="'+a.title+'">'+a.title+'</a></li>');i++;a=data[i];html.push('<li class="video"><a href="'+a.url+'" target="_blank" title="'+a.title+'">'+a.title+'</a></li>')}$('#lcSP').html(html.join(''))};$.getJSON(jsonSrv+"fundcompany.json",function(data){if(data.status=="Y"){var link1=$('#link-A-F').find('ul').empty();var link2=$('#link-G-I').find('ul').empty();var link3=$('#link-J-O').find('ul').empty();var link4=$('#link-P-T').find('ul').empty();var link5=$('#link-U-Z').find('ul').empty();$(data.fundcompany).each(function(){switch(this.py){case"A":case"B":case"C":case"D":case"E":case"F":$('<li><a target="_blank" href="http://irmfund.p5w.net/funddetail.asp?fid='+this.code+'">'+this.name+'</a></li>').appendTo(link1);break;case"G":case"H":case"I":$('<li><a target="_blank" href="http://irmfund.p5w.net/funddetail.asp?fid='+this.code+'">'+this.name+'</a></li>').appendTo(link2);break;case"J":case"K":case"L":case"M":case"N":case"O":$('<li><a target="_blank" href="http://irmfund.p5w.net/funddetail.asp?fid='+this.code+'">'+this.name+'</a></li>').appendTo(link3);break;case"P":case"Q":case"R":case"S":case"T":$('<li><a target="_blank" href="http://irmfund.p5w.net/funddetail.asp?fid='+this.code+'">'+this.name+'</a></li>').appendTo(link4);break;case"U":case"V":case"W":case"X":case"Y":case"Z":$('<li><a target="_blank" href="http://irmfund.p5w.net/funddetail.asp?fid='+this.code+'">'+this.name+'</a></li>').appendTo(link5);break;default:break}})}})});