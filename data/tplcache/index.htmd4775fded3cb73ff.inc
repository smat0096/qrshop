<?php
$z[0]=Array("include","",0,35);
$z[0][4]=array();
$z[0][4]['filename']="head.htm";
$z[1]=Array("channelartlist","\n          <div class=\"category category-22414\">\n              <h2><a href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}</a></h2>\n              {dede:channel type='son' noself='yes'}\n              <div class=\"section section-86740\">\n                <h3 ><a href=\"[field:typeurl/]\">[field:typename/]</a></h3>\n                  <ul class=\"article-list\">\n                    <!-- 自定义输出列表函数  field:id 提取 id为 @me -->\n                    [field:id  runphp='yes'] @me = GetChannelArclist(@me, '<li><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></li>',\"flag='h'\", \"0,3\");[/field:id]\n                  </ul>\n                  <a href=\"[field:typeurl/]\" class=\"more\">\n                    [field:ID  runphp='yes'] @me = GetTotalArc(@me) ; @me = '查看全部'.@me.'篇文档';[/field:ID]\n                  </a>\n              </div>\n              {/dede:channel}\n          </div>\n          ",1945,2937);
$z[1][4]=array();
$z[1][4]['type']="top";
$z[2]=Array("include","",3791,3828);
$z[2][4]=array();
$z[2][4]['filename']="footer.htm";

?>