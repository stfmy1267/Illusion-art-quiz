#!/usr/bin/env ruby
# coding: utf-8

require 'cgi'
c = CGI.new(:accept_charset => "UTF-8")
print "Content-type: text/html; charset=UTF-8\n\n"

score = c["score_sum"]
word =["神様","天才","一般人","凡人"]

if score == "3"
  result = word[0]
elsif score == "2"
  result = word[1]
elsif score == "1" 
  result = word[2]
else
  result = word[3]
end

print"<!DOCTYPE html>\n"
print"<html lang=\"ja\">\n"
print"<head>\n"
print"<meta charset=\"UTF-8\">\n"
print"<title>成績発表</title>\n"
print "<style type=\"text/css\">\n"
print "<!--\n"
print".fadein {
   opacity: 0;
   animation: fadein 3s ease forwards;
}
@keyframes fadein {
   100% {  opacity: 1;}
}
body{
margin: 0px;
/* background-color: darkkhaki; */
}


.text1{
   /* background-color: aqua; */
   margin-top: 30px;
   margin-left: 50px;
   width: 500px;
   font-size: 70px;
   animation-delay: 1s;
}

.box{
   position: relative;
   margin: 0 auto;
   width: 1200px;
   height: 400px;
   /* background-color: dimgrey; */
}

.think{
   position: absolute;
   left: 80px;
   /* background-color: seagreen; */
   height: 400px;
   animation-delay: 3s;
}

.text2{
   position: absolute;
   right: 280px;
   /* background-color: deeppink; */
   width: 470px;
   font-size: 70px;
   animation-delay: 2s;
}

span{
   font-size: 90px;
   color: firebrick;
}

.text3{
   position: absolute;
   top: 200px;
   left: 65%;
   transform: translate(-65%, -0%);
   /* background-color: sandybrown; */
   width: 650px;
   font-size: 50px;
   animation-delay: 3s;
}

.return{
   position: absolute;
   bottom: 0px;
   right: 90px;
}

.back{
   width: 100px;
   height: 100px;
   animation-delay: 3s;
}"
print "-->\n"
print "</style>\n"
print"</head>\n"
print"<body>\n"
print"<div class=\"fadein text1\">\n"
print" あなたは・・・\n"
print"</div>"

print"<div class=\"box\">\n"
print"<img class=\"fadein think\" src=\"img/tinking.png\" alt=\"考える人\">\n"
print"<div class=\"fadein text2\">\n"
puts"<span>#{result}</span>でした。"
puts"</div>"
puts"<div class=\"fadein text3\">"
puts"スコア・・・#{score}/3点"
puts"</div>"
puts"<div class=\"return\">"
puts"<a href=\"#\" onclick=\"window.history.back(); return false;\"><img class=\"fadein back\" src=\"img/retrun.png\" alt=\"戻るボタン\"></a>"
puts"</div>"
puts"</div>"

puts"</body>"
puts"</html>"