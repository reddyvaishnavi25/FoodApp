
import styled from "styled-components"
import './App.css';
import SearchComponent from "./SearchComponent";
import { useState,useEffect } from "react";
export const BASE_URL="http://localhost:9000"

function App() {
  const [data, setData]=useState(null);
  const [filteredData, setFilteredData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  
  useEffect(()=>{
    const fetchFoodData=async()=>{
      try{
          setLoading(true);
          const response= await fetch(BASE_URL);
          const json=await response.json();
          setData(json);
          setFilteredData(json);
          setLoading(false);
          }
      catch(error)
      {
          setError("unable to fetch the data");
      }
    }
    fetchFoodData();
  },[])

  const handleSearch=(e)=>{
      const searchValue=e.target.value;
      if(searchValue==="")
        setFilteredData(null);
      
        const res=data?.filter(d=>d.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(res);
    
    }

  const handleBreakfast=()=>{
    setFilteredData(data?.filter(d=>d.type.includes("breakfast")))
  }  
  const handleLunch=()=>{
    setFilteredData(data?.filter(d=>d.type.includes("lunch")))
  }
  const handleDinner=()=>{
    setFilteredData(data?.filter(d=>d.type.includes("dinner")))
  }

  if(error) return <div>error</div>;
  if(loading) return <div>loading</div>;
 
  return (
    <>
    <MainContainer>
      <TopContainer>
       <div className="logo"><img src="./Foody Zone.png" alt="logo"></img></div>
       <div className="search"><input onChange={handleSearch} type="text" placeholder="Search food.."></input></div>
      </TopContainer>
      <BottomContainer>
        <Button >All</Button>
        <Button onClick={handleBreakfast}>Breakfast</Button>
        <Button onClick={handleLunch}>Lunch</Button>
        <Button onClick={handleDinner}>Dinner</Button>
      </BottomContainer>
    </MainContainer>
    <SearchComponent data={filteredData}/>
    </>
    
  );
}

export default App;

export const MainContainer= styled.div`
margin:0 auto;
max-width:1200px;
height:241px;
`;
const TopContainer=styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;
.search{
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding: 0 10px;
  }
}
`;

const BottomContainer=styled.section`
display:flex;
display-direction: row;
gap:14px;
justify-content:center;
margin-bottom:30px;
`;
const Button=styled.button`
background: #FF4343;
border-radius:5px;
border:transparent;
padding:6px 12px;
height:31px;
color:white;
`;



