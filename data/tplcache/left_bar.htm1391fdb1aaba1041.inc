<?php
$z[0]=Array("channelartlist","\n        <div class=\"category-section category-22414\">\n            <h2><a href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}</a></h2>\n            <ul>\n                <!-- {dede:channel type='son' currentstyle='<li class=\"section-86666\"><h3><a href=\"~typelink~\" class=\"active\">~typename~</a></h3></li>'}\n                <li class=\"section-86740\">\n                    <h3><a href=\"[field:typeurl/]\">[field:typename/]</a></h3>\n                </li>\n                {/dede:channel}\n                 -->\n                {dede:channel type='son'}\n                <li class=\"section-86740\">\n                    <h3><a href=\"[field:typeurl/]\" class=\"[field:id  runphp='yes'] @me = GetCurrentClass(@me, 'active');[/field:id]\">[field:typename/]</a></h3>\n                </li>\n                {/dede:channel}\n            </ul>\n        </div>\n    ",40,947);
$z[0][4]=array();
$z[0][4]['typeid']="top";

?>