import styled from "@emotion/styled";
import { Star } from "lucide-react";
import { useState } from "react";
import theme from "../theme/theme";

const PageWrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5EDE1 0%, #E8D7C3 50%, #D9C4B0 100%);
  position: relative;
  overflow-x: hidden;
  padding: 80px 40px;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(215, 168, 78, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(140, 28, 28, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 70px;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
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
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 16px 0;
  color: ${theme.colors.primary};
  text-shadow: 3px 3px 0px rgba(215, 168, 78, 0.3);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid ${theme.colors.gold};
  border-radius: 20px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(215, 168, 78, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: all 0.6s ease;
  }

  &::after {
    content: "${props => props.gift}";
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 80px;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(215, 168, 78, 0.3);
    border-color: ${theme.colors.primary};

    &::before {
      opacity: 1;
      top: -25%;
      right: -25%;
    }
  }
`;

const PresentBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 32px;
  animation: float 3s ease-in-out infinite;
  z-index: 2;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-12px) rotate(5deg);
    }
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
`;

const StarIcon = styled(Star)`
  width: 18px;
  height: 18px;
  fill: ${theme.colors.gold};
  color: ${theme.colors.gold};
`;

const Quote = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};
  line-height: 1.8;
  margin: 0 0 20px 0;
  position: relative;
  z-index: 2;
  font-style: italic;

  &::before {
    content: '"';
    font-size: 32px;
    color: ${theme.colors.gold};
    position: absolute;
    top: -10px;
    left: -8px;
    opacity: 0.3;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  position: relative;
  z-index: 2;
  padding-top: 16px;
  border-top: 1px solid rgba(215, 168, 78, 0.2);
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.gold} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: ${theme.colors.lightText};
  font-size: 16px;
  flex-shrink: 0;
`;

const CustomerDetails = styled.div`
  flex: 1;
`;

const CustomerName = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 2px 0;
`;

const CustomerTitle = styled.p`
  font-size: 12px;
  color: ${theme.colors.accent};
  margin: 0;
`;

const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 50px;
  animation: fadeInUp 0.8s ease-out 0.4s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DotButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.gold};
  background: ${({ active }) => active ? theme.colors.gold : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background: ${theme.colors.gold};
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 80px;
  animation: fadeInUp 0.8s ease-out 0.6s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid ${theme.colors.secondary};
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.gold};
    box-shadow: 0 8px 24px rgba(215, 168, 78, 0.2);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${theme.colors.primary};
  margin: 0 0 8px 0;
`;

const StatLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      rating: 5,
      quote: "Christmas ABB completely transformed how I share my holiday gifts with family. The enchanted links make everything so magical and easy to manage!",
      name: "Sarah Mitchell",
      title: "Holiday Event Planner",
      avatar: "SM",
      present: "🎁"
    },
    {
      rating: 5,
      quote: "The mystical QR runes are absolutely stunning! Every gift link feels special now. My customers love the premium touch this adds to our Christmas campaigns.",
      name: "James Chen",
      title: "E-commerce Manager",
      avatar: "JC",
      present: "🎀"
    },
    {
      rating: 5,
      quote: "Managing all our festive promotions has never been easier. The arcane analytics help us understand which gifts get the most attention. Highly recommend!",
      name: "Emma Rodriguez",
      title: "Marketing Director",
      avatar: "ER",
      present: "🎊"
    },
    {
      rating: 5,
      quote: "As a content creator, I need reliable link management. Christmas ABB's unlimited features and beautiful design make sharing gift guides effortless.",
      name: "Marcus Thompson",
      title: "Content Creator",
      avatar: "MT",
      present: "✨"
    },
    {
      rating: 5,
      quote: "The team collaboration tools help our entire Christmas campaign run smoothly. Everyone can manage their gift links without stepping on each other.",
      name: "Lisa Wong",
      title: "Campaign Coordinator",
      avatar: "LW",
      present: "🎄"
    },
    {
      rating: 5,
      quote: "Premium support is incredible! They helped us set up custom domains for our gift registry. Best investment for our holiday season.",
      name: "David Harmon",
      title: "Small Business Owner",
      avatar: "DH",
      present: "⭐"
    }
  ];

  const displayedTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3));
  };

  return (
    <PageWrapper>
      <Content>
        <Header>
          <Title>🎁 Customer Testimonials - Magical Stories!</Title>
          <Subtitle>See how our enchanted link grimoire has transformed gift-giving and festive campaigns</Subtitle>
        </Header>

        <Carousel>
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} gift={testimonial.present}>
              <PresentBadge>{testimonial.present}</PresentBadge>
              
              <StarsContainer>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </StarsContainer>

              <Quote>{testimonial.quote}</Quote>

              <CustomerInfo>
                <Avatar>{testimonial.avatar}</Avatar>
                <CustomerDetails>
                  <CustomerName>{testimonial.name}</CustomerName>
                  <CustomerTitle>{testimonial.title}</CustomerTitle>
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </Carousel>

        <CarouselControls>
          <DotButton 
            onClick={handlePrev}
            title="Previous"
            style={{ marginRight: "auto" }}
          >
            ←
          </DotButton>
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
            <DotButton
              key={i}
              active={i * 3 === activeIndex}
              onClick={() => setActiveIndex(i * 3)}
            />
          ))}
          <DotButton 
            onClick={handleNext}
            title="Next"
            style={{ marginLeft: "auto" }}
          >
            →
          </DotButton>
        </CarouselControls>

        <StatsSection>
          <StatCard>
            <StatNumber>10K+</StatNumber>
            <StatLabel>🎁 Happy Customers</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50K+</StatNumber>
            <StatLabel>✨ Enchanted Links Created</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>⭐ Satisfaction Rate</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatLabel>🎄 Magical Support</StatLabel>
          </StatCard>
        </StatsSection>
      </Content>
    </PageWrapper>
  );
}