import React from 'react';
import SwiperNovs from '../home/SwiperNovs';

export default function SwiperList({ items }) {
    const groupedItems = items
        .filter(item => item.novelty)
        .reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});

    return (
        Object.keys(groupedItems).map(category => (
            <SwiperNovs key={category} data={groupedItems[category]} />
        ))
    );
}
