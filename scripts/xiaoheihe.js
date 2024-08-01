// @ts-check
// @ts-ignore
const body = $response.body
let result = ''
const loadApi = 'account/tips_state'
const banner = 'bbs/app/feeds/news'
const nav = 'maxnews/app/setup/favour'
if (!body) {
  // @ts-ignore
  $done({})
} else {
  try {
    let obj = JSON.parse(body)
    // 第一次加载时返回
    // @ts-ignore
    if ($request.url.includes(loadApi)) {
      obj.result.show_middle_tab = 1
      obj.result.share_douyin_im = '1'
      obj.result.recommend_switch_notify = 1
      obj.result.hide_list_img_detail = 0
      obj.result.show_member_bulletin = 1
      obj.result.show_mobile_game = 0
      const { tab_config } = obj.result
      if (tab_config) {
        tab_config.first_tab.entry = [
          {
            key: '/bbs/recommend',
            title: '推111荐',
          },
        ]
      }
    }
    // banner去广告
    // @ts-ignore
    if ($request.url.includes(banner)) {
      const first = obj.result?.links[0]
      const { banners } = first
      const newBanners = banners.filter(item => !item.ad_report)
      first.banners = newBanners
    }
    // nav
    // @ts-ignore
    if ($request.url.includes(nav)) {
      obj.result.options[0].children = [
        {
          tag: {
            tag: '全部',
            key: -1,
          },
          pic_url:
            'https://cdn.max-c.com/heybox/dailynews/img/7388a5e596e05b027fa997a8f43ec120.png',
          topic_id: -1,
          name: '全部',
        },
        {
          tag: {
            tag: '热榜',
            key: 'hot_news',
          },
          pic_url:
            'https://imgheybox.max-c.com/oa/2022/09/29/e47f9595e41189708cde0d504bd827de.png',
          topic_id: -1,
          name: '热榜',
        },
        {
          tag: {
            mask: 0,
            key: 'HotSpots',
          },
          pic_url:
            'https://cdn.max-c.com/heybox/dailynews/img/b3c6f2f9af2eea0d97ca0ef811d9821c.png',
          name: '盒友杂谈',
          topic_id: 7214,
        },
        {
          pic_url:
            'https://cdn.max-c.com/heybox/dailynews/img/fa8928d8fa5a73dde6fab2a4e0056b0f.png',
          name: '数码硬件',
          topic_id: 18745,
        },
        {
          pic_url:
            'https://i1.max-c.com/imgx/2022/04/26/6862fa12c1cf40d5b4f3c53b6c9c758f1650947284.ico',
          name: '双人成行',
          topic_id: 426025,
        },
      ]
    }
    result = JSON.stringify(obj)
    // @ts-ignore
    $done({ body: result })
  } catch (err) {
    console.log(err)
  }
}
