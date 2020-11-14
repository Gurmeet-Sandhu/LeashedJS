import React from 'react';
import DayCard from '../comps/DayCard';

export default {
    title: 'DayCard',
    component: DayCard
};

export const CompletedDayCard = () => <DayCard completed={true} />;
export const IncommpletedDayCard = () => <DayCard completed={false} date={""}/>;
