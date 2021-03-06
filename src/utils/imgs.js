
// 开发环境：指向 public 目录
let cdnUrl = '/'
// 线上环境
// let cdnUrl = 'https://qiniu.com/qf/webapp'

export default {

  logo: ()=>import('@/assets/logo.png'),
  a: ()=>import('@/assets/imgs/a.png'),

  jdicon: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg.dpg',

  car: cdnUrl + 'icons/car.png',
  train: cdnUrl + 'icons/train.png',
  plane: cdnUrl + 'icons/plane.png'
}
