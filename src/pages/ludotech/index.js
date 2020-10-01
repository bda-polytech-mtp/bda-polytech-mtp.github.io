import React from 'react';
import { Layout } from '../../components/layout';
import { ClubTitle } from '../../components/club-title';
import pawn from '../../../static/pawn.svg';
import dice from '../../../static/dice.svg';
import './index.scss';

const KevenCard = () => (
    <svg width="270" height="425" fill="rgb(65, 59, 69)" stroke="rgb(65, 59, 69)" className="card keven-card">
        <rect height="425" width="270" rx="30" ry="25" />
        <rect x="10" y="10" height="405" width="250" rx="20" ry="15" fill="white" />
        
        <line x1="30" y1="0" x2="30" y2="50" strokeWidth="5" />
        <line x1="40" y1="0" x2="40" y2="40" strokeWidth="5" />
        <line x1="50" y1="0" x2="50" y2="30" strokeWidth="5" />
        <line x1="60" y1="0" x2="60" y2="20" strokeWidth="5" />
        <polyline points="250 375, 250 405, 220 405" strokeWidth="5" fill="none" strokeLinejoin="round" strokeLinecap="round" />

        <image width="220" x="25" y="110" href={ pawn } />

        <text x="110" y="70" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="20" >Respo</text>
        <text x="60" y="380" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="20" >Keven Dvorianoff</text>
    </svg>
);

const RemyCard = () => (
    <svg width="270" height="425" fill="rgb(65, 59, 69)" stroke="rgb(65, 59, 69)" className="card remy-card">
        <rect height="425" width="270" rx="30" ry="25" />
        <rect x="10" y="10" height="405" width="250" rx="20" ry="15" fill="white" />
        
        <line x1="30" y1="0" x2="30" y2="50" strokeWidth="5" />
        <line x1="40" y1="0" x2="40" y2="40" strokeWidth="5" />
        <line x1="50" y1="0" x2="50" y2="30" strokeWidth="5" />
        <line x1="60" y1="0" x2="60" y2="20" strokeWidth="5" />
        <polyline points="250 375, 250 405, 220 405" strokeWidth="5" fill="none" strokeLinejoin="round" strokeLinecap="round" />

        <image width="220" x="25" y="110" href={ dice } />

        <text x="90" y="70" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="20" >Vice-Respo</text>
        <text x="75" y="380" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="20" >Rémy Launois</text>
    </svg>
);

const ScheduleCard = () => (
    <svg width="270" height="425" fill="rgb(65, 59, 69)" stroke="rgb(65, 59, 69)" className="card schedule-card">
        <rect height="425" width="270" rx="30" ry="25" />
        <rect x="10" y="10" height="405" width="250" rx="20" ry="15" fill="white" />

        <line x1="30" y1="0" x2="30" y2="50" strokeWidth="5" />
        <line x1="40" y1="0" x2="40" y2="40" strokeWidth="5" />
        <line x1="50" y1="0" x2="50" y2="30" strokeWidth="5" />
        <line x1="60" y1="0" x2="60" y2="20" strokeWidth="5" />
        <polyline points="250 375, 250 405, 220 405" strokeWidth="5" fill="none" strokeLinejoin="round" strokeLinecap="round" />

        <text x="95" y="70" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="20" >Horaires</text>
        <text x="65" y="200" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="50" >Mardi</text>
        <text x="95" y="260" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="45" >soir</text>
        <text x="88" y="310" fontFamily="Ubuntu" fontVariant="small-caps" fontWeight="bold" fontSize="13" >(après les cours)</text>
    </svg>
);

export default function Ludotech() {
    
    return <Layout>
        <ClubTitle>Ludotech</ClubTitle>
        <div className="cards-deck">
            <KevenCard />
            <ScheduleCard />
            <RemyCard />
        </div>
    </Layout>

}