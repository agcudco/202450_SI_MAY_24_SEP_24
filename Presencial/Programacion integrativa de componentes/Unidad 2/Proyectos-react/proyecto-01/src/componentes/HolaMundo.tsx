interface HolaMundoProps {
    nombre: string;
    apellido:string;
    edad:number;
}

export const HolaMundo: React.FC<HolaMundoProps> = ({ nombre,apellido,edad }) => {
    return (
        <>
            Hola {nombre} {apellido} desde el componente, tienes {edad} anios?
        </>
    )
}

