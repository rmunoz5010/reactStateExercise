import React from 'react';

class Spinner extends React.Component{
    render(){
        
        return(
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.props.loadingMessage}
                </div>
            </div>
        );
    }

};

Spinner.defaultProps = {
    loadingMessage: 'Loading...'
};

export default Spinner;