// Creating the post button

App.jsx

import { useState } from "react";
import { PostComponent } from "./Post";


function App() {

  const [ posts, setPosts ] = useState([]);

  const postComponent = posts.map(post => <PostComponent
            name={post.name}
            subtitle={post.subtitle}
            time={post.time}
            image={post.image}
            description={post.description}
  />)


  function addPost() {
    setPosts([...posts, {
    name: "Aditya",
    subtitle: "10000 followers",
    time: "2m ago",
    image: "https://www.geeksforgeeks.org/_next/image/?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fauth%2Fprofile%2Foxdyveq5iaicdsgzrfgc&w=256&q=75",
    description: "Hi my name is Aditya yadav. Hi my name is Aditya yadav"
    }])
  }


  return (
    <div style={{background :"#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>

      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
    )
  }


export default App;


Post.jsx

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

export function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}>
    <div style={{display: "flex"}}>
    <img src={image}
    style={{
      width: 40,
      height: 40,
      borderRadius: 20
    }}/>
    
    <div style={{fontSize: 10, marginLeft: 10}}>
      <b>
        {name}
      </b>
      <div>{subtitle}</div>
      {time !== undefined ? <div style={{display: 'flex'}}>
        <div>{time}</div>
        <img src={"data:image/png;base64,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"}
        style={{with: 12, height: 12}} />
      </div> : null}
    </div>
  </div>
  <div style={{fontSize: 12}}>
        {description}
      </div>
  </div>
}

-------------------------------------------------------------------------------------------------------------------

// Creating the increase count button

import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }

  return <div>
    <div style={{display: "flex"}}>
       <div style={{background: "red", borderRadius: 20, width: 20, height: 20, paddingLeft: 10, paddingTop: 5 }}>
      {count}
      </div>
    </div>
    <img style={{cursor: "pointer"}} src={"data:image/png;base64,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"} 
    widht={20}/>
    <button onClick={increaseCount}>Increase the count</button>
  </div>
}


export default App;


---------------------------------------------------------------------------------------------------------------------

// Creating an clock

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(currentValue => currentValue + 1);
    }

  useEffect(function() {
  console.log("above setInterval") ;
  setInterval(increaseCount, 1000);
    }, [])

 return <div>
    {count}
  </div>
}

export default App

---------------------------------------------------------------------------------------------------------------------

Creating an Button that becomes red on click and sends an message

import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});

  useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(res => {
        const json = await res.json();
        setTabData(json);
      });

  }, [currentTab])

  return <div>
    <button onClick={function() {
      setCurrentTab(1)
    }} style={{color: currentTab == 1 ? "red" : "black"}}>todo #1</button>

    <button onClick={function() {
      setCurrentTab(2)
    }} style={{color: currentTab == 2 ? "red" : "black"}}>todo #2</button>

    <button onClick={function() {
      setCurrentTab(3)
    }} style={{color: currentTab == 3 ? "red" : "black"}}>todo #3</button>

    <button onClick={function() {
      setCurrentTab(4)
    }} style={{color: currentTab == 4 ? "red" : "black"}}>todo #4</button>

    {tabData.title}
  </div>
}

export default App


--------------------------------------------------------------------------------------------------------------------

// Creating a card component using children in react

import { children, useEffect, useState } from "react";

function App() {

  return <div style={{display: "flex", background: "gray"}}>
    <Card>
      <div style={{color: "green"}}>
        What do you want to post? <br/><br/>
        <input type={"text"} />
      </div>
    </Card>
    <Card>
      <div style={{color: "blue"}}>
        Hii there <br/> <br/>
        <input type={"text"} />
        </div>
    </Card>
  </div>
}

function Card({children}) {
  return <div style={{background: "white", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
    {children}
    {children}
    </div>
}

export default App
