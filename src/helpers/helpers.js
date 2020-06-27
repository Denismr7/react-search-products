export const getUserInfo = (userData, id) => {
    return userData.filter(user => user.userId === id)
}

export const getItemInfo = (productsArray, propertyToFind, valueToFind) => {
    const array = productsArray.filter(product => product[propertyToFind] === valueToFind);
    return array[0]
}