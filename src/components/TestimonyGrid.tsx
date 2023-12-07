import React from 'react';
import TestimonyCard from './TestimonyCard';
import { TestimonyGridProps } from '../models/testimony';

const TestimonyGrid: React.FC<TestimonyGridProps> = ({testimonies}) => {
    const testimonyCards = testimonies.map((testimony) => <TestimonyCard testimony={testimony} />);

    return (
        <div className="grid grid-cols-4 gap-4">
            {testimonyCards}
        </div>
    )
};

export default TestimonyGrid;
