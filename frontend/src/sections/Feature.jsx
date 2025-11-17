import styled from "@emotion/styled";
import theme from "../theme/theme";

const PageWrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5EDE1 0%, #E8D7C3 50%, #D9C4B0 100%);
  position: relative;
  overflow-x: hidden;

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
  padding: 80px 40px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 10px 24px;
  background: rgba(215, 168, 78, 0.2);
  border: 2px solid ${theme.colors.gold};
  border-radius: 50px;
  margin-bottom: 30px;
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.accent};
  letter-spacing: 1px;
  animation: shimmer 3s infinite;

  @keyframes shimmer {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.02);
    }
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  margin: 0 0 20px 0;
  line-height: 1.1;
  color: ${theme.colors.primary};
  text-shadow: 3px 3px 0px rgba(215, 168, 78, 0.3);
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

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, ${theme.colors.gold} 0%, #FF8C42 50%, ${theme.colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.text};
  margin: 0 0 60px 0;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid ${theme.colors.gold};
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(215, 168, 78, 0.3) 0%, transparent 70%);
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

    h3 {
      color: ${theme.colors.primary};
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    color: ${theme.colors.primary};
    margin: 0 0 16px 0;
    transition: color 0.3s ease;
  }

  p {
    font-size: 14px;
    color: ${theme.colors.text};
    margin: 0;
    line-height: 1.7;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;


export default function Feature() {
  return (
    <PageWrapper>
      <Content>
        <Badge>✨ Ancient URL Enchantment ✨</Badge>

        <Title>
          The Magical <GradientText>Link Grimoire</GradientText>
        </Title>

        <Subtitle>
          Transform endless URLs into powerful enchanted links. Your personal mystical library for link management, complete with ancient QR runes and arcane analytics. Celebrate the season with warm Christmas magic infused into every feature.
        </Subtitle>

        <FeatureGrid>
          <FeatureCard>
            <IconWrapper>⚡</IconWrapper>
            <h3>Instant Spell Casting</h3>
            <p>
              Shorten any URL in milliseconds just like casting a flash of holiday magic.
              Modern Christmas-powered enchantments turn long chaotic links into compact,
              elegant ones—perfect for sharing throughout the festive season.
            </p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>🔮</IconWrapper>
            <h3>Magical QR Runes</h3>
            <p>
              Generate mystical QR runes decorated with Christmas warmth—festive colors,
              ornaments, or even snowflakes. Perfect for holiday cards, event invites,
              or sharing joy across gatherings both magical and virtual.
            </p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>📚</IconWrapper>
            <h3>Arcane Archives</h3>
            <p>
              Your enchanted vault stores every shortened link with ease. Organize, revisit,
              and manage your festive links like browsing a Christmas library of cherished tales,
              complete with powerful search spells.
            </p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>🎁</IconWrapper>
            <h3>Custom Alias Spells</h3>
            <p>
              Craft personalized short links such as <em>/joy2025</em>, <em>/xmas-party</em>,
              or <em>/holiday-cheer</em>. Every alias becomes a charming piece of your
              Christmas celebration.
            </p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>⏳</IconWrapper>
            <h3>Expiration Spells</h3>
            <p>
              Set special Christmas-timed links that expire when the magic fades. Perfect for
              limited holiday deals, secret event invites, or time-bound festive greetings.
            </p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>🛡️</IconWrapper>
            <h3>Safety Enchantment</h3>
            <p>
              Share Christmas joy safely with protective enchantments—malicious URL scanning,
              CAPTCHA barriers, and rate-limit spells keep every magical link bright and secure.
            </p>
          </FeatureCard>
        </FeatureGrid>
      </Content>
    </PageWrapper>
  );
}
