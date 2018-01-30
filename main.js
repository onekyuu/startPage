var keys = {
  '0': { '0': 'q', '1': 'w', '2': 'e', '3': 'r', '4': 't', '5': 'y', '6': 'u', '7': 'i', '8': 'o', '9': 'p', length: '10' },
  '1': { '0': 'a', '1': 's', '2': 'd', '3': 'f', '4': 'g', '5': 'h', '6': 'j', '7': 'k', '8': 'l', length: '9' },
  '2': { '0': 'z', '1': 'x', '2': 'c', '3': 'v', '4': 'b', '5': 'n', '6': 'm', length: '7' },
  'length': 3
}
var hash = {
  'q': 'qq.com',
  'w': 'weibo.com',
  'e': 'ele.me',
  'r': 'sns.renren.com',
  't': 'taobao.com',
  'y': 'youku.com',
  'u': 'uc.cn',
  'i': 'iqiyi.com',
  'o': 'opera.com',
  'p': 'pixiv.net',
  'a': 'acfun.cn',
  's': 'sogou.com',
  'd': 'douban.com',
  'f': 'ifeng.com',
  'g': 'github.com',
  'h': 'firefox.com',
  'j': 'jianshu.com',
  'k': 'kaixin001.com',
  'l': 'linkedin.com',
  'z': 'zhihu.com',
  'x': 'xiami.com',
  'c': 'cctv.com',
  'v': 'v2ex.com',
  'b': 'bilibili.com',
  'n': '',
  'm': 'xiaomi.com'
}
var iconSrc = {
  'q': 'qq',
  'w': 'weibo',
  'e': 'eleme',
  'r': 'renren',
  't': 'taobao',
  'y': 'youku',
  'u': 'uc',
  'i': 'iqiyi',
  'o': 'opera',
  'p': 'pixiv',
  'a': 'acfun',
  's': 'sogou',
  'd': 'douban',
  'f': 'fenghuang',
  'g': 'github',
  'h': 'firefox',
  'j': 'jianshu',
  'k': 'kaixin',
  'l': 'linkedin',
  'z': 'zhihu',
  'x': 'xiami',
  'c': 'cctv',
  'v': 'v2ex',
  'b': 'bilibili',
  'n': '',
  'm': 'xiaomi',
  '`': 'dot'
}
//发现localStorage变更，覆盖原hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('newPage') || 'null')
var iconSrcInLocalStorage = JSON.parse(localStorage.getItem('newIcon') || 'null')

if (hashInLocalStorage) {
  hash = hashInLocalStorage
}
if (iconSrcInLocalStorage) {
  iconSrc = iconSrcInLocalStorage
}
//遍历keys，生成kbd标签
for (var index = 0; index < keys.length; index++) {
  var div1 = document.createElement('div')
  kbdArea.appendChild(div1)
  var row = keys[index]
  for (var index2 = 0; index2 < row.length; index2++) {
    var kbds = document.createElement('kbd')
    kbds.innerText = row[index2]
    var editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.id = row[index2]
    //添加图标
    var iconName = iconSrc[row[index2]]
    var icon = document.createElement('img')
    icon.classList.add(row[index2] + '-img')
    if (iconName) {
      icon.src = './img/' + iconName + '.png'
    } else {
      icon.src = './img/none.png'
    }
    //点击Edit，设置网址
    editButton.onclick = function (e) {
      keyID = e.target.id
      var webLocation = prompt('请输入网址')
      hash[keyID] = webLocation
      console.log(webLocation === true)
      //设置、清除图标
      if (webLocation) {
        iconSrc[keyID] = 'dot'
        var img = document.getElementsByClassName(keyID + '-img')[0].src = './img/dot.png'
      } else {
        iconSrc[keyID] = ''
        var img = document.getElementsByClassName(keyID + '-img')[0].src = './img/none.png'
      }
      //localStorage变更
      localStorage.setItem('newPage', JSON.stringify(hash))
      localStorage.setItem('newIcon', JSON.stringify(iconSrc))
    }
    kbds.appendChild(icon)
    kbds.appendChild(editButton)
    div1.appendChild(kbds)
  }
}

document.onkeypress = function (keyPress) {
  var key = keyPress['key']
  var website = hash[key]
  window.open('http://' + website, '_blank')
}