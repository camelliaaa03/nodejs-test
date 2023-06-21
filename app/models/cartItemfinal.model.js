module.exports = (sequelize, Sequelize) => {

    const CartFinal = sequelize.define('CartItemFinal', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        idorder: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
    return CartFinal;
}