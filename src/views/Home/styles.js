import styled from 'styled-components';

export const Container = styled.div`
width: 100%;

`

export const FilterArea= styled.div`
display: flex;
width: 100%;

flex-wrap: wrap;
justify-content: space-around;
margin-top: 20px;
margin-bottom: -15px;


  button{
    background: none;
    border: none;
  }

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #090909;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3{
    color: #090909;
    position: relative;
    top: 30px;
    background: #FFFF;
    padding: 0 10px;
    
  }
`;
