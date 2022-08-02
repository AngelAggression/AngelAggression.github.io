/*
 * @Description: 
 * @Author: lz
 * @Date: 2022-02-23 17:03:02
 * @LastEditors: lz
 * @LastEditTime: 2022-02-25 09:49:43
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    // volume-->初始音量
    volume: 0.3,
    mutex: false,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 0,
    fixed: true,
    audio: [{
        name: 'Celebrity',
        artist: 'IU',
        url: 'http://music.163.com/song/media/outer/url?id=1815389717.mp3',
        cover: 'http://p4.music.126.net/5G0jdorNO1vRvJDys7kESw==/109951165669210873.jpg',
    
    },
    {
        name: '해볼래',
        artist: 'SISTAR',
        url: './music/2.mp3',
        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20210701/20210701094823218.jpg',
          
    },
    {
        name:'让一切随风',
        artist:'钟镇涛',
        url:'./music/3.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20150720/20150720212819383002.jpg',
        
    },
    {
        name:'リバイブ',
        artist:'UNIONE',
        url:'./music/4.mp3',
        cover:'http://imge.kugou.com/stdmusic/150/20200909/20200909133256211470.jpg',
        
    }
      ]
});