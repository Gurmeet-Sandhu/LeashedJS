import React from 'react';
import TopPart from '../comps/TopPart';

export default {
  title: 'Leashed/Top part',
  component: TopPart,
};

export const BasicTop = () => <TopPart />
export const HomeTop = () => <TopPart TopHeight={"200px"} /> //for Home and Traning Pages
export const SecondaryTop = () => <TopPart icon={"/arrow_b_l.png"} />