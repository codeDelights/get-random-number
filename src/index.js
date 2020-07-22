const random = (max = 10, min = 1) => {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min)) + min;
}

export default random;