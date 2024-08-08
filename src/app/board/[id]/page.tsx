import React from 'react';

type BoardPageProps = {
    params: {
        id: string;
    };
};

export default function BoardPage({ params }: BoardPageProps){
    const { id } = params;  // 'id' is the dynamic part of your route

    if (!id) {
        return <div>Loading...</div>; // This is a fallback while the id is being fetched
    }

    return (
        <div>Hello! {id}</div>
    );
}
