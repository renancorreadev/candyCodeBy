import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  width: 100%;
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  color: rgba(0, 20, 15, 0.8);
  font-weight: bold;
  font-size: 20px;
  margin-left: 40%;
  margin-top: 25px;
`;
export const CloseButton = styled.button`
  font-family: "Poppins", sans-serif;
  color: rgba(0, 20, 15, 0.8);
  font-weight: bold;
  font-size: 16px;

  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  margin-right: 20px;
  background: none;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 680px;
  overflow-x: hidden;
  overflow-y: auto;
`;
