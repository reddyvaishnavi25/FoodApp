import { BASE_URL } from './App';
import styled from 'styled-components'
import { MainContainer } from './App';
const SearchComponent=({data})=>
{
 console.log(data);   
return (
     
      <FoodCardsContainer>
        <MainContainer>
        <FoodCards>
            {
            data?.map((food)=>(
                <FoodCard key={food.name}>
                <div className="food-img">
                    <img src={BASE_URL + food.image}></img>
                </div>
                <div className="food-details">
                    <div className="food-info">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                    </div>
                    <div className="food-price"><Button>${food.price}</Button></div>
                </div>
                </FoodCard>
            ))
            }
        </FoodCards>
        </MainContainer>
      </FoodCardsContainer>
);
};

export default SearchComponent;

const FoodCardsContainer=styled.section`
min-height:calc(100vh - 244px);
background-image:url("/bg.png");
background-size:cover;
`;
const FoodCards=styled.div`
display:flex;
flex-wrap:wrap;
column-gap:20px;
row-gap:32px;
padding-top:100px;
`;
const FoodCard=styled.div`
font-family: "Inter", sans-serif;
display:flex;
flex-direction:row;
gap:20px;
width:350px;
height:167px;
border-radius:19.45px;
background-color:gray;
padding:5px;
.food-details{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:end;
    padding:5px;
}

.food-info h3{
font-size:16px;
font-weight:600px;
margin-top:6px;
}

.food-info p{
    margin-top:14px;
    font-size:12px;
    font-weight:400px;
}

`;
const Button=styled.div`
width:57px;
height:25px;
background-color:#FF4343;
padding: 4px 6px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
font-size:13.5px;

`;