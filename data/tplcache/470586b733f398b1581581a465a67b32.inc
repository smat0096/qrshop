
              <div class="section section-86740">
                <h3 ><a href="[field:typeurl/]">[field:typename/]</a></h3>
                  <ul class="article-list"><li >
                    {dede:arclist row=3 flag='h'}
                      <a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></li>
                    {/dede:arclist}
                  </ul>
                  <a href="[field:typeurl/]" class="more">{dede:sql sql="select count(*) as c from #@__archives where channel=@me"}查看全部[field:c /]篇文档{/dede:sql}</a>
              </div>
              