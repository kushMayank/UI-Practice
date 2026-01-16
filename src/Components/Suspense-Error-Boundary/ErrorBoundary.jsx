import React from 'react'

export class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state = {hasError: false, error: null}
    }

    static getDerivedStateFromError(error){
        return { hasError: true, error}
    }

    componentDidCatch(error, info){
        console.log('ErrorBoundary caught:', error, info);
    }

    handleRetry = ()=>{
        this.setState({hasError: false, error: null})
    };

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h3>Something went wrong.</h3>
                    <pre>
                        {this.state.error}
                    </pre>
                    <button onClick={this.handleRetry}>Retry</button>
                </div>
            )
        }
        return this.prop.children;
    }
}

function Feature(){
    return(
        <ErrorBoundary>
            <RiskyWidget/>
        </ErrorBoundary>
    )
}