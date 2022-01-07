import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  color: black;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #3b75f9;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#3b75f9")};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media (max-width: 720px) {
      padding: 0px !important;
    }
  }

  img {
    height: 100px;

    @media (max-width: 720px) {
      display: none;
    }
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #3b75f9;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: #1022f9;
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, "#7159c1")};
        cursor: not-allowed;
      }
    }

    @media (min-width: 768px) {
    }
  }
`;

export const FreeFreight = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;

  color: #1e6b03;
  width: 340px;
  border-radius: 10px;
  background: #c7ffa5;
  font-weight: bold;
  margin: 45px 0 20px 20%;
  padding: 10px;

  @media (max-width: 768px) {
    margin: 45px 0 20px 0%;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
