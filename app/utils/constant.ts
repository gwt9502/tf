export const BASEURL = {
  taobao: 'http://gw.api.taobao.com/router/rest',
  jd: 'https://api.jd.com/routerjson',
}

export const APPSECRET = {
  taobao: 'f914b23f3607f887cb62a81abedea1b6',
  jd: '90f0cfe27d134ad1b27588fa3a818ff5',
}

export const APPKEY = {
  taobao: '34032315',
  jd: '721b90e57c9b6903abaf4aefb0abf039',
}

export const PID = {
  taobao: 'mm_128321253_2568150349_111884600268'
}

export const DEFAULTPARAMS = {
  taobao: {
    app_key: APPKEY.taobao,
    v: '2.0',
    sign_method: 'md5',
    format: 'json',
    simplify: true,
    adzone_id: '111884600268',
    pid: PID.taobao,
  },
  jd: {
    app_key: APPKEY.jd,
    format: 'json',
    v: '1.0',
    sign_method: 'md5',
  }
}