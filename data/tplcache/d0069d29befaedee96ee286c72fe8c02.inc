<div class="section section-86785">
                            <h3><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h3>
                            <ul class="article-list">
                                {dede:artlist type='son' noself='yes' row="5"}
                                    <li ><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></li>
                                {/dede:artlist}
                            </ul>
                            <a href="{dede:field name='typeurl'/}" class="more">{dede:field.typeid runphp="yes"}@me = GetTotalArc(@me) ; @me = '查看全部'.@me.'篇文档';{/dede:field.typeid} </a>
                        </div>