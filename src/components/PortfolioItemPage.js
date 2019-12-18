import React from 'react';


function PortfolioItemPage(props) {
    return <div>hi there portfolio oneeee.
        <h2>This is from item {props.match.params.id} ??? I am hidden</h2>
        <h3>Why this ain't working</h3>
    </div>
}

export default PortfolioItemPage