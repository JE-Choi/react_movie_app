import React from 'react';

// props로 인자 받아서 => props.속성 으로 받아도 되긴 함.
function Food({food}){
    return(
    <div>나는 {food}을 좋아해요~</div>
    );
}

function PropsTest() {
  return (
      <>
        <Food food="베이컨"/>
        <Food food="스파게티"/>
        <Food food="맛있는 음식"/>
        <br/><br/>
        <div>맛있겠죠?</div>
      </>
  );
}

export default PropsTest;
