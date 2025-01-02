import  {Component} from 'react';
import './BattlefieldServer.css'; 
 


class BattlefieldServer extends Component{
  state = {
    settingsData : []
  }
  componentDidMount(){
    this.product()
  }
  product = async () =>{
    const response = await fetch('https://fog-q1-backend.onrender.com/');
    const data = await response.json();
    this.setState(() => ({settingsData:[...data]}))  
  }
  render(){
    const {settingsData} = this.state
    console.log(settingsData);
    return (
        <div className="server__body">
               
              
               
          <div className="sidey">
            <div className="side-menu__tabs">
    {[
  {
    "name": "Battlefield v",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png"
  },
  {
    "name": "Battlefield 1",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png"
  },
  {
    "name": "Battlefield 4",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png"
  },
  {
    "name": "Battlefield Hardline",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png"
  },
  {
    "name": "career",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png"
  },
  {
    "name": "watch",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg"
  },
  {
    "name": "news",
    "url": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg"
  },
  
]
.map((game, index) => (
      <a
        key={index}
        
        href={`https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-${game.name
          .toLowerCase()
          .replace(' ', '-')}`
       }
        
      >
        <img src = {game.url} alt = {index} className  = "side_bar"/>
        
      </a>
    ))}
  </div>
   
   
</div>
 
<div class="vl"></div>
            <div className="server">
                 
                 
            <div className="browser__breadcrumb">
                    <div className="browser__breadcrumb-previous-1">
                        <a href="/server-browser" className="browser__breadcrumb-back-w">
                            <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg" alt="" className="browser__breadcrumb-back" />
                        </a>
                        <a href="/game?tab=tab-multiplayer" className = "color">multiplayer</a>...
                        <div className="browser__breadcrumb-bar">/</div>
                        <a href="/server-browser" className = "color">server Browser</a>
                    </div>
                    <div className="browser__breadcrumb-h">server info</div>
                </div>
              
                <div className = "scroll"> 
                <div className="server__info-w">
                    <div className="server__name">! RC3-BASEMAPS</div>
                    <div className="server__infer">
                        <div>
                        <img src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" alt="" className="server__flag" />
                            </div> 
                        <div className="server__mode">conquest large</div>
                    <span className="server__mode">-</span> 
                        <div className="server__mode">Lancang Dam</div>
                         <span className="server__mode">-</span> 
                        <div className="server__mode">Custom</div>
                        <span className="server__mode">-</span> 
                        <div className="server__mode">60 hz</div> 
                     
                    </div>
                    <div className="server__desc">
                        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
                    </div>

                </div>

               
                <div className="server__buttons-w">
                    {['join', 'spectate', 'join as commander'].map((action, index) => (
                        <div key={index} className="server__button">
                            <div className="server__button-text">{action}</div>
                        </div>
                    ))}
              <div className="server__button server__button--favorite">
    <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8ba5feb6d6e9bb7f6_favorites%20-%20black.svg" 
         alt="" 
         className="server__favorite server__favorite--black" />
    <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg" 
         alt="" 
         className="server__favorite server__favorite--white" />
    <div className="server__button-text">13672</div>
</div>


                </div>

                 
                <CurrentStats />

               
                {!settingsData.length !== 0 ? (<Settings settings = {settingsData}/>)  :(<></>)}

                 
                <MapRotation />
                 </div>
                 </div>
                 <div data-w-id="6b37c036-931c-d490-861f-6b059f982253" className="invite">
      <div className="invite__line"></div>

      
      <div className="invite__squad">
        <div className="invite__squad-h-w">
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
            loading="lazy"
            alt=""
            className="invite__squad-icon"
          />
          <div className="invite__squad-h">squad</div>
        </div>

        <div
          data-w-id="6b37c036-931c-d490-861f-6b059f98225a"
          className="invite__join-w"
        >
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
            loading="lazy"
            alt=""
            className="invite__join-icon invite__join-icon--black"
          />
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
            loading="lazy"
            alt=""
            className="invite__join-icon invite__join-icon--default"
          />
          <div className="invite__join-h">squad join</div>
        </div>
      </div>

      <div className="invite__line"></div>

      
      <div className="invite__online">
        <div className="invite__squad-h-w">
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
            loading="lazy"
            alt=""
            className="invite__online-icon"
          />
          <div className="invite__online-h">online</div>
        </div>
        <div
          data-w-id="6b37c036-931c-d490-861f-6b059f982265"
          className="invite__join-w"
        >
          <div className="invite__friend-picture-w">
            <div className="invite__online-bar"></div>
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
              loading="lazy"
              alt=""
              className="invite__friend-picture"
            />
          </div>
          <div className="invite__friend-info">
            <div className="invite__friend-name">MaryJane</div>
            <div className="invite__friend-status">Online</div>
          </div>
        </div>
      </div>

      <div className="invite__line"></div>

      
      <div className="invite__offline">
        <div className="invite__offlin">
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
            loading="lazy"
            alt=""
            className="invite__offline-icon"
          />
          <div className="invite__offline-h">offline</div>
        </div>
        <div
          data-w-id="6b37c036-931c-d490-861f-6b059f982274"
          className="invite__join-w"
        >
          <div className="invite__friend-picture-w">
            <div className="invite__offline-bar"></div>
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
              loading="lazy"
              alt=""
              className="invite__friend-picture"
            />
          </div>
          <div className="invite__friend-info">
            <div className="invite__friend-name">420</div>
            <div className="invite__friend-status">offline</div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );}
};

