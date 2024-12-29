import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="user">
          <img src="https://images.pexels.com/photos/26052213/pexels-photo-26052213/free-photo-of-young-woman-with-an-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className="info">
              <span>Ann</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=`}><img src={Edit} alt=""/></Link>
              <img src={Delete} alt=""/>
            </div>
        </div> 
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</h1> 
        <p><p>In July the New Popular Front (NFP), a coalition of left-wing parties, came out on top in a snap general election in France, winning 193 seats in the National Assembly. The centrist bloc supporting President Emmanuel Macron got 166 seats, the far-right National Rally (RN) 142, and the center-right Republicans forty-seven.
          Three indisputable facts stand out. First, Macron’s governing coalition lost the election. Second, tactical voting and strategic withdrawal of candidates by Macronists and leftists in the decisive second round prevented the RN from winning altogether after it gained the most votes in the first round. This “republican front” strategy worked beyond all expectations: despite receiving the most votes of any party, the RN came third in terms of seats. Finally, the election resulted in a hung parliament and created a political conundrum. The NFP won the most seats in the National Assembly but was left almost 100 short of an absolute majority.
          </p>
          <p>With limited room for maneuver, the NFP put forth Lucie Castets, a civil servant, as candidate for prime minister. In August Macron rejected her nomination on the grounds that her government would have succumbed to an immediate motion of no confidence. This was a contentious interpretation of the president’s constitutional powers. Whether an NFP government would have been rapidly censured or imploded when forced to compromise is irrelevant. Citizens who cast their vote to defeat the far right deserved to find out.
          The truth is that Macron did not want his pension reform to be undone, so he turned to the right and appointed Michel Barnier, the former chief Brexit negotiator for the European Union. Barnier is a member of the Republicans, a party that received a paltry 5.4 percent of the vote and refused to participate in the republican front strategy. The minority government he led had no political legitimacy, no unity, and no real purpose apart from keeping the left out of office.
          </p>
          <p>In October, Barnier presented his government’s budget bill for 2025, which aimed to bring the public deficit from 6.1 percent of GDP to 5 percent. It included tax increases and €40 billion in spending cuts, half of which would come from the state budget, the rest from social security and local authorities. Without a majority in the National Assembly to move the bill forward, Barnier had to use Article 49.3 of the Constitution, which enables the prime minister to pass legislation without a vote. The left had no other choice but to bring a motion of no confidence. Despite Barnier accepting key budget demands from the RN, Marine Le Pen decided to vote with the left to censure the government on December 4. This was the first successful motion of no confidence since 1962, and Barnier was the shortest serving prime minister since the beginning of the Fifth Republic in 1958.
          The day after the fall of Barnier’s government, Macron went on the air to say that he would stay in power until the end of his term in 2027 and would appoint a new prime minister shortly. This gave the left another chance to form a government or, at least, join a coalition. Last summer, the left was understandably outraged at not being considered for office after it had won the biggest bloc in the National Assembly. Jean-Luc Mélenchon, the leader of La France Insoumise (LFI, the most radical party in the NFP coalition), declared that Macron “stole” the election and called for the president’s impeachment.  Yet the NFP remained stuck in opposition.
          </p>
          <p>There are three possibilities for what might happen next. The first is an NFP government. This is the least likely scenario, as Macron remains deeply opposed to the left’s goals. And how would a left government pass progressive legislation when 70 percent of MPs are conservative if not far right? This is a hard question the NFP has no answer for. The second is the appointment of a Barnier 2.0 to lead a coalition of Macronists and Republicans. Such an appointment could only exacerbate popular anger and would inevitably lead to another vote of no confidence, something Macron cannot afford.
          Third, there could be a coalition government led by a center-left figure. Olivier Faure, the leader of the Socialist Party (PS), has alluded to the appointment of a left-wing prime minister open to compromise with the right. He or she would be committed to governing without using Article 49.3 in return for immunity from a motion of no confidence. There is one problem here: some in the PS would agree to a coalition government, but LFI would reject it. This would provoke major tensions between NFP partners and could even split the coalition.
          The combined number of Socialist and Macronist MPs (including Macron’s centrist allies) would total 252—still short of an absolute majority (289). But this new minority government could work if the Republicans abstain from voting against the new coalition; LFI and RN together would not have enough votes to bring down the government. The PS would only join such a coalition government if enough Green and Communist MPs came on board too; the Socialists do not want to be seen as the force that wrecked the NFP. This messy and quite improbable scenario might be the left’s best shot right now for political influence.
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single