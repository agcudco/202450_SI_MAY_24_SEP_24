import React from "react";

interface ComponenteClaseProps{
    nombre: string;
}

export class ComponenteClase extends React.Component<ComponenteClaseProps,any>{
    constructor(props: ComponenteClaseProps){
        super(props);
    }

    render(){
        return <>
            Hola {this.props.nombre} desde el Componente de Clase
        </>
    }
}

