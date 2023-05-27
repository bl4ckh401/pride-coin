import Header from '../components/Header'
import Image from 'next/image';
import Link from 'next/link';
import {FaEthereum, FaHandHoldingUsd, FaPaw, FaWallet} from 'react-icons/fa'
import {SiHiveBlockchain} from 'react-icons/si'
import {TbDog} from 'react-icons/tb'

export default function Home() {

  const Exchanges = [
    {

      title:'Pancake Swap',
      icon:'',
      path:'',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <section className="bg-purple-600 w-screen relative md:py-16 flex flex-col justify-center items-center" id="home">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 max-w-screen-lg">
          <div className="w-full md:w-1/2 md:min-h-screen min-h-screen flex justify-center items-center flex-col mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Welcome to the Fabulous World of $Pride Token! 🌈✨</h2>
            <p className="text-gray-700 leading-relaxed">Step into a realm where empowerment, fabulousness, and financial freedom intersect. $Pride Token is here to celebrate the LGBTQ+ community and ignite the rainbow revolution! Are you ready to join the most fabulous movement in the crypto sphere? Let's dive in!</p>
                    
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-center md:justify-start">
                <Image src='/twitterIcon.webp' width={60} height={60} alt='twitter'/>
                <Image src='/telegramIcon.webp' width={60} height={60} alt='telegram'/>
                <Image src='/dexTool.webp' width={60} height={60} alt='dexTool'/>
                <Image src='/etherscanIcon.webp' width={60} height={60} alt='etherscan'/>
                <Image src='/CoinMarketIcon.webp' width={60} height={60} alt='coinmarket'/>
                <Image src='/Pancake SwapIcon.webp' width={60} height={60} alt='Pancake Swap'/>
              </div>
            </div>
          </div>
          <div className="bg-[url('/equaltyposter.png')] bg-no-repeat bg-contain absolute left-2/4 top-12 w-3/4 h-screen"/>
        </div>
        <div className='flex flex-wrap justify-center w-full px-6 md:px-24'>
          {Exchanges.map((item, index) => {
            return (
              <div className='w-full sm:w-1/3 p-2' key={index}>
                <Link href='Pancake Swap'>
                  <div className='border border-white rounded-full p-4'>
                    <h2 className='text-center'>{item.title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>      
      <section className="bg-purple-600 py-16 min-h-screen w-screen relative justify-between flex-col items-center flex" id="about">
        <div className="bg-[url('/Prideposter.png')] bg-no-repeat hidden md:flex bg-contain absolute md:-left-32 lg:-left-32 top-24 w-3/4 h-screen"/>

        <div className="container w-screen mx-auto flex flex-col min-h-screen md:pl-80 lg:pl-3/4 z-10 md:flex-col items-center justify-between px-6 max-w-screen-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">About $PRIDE</h2>
          <p className="text-gray-700 leading-relaxed mb-8">By investing in $Pride Token, you're embracing the power of financial empowerment. Let's break the chains of inequality and pave the way for a future where our community thrives in all its glorious colors.</p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-full p-4 text-center">
              <FaPaw size={48} color="white"/>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">Our mission is to empower individuals within the LGBTQ+ community through financial empowerment. We firmly believe in breaking the chains of inequality and creating a future where every member of our community thrives in all their glorious colors. By investing in $Pride Token, you become a catalyst for change and join us on this empowering journey.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-600 relative min-h-screen py-16 w-screen" id="how-to-buy">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">How to Buy PRIDE</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <FaWallet size={48} color="white"/>
          <h3 className="text-xl font-bold mb-4">Step 1: Get a Wallet</h3>
          <p className="text-gray-900 leading-relaxed">Before you can buy Pride, you will need to have a cryptocurrency wallet that supports Binance Smart Chain. There are many different wallets available, so do your research and choose one that is right for you.</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <FaEthereum size={48} color="white"/>
          <h3 className="text-xl font-bold mb-4">Step 2: Buy BNB</h3>
          <p className="text-gray-900 leading-relaxed">In order to buy $PRIDE, you will need to first buy (BNB) from a cryptocurrency exchange. There are many exchanges to choose from, including Coinbase, Binance, and Kraken.</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <SiHiveBlockchain size={48} color="white"/>
          <h3 className="text-xl font-bold mb-4">Step 3: Exchange BNB for PRIDE</h3>
          <p className="text-gray-900 leading-relaxed">Once you have BNB in your wallet, you can exchange it for PRIDE Coin on a decentralized exchange (DEX) such as Pancake Swap. Simply connect your wallet to the DEX and place a buy order for PRIDE Coin.</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <FaHandHoldingUsd size={48} color="white"/>
          <h3 className="text-xl font-bold mb-4">Step 4: Hold or Trade PRIDE Coin</h3>
          <p className="text-gray-900 leading-relaxed">Once you have PRIDE Coin in your wallet, you can choose to hold it for the long-term or trade it for other cryptocurrencies or fiat currencies. Remember that cryptocurrency prices can be volatile, so always do your own research and invest responsibly.</p>
        </div>
        </div>
        </div>
    </section>
    <section className="bg-purple-600 relative min-h-screen py-16 w-screen flex flex-col items-center justify-center" id="why-buy">
    <div className="container flex-wrap justify-center mx-auto w-screen px-6">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">Why Buy $PRIDE</h2>
      <h2 className="text-3xl font-bold mb-6 text-purple-900">💎 Sparkling Empowerment</h2>
        <p className="text-lg mb-6">By investing in $Pride Token, you're embracing the power of financial empowerment. Let's break the chains of inequality and pave the way for a future where our community thrives in all its glorious colors.</p>

        <h2 className="text-3xl font-bold mb-6 text-purple-900">✨ Unleash Your Inner Superstar</h2>
        <p className="text-lg mb-6">With $Pride Token, you're not just an investor, you're a star! Shine bright and show the world your true colors. Together, we'll create a symphony of acceptance, love, and unmatched fabulousness.</p>

        <h2 className="text-3xl font-bold mb-6 text-purple-900">🌟 Party with Purpose</h2>
        <p className="text-lg mb-6">Every transaction with $Pride Token supports LGBTQ+ organizations, initiatives, and communities. We're here to party with a purpose, spreading joy and making a lasting impact. Let's turn the world into a dancefloor of equality!</p>

        <h2 className="text-3xl font-bold mb-6 text-purple-900">🎉 Be a Trailblazer</h2>
        <p className="text-lg mb-6">You're not just following the crowd; you're leading the parade! Join our global community of trailblazers, rebels, and visionaries who are determined to redefine what's possible. Together, we'll challenge norms and create a more inclusive future.</p>

        <h2 className="text-3xl font-bold mb-6 text-purple-900">🔒 Safe & Sassy</h2>
        <p className="text-lg mb-6">$Pride Token is backed by the ultra-secure Binance Smart Chain (BSC). Your investments are locked up tight, ensuring a worry-free journey through the fabulous crypto landscape. Safety and sassiness? It's a match made in rainbow heaven!</p>

        <h2 className="text-3xl font-bold mb-6 text-purple-900">💃 Strut Your Success</h2>
        <p className="text-lg mb-6">As a $Pride Token holder, you're not just building wealth; you're strutting your success with pride. Get ready to sashay into financial abundance while making a difference. It's time to turn heads, break barriers, and conquer the world!</p>

    </div>
{/*     <div className="bg-[url('/highPRIDE.png')] bg-no-repeat hidden md:flex bg-contain absolute md:-right-10 top-24 -right-28 w-1/2 h-screen"></div>
*/}
  </section>
      <div className="bg-purple-600 w-screen min-h-screen flex flex-col items-center justify-center">

      <section className="bg-purple-600 relative min-h-screen w-screen flex flex-col items-center justify-center" id="why-buy">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">🌈 Tokenomics</h2>
        <ul className="list-disc pl-6 text-lg text-gray-200 mb-8">
          <li>Total supply: 420 Trillion tokens minted and released.</li>
          <li>10% reserved for CEX listing, marketing, and development to fuel the growth of our fabulous community.</li>
          <li>Liquidity locked for six months, with plans for extensions to ensure a secure and stable journey.</li>
          <li>0% buy and sell taxes, allowing you to trade and participate in the $Pride revolution without any additional fees.</li>
          <li>Contract ownership renounced to ensure community governance and decentralization.</li>
          <li>No airdrops given to the team; $Pride Token is all about fairness and equal opportunities.</li>
          <li>No presale, as we believe in a fair launch for all to join the fabulous ride.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-6 text-purple-900">🌈 Join the Fabulous Revolution</h2>
        <p className="text-lg mb-6 px-6">Ready to unleash your inner diva? Invest in $Pride Token and be part of the most fabulous revolution the crypto world has ever seen. Let's celebrate love, diversity, and financial freedom like never before!</p>

        <div className="flex items-center container flex-wrap justify-center mx-auto w-screen px-6">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg">Invest Now</button>
        </div>
      </section>
    </div>
    </main>
  )
}
