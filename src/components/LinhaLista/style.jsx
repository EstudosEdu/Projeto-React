import styled from 'styled-components';

export const ContImgs = styled.span`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3B4859;
  border-radius: 50%;
  overflow: hidden;
  transition: all .6s;
  &:hover{
    transform: scale(1.1);
    box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
    background: #323940;
  }
`;

export const ImgsIcons = styled.img`
  width: 50%;
`;

export const ImgsIconsPencil = styled.img`
  width: 100%;
  margin-top: 20%;
`;

export const ContGeralImgs = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const ContGeral = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContTitleList = styled.div`
  
`;

export const ContLinhas = styled.div`
  margin-top: 16px;
`;

export const NumberVaga = styled.p`
  font-family: 'Roboto';
  color: #8492A6;
  font-size: 14px;
`;

export const NameCar = styled.h4`
  font-family: 'Roboto';
  color: #1F2D3D;
  font-size: 18px;
`;