<div class="category-section category-22414">
            <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h2>
            <ul>
                <!-- {dede:channel type='son' currentstyle='<li class="section-86666"><h3><a href="~typelink~" class="active">~typename~</a></h3></li>'}
                <li class="section-86740">
                    <h3><a href="[field:typeurl/]">[field:typename/]</a></h3>
                </li>
                {/dede:channel}
                 -->
                {dede:channel type='son'}
                <li class="section-86740">
                    <h3><a href="[field:typeurl/]" class="[field:id  runphp='yes'] @me = GetCurrentClass(@me, 'active');[/field:id]">[field:typename/]</a></h3>
                </li>
                {/dede:channel}
            </ul>
        </div>