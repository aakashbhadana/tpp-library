import React from 'react';

function Skeleton() {
    return (
        <>
        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="align-center w-full space-x-2">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-32" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-24" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
        </div>
        <div className="align-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-24" />
        </div>
        <div className="align-center w-full space-x-2 max-w-[400px]">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-80" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
        </div>
        <div className="align-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-24" />
        </div>
        <div className="align-center w-full space-x-2 max-w-[440px]">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-32" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-24" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
        </div>
        <div className="align-center w-full space-x-2 max-w-[360px]">
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-80" />
            <div className="h-2.5 bg-gray-50 rounded-full dark:bg-surface w-full" />
        </div>
        <span className="sr-only">Loading...</span>
        </div>
        </>
    );
}

export default Skeleton;