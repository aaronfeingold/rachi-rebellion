import React from 'react';
import TestimonyGrid from '../components/TestimonyGrid';
import { TestimonyContainerProps } from '../models/testimony'

const TestimonyContainer: React.FC<TestimonyContainerProps> = ({testimonies}) => (
    <div className="flex w-full flex-wrap justify-center mt-10">
        <TestimonyGrid testimonies={testimonies} />
    </div>
)

export default TestimonyContainer;
