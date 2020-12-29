/* Obtiene La Diferencia De Años */
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

/* Calcula Total A Pagar Según La Marca */
export function calculaMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;

        case 'americano': 
            incremento = 1.15;
            break;

        case 'asiatico':
            incremento = 1.05;
            break;
    
        default:
            console.log('La Opción Ingresada No Es Válida');
            break;
    }

    return incremento;
}

/* Calcula El Tipo De Seguro */
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

/* Letras En Capitalize */
export function primerMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1); 
}