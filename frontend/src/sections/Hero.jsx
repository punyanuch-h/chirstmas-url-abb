import { useState } from "react";
import styled from "@emotion/styled";
import { Copy, Sparkles, QrCode, Download, ExternalLink, Trash2, Clock } from "lucide-react";
import QRCode from "react-qr-code";
import theme from "../theme/theme";

const Snow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  top: 0;
  left: 0;

  .snowflake {
    position: absolute;
    color: #fff;
    opacity: 0.75;
    animation: fall linear infinite;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  }

  @keyframes fall {
    0% { 
      transform: translateY(-10px) rotateZ(0deg);
      opacity: 0;
    }
    20% { 
      opacity: 1;
    }
    100% { 
      transform: translateY(105vh) rotateZ(360deg);
      opacity: 0;
    }
  }
`;

const generateSnowflakes = () => {
  const arr = [];
  for (let i = 0; i < 40; i++) {
    arr.push(
      <div
        key={i}
        className="snowflake"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${12 + Math.random() * 18}px`,
        }}
      >
        ❄
      </div>
    );
  }
  return arr;
};

const Container = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at 30% 20%, #F5EDE1 0%, #E8D7C3 40%, #C9AE92 100%);
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
`;

const Content = styled.div`
  max-width: 950px;
  margin: auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 56px;
    font-weight: 900;
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 0 0 12px 0;
    text-shadow: 3px 3px 0px rgba(215, 168, 78, 0.3);
  }

  p {
    margin: 0;
    color: ${theme.colors.text};
    font-size: 18px;
    font-weight: 600;
  }

  svg {
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  justify-content: center;
  flex-wrap: wrap;
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
`;

const TabButton = styled.button`
  flex: 1;
  min-width: 180px;
  padding: 14px 24px;
  border-radius: 12px;
  background: ${({ active }) => active ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)` : "rgba(255, 255, 255, 0.9)"};
  color: ${({ active }) => active ? theme.colors.lightText : theme.colors.primary};
  border: 2px solid ${theme.colors.gold};
  cursor: pointer;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(215, 168, 78, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    padding: 12px 16px;
    font-size: 12px;
  }
`;

const Card = styled.div`
  padding: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid ${theme.colors.gold};
  box-shadow: 0 8px 32px rgba(215, 168, 78, 0.25);
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(10px);

  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.9) rotateX(10deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotateX(0deg);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Field = styled.input`
  width: 100%;
  padding: 16px 18px;
  margin-bottom: 16px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.gold};
  background: ${theme.colors.lightText};
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${theme.colors.accent};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(140, 28, 28, 0.1);
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  padding: 16px 28px;
  width: 100%;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.colors.lightText};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(140, 28, 28, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(215, 168, 78, 0.5) 0%, transparent 70%);
    transition: left 0.5s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(140, 28, 28, 0.5);

    &::before {
      left: 100%;
    }

    svg {
      animation: wand 0.6s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 1;
  }

  @keyframes wand {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
  }
`;

const ResultBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(215, 168, 78, 0.1);
  border: 2px solid ${theme.colors.gold};
  border-radius: 12px;
  animation: slideInUp 0.5s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ResultText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ResultLink = styled.code`
  flex: 1;
  min-width: 0;
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  font-family: "Courier New", monospace;
  word-break: break-all;
  background: rgba(255, 255, 255, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
`;

const QRContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  canvas {
    border: 3px solid ${theme.colors.gold};
    border-radius: 12px;
    padding: 8px;
    background: white;
    box-shadow: 0 8px 24px rgba(215, 168, 78, 0.3);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.primary} 100%);
  color: ${theme.colors.lightText};
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  flex: ${({ flex }) => flex ? "1" : "auto"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(140, 28, 28, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const RecentBox = styled.div`
  margin-top: 60px;
  animation: fadeInUp 0.8s ease-out 0.4s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    color: ${theme.colors.primary};
    margin: 0 0 24px 0;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
  }
`;

const RecentCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid ${theme.colors.gold};
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: slideIn 0.4s ease-out;

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

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 20px rgba(215, 168, 78, 0.2);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const RecentInfo = styled.div`
  flex: 1;
  min-width: 0;

  strong {
    color: ${theme.colors.primary};
    font-size: 14px;
    display: block;
    margin-bottom: 4px;
    word-break: break-all;
  }

  div {
    font-size: 12px;
    color: ${theme.colors.accent};
    word-break: break-all;
    opacity: 0.8;
  }
`;

const RecentActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;

    button {
      flex: 1;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${theme.colors.accent};
  font-size: 16px;
  opacity: 0.7;

  p {
    margin: 0;
  }
`;

