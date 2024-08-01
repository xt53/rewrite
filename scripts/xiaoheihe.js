const body = $response.body
const result = ''
const onload = 'account/tips_state'
const banner = 'bbs/app/feeds/news'
if (!body) {
  $done({})
  return
}
try {
  const obj = JSON.parse(body)
  // 第一次加载时返回
  // if ($request.url.includes(loadApi)) {
  //   const arr = obj.result?.tab_config
  //   if (arr && arr.length) {

  //   }
  // }
  // banner去广告
  if ($request.url.includes(banner)) {
    const first = obj.result?.links[0]
    const { banners } = first
    const newBanners = banners.filter(item => !item.ad_report)
    first.banners = newBanners
  }
  result = JSON.stringify(obj)
} catch (err) {
  console.log(err)
}
