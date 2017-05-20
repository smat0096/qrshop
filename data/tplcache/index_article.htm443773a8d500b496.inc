<?php
$z[0]=Array("include","",0,35);
$z[0][4]=array();
$z[0][4]['filename']="head.htm";
$z[1]=Array("include","",45,86);
$z[1][4]=array();
$z[1][4]['filename']="search_bar.htm";
$z[2]=Array("include","",165,204);
$z[2][4]=array();
$z[2][4]['filename']="left_bar.htm";
$z[3]=Array("field","",271,300);
$z[3][4]=array();
$z[3][4]['name']="typename";
$z[4]=Array("channelartlist","\n                        <div class=\"section section-86785\">\n                            <h3><a href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}</a></h3>\n                            <ul class=\"article-list\">\n                                {dede:artlist type='son' noself='yes' row=\"5\"}\n                                    <li ><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></li>\n                                {/dede:artlist}\n                            </ul>\n                            <a href=\"{dede:field name='typeurl'/}\" class=\"more\">{dede:field.typeid runphp=\"yes\"}@me = GetTotalArc(@me) ; @me = '查看全部'.@me.'篇文档';{/dede:field.typeid} </a>\n                        </div>\n                    ",413,1218);
$z[4][4]=array();
$z[4][4]['type']="top";
$z[5]=Array("include","",1303,1340);
$z[5][4]=array();
$z[5][4]['filename']="footer.htm";

?>