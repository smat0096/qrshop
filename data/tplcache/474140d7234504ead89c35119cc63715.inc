
              <div class="section section-86740">
                <h3 ><a href="[field:typeurl/]">[field:typename/]</a></h3>
                  <ul class="article-list">
                    <!-- 自定义输出列表函数  field:id 提取 id为 @me -->
                    [field:id  runphp='yes'] @me = GetChannelArclist(@me, '<li><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></li>',"flag='h'", "0,3");[/field:id]
                  </ul>
                  <a href="[field:typeurl/]" class="more">
                    [field:ID  runphp='yes'] @me = GetTotalArc(@me) ; @me = '查看全部'.@me.'篇文档';[/field:ID]
                  </a>
              </div>
              