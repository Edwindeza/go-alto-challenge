export const dateFormat = (createdAt) => {
    const date = new Date(createdAt);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const anio = date.getFullYear();
    return  `${dia}/${mes}/${anio}`;
}