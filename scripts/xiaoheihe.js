// @ts-check
// @ts-ignore
const body = $response.body
let result = ''
const loadApi = 'account/tips_state'
const banner = 'bbs/app/feeds/news'
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
    result = JSON.stringify(obj)
    // @ts-ignore
    $done({ body: result })
  } catch (err) {
    console.log(err)
  }
}
