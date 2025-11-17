import styled from "@emotion/styled";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import theme from "../theme/theme";

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, ${theme.colors.background}, #B89968);
  position: relative;
  overflow: hidden;
  font-family: "Georgia", serif;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 60%),
      radial-gradient(circle at 80% 80%, rgba(215,168,78,0.12), transparent 60%),
      radial-gradient(circle at 50% 20%, rgba(140,28,28,0.12), transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.25));
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 820px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: fadeDown 1s ease-out;

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h1`
  font-size: 52px;
  margin: 0 0 12px 0;
  font-weight: 900;
  color: ${theme.colors.primary};
  text-shadow: 4px 4px 10px rgba(0,0,0,0.2);
  letter-spacing: 1.5px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.secondary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;

  svg {
    animation: twinkle 1.6s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.15); }
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,237,225,0.92));
  border-radius: 14px;
  border: 2px solid ${theme.colors.gold};
  box-shadow: 0 10px 28px rgba(0,0,0,0.15);
  transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, ${theme.colors.glow}, transparent);
    transition: left .6s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 18px 40px rgba(140,28,28,0.22);

    &::before {
      left: 100%;
    }
  }
`;

const QuestionWrapper = styled.div`
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Question = styled.div`
  font-weight: 800;
  color: ${theme.colors.primary};
  font-size: 18px;
  line-height: 1.45;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 42px; height: 42px;
  background: ${theme.colors.gold};
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.primary};
  transition: transform .5s cubic-bezier(.34,1.56,.64,1);

  ${({ open }) => open && `transform: rotate(180deg) scale(1.1);`}
`;

const Answer = styled.div`
  max-height: ${({ open }) => (open ? "350px" : "0")};
  overflow: hidden;
  background: rgba(215,168,78,0.07);
  border-top: ${({ open }) => (open ? "1px solid "+theme.colors.gold : "none")};
  transition: max-height .6s cubic-bezier(.34,1.56,.64,1);
`;

const AnswerContent = styled.div`
  padding: ${({ open }) => (open ? "18px 22px" : "0 22px")};
  color: ${theme.colors.text};
  font-size: 16px;
  line-height: 1.65;
  animation: ${({ open }) => open ? "fadeIn .45s" : "none"};

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    { q: "How do I create a short link?", a: "Simply paste your URL into the input box and click “Shorten”. The system instantly transforms it into a magical short link!" },
    { q: "Can I customize my shortened URLs?", a: "Absolutely! You can personalize your link by specifying an alias or meaningful keyword." },
    { q: "Is there a limit to the number of links I can shorten?", a: "No limit at all! Use it freely and shorten as many URLs as you need." },
    { q: "How do I view analytics and track clicks for my links?", a: "Through your Analytics Dashboard! View total clicks, referrers, devices, and more." },
    { q: "Are my shortened URLs secure?", a: "We scan all target URLs, block malicious links, and apply security validation to ensure safety." },
    { q: "How do you prevent spam or malicious links?", a: "Multiple layers: URL validation, blacklist scanning, bot detection, and system monitoring." },
    { q: "Can I generate QR codes for my short links?", a: "Yes! Each short link automatically supports instant QR code generation." },
    { q: "Do links expire? Can I set expiration dates?", a: "Links do not expire by default, but you can optionally set custom expiration rules." },
    { q: "Is there a free version?", a: "Yes! The free tier includes unlimited shortening. Paid plans add analytics history, API limits, and custom branding." },
    { q: "How do I contact customer support?", a: "You may contact us through email or the Help Center anytime." },
    { q: "Can I integrate with third-party applications or use an API?", a: "Yes! A full REST API is available for developers and automation workflows." },
    { q: "Can I manage and organize my shortened links?", a: "Of course! The dashboard allows categories, tags, filters, and full management tools." },
    { q: "What happens when someone opens a deleted or expired link?", a: "They will see a friendly message notifying them that the link is no longer active." },
    { q: "How do I protect my links with passwords?", a: "Enable password protection inside the link settings to secure your URL." },
  ];

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>✨ Frequently Asked Questions ✨</Title>
          <Subtitle>
            <Sparkles size={22} /> Your Magical Guide <Sparkles size={22} />
          </Subtitle>
        </Header>

        <ItemsContainer>
          {faqs.map((item, index) => (
            <Item key={index} onClick={() => toggle(index)}>
              <QuestionWrapper>
                <Question>{item.q}</Question>
                <IconWrapper open={openIndex === index}>🎄</IconWrapper>
              </QuestionWrapper>
              <Answer open={openIndex === index}>
                <AnswerContent open={openIndex === index}>
                  {item.a}
                </AnswerContent>
              </Answer>
            </Item>
          ))}
        </ItemsContainer>

      </Container>
    </Wrapper>
  );
}
