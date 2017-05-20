<div class="category-section category-22414">
            <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h2>
            <ul>
                {dede:channel type='son' currentsytle="<li><a href='~typelink~' class='thisclass'>~typename~</a> </li>"}
2
 <li><a href='[field:typelink/]'>[field:typename/]</a> </li>
3
{/dede:channel}

                {dede:channel type='son' currentstyle='<li class="section-86740"><h3><a href="[field:typeurl/]" class="active">[field:typename/]</a></h3></li>'}
                <li class="section-86740">
                    <h3><a href="[field:typeurl/]">[field:typename/]</a></h3>
                </li>
                {/dede:channel}
            </ul>
        </div>