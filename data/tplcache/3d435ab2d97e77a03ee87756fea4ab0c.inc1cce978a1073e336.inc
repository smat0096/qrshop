<?php
$z[0]=Array("field","",65,93);
$z[0][4]=array();
$z[0][4]['name']="typeurl";
$z[1]=Array("field","",95,124);
$z[1][4]=array();
$z[1][4]['name']="typename";
$z[2]=Array("channel","\n              <div class=\"section section-86740\">\n                <h3 ><a href=\"[field:typeurl/]\">[field:typename/]</a></h3>\n                  <ul class=\"article-list\">\n                    <!-- 自定义输出列表函数  field:id 提取 id为 @me -->\n                    [field:id  runphp='yes'] @me = GetChannelArclist(@me, '<li><a href=\"[arcurl]\" title=\"[title]\">[title]</a></li>',\"flag='h'\", \"0,3\");[/field:id]\n                  </ul>\n                  <a href=\"[field:typeurl/]\" class=\"more\">\n                    [field:ID  runphp='yes'] \$num = GetTotalArc(@me) ; return '查看全部'.'篇文档';[/field:ID]\n                  </a>\n              </div>\n              ",148,876);
$z[2][4]=array();
$z[2][4]['type']="son";
$z[2][4]['noself']="yes";

?>