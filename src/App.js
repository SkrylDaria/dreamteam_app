import React, {useState} from 'react';
import './styles/App.css'
import Plays from './Plays';
import Dream from './Dream';
function App() {
  const players = [{id:"Bit", url:"https://img-cdn.hltv.org/playerbodyshot/g-2t7HQ_d55I6VhRnP2URl.png?ixlib=java-2.1.0&w=400&s=90738194ed2b3fa7ded1c26ce0fcc20b", chosen:false, all:false, rat2: "1.0", kpr:"0.66", heads: "62.6%"},
    {id:"Ax1le", url:"https://img-cdn.hltv.org/playerbodyshot/bm95B2mKVEWVyn0Ndk42pP.png?ixlib=java-2.1.0&w=400&s=a89edca0ff90d76a270097c032aaba4d", chosen:false, all:false, rat2: "1.11", kpr:"0.68", heads: "47.4%"},
    {id:"Niko", url:"https://img-cdn.hltv.org/playerbodyshot/JDxiCoK-7_ZeBNCLNiSvFX.png?ixlib=java-2.1.0&w=400&s=d3ec14d8bad0ce37f4db73f1a82af92f", chosen:false, all:false, rat2: "1.24", kpr:"0.75", heads: "52.1%"},
    {id:"Twistzz", url:"https://img-cdn.hltv.org/playerbodyshot/3W2WeF7zohMOjpjxGpurGG.png?ixlib=java-2.1.0&w=400&s=b81a58560cecf792aa16f0ee08f82ee4", chosen:false, all:false, rat2: "1.16", kpr:"0.73", heads: "54.1%"},
    {id:"blameF", url:"https://img-cdn.hltv.org/playerbodyshot/2E6cPM2mB5MHoAXrP9fMlr.png?ixlib=java-2.1.0&w=400&s=e15f3d4349c719e0b63ce0d17bf1fe93", chosen:false, all:false, rat2: "1.33", kpr:"0.87", heads: "39.3%"}, 
    {id:"electronic", url:"https://img-cdn.hltv.org/playerbodyshot/BugxKUSuXiyJVpK4P27Ys1.png?ixlib=java-2.1.0&w=400&s=df57dc790d42aa3c5f8d9c8cd9ffb1cc", chosen:false, all:false, rat2: "1.03", kpr:"0.65", heads: "45.1%"},
    {id:"cadiaN", url:"https://img-cdn.hltv.org/playerbodyshot/VJ9qjM0bYy7MtycRp0tfdj.png?ixlib=java-2.1.0&w=400&s=bcc1e8b30a8f57880785180fc0f1b588", chosen:false, all:false, rat2: "1.07", kpr:"0.65", heads: "28.2%"},
    {id:"Jame", url:"https://img-cdn.hltv.org/playerbodyshot/2Z5O3KO3RulVuGzSWUuk8d.png?ixlib=java-2.1.0&w=400&s=9b1bd9a92f6a947ffa877405fcb7a906", chosen:false, all:false, rat2: "1.20", kpr:"0.72", heads: "23.3%"},
    {id:"karrigan", url:"https://img-cdn.hltv.org/playerbodyshot/_yByL-S5oSUgLpkQedassf.png?ixlib=java-2.1.0&w=400&s=932041b457de03d5c36a28f2557fbc24", chosen:false,all:false, rat2: "0.92", kpr:"0.55", heads: "48.7%"},
    {id:"HooXi", url:"https://img-cdn.hltv.org/playerbodyshot/_-JN6JBvZdbSgwEzNcbolh.png?ixlib=java-2.1.0&w=400&s=df895b1929fac3c661a300284d18ed05", chosen:false, all:false, rat2: "0.89", kpr:"0.52", heads: "48.4%"}, 
    {id:"s1mple", url:"https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?ixlib=java-2.1.0&w=400&s=5e19fa63867872bd78409f6e757ff6c3", chosen:false, all:false, rat2: "1.16", kpr:"0.76", heads: "41.0%"},
    {id:"ZywOo", url:"https://img-cdn.hltv.org/playerbodyshot/cDLEVO33Lh8PtHQtUyF4Q9.png?ixlib=java-2.1.0&w=400&s=5ebc8a972b11d0fd81bfd922f4e0902c", chosen:false, all:false, rat2: "1.26", kpr:"0.79", heads: "43.5%"},
    {id:"oSee", url:"https://img-cdn.hltv.org/playerbodyshot/Bq-o0nulU4G2xOGoLp5AfH.png?ixlib=java-2.1.0&w=400&s=e11427343924455fd4c5ce888f32f521", chosen:false, all:false, rat2: "0.98", kpr:"0.61", heads: "28.9%"},
    {id:"degster", url:"https://img-cdn.hltv.org/playerbodyshot/W_-FTMifJHCWw0YSdg_imt.png?ixlib=java-2.1.0&w=400&s=ba205fcfc9e41b9226902f27a1ad675d", chosen:false, all:false, rat2: "1.12", kpr:"0.71", heads: "33.5%"},
    {id:"w0nderful", url:"https://img-cdn.hltv.org/playerbodyshot/BFLCtmUpq1hFfuWxlIEkcp.png?ixlib=java-2.1.0&w=400&s=04bfa57a75808bada7e2da5e42587725", chosen:false, all:false, rat2: "1.11", kpr:"0.69", heads: "30%"}]

  /*const [post, setPost] = useState([
    {id:1, title:'JS', body: 'descrip'},
    {id:2, title:'JS2', body: 'descrip2'},
    {id:3, title:'JS3', body: 'descrip3'}
  ])*/
  const dreamsPlayers = [];
  const [player, setPlayer] = useState(players);
  const [dreamPlayer, setDreamPlayer] = useState(dreamsPlayers);
  const removeItem = id => {
    setDreamPlayer(prevState => prevState.filter(el => el.id !== id));
    setPlayer(player.map(rifl => {
      if (rifl.id === id) {
        rifl.chosen = false;   
      }
      rifl.all = false;
      return rifl;
    }));
 }
	const itemsR = player.map((rifl) => {
		return <Plays
			key   ={rifl.id}
      id ={rifl.id} 
			url  ={rifl.url}
			chosen ={rifl.chosen}
      all={rifl.all}
      rat2={rifl.rat2}
      kpr={rifl.kpr}
      heads={rifl.heads}
      addToDream={addToDream}
      changeState={changeState}
		/>;
	});

  const itemsRifl = dreamPlayer.map((dreamRifl) => {
		return <Dream
			key   ={dreamRifl.id}
      id ={dreamRifl.id} 
			url  ={dreamRifl.url}
			chosen ={dreamRifl.chosen}
      all={dreamRifl.all}
      removeItem={removeItem}
		/>;
	});

  function changeState() {
    setPlayer(player.map(rifl => {
      if (dreamPlayer.length === 5) {
        rifl.all = true;
      }
      return rifl;
    }));
  }

  function addToDream(id) {
    setPlayer(player.map(rifl => {
      if (rifl.id === id) {
        rifl.chosen = true;
        if (dreamPlayer.length < 5) {
          setDreamPlayer([...dreamPlayer, rifl]);
          dreamPlayer.push(rifl);
        }
      }
      return rifl;
    }));
  };

  return (
    <div className="App place">
      <title>DreamTeam app</title>
      <h1 className='wid' style={{color: "red"}}>???????????? ???????? ?????????????? ??????????
        <h6 style={{color: "black"}}>?????????????? ?? CS:GO ?????????????? ???? ???????? ??????????????. ?????????????????? ???????????????????? ?????????????????? ????????????????????, ???????????? ?????????????????????????? ?????????????? ?? ?????????????? ???? Major!</h6>
      </h1>
      <div>
        <h1 className='wid'>?????????????????? ????????????</h1>
      <div>{itemsR}</div>
      </div>
      <div>
        <h1 className='fixed-top'>Dreamteam</h1>
        <div>{itemsRifl}</div> 
      </div>      
    </div>
  );
};

export default App;
