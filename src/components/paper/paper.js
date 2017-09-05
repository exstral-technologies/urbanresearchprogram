import React from 'react';
import Paper from 'material-ui/Paper';

const PaperWrapper = () => {
    return (
        <div>
            <Paper  className="paper" zDepth={5}>
                <img src="https://www.redcross.org/images/modf/rco-ui-donation-credit-cards-hires.png" alt="credit cards"/>
                <div className="paper-cc">CreditCard/DebitCard</div>
            </Paper>
        </div>
    );
};

export default PaperWrapper;