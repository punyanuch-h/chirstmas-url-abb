import styled from "@emotion/styled";
import { Check } from "lucide-react";
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

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 0.2s both;

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
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const PlanCard = styled.div`
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

const Badge = styled.span`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.lightText};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  width: fit-content;
  position: relative;
  z-index: 2;
`;

const PlanName = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 8px 0;
  position: relative;
  z-index: 2;
`;

const PlanDuration = styled.p`
  font-size: 13px;
  color: ${theme.colors.accent};
  margin: 0 0 20px 0;
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};
  line-height: 1.6;
  margin: 0 0 24px 0;
  position: relative;
  z-index: 2;
`;

const FeaturesSection = styled.div`
  background: rgba(215, 168, 78, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`;

const FeaturesLabel = styled.h3`
  font-size: 12px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 14px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeatureItem = styled.li`
  font-size: 13px;
  color: ${theme.colors.text};
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;

  svg {
    width: 16px;
    height: 16px;
    color: ${theme.colors.secondary};
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ScheduleSection = styled.div`
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`;

const ScheduleLabel = styled.h3`
  font-size: 12px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "📅";
    font-size: 14px;
  }
`;

const ScheduleText = styled.p`
  font-size: 13px;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.6;
`;

const PricingSection = styled.div`
  margin-bottom: 28px;
  position: relative;
  z-index: 2;
`;

const PricingLabel = styled.h3`
  font-size: 12px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PricingOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
`;

const PricingOption = styled.div`
  text-align: center;
  padding: 12px;
  background: rgba(215, 168, 78, 0.1);
  border: 1px solid ${theme.colors.gold};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(215, 168, 78, 0.2);
    border-color: ${theme.colors.primary};
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 4px 0;
`;

const PriceLabel = styled.p`
  font-size: 11px;
  color: ${theme.colors.accent};
  margin: 0;
`;

const PriceNote = styled.p`
  font-size: 11px;
  color: ${theme.colors.accent};
  margin: 12px 0 0 0;
  text-align: center;
  font-style: italic;
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.lightText};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(140, 28, 28, 0.3);
  margin-top: auto;
  position: relative;
  z-index: 2;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${theme.colors.gold} 0%, rgba(215, 168, 78, 0.5) 100%);
    transition: left 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(140, 28, 28, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default function Plans() {
  const plans = [
    {
      badge: "🎄 BASIC",
      name: "Enchanter Starter",
      duration: "Month to Month",
      description: "Perfect for those just beginning their magical URL journey. Start casting spells with confidence.",
      features: [
        "Create up to 100 enchanted links monthly",
        "Basic QR rune generation",
        "Standard link analytics",
        "Email support",
        "Access to link vault"
      ],
      schedule: "Flexible - Start & pause anytime",
      prices: [
        { amount: "€15", label: "Monthly" },
        { amount: "€40", label: "Quarterly" }
      ]
    },
    {
      badge: "✨ PREMIUM",
      name: "Sorcerer Elite",
      duration: "Most Popular",
      description: "Advanced features for serious link enchanters. Unlock the full potential of the grimoire.",
      features: [
        "Unlimited enchanted links",
        "Advanced QR runes with custom designs",
        "Advanced analytics & insights",
        "Priority support (24/7)",
        "Custom domain support",
        "Team collaboration tools"
      ],
      schedule: "Monday-Friday: 8:00-22:00\nWeekend: 10:00-20:00",
      prices: [
        { amount: "€45", label: "Monthly" },
        { amount: "€120", label: "Quarterly" },
        { amount: "€450", label: "Annual" }
      ]
    },
    {
      badge: "👑 ULTIMATE",
      name: "Archmage Mastery",
      duration: "For Power Users",
      description: "The ultimate grimoire package. Complete magical arsenal for professional link management.",
      features: [
        "Unlimited everything",
        "API access for developers",
        "Custom branding & white-label",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations"
      ],
      schedule: "24/7 Dedicated Support\nCustom scheduling available",
      prices: [
        { amount: "€99", label: "Monthly" },
        { amount: "€270", label: "Quarterly" },
        { amount: "€999", label: "Annual" }
      ]
    }
  ];

  return (
    <PageWrapper>
      <Content>
        <Header>
          <Title>🎅 Magical Link Plans - Choose Your Spell Level!</Title>
          <Subtitle>Select the perfect enchantment plan for your mystical link journey</Subtitle>
        </Header>

        <PlansGrid>
          {plans.map((plan, index) => (
            <PlanCard key={index}>
              <Badge>{plan.badge}</Badge>
              <PlanName>{plan.name}</PlanName>
              <PlanDuration>{plan.duration}</PlanDuration>
              <Description>{plan.description}</Description>

              <FeaturesSection>
                <FeaturesLabel>✨ What You'll Get:</FeaturesLabel>
                <FeatureList>
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <Check />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </FeaturesSection>

              <ScheduleSection>
                <ScheduleLabel>Available Times:</ScheduleLabel>
                <ScheduleText>{plan.schedule}</ScheduleText>
              </ScheduleSection>

              <PricingSection>
                <PricingLabel>Pricing Options:</PricingLabel>
                <PricingOptions>
                  {plan.prices.map((pricing, idx) => (
                    <PricingOption key={idx}>
                      <Price>{pricing.amount}</Price>
                      <PriceLabel>{pricing.label}</PriceLabel>
                    </PricingOption>
                  ))}
                </PricingOptions>
                <PriceNote>All prices include 19% VAT</PriceNote>
              </PricingSection>

              <EnrollButton>Enroll in {plan.name} →</EnrollButton>
            </PlanCard>
          ))}
        </PlansGrid>
      </Content>
    </PageWrapper>
  );
}