const isAuthenticated = () => {
    const token = localStorage.getItem('estateToken');
    return Boolean(token);
};

const removeToken = () => {
    localStorage.removeItem('token');
};

export { isAuthenticated, removeToken }