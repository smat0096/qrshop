<div class="category category-22414">
              <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h2>
              {dede:channel type='son' noself='yes'}
              <div class="section section-86740">
                <h3 ><a href="[field:typeurl/]">[field:typename/]</a></h3>
                  <ul class="article-list">
                    [field:ID  runphp='yes'] @me = GetChannelArclist(@me,' ,limit=0,3');[/field:ID]
                  </ul>
                  <a href="[field:typeurl/]" class="more">
                    查看全部[field:ID  runphp='yes'] @me = GetTotalArc(@me);[/field:ID]篇文档
                  </a>
              </div>
              {/dede:channel}
          </div>