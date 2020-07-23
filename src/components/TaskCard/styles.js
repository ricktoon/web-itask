import styled from 'styled-components';

export const Container = styled.div`
   width: 250px;
   height: 200px;
   box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
   border-radius: 10px;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   margin: 20px;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover{
     opacity: 0.5;
   }
   
`;

export const TopCard= styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   `
export const BottomCard= styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;

  strong{
    color:#FF7811;
    font-weight: bold;
  }
  span{
    color: #5E5E5E;
  }

`