export default function Hero() {
  const [tab, setTab] = useState("shorten");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [qr, setQr] = useState("");
  const [recent, setRecent] = useState(() => {
    const cached = JSON.parse(localStorage.getItem("recent-links") || "[]");
    // Ensure all items have an id for React keys
    return cached.map((item, index) => ({
      ...item,
      id: item.id || Date.now() - index, // Generate id for items that don't have one
    }));
  });

  const API = import.meta.env.VITE_WORKER_API 
    ? (import.meta.env.VITE_WORKER_API.endsWith("/") 
        ? import.meta.env.VITE_WORKER_API + "shorten" 
        : import.meta.env.VITE_WORKER_API + "/shorten")
    : null;

  const saveRecent = (shortUrl, longUrl) => {
    const newItem = { 
      shortUrl, 
      longUrl,
      timestamp: new Date().toLocaleString(),
      id: Date.now()
    };
    const updated = [newItem, ...recent].slice(0, 15);
    setRecent(updated);
    localStorage.setItem("recent-links", JSON.stringify(updated));
  };

  const shortenLink = async () => {
    if (!url.trim()) return;

    if (!API) {
      alert("API is not configured");
      return;
    }

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl: url }),
      });

      const data = await res.json();
      if (data.shortUrl) {
        setResult(data.shortUrl);
        saveRecent(data.shortUrl, url);
        setUrl("");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to shorten link");
    }
  };

  const generateQR = () => {
    if (!url.trim()) return;
    setQr(url);
  };

  const deleteRecent = (id) => {
    const updated = recent.filter(item => item.id !== id);
    setRecent(updated);
    localStorage.setItem("recent-links", JSON.stringify(updated));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (tab === "shorten") {
        shortenLink();
      } else {
        generateQR();
      }
    }
  };

  return (
    <Container>
      <Snow>{generateSnowflakes()}</Snow>

      <Content>
        {/* Header */}
        <Header>
          <h1>
            <Sparkles size={48} />
            Mystical Links
          </h1>
          <p>✨ Christmas Magic URL Enchantment ✨</p>
        </Header>

        {/* Tabs */}
        <Tabs>
          <TabButton active={tab === "shorten"} onClick={() => setTab("shorten")}>
            🎄 Shorten Link
          </TabButton>
          <TabButton active={tab === "qr"} onClick={() => setTab("qr")}>
            <QrCode /> Generate QR
          </TabButton>
        </Tabs>

        {/* Tab Content */}
        {tab === "shorten" && (
          <Card>
            <Field
              placeholder="Paste your long URL here... ✨"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <Button onClick={shortenLink}>
              <Sparkles size={18} />
              Enchant Link
            </Button>

            {result && (
              <ResultBox>
                <ResultText>
                  <ResultLink>{result}</ResultLink>
                  <ActionButtons style={{ margin: "0", gap: "8px", flex: "0" }}>
                    <SmallButton onClick={() => navigator.clipboard.writeText(result)}>
                      <Copy size={14} /> Copy
                    </SmallButton>
                    <SmallButton onClick={() => window.open(result, "_blank")}>
                      <ExternalLink size={14} /> Visit
                    </SmallButton>
                  </ActionButtons>
                </ResultText>
              </ResultBox>
            )}
          </Card>
        )}

        {tab === "qr" && (
          <Card>
            <Field
              placeholder="Enter URL to generate QR code... 📱"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <Button onClick={generateQR}>
              <QrCode size={18} />
              Generate QR Code
            </Button>

            {qr && (
              <QRContainer>
                
                <QRCode
                id="qr"
                value={qr}
                size={240}
                bgColor="#FFFFFF"
                fgColor={theme.colors.secondary}
                />

                <ActionButtons style={{ justifyContent: "center", marginTop: "16px" }}>
                  <SmallButton
                    onClick={() => {
                      const canvas = document.getElementById("qr");
                      const png = canvas.toDataURL("image/png");
                      const a = document.createElement("a");
                      a.href = png;
                      a.download = `qr-${Date.now()}.png`;
                      a.click();
                    }}
                  >
                    <Download size={14} /> Download
                  </SmallButton>
                  <SmallButton onClick={() => navigator.clipboard.writeText(qr)}>
                    <Copy size={14} /> Copy URL
                  </SmallButton>
                </ActionButtons>
              </QRContainer>
            )}
          </Card>
        )}

        {/* Recent Links */}
        {recent.length > 0 && (
          <RecentBox>
            <h2>
              <Clock size={24} />
              📚 Grimoire Archive
            </h2>

            {recent.map((r, index) => (
              <RecentCard key={r.id || `${r.shortUrl}-${index}`}>
                <RecentInfo>
                  <strong>🎁 {r.shortUrl}</strong>
                  <div>{r.longUrl}</div>
                  <div style={{ fontSize: "11px", marginTop: "4px" }}>
                    ⏰ {r.timestamp}
                  </div>
                </RecentInfo>

                <RecentActions>
                  <SmallButton onClick={() => window.open(r.shortUrl, "_blank")}>
                    <ExternalLink size={14} /> Visit
                  </SmallButton>

                  <SmallButton onClick={() => navigator.clipboard.writeText(r.shortUrl)}>
                    <Copy size={14} /> Copy
                  </SmallButton>

                  <SmallButton
                    onClick={() => {
                      setUrl(r.longUrl);
                      setQr(r.longUrl);
                      setTab("qr");
                    }}
                  >
                    <QrCode size={14} /> QR
                  </SmallButton>

                  <SmallButton
                    onClick={() => deleteRecent(r.id)}
                    style={{ background: "rgba(255, 107, 107, 0.3)", color: "#d92e2e" }}
                  >
                    <Trash2 size={14} /> Delete
                  </SmallButton>
                </RecentActions>
              </RecentCard>
            ))}
          </RecentBox>
        )}

        {recent.length === 0 && tab === "shorten" && !result && (
          <EmptyState>
            <p>🎄 No enchanted links yet. Start by pasting a URL above!</p>
          </EmptyState>
        )}
      </Content>
    </Container>
  );
}