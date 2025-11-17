import styled from "@emotion/styled";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import theme from "../theme/theme";

const Wrapper = styled.header`
  width: 100%;
  padding: 20px 40px;
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.gold} 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  border-bottom: 3px solid ${theme.colors.secondary};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(215, 168, 78, 0.2);
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(245, 237, 225, 0.08) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const LogoBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 2;
  animation: slideIn 0.6s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const LogoImg = styled.img`
  width: 44px;
  height: 44px;
  animation: magicBounce 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  @keyframes magicBounce {
    0%, 100% { 
      transform: translateY(0px) rotateZ(0deg);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }
    50% { 
      transform: translateY(-6px) rotateZ(5deg);
      filter: drop-shadow(0 12px 24px rgba(215, 168, 78, 0.6));
    }
  }
`;

const Title = styled.h1`
  color: ${theme.colors.lightText};
  font-size: 24px;
  font-weight: 900;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(245, 237, 225, 0.3);
  background: linear-gradient(135deg, ${theme.colors.lightText}, ${theme.colors.gold});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.gold} 100%);
    flex-direction: column;
    padding: ${({ isOpen }) => (isOpen ? "20px 40px" : "0 40px")};
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
    box-shadow: ${({ isOpen }) => (isOpen ? "0 8px 24px rgba(0, 0, 0, 0.2)" : "none")};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: ${theme.colors.gold};
  color: ${theme.colors.primary};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 3;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(215, 168, 78, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ primary }) => primary ? `
    background: ${theme.colors.primary};
    color: ${theme.colors.lightText};
    box-shadow: 0 4px 15px rgba(140, 28, 28, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(140, 28, 28, 0.5);
    }
  ` : `
    background: transparent;
    color: ${theme.colors.lightText};
    border: 2px solid ${theme.colors.gold};

    &:hover {
      background: ${theme.colors.gold};
      color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  `}

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <LogoBrand>
        <LogoImg src={Logo} alt="Christmas ABB Logo" />
        <Title>Christmas ABB</Title>
      </LogoBrand>

      <ActionButtonsContainer isOpen={isOpen}>
        <Button>Log In</Button>
        <Button primary>Sign Up</Button>
      </ActionButtonsContainer>

      <MenuButton onClick={toggleMenu}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </MenuButton>
    </Wrapper>
  );
}