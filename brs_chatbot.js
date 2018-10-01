window.onload = function() {
    var div = document.createElement('div');
    div.setAttribute('id', 'brs');
    document.getElementsByTagName('body')[0].appendChild(div);

    var script = document.createElement('script');
    script.setAttribute('src', 'https://babahironobu.github.io/chatbot/dist/build.js');
    document.getElementsByTagName('body')[0].appendChild(script);
}
