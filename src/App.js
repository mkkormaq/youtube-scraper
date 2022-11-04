// import logo from './logo.svg';
import React, {useState} from 'react';
// import styled from 'styled-components'

// function randomColor(){
//   return `#${Math.random()
//   .toString(16)
//   .substr(-6)}`
// }
// function CounterButton(){
//   const [count,setCount] = useState(0)
//   return (
//     <button
//       onClick={()=>{
//         setCount(count+1)
//       }}
//     >
//      Click HERE to increment: {count} 
//     </button>
//   )
// }
// function CounterButton2({title, onPress}){
//   return <button onClick={onPress}>{title}</button>
// }
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
// function Card({title,subtitle}){
//   return(
//     <div style={styles.card}>
//       <h1 style={styles.title}>{title}</h1>
//       {subtitle ? (
//         <h2 style={styles.subtitle}>{subtitle}</h2>
//         ) : (
//           <h3 style={styles.empty}>No subtitle</h3>
//         )}
//     </div>
//   )
// }

// function Card({loading, error, title, subtitle}){
//   let content

//   if (error){
//     content = 'Error'
//   } else if (loading){
//     content = <h3 style={styles.empty}>Loading...</h3>
//   } else {
//     content = (
//       <div>
//         <h1 style={styles.title}>{title}</h1>
//           {subtitle ? (
//             <h2 style={styles.subtitle}>{subtitle}</h2>
//           ) : (
//             <h3 style={styles.empty}>no subtitle...</h3>
//           )}
//       </div>
//     )
//   }
//   return <div style={styles.card}>{content}</div>
// }

// const data = [
//   {id: 'a', name: 'Devin'},
//   {id: 'b', name: 'Gabe'},
//   {id: 'c', name: 'Kim'},
// ]

// function UserList (){
//   return(
//   <div>
//     {data.map(item=> (
//       <div key={item.id}>{item.name}</div>
//     ))}
//   </div>
//   )
// }

const randomDiceRoll = ()=>{
  return Math.ceil(Math.random()* 6)
}

function App() {
  const [diceRolls, setDiceRolls] = useState([1])
  return(
    <div>
      <button
        onClick={()=>{
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      >
        Roll Dice 
      </button>
      <ul>
        {diceRolls.map((diceRoll,index)=> (
          <li key={index}>{diceRoll}</li>
        ))}
      </ul>
    </div>
  );
}

// const styles = {
//   card: {
//     padding: '20px',
//     margin: '20px',
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: 'steelblue',
//     border: '1px solid rgba(0,0,0,0.15)',
//   },
//   title: {
//     fontSize: '18px',
//     lineHeight: '24px',
//   },
//   subtitle: {
//     fontSize: '14px',
//     lineheight: '18px',
//   },
//   empty: {
//     fontSize: '12px',
//     lineheight: '15px',
//     opacity: '0.5',
//   },
// }
export default App;
