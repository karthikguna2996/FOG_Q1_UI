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
    const response = await fetch('http://localhost:3001/');
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
      'Battlefield v',
      'Battlefield 1',
      'Battlefield 4',
      'Battlefield Hardline',
      'career',
      'watch',
      'news',
      'help',
    ].map((game, index) => (
      <a
        key={index}
        href={`https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-${game
          .toLowerCase()
          .replace(' ', '-')}`}
        className={`side-menu__game side-menu__game--${game
          .toLowerCase()
          .replace(' ', '-')}`}
      >
        <div className="side-menu__popup">
          <div className="side-menu__text">{game}</div>
        </div>
      </a>
    ))}
  </div>
  <div className="side-menu__bar"></div>
</div>
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

                {/* Buttons Section */}
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

                {/* Current Stats Section */}
                <CurrentStats />

                {/* Settings Section */}
                {!settingsData.length !== 0 ? (<Settings settings = {settingsData}/>)  :(<></>)}

                {/* Map Rotation Section */}
                <MapRotation />
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
      // Add more maps as needed
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
