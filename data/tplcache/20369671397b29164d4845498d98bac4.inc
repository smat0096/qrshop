<div class="category category-22414">
              <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h2>
              {dede:channel type='son' noself='yes'}
              <div class="section section-86740">
                <h3 ><a href="[field:typeurl/]">[field:typename/]</a></h3>
                  <ul class="article-list">
                    <!-- 自定义输出列表函数  field:id 提取 id为 @me -->
                    [field:id  runphp='yes'] @me = GetChannelArclist(@me, '<li><a href="[arcurl]" title="[title]">[title]</a></li>',"flag='h'", "0,3");[/field:id]
                  </ul>
                  <a href="[field:typeurl/]" class="more">
                    查看全部[field:ID  runphp='yes'] @me = GetTotalArc(@me);[/field:ID]篇文档
                  </a>
              </div>
              {/dede:channel}
          </div>