const CurrentStats = () => {
    return (
        <div className="server__current-stats-w">
            {[
                { label: 'players', value: '60/64' },
                { label: 'ping', value: '104 ms' },
                { label: 'tickrate', value: '60 Hz' }
            ].map((stat, index) => (
                <Stat key={index} label={stat.label} value={stat.value} />
            ))}
        </div>
    );
};

const Stat = ({ label, value }) => {
    return (
        <div className="server__current-stats">
            <div className="server__current-stats-h">{label}</div>
            <span className = "color">{value}</span>
        </div>
    );
};
 


const Settings = ({ settings }) => {
  return (
      <div className="disp">
          {settings.map((settingGroup, index) => (
              <SettingsGroup 
                  key={index} 
                  title={settingGroup.category} 
                  items={settingGroup.items} 
              />
          ))}
      </div>
  );
};


const SettingsGroup = ({ title, items }) => {
  return (
      <div className="disp2">
          <h4>{title}</h4>
          <div>
              {items.map((item, index) => (
                  <Setting key={index} text={item.text} value={item.value} />
              ))}
          </div>
      </div>
  );
};


const Setting = ({ text, value }) => {
  return (
      <div className="server__setting">
          <span className="server__setting-text">{text}</span> 
          <span className="server__setting-value">{value}</span>
      </div>
  );
};


const MapRotation = () => {
    const maps = [
        {
            name: "dawnbreaker",
            mode: "conquest large",
            imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png",
        },
        
      {
        name: "propaganda",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png",
      },
      {
          name: "lancang dam",
          mode: "conquest large",
          imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png",
        },
        {
            name: "operation locker",
            mode: "conquest large",
            imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png",
        },
        {
          name: "propaganda",
          mode: "conquest large",
          imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png",
        },
      {
        name: "lancang dam",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png",
      },
      {
        name: "golmud railway",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png",
      },
      {
        name: "siege of shanghai",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png",
    },
    {
      name: "golmud railway",
      mode: "conquest large",
      imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png",
    },
      {
        name: "lancang dam",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png",
      }
      , {
        name: "propaganda",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png",
      },
      {
        name: "operation locker",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png",
      },
      {
        name: "dawnbreaker",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png",
    },
    
  {
    name: "propaganda",
    mode: "conquest large",
    imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png",
  },
  {
      name: "lancang dam",
      mode: "conquest large",
      imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png",
    },
    {
        name: "operation locker",
        mode: "conquest large",
        imageUrl: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png",
    },
    
    ];
  
    return (
      <>
        <h4>Map Rotation</h4>
        <div className = "alignFlex">

        {maps.map((map, index) => (
          <Map key={index} name={map.name} mode={map.mode} imageUrl={map.imageUrl} />
        ))}
        </div>
       
      </>
    );
  };

const Map = ({ name, mode, imageUrl }) => {
    return (
        <div className="server__map">
            <img src={imageUrl} alt={name} loading='eager' />
            <div className = "align"> {mode}: {name}</div>
        </div>
    );
};

export default BattlefieldServer;
