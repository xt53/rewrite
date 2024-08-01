const body = $response.body
let result = ''
const onload = 'account/tips_state'
const banner = 'bbs/app/feeds/news'
if (!body) {
  $done({})
  return
}
try {
  const obj = JSON.parse(body)
  // 第一次加载时返回
  if ($request.url.includes(loadApi)) {
    obj = {
      status: 'ok',
      msg: '',
      version: '1.0',
      result: {
        chat_copyed_token_regex:
          '^(\\d)(.*?)\\n(.*?)https?://(chat.top|chat.xiaoheihe.cn)/[A-Za-z\\d]+\\n(.*?)([A-Za-z\\d]+)\\n(.*?)',
        follow_game_union: 1,
        use_old_openInjectJSWindow: '1',
        schemes: [
          'weixin',
          'alipays',
          'mqqapi',
          'douyutv',
          'dydeeplink',
          'taobao',
          'tbopen',
          'openapp.jdmobile',
          'bilibili',
          'wtloginmqq',
          'snssdk1128',
        ],
        auto_revert_traitcollection: '1',
        ios_use_old_segment: '1',
        item_button_time: 0,
        upload_log: 0,
        search_recall_style: 2,
        auto_refresh_interval: 120,
        login_provider: 'mob',
        mall_shopping_cart: 1,
        news_list_group: 'control-group',
        screenshot_share_enabled: {
          game_detail: 1,
          link_detail: 1,
        },
        game_global_price_dialog_v3: 1,
        news_list_type: 'normal',
        post_tab: 1,
        is_internal_request: false,
        show_dark_mode_config: '1',
        rank_button_time: 0,
        community_wiki_tab: 1,
        newcomer_notify_cooldown: true,
        new_topic_selector: 1,
        show_mobile_game_center_icon: 0,
        post_topic_limit: 2,
        roll_game_time: 1,
        search_welcome_page_v2: 0,
        show_post_topic_guide_once: '0',
        new_topic_selector_outside: 1,
        mobile_game_time: 1624330023,
        weapon_button_time: 0,
        listener_screen_shot: '0',
        mall_region_alert_freq: 1,
        style_switch: 2,
        bbs_text_view_small_icon: 0,
        search_welcome_page: 1,
        account_tap_time: 0,
        eventlog104: {
          app_stay_duration_report_period_second: 30,
        },
        hide_topic_entry: 1,
        cancel_slide_group: 0,
        chat_use_flutter: '1',
        show_fullscreen_award_guide: 0,
        favour_button_time: 0,
        aa_hh: 1,
        search_button_time: 0,
        show_game_impression: 1,
        me_platform_group: 1,
        link_detail_lt_desc: 1,
        show_steamcards_purchase: 0,
        copyed_token_regex: '([\\d]\\.0.{2}heybox:/ .{2})([a-zA-Z0-9]{11})(.*)',
        ios_enable_class_track: '1',
        disable_web_link_fullscreen_award: '1',
        tab_config: {
          second_tab: {
            entry: [
              {
                key: '/home/recommend',
                title: '热点',
              },
            ],
            default_checked_key: '/home/recommend',
            title: '热点',
          },
          third_tab: {
            entry: [
              {
                key: '/game/recommend_v2',
                title: '推荐',
              },
              {
                key: '/game/recommend',
                title: '推荐V1',
              },
              {
                key: '/game/recommend_v1',
                title: '推荐V111',
              },
              {
                key: '/game/rank',
                title: '榜单',
              },
            ],
            default_checked_key: '/game/recommend_v2',
            title: '游戏库',
          },
          first_tab: {
            entry: [
              {
                key: '/bbs/recommend',
                title: '推荐',
              },
            ],
            default_checked_key: '/bbs/recommend',
            title: '首页',
          },
        },
        game_tap_time: 0,
        activity_button_time: 700,
        store_button_time: 1721380590,
        news_tap_time: 0,
        show_mobile_game: 1,
        oaid_update_enable: 1,
        web_intercept_v2: 1,
        show_multidimension_score: 1,
        show_member_bulletin: 0,
        hide_list_img_detail: 0,
        recommend_switch_notify: 0,
        show_console_game_first: 0,
        valid_ws: 1,
        compress_image: 1,
        enable_scale_down_large_image: '1',
        share_douyin_im: '0',
        local_html_enabled: 1,
        link_lifecycle_use_104_log: 1,
        push_type: 'getui',
        cos_provider: 'tencent',
        show_game_purchase: 1,
        show_middle_tab: 0,
        force_use_yycoder: '0',
        switch_to_sdwebimage: '0',
        game_detail_feedback: '0',
        mall_region: 'cn',
        ios_use_yy_image: '0',
        enable_heybox_wallet: '1',
        link_detail_rt_pic: 0,
        task_button_time: 0,
        bbs_tap_time: 0,
      },
    }
  }
  // banner去广告
  if ($request.url.includes(banner)) {
    const first = obj.result?.links[0]
    const { banners } = first
    const newBanners = banners.filter(item => !item.ad_report)
    first.banners = newBanners
  }
  result = JSON.stringify(obj)
  $done({ body: result })
} catch (err) {
  console.log(err)
}
