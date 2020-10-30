import React from 'react';
import MemoryCard from '../comps/MemoryCard';

export default {
    title: 'MemoryCard',
    component: MemoryCard
};

export const BasicMemoryCard = () => <MemoryCard  />;
export const BasicMemoryCardB = () => <MemoryCard border="5px solid #2F52E0" />;
export const BasicMemoryCardP = () => <MemoryCard border="5px solid #FF715B" />;