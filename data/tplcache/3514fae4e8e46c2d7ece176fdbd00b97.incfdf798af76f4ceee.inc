<?php
$z[0]=Array("field","",65,93);
$z[0][4]=array();
$z[0][4]['name']="typeurl";
$z[1]=Array("field","",95,124);
$z[1][4]=array();
$z[1][4]['name']="typename";
$z[2]=Array("sql","\n              <div class=\"section section-86740\">\n                <h3 ><a href=\"[field:typeurl/]\">[field:typename/]</a></h3>\n                  <ul class=\"article-list\">\n                    [field:arcList  runphp='yes'] @me = GetChannelArclist(@me);[/field:arcList]\n                    <li><a href=\"javascript:;\" title=\"人人商城售前咨询问题集锦\">人人商城售前咨询问题集锦</a></li>\n                  </ul>\n                  <a href=\"[field:typeurl/]\" class=\"more\">\n                    查看全部[field:ID  runphp='yes'] @me = GetTotalArc(@me);[/field:ID]篇文档\n                  </a>\n              </div>\n              ",148,878);
$z[2][4]=array();
$z[2][4]['sql']="Select * from \"dede_arctype\" where reid=~id~ ORDER BY id";

?>