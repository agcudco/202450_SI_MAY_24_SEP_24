import React from "react";

interface CicloVidaProps {
    name: string;
}

export class CicloVida extends React.Component<CicloVidaProps, CicloVidaState> {
    constructor(props: CicloVidaProps) {
        super(props);

        this.state = {
            name: this.props.name
        }

        console.log("Estoy en el constructor");
    }

    render(){
        console.log("Estoy en el render");
        return <>
            hola, {this.state.name}
            <br />
            <button onClick={()=>{
                this.setState({name:"Carmita"});
            }}>
                Cambiar Texto
            </button>
        </>
    }

    componentDidMount(): void {
        console.log("Estoy en el metodo: componentDidMount()");
    }

    componentWillUnmount(): void {
        console.log("Estoy en el metodo: componentWillUnmount()");
    }

    componentDidUpdate(prevProps: Readonly<CicloVidaProps>, prevState: Readonly<CicloVidaState>, snapshot?: any): void {
        console.log("Estoy en el metodo: componentDidUpdate()");        
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Estoy en el metodo: componentDidCatch()");    
    }
}

interface CicloVidaState {
    name: string;
}