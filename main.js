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
  'r': 'renren.com',
  't': 'tianya.com',
  'y': 'youtube.com',
  'u': 'uc.com',
  'i': 'iqiyi.com',
  'o': 'opera.com',
  'p': 'pixiv.com',
  'a': 'acfun.tv',
  's': 'sohu.com',
  'z': 'zhihu.com',
  'm': 'www.mcdonalds.com.cn'
}
for (var index = 0; index < keys.length; index++) {
  div1 = document.createElement('div')
  kbdArea.appendChild(div1)
  row = keys[index]
  for (var index2 = 0; index2 < row.length; index2++) {
    kbds = document.createElement('kbd')
    kbds.innerText = row[index2]
    editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.id = row[index2]
    editButton.onclick = function(e){
      console.log(e.target)
      keyID = e.target.id
      webLocation = prompt('请输入网址')
      hash[keyID] = webLocation
    }
    kbds.appendChild(editButton)
    div1.appendChild(kbds)
  }
}
document.onkeypress = function(keyPress){
  key = keyPress['key']
  website = hash[key]
  console.log(website)
  window.open('http://' + website,'_blank')
}