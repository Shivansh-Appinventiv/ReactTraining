import Heading from "./components/Heading";
import { searchIcon } from "./Images";

const listCard = [
  {
    subtitleHeading: "Affiliate Program",
    items: [
      "Are there countries I can't promote in?",
      "Can you make specific images/creative for my website?",
      "How does the Xcoins affiliate program work?",
    ],
  },
  {
    subtitleHeading: "Buy & Sell Cryptocurrencies",
    items: [
      "How do I sell a cryptocurrency?",
      "How do I buy a cryptocurrency?",
      "What currencies do we accept?",
      "How does Xcoins lock in your crypto rate?",
    ],
    seeAllArticles: "See all articles",
  },
  {
    subtitleHeading: "Contact Us",
    items: ["What are Xcoins’ business hours?", "How can I contact Xcoins?"],
  },
  {
    subtitleHeading: "My Xcoins Account",
    items: [
      "What countries does Xcoins service?",
      "How do I reset my password?",
      "Why can’t I access my brand new account?",
    ],
  },
  {
    subtitleHeading: "Orders",
    items: [
      "How can I upgrade my limit level?",
      "What is my limit level?",

      "Why did I receive a different amount of Bitcoin than I initially purchased?",
      "Are there fees when buying or selling with Xcoins?",
    ],
    seeAllArticles: "See all articles",
  },
  {
    subtitleHeading: "Payment Methods",
    items: [
      "Do you accept Paypal or bank transfer payments?",
      "What cards can I use on Xcoins to buy or receive cash?",

      "Can you give me an overview of bank fees? - Cash advance & exchange rate fees",

      "Why didn't my 3-D Authentication work? And what can I do about it?",
    ],
    seeAllArticles: "See all articles",
  },
  {
    subtitleHeading: "Security",
    items: [
      "What is 3-D Secure?",
      "What is 2FA - Two Factor Authentication?",
      "What is an OTP (One-time password)?",
      "How can I protect myself from scams?",
    ],
    seeAllArticles: "See all articles",
  },
  {
    subtitleHeading: "Verification",
    items: [
      "What do I do once my ID verification documents are submitted?",
      "How can I take the perfect selfie for verification?",
      "What ID can I use to sign up with Xcoins?",
      "Why was my application to join Xcoins declined?",
    ],
    seeAllArticles: "See all articles",
  },
  {
    subtitleHeading: "Wallet",
    items: [
      "What is a private key?",
      "What is a non-custodial wallet and how does it work?",
      "What is my wallet address?",
      "What is a destination tag and why does Ripple (XRP) use them?",
    ],
    seeAllArticles: "See all articles",
  },
];

const Card = () => {
  const cards = listCard.map((item, index) => {
    return (
      <div key={index} className={`card`}>
        <div className={`cardUp`}>
          <div className={`subtitleHeading`}>{item.subtitleHeading}</div>
          <div className={`listArea`}>
            <ul>
              {item.items.map((listItem, i) => {
                return <li key={i}>{listItem}</li>;
              })}
            </ul>
          </div>
        </div>
        {item.seeAllArticles && (
          <div className={`seeAll`}>{item.seeAllArticles}</div>
        )}
      </div>
    );
  });
  return cards;
};

const ContentFlex = () => {
  return (
    <div className={`supportContentBox`}>
      <Heading headingText={"Support"} />
      <div className={`searchBox`}>
        <div className={`searchImageBox`}>
          <img src={searchIcon} alt={`searchIcon`} />
        </div>
        <div className={`inputBox`}>
          <input
            type={`text`}
            name={`seachbar`}
            placeholder={`Search XcoinSupport`}
          />
        </div>
        <div className={`downArrow`}>&#9660;</div>
      </div>
      <div className={`cardBox`}>
        <Card />
      </div>
    </div>
  );
};

export default ContentFlex;
