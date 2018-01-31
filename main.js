//初始化
var websiteObj = init()
var keys = websiteObj.keys
var domain = websiteObj.domain
var iconSrc = websiteObj.src

//创建键盘
createKeyborad(keys, domain, iconSrc)

//监听用户行为
listenToUser(domain)

switchLight()

function init() {
  var keys = {
    '0': { '0': 'q', '1': 'w', '2': 'e', '3': 'r', '4': 't', '5': 'y', '6': 'u', '7': 'i', '8': 'o', '9': 'p', length: '10' },
    '1': { '0': 'a', '1': 's', '2': 'd', '3': 'f', '4': 'g', '5': 'h', '6': 'j', '7': 'k', '8': 'l', length: '9' },
    '2': { '0': 'z', '1': 'x', '2': 'c', '3': 'v', '4': 'b', '5': 'n', '6': 'm', length: '7' },
    'length': 3
  }
  var domain = {
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
    'v': 'wx.qq.com',
    'b': 'bilibili.com',
    'n': 'music.163.com',
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
    'v': 'weixin',
    'b': 'bilibili',
    'n': 'neteasemusic',
    'm': 'xiaomi',
    '`': 'dot'
  }
  //获取localStorage中的数据
  var domainInLocalStorage = getFromLocalStorage('newPage')
  var iconSrcInLocalStorage = getFromLocalStorage('newIcon')
  //发现localStorage中domain变更，覆盖原domain
  if (domainInLocalStorage) {
    domain = domainInLocalStorage
  }
  //发现localStorage中iconSrc变更，覆盖原iconSrc
  if (iconSrcInLocalStorage) {
    iconSrc = iconSrcInLocalStorage
  }
  return {
    'keys': keys,
    'domain': domain,
    'src': iconSrc
  }
}
function switchLight(){
  switchButton = document.getElementById('switch')
  span = document.getElementById('text')
  canvas = document.getElementById('canvas')
  kbdArea = document.getElementById('kbdArea')
  switchButton.onclick = function(){
    if(switchButton.classList.contains('dark')) {
      switchButton.classList.remove('dark')
      span.textContent = 'Light'
      canvas.classList.remove('dark')
      kbdArea.classList.remove('dark')
    }else{
      switchButton.classList.add('dark')
      span.textContent = 'Dark'
      canvas.classList.add('dark')
      kbdArea.classList.add('dark')
    }
  }
}

function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
  return document.createElement(tagName)
}

function createButton(id) {
  var editButton = tag('button')
  editButton.innerText = 'Edit'
  editButton.id = id

  //点击Edit，设置网址
  editButton.onclick = function (e) {
    keyID = e.target.id
    var webLocation = prompt('请输入网址')
    domain[keyID] = webLocation

    //设置、清除图标
    if (webLocation) {
      iconSrc[keyID] = 'dot'
      var img = document.getElementsByClassName(keyID + '-img')[0].src = './img/dot.png'
    } else {
      iconSrc[keyID] = ''
      var img = document.getElementsByClassName(keyID + '-img')[0].src = './img/none.png'
    }

    //localStorage变更
    localStorage.setItem('newPage', JSON.stringify(domain))
    localStorage.setItem('newIcon', JSON.stringify(iconSrc))
  }
  return editButton
}

function createIcon(id) {
  var iconName = iconSrc[id]
  var icon = tag('img')
  icon.classList.add(id + '-img')
  if (iconName) {
    icon.src = './img/' + iconName + '.png'
  } else {
    icon.src = './img/none.png'
  }
  return icon
}

function createKeyborad(keys, domain, iconSrc) {
  for (var index = 0; index < keys.length; index++) {
    var div = tag('div')
    kbdArea.appendChild(div)

    var row = keys[index]

    for (var index2 = 0; index2 < row.length; index2++) {
      var editButton = createButton(row[index2])

      var icon = createIcon(row[index2])

      var kbds = tag('kbd')
      kbds.classList.add('kbd')

      kbds.innerText = row[index2]
      kbds.appendChild(icon)
      kbds.appendChild(editButton)

      div.appendChild(kbds)
    }
  }
}
function listenToUser(domain) {
  document.onkeypress = function (keyPress) {
    var key = keyPress['key']
    var website = domain[key]
    window.open('http://' + website, '_blank')
  }
}




