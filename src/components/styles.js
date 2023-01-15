import styled from "styled-components";

export const ListStyle = styled.ul`
  width: 100%;
  list-style: none;
  margin: auto;
  padding: 0 3rem;
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ececec;
    text-align: left;
  }
`;
export const SearchStyle = styled.form`
  width: 100%;
  margin: 2rem 0;
  input[type="text"] {
    width: 130px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 5px 5px 5px 10px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }

  input[type="text"]:focus {
    width: 50%;
  }

  button[type="submit"] {
    margin-left: 10px;
    width: 130px;
    box-sizing: border-box;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    font-size: 15px;
    background-color: #01a7e1;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    color: #fff;
    padding: 5px 5px 5px 10px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: background 0.2s ease-in-out;
  }

  button[type="submit"]:hover {
    background: #00bdff;
  }
`;
