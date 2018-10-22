console.log('안녕하세요!! 브루스 챗봇입니다!!!!!!!');
window.onload = function () {
  var div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.getElementsByTagName('body')[0].appendChild(div);

  var script = document.createElement('script');
  script.setAttribute('src', './dist/build.js');
  document.getElementsByTagName('body')[0].appendChild(script);
}
