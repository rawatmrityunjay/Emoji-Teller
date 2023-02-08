import React, {useState, usestate} from "react"
import logo from './logo.svg';
import './App.css';


const emoji_dic = {

  "😁":"Smiling",
  "😳":"Disbelief",
  "😂":"Laughing",
  "🥰":"Loved",
  "😔":"Sad",
  "🥱":"Yawning",
  "😱":"Shocked",
  "😑":"Annoyed",
  "😡":"Angry",
  "🤒":"Sick" 



};

var emojiesWeKnow =  Object.keys(emoji_dic)


function App() {

  const [ meaning , setMeaning ] = useState("")

    function emojiInputHandler(event){

      var user_input = event.target.value;

      var meaning = emoji_dic[user_input]

      if (meaning === undefined) {

        meaning =  "We don't have this emoji in our database "

      }

      setMeaning(meaning);

    }

    function emojiClickHandler(emoji){

      var meaning = emoji_dic[emoji]

      setMeaning(meaning);

    }


  return (
    <div className="main-container" >


      <div className="heading" >Know your Emoji</div>
      
      <div className=" input-container " >

        <input type="text" id="input" name="input" onChange={emojiInputHandler} ></input>

      </div>

      <div className="output-container" ><h2 id="output" >{ meaning }</h2></div>

      <div className="emoji-container" >

      {

        emojiesWeKnow.map(function(emoji){

          return <span onClick={() => emojiClickHandler(emoji)} key={emoji} >{emoji}</span>

        })

      }

      </div>



    </div>
  );
}

export default App;
