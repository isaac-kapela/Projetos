import styled from "styled-components";


export const sectionContainer = styled.section`
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 130px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .cards .card {
    flex: 0 0 calc(33.33% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
    
  }
  .cards .card h2 {
    text-align: center;
    font-weight: 200;
  }

  .cards img {
    width: 60%;
    border-radius: 8px;
    border: solid #ccc 5px;
    transition: all 0.2s ease-in-out;
    box-shadow: 4px 4px 10px #b7b6b6, -4px -4px 10px #fff;
  }

  .cards img:hover {
    box-shadow: -4px -4px 10px #b7b6b6, 4px 4px 10px #fff;
  }
`;
