module.exports = (sequelize, Sequelize) => {

    const Order = sequelize.define('Order', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantityProduct: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: Sequelize.INTEGER,
            allowNull:false,
        },
    });
    return Order;
}