import styled from "@emotion/styled";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import theme from "../theme/theme";

const Wrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, #B89968 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(215, 168, 78, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 28, 28, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
  animation: slideDown 0.8s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 48px;
  margin: 0 0 10px 0;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    animation: twinkle 1.5s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const Subtitle = styled.p`
  color: ${theme.colors.secondary};
  font-size: 18px;
  margin: 0;
`;

const StackContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 550px;
  z-index: 2;
`;

const CardStack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 360px;
  background: #F5EDE1;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  border: 2px solid ${theme.colors.gold};
  cursor: ${({ isDragging }) => isDragging ? 'grabbing' : 'grab'};
  user-select: none;
  overflow: hidden;
  left: 0;
  top: 0;
  margin-top: -20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(215, 168, 78, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${({ style }) => {
    if (!style) return '';
    return `
      transform: ${style.transform};
      z-index: ${style.zIndex};
      opacity: ${style.opacity};
      transition: ${style.transition};
    `;
  }}
`;

const CardNumber = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: ${theme.colors.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardIcon = styled.div`
  font-size: 56px;
  margin-bottom: 16px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
`;

const CardTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 24px;
  margin: 0 0 12px 0;
  font-weight: 800;
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

const CardContent = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${theme.colors.gold};
`;

const CardTags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${theme.colors.gold};
  color: ${theme.colors.primary};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 12px 50px;
  border-radius: 10px;
  border: none;
  background: ${theme.colors.gold};
  color: ${theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(215, 168, 78, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Instructions = styled.div`
  text-align: center;
  color: ${theme.colors.secondary};
  font-size: 14px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }
`;

const cardDatabase = [
    {
      id: 1,
      icon: "🔗",
      title: "Easier Sharing",
      description:
        "Makes links easier to share and remember, especially on social media or mobile devices.",
      tags: ["Sharing", "Convenience"]
    },
    {
      id: 2,
      icon: "✨",
      title: "Branding & Customization",
      description:
        "Allows for branding and customization of links, which helps with marketing and customer trust.",
      tags: ["Branding", "Marketing"]
    },
    {
      id: 3,
      icon: "📊",
      title: "Analytics Tracking",
      description:
        "Provides analytics, such as click tracking, to monitor engagement and campaign effectiveness.",
      tags: ["Analytics", "Clicks"]
    },
    {
      id: 4,
      icon: "📚",
      title: "Link Management & Archive",
      description:
        "Adds the ability to manage and archive shared links, creating an organized library for both personal and professional use.",
      tags: ["Library", "Management"]
    },
    {
      id: 5,
      icon: "⏳",
      title: "Temporary & Event Links",
      description:
        "Supports temporary, one-time, or event-based links—useful for promotions and exclusive content.",
      tags: ["Temporary", "Promotions"]
    },
    {
      id: 6,
      icon: "🛡️",
      title: "Security Filtering",
      description:
        "Some shorteners offer security features, protecting users by filtering out malware and spam before redirecting.",
      tags: ["Security", "Protection"]
    }
];  
  

export default function BenefitsStack() {
    const [cards, setCards] = useState([...cardDatabase]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [totalRemoved, setTotalRemoved] = useState(0);
  
    const handleRemoveCard = async () => {
      if (isAnimating || cards.length === 0) return;
  
      setIsAnimating(true);
      await new Promise((resolve) => setTimeout(resolve, 400));
  
      setCards((prev) => {
        const newCards = prev.slice(1);
        if (newCards.length < 2) return [...newCards, ...cardDatabase];
        return newCards;
      });
  
      setTotalRemoved((prev) => prev + 1);
      setIsAnimating(false);
    };
  
    const getCardStyle = (index) => {
      const isTopCard = index === 0;
      const stackOffset = index * 12;
  
      if (isTopCard && isAnimating) {
        return {
          transform: `translateX(260px) rotateZ(10deg) scale(0.9)`,
          opacity: 0,
          zIndex: 10,
          transition: "all 0.4s cubic-bezier(0.5, 1.2, 0.8, 1)",
        };
      }
  
      return {
        transform: `translateY(${stackOffset}px) scale(${1 - index * 0.02})`,
        opacity: 1,
        zIndex: 10 - index,
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    };
  
    return (
      <Wrapper>
        <Header>
          <Title>
            <Sparkles size={32} />
                Festive of Benefits Stack
          </Title>
          <Subtitle>Click to reveal the magic of the season</Subtitle>
        </Header>
  
        <StackContainer style={{ height: "410px", marginBottom: "0" }}>
          <CardStack>
            {cards.map((card, index) => (
              <Card
                key={`${card.id}-${index}`}
                style={getCardStyle(index)}
                isDragging={false}
              >
                <CardNumber>
                  {(totalRemoved + index + 1) % cardDatabase.length ||
                    cardDatabase.length}
                </CardNumber>
  
                <CardIcon>{card.icon}</CardIcon>
  
                <CardTitle>{card.title}</CardTitle>
  
                <CardDescription>{card.description}</CardDescription>
  
                <CardContent>
                  <CardTags>
                    {card.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </CardTags>
                </CardContent>
              </Card>
            ))}
          </CardStack>
        </StackContainer>
  
        <Instructions>
            <Sparkles size={16} />
            Click to reveal magic
        </Instructions>

        <Button onClick={handleRemoveCard} disabled={isAnimating}>
            <ChevronDown size={18} />
            Reveal Card
        </Button>
      </Wrapper>
    );
  }
  