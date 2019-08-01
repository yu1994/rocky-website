<template>
  <div class="governance container">
    <section class="equity ">
      <div class="tab">
        <breadcrumb></breadcrumb>
      </div>
      <ul class="content" >
        <li class="stockholders">
          <more-title :title="'股东'"></more-title>
          <div>
            <p>盘石致力于数字经济，大数据、人工智能技术为核心驱动的全球新经济建设与发展，盘石在全球部署了盘石云大规模数据中心，整合与深度挖掘数十年积累的“盘石云”大数据， 通过“盘石全球新经济平台”旗下SAAS云、内容云、营销云、信用云、电商云、教育云、金融云等七大云系核心服务，打造基于盘石大数据为基础而交互链接的盘石商业生态SAAS平台、盘石全球数字文化出海、盘石全球数字营销推广、盘石网站安全信用认证、盘石社交电商市场、盘石大学中小企业互联网教育、盘石全球互联网金融科技等全球新经济互联网生态圈系统。</p>
            <img src="../../assets/investment/equity.png" />
            <img src="../../assets/investment/equity.png" />
            <img src="../../assets/investment/equity.png" />
          </div>
        </li>
        <li>
          <more-title :title="'董事会'"></more-title>
          <div>
            <p>盘石, 由中国互联网创业菁英田宁携团队2004年于杭州创立。</p>
            <p>盘石使命：让世界没有落后的经济！</p>
            <p>盘石愿景：成为全球新经济平台领跑者 坚如磐石 持续发展107年！</p>
            <p>盘石致力于数字经济，大数据、人工智能技术为核心驱动的全球新经济建设与发展，盘石在全球部署了盘石云大规模数据中心，整合与深度挖掘数十年积累的“盘石云”大数据， 通过“盘石全球新经济平台”旗下SAAS云、内容云、营销云、信用云、电商云、教育云、金融云等七大云系核心服务，打造基于盘石大数据为基础而交互链接的盘石商业生态SAAS平台、盘石全球数字文化出海、盘石全球数字营销推广、盘石网站安全信用认证、盘石社交电商市场、盘石大学中小企业互联网教育、盘石全球互联网金融科技等全球新经济互联网生态圈系统。</p>
            <p>盘石全球大数据管理平台P-Platform，每天将全球用户上网行为定向精准数据采集, 盘石大规模机器分布式训练采用先进的智能算法将盘石全球用户信息数据分为多个标签兴趣小组，并且将盘石全球用户海量数据整合清洗为应用的集成数据库。盘石P-Data人工智能大数据引擎通过机器自动学习，对于在线服务客户数据深度挖掘分析，结合用户语音、图像、视频、知识图谱、用户画像与人工智能AR、区块链等技术，实时洞察了解全球客户的需求。</p>
          </div>
        </li>
        <li>
          <more-title :title="'董事委员会'"></more-title>
          <div>
            <p>盘石, 由中国互联网创业菁英田宁携团队2004年于杭州创立。</p>
            <p>盘石使命：让世界没有落后的经济！</p>
            <p>盘石愿景：成为全球新经济平台领跑者 坚如磐石 持续发展107年！</p>
          </div>
        </li>
        <li>
          <more-title :title="'内部监控'"></more-title>
          <div>
            <p>盘石, 由中国互联网创业菁英田宁携团队2004年于杭州创立。</p>
            <p>盘石使命：让世界没有落后的经济！</p>
            <p>盘石愿景：成为全球新经济平台领跑者 坚如磐石 持续发展107年！</p>
          </div>
        </li>
        <li>
          <more-title :title="'外聘核数师'"></more-title>
          <div>
            <p>盘石, 由中国互联网创业菁英田宁携团队2004年于杭州创立。</p>
            <p>盘石使命：让世界没有落后的经济！</p>
            <p>盘石愿景：成为全球新经济平台领跑者 坚如磐石 持续发展107年！</p>
          </div>
        </li>
        <li>
          <more-title :title="'操守准则'"></more-title>
          <div>
            <p>盘石, 由中国互联网创业菁英田宁携团队2004年于杭州创立。</p>
            <p>盘石使命：让世界没有落后的经济！</p>
            <p>盘石愿景：成为全球新经济平台领跑者 坚如磐石 持续发展107年！</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import breadcrumb from "@/components/breadcrumb";
  import moreTitle from "@/components/moreTitle";
export default {
  name: "governance",
  components: { breadcrumb, moreTitle }
};
</script>

<style scoped lang="stylus">
  .equity
    padding 28px 0 48px
    .content
      margin 28px auto 0
      font-size 16px
      text-align left
      color:rgba(18,18,18,1);
      li
        margin-bottom 60px
      & li:last-child
          margin-bottom 0
      img
        margin-right 18px
</style>
