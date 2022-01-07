import styled from "styled-components";
import { darken } from "polished";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  color: black;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    margin-top: 30px;
    padding: 20px;
    box-shadow: -7px 8px 8px 18px rgb(0 0 0 / 10%);

    img {
      width: 90%;
      align-self: center;
      max-width: 300px;

      @media (max-width: 768px) {
        max-width: 200px;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #3b80f9;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#3b75f9")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;
