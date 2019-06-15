<template>
  <div v-if="place === 'left'" class="proType container">
    <div class="row proType_box clearfix">
      <div class="intro">
        <div class="intro_head wow fadeIn ">
          <h4>{{ supply.title }}</h4>
          <p>{{ supply.sign }}</p>
        </div>
        <div class="intro_text wow fadeIn">
          <p>
            {{ supply.content }}
          </p>
        </div>
      </div>
      <!--col-lg-6 col-md-5-->
      <div class="photo">
        <img class=" wow zoomIn img-responsive" :src="supply.imgUrl" />
        <div class="wow fadeIn" v-html="supply.iconSign"></div>
      </div>
    </div>
  </div>
  <div v-else class="proType container proTypeRight">
    <div class="row proType_box clearfix">

      <!--col-lg-6 col-md-5-->
      <div class="photo">
        <img class=" wow zoomIn img-responsive" v-lazy="supply.imgUrl" />
        <div class="wow fadeIn" v-html="supply.iconSign"></div>
      </div>
      <div class="intro">
        <div class="intro_head wow fadeIn ">
          <h4>{{ supply.title }}</h4>
          <p>{{ supply.sign }}</p>
        </div>
        <div class="intro_text wow fadeIn">
          <p>
            {{ supply.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proType",
  props: {
    supply: {
      type: Object
    },
    place: {
      type: String,
      default: "left"
    }
  }
};
</script>

<style scoped lang="stylus">
    $img-width = 499px
.proType
    font-size 16px
    .proType_box
        display table
        padding 0 15px
        .intro
            display table-cell
            vertical-align middle
            padding-right 32px
            box-sizing border-box
            margin-right $img-width
            text-align left
        @media (max-width 992px){
            .intro{
                width 100%
                display block
                margin 0 auto
            }
            .photo{
                width 100% !important
                float none !important
                margin 0 auto
            }
            .photo img {
               margin 0 auto
            }
        }
        .photo
            float right
            width $img-width
            text-align center
            img
                width $img-width
            p
                margin 9px 0 0 0
                font-size:20px;
                font-weight:bold;
                color:rgba(51,51,51,1);
                line-height:23px
.intro_head
    text-align left
    h4
        position relative
        font-size:30px;
        font-weight:bold;
        margin 0
        padding-bottom 12px
        color:rgba(18,18,18,1);
        &:after
            content :""
            position absolute
            left 0
            bottom 0
            width 100px
            height 1px
            background-color #333333
    p
        margin 12px 0 24px 0
        font-size:16px;
        font-weight:bold;
        color:rgba(51,51,51,1)
.intro_text
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:20px;
.sizeCenter
    text-align center
    h4
        &:after
            content ""
            position absolute
            left 50%
            bottom 0
            width 80px
            height 1px
            margin-left -40px
            background-color #333333
.proTypeRight
  .intro
    padding-right 0
    padding-left 32px
</style>
<style lang="stylus">
.photo
  p
    margin 9px 0 0 0
    font-size:20px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:23px
</style>
