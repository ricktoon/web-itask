import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display: flex;
  
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.div`
width: 50%;
margin-bottom: 70px;

`;

export const TypeIcons = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  
  .inative{
    opacity: 0.5;
  }

  button{
    border:none;
    background: none;
    outline-style: none;
  }

  img{
    width: 50px ;
    height: 50px ;
    margin: 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color:#5e5e5e;
    margin-bottom: 5px;
  }

  input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #FF7811;
  }

  img{
    width: 20px;
    height: 20px;
    position:relative;
    left: 90%;
    bottom: 36px;
    
  }
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color:#5e5e5e;
    margin: 5px 0;
  }

  textarea{
    font-size: 16px;
    border: 1px solid #FF7811;
  }

`;

export const Options = styled.div`
 display: flex;
 justify-content: space-between;

  button{
    font-weight: bold;
    color: #090909;
    border: none;
    background: none;
    font-size: 18px;
    cursor:pointer;
    outline-style: none;

    &:hover{
      opacity: 0.7;
    }
  }

`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  color: #FF7811;
  font-weight: bold;
  font-size: 18px;
`;


export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

    button{
      width: 100%;
      background: #ff7811;
      border: none;
      font-size: 20px;
      color: #FFF;
      font-weight: bold;
      padding: 20px;
      border-radius: 30px;
      outline-style: none;
      cursor: pointer;

     &:hover{
       opacity: 0.7;
     }
    }
`;