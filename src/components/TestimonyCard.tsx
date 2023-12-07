import React from 'react';
import { TestimonyCardProps } from '../models/testimony';

const TestimonyCard: React.FC<TestimonyCardProps> = ({testimony}) => {
    return (
        <div className="flex rounded-lg h-full dark:bg-pink-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
                {React.createElement(testimony.emoji, { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"})}
                <h2 className="text-white dark:text-white text-lg font-medium">{testimony.message}</h2>
            </div>
        </div>
    )
};

export default TestimonyCard;
