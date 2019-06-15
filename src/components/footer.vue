<template>
  <div class="footer">
    <div class="container">
      <div class="introduce">
        <div class="title hidden-xs col-sm-4 col-lg-6">全球移动</div>
        <div class="detail hidden-xs col col-sm-8 col-lg-6">
          <ul>
            <li>
              <p>关于我们</p>
              <p>企业介绍</p>
              <p>公司文化</p>
              <p>FAQ</p>
            </li>
            <li>
              <p>产品介绍</p>

              <p>投资关系</p>
            </li>
            <li>
              <p>媒体介绍</p>
              <p>新闻中心</p>
            </li>
            <li>
              <p>联系我们</p>
              <p>办公地点</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="link">
        <div class="col-lg-12">
          <ul>
            <li>
              <a href=""><i></i></a>
            </li>
            <li>
              <a href=""><i></i></a>
            </li>
            <li>
              <a href=""><i></i></a>
            </li>
            <li>
              <a href=""><i></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="companyAddress">
        <div class="notice">
          <ul class="col-sm-6 hidden-xs  notice_l">
            <!-- | 公告 | International Business -->
            <li>诚征英才</li>
            <li class="line">公告</li>
            <li>International Business</li>
          </ul>
          <ul class=" col-sm-6  notice_r">
            <!-- 盘石互联网有限公司 | XXXX | BBBB-->
            <li>盘石互联网有限公司</li>
            <li class="line">XXXX</li>
            <li>BBBB</li>
          </ul>
        </div>
        <div class="hot">
          <div class=" hidden-xs col-sm-6 hot_l"><p>官方热线</p></div>
          <div class=" col-xs-12 col-sm-6 hot_r">
            <p><strong>ICP证：</strong>浙XX-XXXXXXXX Copyright@2019xxxxx</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "isFooter"
};
</script>

<style scoped lang="stylus">
.footer
    /*height 170px*/
    background-color #2B2C2D
    color #ffffff
    padding 20px 0
    .companyAddress
        font-size 12px
        .notice
            ul
                font-size 0
                li
                    display inline-block
                    font-size 12px
                    vertical-align middle
                .line
                    padding 0 5px
                    margin 0 5px
                    border-right 2px solid #ffffff
                    border-left 2px solid #ffffff
            .notice_l
                text-align left
            .notice_r
                text-align right
        .hot
            p
                margin 0
            .hot_l
                text-align left
            .hot_r
                text-align right
    .link
        ul
            text-align left
            font-size 0
            padding-bottom 4px
            border-bottom 1px solid rgba(247,247,247,1)
            li
                display inline-block
                vertical-align top
                margin-right 20px
                a
                    display block
                    width @width
                    height @height
                    i
                        display block
                        width 16px
                        height 16px
                        background-color transparent
    .introduce
        color:rgba(255,255,255,1);
        .title
            text-align left
            font-size:14px;
            font-weight:bold;
        .detail
            ul
                text-align right
                font-size 0
                li
                    display inline-block
                    font-size 12px
                    vertical-align top
                    margin-right 43px
                    p
                        text-align left
                        margin-bottom 5px
                        font-weight:bold;
</style>
