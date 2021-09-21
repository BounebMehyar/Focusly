import '../Styles/Banner.css'
import logo from '../Assets/wind.mp3'
import rain from '../Assets/rain.mp3'
import lofi from '../Assets/lofi.mp3'
function Banner(){
    
    function play(i) {
        if(i===4){for(let j=0;j<4;j++){var x=document.getElementById("audio"+j);
    x.pause();
    x.currentTime = 0;}}
        else{var audio = document.getElementById("audio"+i);
        if(audio.paused){
        audio.play();}
    else{audio.pause()}}
      }

    const elements=[<i class="fas fa-tint"></i>,<i class="fas fa-bolt"></i>,<i class="fas fa-wind"></i>,<i class="fas fa-compact-disc"></i>,<i class="fas fa-volume-mute"></i>];
    return(<div className="Banner">
    <h1>Focusly</h1>
    <div className="Buttons-div">
        {elements.map((ele)=><button onClick={()=>play(elements.indexOf(ele))}>{ele}</button>)}
        <div class="rayen"><i class="fa fa-volume-down"></i><input id="meter" type="range" onChange={function(e){for(let j=0;j<4;j++){var x=document.getElementById("audio"+j);
        x.volume=e.currentTarget.value/100;}}}>
        </input><i class="fa fa-volume-up"></i></div>
    </div>
    <audio id="audio0" src={rain} loop></audio>
    <audio id="audio1" src="https://www.rainymood.com/audio1112/0.mp3" loop></audio>
    <audio id="audio2" src={logo} loop></audio>
    <audio id="audio3" src={lofi} loop></audio>
    </div>
    );
}
export default Banner;