export default {
  nav: {
    home: "首页",
    product: "产品介绍",
    investment: "投资关系",
    media: "新闻媒体",
    talents: "广纳贤士",
    about: "关于我们",
    contact: "联系我们",
    governance: "公司治理",
    finance: "财务报告",
    newsList: "投资者新闻",
    partner: "合作伙伴",
    operator: "深度运营"
  },
  homePage: {
    titleChunk: {
      text_1: "RockyPlay",
      text_2: "致力于让全球用户共享数字娱乐的极致体验",
    },
    globalChunk: {
      content: {
        title: "世界互联 内容出海",
        slogan: "阅读、视频、音乐、社交、游戏……多元之美，世界尽在眼前"
      },
      url: require("../assets/home/global.png")
    },
    operateTextChunk: {
      title: "大数据时代，精细化运营",
      understand: "【了解更多】",
      remark:
        "自定义的模型，根据条件筛选出目标用户并分析所在时间段内的消费行为轨迹。可评估运营活动效果，持续后续活动优化，提高活动转化率",
      url: require('../assets/home/operate_bg.png')
    },
    globalMap: {
      title: "全球战略",
      bgUrl: require('../assets/home/map_bg.png')
    },
    operate: {},
    tierCarousel: {
      title: "共赢，书写出海新篇章",
      list: [
        {
          url: require("../assets/home/carousel1.jpg"),
          time: "11.08",
          intro:
            "2018年11月8日，盘石董事长田宁受邀出席第五届世界互联网大会的数字经济产业合作大会，并作《盘石——全球化的新经济平台》主题演讲。他提到，今天的中国已经不再是以前那个劳动密集型的国家，更多实体经济企业正在拥抱新技术，利用大数据、人工智能等互联网技术，趋势不可阻挡。"
        },
        {
          url: require("../assets/home/carousel2.jpg"),
          time: "5.26",
          intro:
            "2019年5月26日，中国国际大数据产业博览会在贵阳举行，盘石董事长田宁受邀并出席此次博览会。在“数字产业化、产业数字化”高端对话上，田宁与2018年诺贝尔经济学奖获得者保罗·罗默、中国工程院院士倪光南、中科院科技战略咨询研究院院长潘教峰等国内外嘉宾就“数字化城市转型发展与创新实践”展开了对话。"
        },
        {
          url: require("../assets/home/carousel3.jpg"),
          time: "5.08",
          intro:
            "2019年5月6-8日，“以信息化培育新动能 用新动能推动新发展 以新发展创造新辉煌”第二届数字中国建设峰会在福州举行，盘石董事长田宁受邀出席并在数字海丝分论坛与嘉宾展开精彩高峰对话。"
        },
        {
          url: require("../assets/home/carousel4.jpg"),
          time: "9.20",
          intro:
            "2018年9月20日，盘石董事长田宁与美国密歇根州州长里克·斯奈德洽谈投资贸易，寻求合作共赢。"
        }
      ]
    },
    economy: {
      title: "全球数娱经济",
      btnText: "start",
      url: require("../assets/home/up_bg.png")
    }
  },
  operatorPage: {
    capacityChunk: {
      headDecorate: {
        title: "AI智能推荐",
        slogan:
          "AI智能算法，解决多国人民不同数娱需求，结合海量数据，让内容以千人千面的呈现，为全球人民提供不一样的定制，同样的精彩"
      },
      capacityList: [
        {
          title: "盘石PData人工智能",
          url: require("../assets/operator/capacity_01.png"),
          remark: "全球部署数千台服务器，海量数据整合"
        },
        {
          title: "大数据DMP",
          url: require("../assets/operator/capacity_02.png"),
          remark: "全球部署数千台服务器，海量数据整合"
        },
        {
          title: "全球DSP、SSP推广系统",
          url: require("../assets/operator/capacity_03.png"),
          remark: "全球部署数千台服务器，海量数据整合"
        },
        {
          title: "全球移动视频卫星直播系统",
          url: require("../assets/operator/capacity_04.png"),
          remark: "全球部署数千台服务器，海量数据整合"
        }
      ]
    },
    exquisiteChunk: {
      headDecorate: {
        title: "精细化运营",
        slogan:
          "精细化运营结合渠道监控、流程转化和用户行为等数据，对流失率较高的用户环节展开针对性的运营活动，用最小的成本，撬动最大的流量价值"
      },
      channelNameList: [
        {
          name: "微博",
          normalOpacity: "0.2",
          size: "32px",
          position: { top: "29px", left: "9px", animationDuration: "4s" }
        },
        {
          name: "活动",
          normalOpacity: "0.4",
          size: "37px",
          position: { top: "89px", left: "28px", animationDuration: "2s" }
        },
        {
          name: "新闻媒体",
          normalOpacity: "0.3",
          size: "28px",
          position: { top: "161px", left: "35px", animationDuration: "3s" }
        },
        {
          name: "新闻媒体",
          normalOpacity: "0.3",
          size: "26px",
          position: { top: "0px", left: "176px", animationDuration: "3.6s" }
        },
        {
          name: "微信",
          normalOpacity: "0.6",
          size: "48px",
          position: { top: "29px", left: "94px", animationDuration: "3.5s" }
        },
        {
          name: "ASO",
          normalOpacity: "1",
          size: "25px",
          position: { top: "87px", left: "138px", animationDuration: "4s" }
        },
        {
          name: "论坛",
          normalOpacity: "0.4",
          size: "33px",
          position: { top: "128px", left: "162px", animationDuration: "3s" }
        },
        {
          name: "微博",
          normalOpacity: "0.4",
          size: "38px",
          position: { top: "14px", left: "297px", animationDuration: "5s" }
        },

        {
          name: "应用市场",
          normalOpacity: "0.85",
          size: "54px",
          position: { top: "62px", left: "222px", animationDuration: "3.9s" }
        },

        {
          name: "社区",
          normalOpacity: "0.8",
          size: "30px",
          position: { top: "150px", left: "242px", animationDuration: "5s" }
        },

        {
          name: "新闻媒体",
          normalOpacity: "0.7",
          size: "35px",
          position: { top: "19px", left: "402px", animationDuration: "6.8s" }
        },

        {
          name: "活动",
          normalOpacity: "0.5",
          size: "35px",
          position: { top: "132px", left: "319px", animationDuration: "6s" }
        },

        {
          name: "新闻媒体",
          normalOpacity: "0.2",
          size: "30px",
          position: { top: "9px", left: "602px", animationDuration: "4s" }
        },

        {
          name: "微信",
          normalOpacity: "0.2",
          size: "26px",
          position: { top: "62px", left: "502px", animationDuration: "4.3s" }
        },

        {
          name: "论坛",
          normalOpacity: "0.4",
          size: "43px",
          position: { top: "110px", left: "443px", animationDuration: "5.3s" }
        },

        {
          name: "ASO",
          normalOpacity: "0.8",
          size: "32px",
          position: { top: "160px", left: "391px", animationDuration: "3.4s" }
        },

        {
          name: "活动",
          normalOpacity: "0.5",
          size: "43px",
          position: { top: "50px", left: "577px", animationDuration: "4.2s" }
        },

        {
          name: "新闻媒体",
          normalOpacity: "0.3",
          size: "26px",
          position: { top: "124px", left: "550px", animationDuration: "3.8s" }
        },
        {
          name: "微博",
          normalOpacity: "0.1",
          size: "32px",
          position: { top: "164px", left: "509px", animationDuration: "4.2s" }
        },

        {
          name: "活动",
          normalOpacity: "0.4",
          size: "33px",
          position: { top: "126px", left: "673px", animationDuration: "5s" }
        },
        {
          name: "微信",
          normalOpacity: "0.3",
          size: "26px",
          position: { top: "175px", left: "584px", animationDuration: "3.5s" }
        }
      ]
    },
    memberChunk: {
      headDecorate: {
        title: "会员邀请体系",
        slogan:
          "从大而全的泛经济，到小而美的圈层经济，良性的会员制度、成长体系以及激励政策有助于形成良好的互联网生态圈"
      },
      memberList: [
        {
          slogan: "公司会员制",
          icon: require("../assets/operator/icon_01.png"),
          color: "#5C6E89"
        },
        {
          slogan: "终身会员制 ",
          icon: require("../assets/operator/icon_02.png"),
          color: "#98835E"
        },
        {
          slogan: "普通会员制 ",
          icon: require("../assets/operator/icon_03.png"),
          color: "#50728E"
        },
        {
          slogan: "内部信用卡会员制",
          icon: require("../assets/operator/icon_04.png"),
          color: "#6C6C6C"
        }
      ]
    },
    benefitChunk: {
      benefitList: [
        {
          title: "能够为客户带来什么？",
          list: [
            "①、享有优先和优惠的权利",
            "②、享受独特服务",
            "③、参加会员活动",
            "④、显示会员身份和地位"
          ]
        },
        {
          title: "能够为企业带来什么？",
          list: [
            "①、建立长期稳定的用户群",
            "②、互相交流改进产品",
            "③、提升客户的忠诚度",
            "④、提高新产品开发能力和服务能力",
            "⑤、客观的会员费收入"
          ]
        }
      ]
    }
  },
  aboutPage: {
    description: {
      cn: {
        name: "田宁",
        position: "盘石创始人，董事长兼CEO"
      },
      introduce: `<p>                田宁，盘石集团董事长，RockyPlay董事会主席，毕业于浙江大学。2004年创立盘石集团，并担任董事长，RockyPlay为盘石集团的全资子公司。盘石集团致力于以大数据、人工智能技术为核心驱动的全球新经济建设与发展。田宁被世界经济论坛(WEF)授予
                "全球青年领袖"，同时担任浙商全球总会互联网委员会主席,
                中国移动通信联合会副会长，杭州电子商务协会理事长。田宁多次受邀出席世界互联网大会、G20峰会、金砖峰会、达沃斯论坛等活动并发表演讲，为全球经济发展建言献策。
</p>`
    },
    carouselList: [
      {
        url: require("../assets/about/companyIntro_1.jpg"),
        intro:
          "RockyPlay创立于2014年，是盘石集团旗下专注于全球数字娱乐产品研发、运营的全资子公司，致力于通过互联网大数据、人工智能及移动应用，让全球用户更方便、快捷的享受到数字娱乐带来的极致体验。"
      },
      {
        url: require("../assets/about/companyIntro_2.jpg"),
        intro:
          "RockyPlay拥有中国中央电视台、中国移动、中国地方卫视，海内外各大影视剧公司等海外版权，同步通过全球本地化采购IP，涵盖海外影视、游戏、文学、工具等内容，建立起了极其丰富的内容生态，并打磨和发布了数千款移动内容产品，产品服务覆盖全球数十亿的用户，充分满足了全球用户的娱乐、阅读、生活等需要。"
      },
      {
        url: require("../assets/about/companyIntro_3.jpg"),
        intro:
          "RockyPlay已经在在泰国、印度、印尼、菲律宾、西班牙、俄罗斯、乌克兰、南非等20余个国家设有分子公司或办事处。整合了全球各大移动运营商、200多个国家和地区的广告位和手机应用等资源，打造了庞大的流量资源平台，加速RockyPlay产品在海外的落地。同时，帮助全球数千家移动广告企业实现移动用户全球增长，为他们提供最优的变现方案。"
      }
    ],
    cultureList: [
      {
        url: require("../assets/about/sword1.png"),
        title: "莫问剑",
        remark: "一切以结果为导向，客户是衣食父母"
      },
      {
        url: require("../assets/about/sword2.png"),
        title: "竞星剑",
        remark: "共享共担，坚持团队集体奋斗"
      },
      {
        url: require("../assets/about/sword3.png"),
        title: "天瀑剑",
        remark: "随时迎接变化，敢于创新"
      },
      {
        url: require("../assets/about/sword4.png"),
        title: "日月剑",
        remark: "积极乐观，永不放弃"
      },
      {
        url: require("../assets/about/sword5.png"),
        title: "青干剑",
        remark: "不断超越，天道酬勤"
      },
      {
        url: require("../assets/about/sword6.png"),
        title: "游龙剑",
        remark: "正直诚信，言出必践"
      },
      {
        url: require("../assets/about/sword7.png"),
        title: "舍神剑",
        remark: "敬业担责，担当责任，为自己和家人的幸福而不懈努力"
      }
    ],
    developList: [
      {
        url: require("../assets/about/develop_01.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_02.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_03.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_04.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_05.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_05.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      },
      {
        url: require("../assets/about/develop_05.png"),
        year: 2004,
        sign: "介绍特殊事件介绍特殊事件介绍特殊事件介绍特殊事件"
      }
    ],
    influenceList: [
      {
        pictureUrl: require("../assets/about/influence_01.png"),
        title: "田宁和美国国务卿希拉里"
      },
      {
        pictureUrl: require("../assets/about/influence_02.png"),
        title: "田总在APEC日本峰会上与新加坡国务资政吴作栋合影"
      },
      {
        pictureUrl: require("../assets/about/influence_03.png"),
        title: "田总作为新经济企业代表出席G20峰会并与澳大利亚女总理吉拉德合影"
      },
      {
        pictureUrl: require("../assets/about/influence_04.png"),
        title: "大连夏季达沃斯论坛隆重召开 盘石总裁田宁出席并发表主题演讲"
      },
      {
        pictureUrl: require("../assets/about/influence_05.png"),
        title: "埃塞俄比亚总理"
      },
      {
        pictureUrl: require("../assets/about/influence_06.png"),
        title: "阿富汗总统"
      },
      {
        pictureUrl: require("../assets/about/influence_07.png"),
        title: "巴基斯坦总理谢里夫"
      },
      {
        pictureUrl: require("../assets/about/influence_08.png"),
        title: "俄罗斯副总理 尤里•特鲁特涅夫接见"
      },
      {
        id: "1",
        pictureUrl: require("../assets/about/influence_09.png"),
        title: ""
      }
    ],
    missionList: [
      {
        url: require("../assets/about/mission_01.png"),
        sign: "田宁加盟“跑男团”现身天津，为留守儿童点燃梦想"
      },
      {
        url: require("../assets/about/mission_02.png"),
        sign: "浙大动科院百年院庆田宁捐赠1000万"
      },
      {
        url: require("../assets/about/mission_03.png"),
        sign: "精准扶贫盘石在行动，田宁走访湖北鹤峰县"
      }
    ]
  },
  productPage: {
    chunkHead: {
      readIP: "全球IP",
      numGame: "数字游戏",
      contact: "视频社交",
      recreation: "掌上娱乐",
      study: "智能学习",
      culture: "文化传播",
    },
    productNav: [
      {
        route: 'read',
        url: require("../assets/product/Bitmap1.png"),
        sign: "阅读"
      },
      {
        route: 'game',
        url: require("../assets/product/Bitmap2.png"),
        sign: "游戏"
      },
      {
        route: 'video',
        url: require("../assets/product/Bitmap3.png"),
        sign: "视频"
      },
      {
        route: 'study',
        url: require("../assets/product/Bitmap4.png"),
        sign: "学习"
      },
      {
        route: 'recreation',
        url: require("../assets/product/Bitmap5.png"),
        sign: "轻娱乐"
      }
    ],
    readIPChunk: {
      pro_1: {
        title: "阅读",
        remark: "全球数字阅读IP平台，致力于打造“平台+写手+内容+终端+应用”的产业链条一体化服务，形成阅读IP的立体化运作，让阅读IP在各环节形成生态圈，相互影响，共同发展，让用户享受沉浸式体验。",
      },
      pro_2: {
        title: "IP共创",
        remark: "打通原创作者与用户的沟通屏障，让网络文学实现IP共创。从最基础的故事大纲，到世界观的完善，到周边的衍生，让用户全面参与到原创作者的写作，成为优质内容产生的新驱动力。 "
      },
      pro_3: {
        title: "优质内容",
        remark: "以用户为中心，持续生产和输出优质内容，吸引新用户，增强用户黏性，从而更好的激发生产市场，激活消费潜力，孵化粉丝经济。",
      },
      pro_4: {
        title: "私人定制",
        remark: "千人千面的矩阵发行系统、多语言的同步翻译能力、大数据精准挖掘和强力渗透能力，能更好的支持海内外多国家同步实时更新，及时满足粉丝对于内容的需求。 ",
      }
    },
    numGameChunk: {
      pro_1: {
        title: "游戏",
        remark: "全球数字IP游戏互动娱乐平台，以全新的数字技术，全新的理念，以强有力的游戏IP概念去唤醒游戏的生命力，从而与玩家建立更深层次的联系，激发用户对游戏的兴趣和联想，让用户自主参与与分享。 "
      },
      pro_2: {
        title: "经典游戏",
        remark: "汇聚全球简便的经典游戏，让全球用户能够体验到不同年代的经典，降低用户进入游戏的门槛，减少用户初次体验游戏的学习成本。 ",
      },
      pro_3: {
        title: "类目全覆盖",
        remark: "3000+游戏，覆盖动作、冒险、射击、格斗、音乐、益智、赛车、战略、棋牌、体育等全类型 。利用大数据精准算法根据玩家喜好精准推送游戏，使玩家能够高效进行选择与深度体验。 ",
      },
      pro_4: {
        title: "互动社交",
        remark: "精精彩的游戏剧情、海量会员权益、互动的社交模式，为用户提供全面丰富的娱乐生活。多国家多语言的全球发行模式， 让全球玩家聚集到游戏平台，形成良好的国际文化交流氛围。 "
      }
    },
    videoChunk: {
      pro_1: {
        title: "视频",
        remark: "全球视频IP平台，致力于将全球优质影视与短视频充分结合，在保障视频质量的同时开启全球视频社交模式，充分满足不同用户的各类需求，为用户开启视频盛宴，打造属于全球用户的优质IP、独家IP。"
      },
      pro_2: {
        title: "影视剧",
        remark: "汇聚全球海量的优秀影视剧，为全球用户带来震撼的视听盛宴， 丰富的强IP全球性储备，也会让全球用户，感受到不同民族地区的不同风情。同时让用户深度参与到影视IP内容生产和营销中， 推动影视产业由传统的“内容+渠道”制胜进入“IP 为王”时代。",
      },
      pro_3: {
        title: "短视频",
        remark: "基于智能数据算法的社交类短视频记录、互动和分享平台， 旨在打造素人KOL，实时分享全球优秀视频短片 ，为用户创造丰富多样的玩法，让全球用户在生活中轻松快速向世界展示精彩的生活。 ",
      },
      pro_4: {
        title: "特色",
        remark: "<p>专注社交</p> <p>以用户为核心</p><p>无缝融合产品和服务 </p><p>捕捉用户足迹</p>"
      }
    },
    studyChunk: {
      pro_1: {
        title: "学习",
        remark: "全球知识学习平台，充分应用AI数据技术，对知识进行分类、更新、关联、挖掘、监管，并记录并分析用户行为及兴趣，建立用户学习智库，为全球用户提供海量优质课程，平台专注知识的在线学习和共享，打造独特的个性化学习体验。 "
      },
      pro_2: {
        title: "知识星球",
        remark: "涵盖语言学习、运动健身、塑型美妆、演讲口才、幼儿启蒙等多样优质资源，满足各年龄段的学习需求，打造星球级的知识库。 "
      },
      pro_3: {
        title: "AI数据",
        remark: "基于大数据技术的用户偏好分析，进行用户画像，发掘触达用户兴趣的通道，结合兴趣进行多种语言培训，达到精准高效的培训效果。"
      },
      pro_4: {
        title: "知识分享",
        remark: "高质量信息的实时更新，为用户传播价值，自由的思想传播平台，让世界听到你的意见。 "
      }
    },
    recreationChunk: {
      pro_1: {
        title: "轻娱乐",
        remark: "全球轻娱乐平台专注开发一站式智能生活服务，在云端汇集全球优质资源，全球用户可根据需求浏览、试用、下载。同时平台具备多样化轻工具箱，“打包”服务，一键享受，为用户的工具需求量体裁衣，帮助用户轻松管理线上生活。 "
      },
      pro_2: {
        title: "一站式平台",
        remark: "为全球用户提供娱乐生活的各种资源，包括精美壁纸、个性铃声、星座测试等内容，以及日历、天气等轻工具。实时更新，不断优化，提供全方位精致的线上生活。"
      },
      pro_3: {
        title: "全设备共享",
        remark: "以互联网和大数据实现智慧互联，帮助用户进行即时互动。稳定的服务系统，支持多地域、多时间、多设备访问，不论何时何地，都能满足用户的信息或娱乐需求。 "
      },
      pro_4: {
        title: "个性化生活",
        remark: "AI技术记录用户的兴趣偏好和行为数据，预测用户的喜好并自动推送相关内容，帮助用户定制娱乐产品，为用户提供丰富智能生活的更多方案。 "
      }
    }
  },
  mediaPage: {
    carouselList: [
      {
        url: require('../assets/media/banner3.jpg'),
        remark: '2016秋季产品发布会'
      },
      {
        url: require('../assets/media/banner4.jpg'),
        remark: 'MWC2018世界移动大会'
      },
      {
        url: require('../assets/media/banner5.jpg'),
        remark: 'MWC2018世界移动大会'
      }
    ],
    reportList: [
      {
        id: 2,
        title: "品牌报道"
      },
      {
        id: 3,
        title: "公司动态"
      },
      {
        id: 4,
        title: "媒体视频"
      }
    ]
  },
  talentsPage: {
    nationList: [
      require("../assets/talents/welfare01.jpg"),
      require("../assets/talents/welfare02.jpg"),
      require("../assets/talents/welfare03.jpg"),
      require("../assets/talents/welfare04.jpg"),
      require("../assets/talents/welfare05.jpg")
    ],
    teamList: [
      require("../assets/talents/team_01.jpg"),
      require("../assets/talents/team_02.jpg"),
      require("../assets/talents/team_03.jpg"),
      // require("../assets/talents/team_04.jpg"),
      require("../assets/talents/team_05.jpg"),
      require("../assets/talents/team_06.jpg"),
      require("../assets/talents/team_07.jpg")
    ],
    globalList: [
      require("../assets/talents/yd.png"),
      require("../assets/talents/flb.png"),
      require("../assets/talents/mjl.png"),
      require("../assets/talents/jpz.png"),
      require("../assets/talents/tg.png"),
      require("../assets/talents/nbe.png"),
      require("../assets/talents/md.png"),
      require("../assets/talents/ydnxy.png"),
      require("../assets/talents/more.png")
    ]
  }
};
