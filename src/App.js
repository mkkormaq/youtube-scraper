import logo from './logo.svg';
import React, {useState} from 'react';
import styled from 'styled-components'

function randomColor(){
  return `#${Math.random()
  .toString(16)
  .substr(-6)}`
}
function CounterButton(){
  const [count,setCount] = useState(0)
  return (
    <button
      onClick={()=>{
        setCount(count+1)
      }}
    >
     Click HERE to increment: {count} 
    </button>
  )
}
function CounterButton2({title, onPress}){
  return <button onClick={onPress}>{title}</button>
}
// const Card = styled.div`
//   padding: 20px;
//   text-align: center;
//   color: white;
//   background: ${props=> props.color};
// `

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
// `
function Card({title,subtitle}){
  return(
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
    </div>
  )
}

function App() {
  return(
    <div>
      <Card title={'title'} />
      <Card title={'Title'} subtitle={'Subtitle'} />
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'steelblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: '14px',
    lineheight: '18px',
  },
}
export default App;
