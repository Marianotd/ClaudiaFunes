import React, { useMemo } from 'react';
import SwiperNovs from '../home/SwiperNovs';

export default function SwiperList({ items }) {
    const groupedItemsByCategory = useMemo(() => {
        return items
            .filter(item => item.novelty)
            .reduce((acc, item) => {
                if (!acc[item.category]) {
                    acc[item.category] = [];
                }
                acc[item.category].push(item);
                return acc;
            }, {});
    }, [items]);

    if (Object.keys(groupedItemsByCategory).length === 0) {
        return (
            <div className="text-center text-xl font-bold py-6">
                Estamos trabajando para traerte novedades asombrosas...
            </div>
        );
    }

    return (
        Object.keys(groupedItemsByCategory).map(category => (
            <SwiperNovs key={category} data={groupedItemsByCategory[category]} />
        ))
    );
}
