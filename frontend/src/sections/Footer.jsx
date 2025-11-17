import styled from "@emotion/styled";
import { Mail, Send, Phone } from "lucide-react";
import theme from "../theme/theme";

const Wrapper = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
  color: ${theme.colors.lightText};
  padding: 80px 40px 40px;
  position: relative;
  overflow: hidden;
  border-top: 3px solid ${theme.colors.secondary};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(215, 168, 78, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(245, 237, 225, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 50% 100%, rgba(30, 58, 40, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, rgba(215, 168, 78, 0.05), transparent);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 50px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Section = styled.div`
  animation: slideUp 0.8s ease-out;
  position: relative;

  @keyframes slideUp {
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
    text-align: center;
  }
`;

const BrandSection = styled.div`
  animation: slideUp 0.8s ease-out;

  @keyframes slideUp {
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  font-size: 32px;
  animation: magicBounce 2s ease-in-out infinite;

  @keyframes magicBounce {
    0%, 100% {
      transform: translateY(0px) rotateZ(0deg);
    }
    50% {
      transform: translateY(-8px) rotateZ(10deg);
    }
  }
`;

const BrandName = styled.h2`
  color: ${theme.colors.gold};
  font-size: 20px;
  font-weight: 900;
  margin: 0;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const BrandDescription = styled.p`
  color: ${theme.colors.lightText};
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 20px 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gold};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.lightText};
  font-size: 13px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${theme.colors.gold};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(215, 168, 78, 0.2);
    border-color: ${theme.colors.lightText};
  }
`;

const NewsletterButton = styled.button`
  padding: 12px 20px;
  background: linear-gradient(135deg, ${theme.colors.gold} 0%, ${theme.colors.accent} 100%);
  color: ${theme.colors.primary};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(215, 168, 78, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SectionTitle = styled.h3`
  color: ${theme.colors.gold};
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;

  svg {
    animation: float 3s ease-in-out infinite;
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinkItem = styled.li`
  transition: all 0.3s ease;
`;

const Link = styled.a`
  color: ${theme.colors.lightText};
  text-decoration: none;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  padding: 4px 0;

  &::before {
    content: "✦";
    position: absolute;
    left: -14px;
    color: ${theme.colors.gold};
    opacity: 0;
    transition: all 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${theme.colors.gold}, ${theme.colors.accent});
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.gold};
    transform: translateX(8px);

    &::before {
      opacity: 1;
      left: -18px;
    }

    &::after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialButton = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(215, 168, 78, 0.15);
  color: ${theme.colors.gold};
  border: 2px solid ${theme.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.gold};
    color: ${theme.colors.primary};
    transform: translateY(-6px) scale(1.1);
    box-shadow: 0 12px 30px rgba(215, 168, 78, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${theme.colors.gold}, transparent);
  margin: 60px 0;
  position: relative;
  z-index: 1;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  animation: fadeIn 0.8s ease-out 0.3s backwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const Copyright = styled.div`
  font-size: 13px;
  opacity: 0.85;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoText = styled.span`
  color: ${theme.colors.gold};
  font-weight: 800;
  letter-spacing: 1px;
`;

const QuickStats = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatBadge = styled.div`
  font-size: 12px;
  padding: 6px 12px;
  background: rgba(215, 168, 78, 0.15);
  border: 1px solid ${theme.colors.gold};
  border-radius: 20px;
  color: ${theme.colors.gold};
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(215, 168, 78, 0.3);
    transform: scale(1.05);
  }
`;

const BackToTop = styled.button`
  background: linear-gradient(135deg, ${theme.colors.gold} 0%, ${theme.colors.accent} 100%);
  color: ${theme.colors.primary};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(215, 168, 78, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("✨ Thank you for subscribing to Christmas ABB magic!");
  };

  return (
    <Wrapper>
      <Container>
        <TopSection>
          {/* Brand Section */}
          <BrandSection>
            <LogoContainer>
              <LogoIcon>🎄</LogoIcon>
              <BrandName>Christmas ABB</BrandName>
            </LogoContainer>
            <BrandDescription>
              Transform your festive links into magical enchantments. Your mystical library for spreading Christmas joy through the power of enchanted URLs and ancient QR runes.
            </BrandDescription>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email..."
                required
              />
              <NewsletterButton type="submit">
                <Send size={14} />
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </BrandSection>

          {/* Contact Section */}
          <Section>
            <SectionTitle>
              <Mail size={18} />
              Contact Us
            </SectionTitle>
            <LinkList>
              <LinkItem>
                <Link href="mailto:support@christmasabb.com">
                  📧 support@christmasabb.com
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="tel:+1234567890">
                  <Phone size={14} />
                  +1 (234) 567-890
                </Link>
              </LinkItem>
            </LinkList>
            <SocialLinks>
              <SocialButton href="https://twitter.com" title="Twitter">𝕏</SocialButton>
              <SocialButton href="https://facebook.com" title="Facebook">f</SocialButton>
              <SocialButton href="https://instagram.com" title="Instagram">📷</SocialButton>
              <SocialButton href="https://linkedin.com" title="LinkedIn">in</SocialButton>
            </SocialLinks>
          </Section>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>
            <span>🎄</span>
            <span>© 2024 <LogoText>Christmas ABB</LogoText>. All rights reserved with magical essence.</span>
          </Copyright>

          <QuickStats>
            <StatBadge>✨ 50K+ Links Created</StatBadge>
            <StatBadge>⭐ 99.9% Uptime</StatBadge>
            <StatBadge>🎁 24/7 Support</StatBadge>
          </QuickStats>

          <BackToTop onClick={handleBackToTop}>
            ↑ Back to Top
          </BackToTop>
        </BottomSection>
      </Container>
    </Wrapper>
  );
}