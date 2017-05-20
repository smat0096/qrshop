<div class="category category-22414">
              <h2><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h2>
              {dede:channel type='son' noself='yes'}
              <div class="section section-86740">
                <h3 ><a href="[field:typeurl/]">[field:typename/]</a></h3>
                  <ul class="article-list"><li >
                    <li>123</li>
                  </ul>
                  <a href="[field:typeurl/]" class="more">{dede:sql sql="select count(*) as c from #@__archives where channel=@me"}查看全部[field:c /]篇文档{/dede:sql}</a>
              </div>
              {/dede:channel}
          </div>