import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        lastName: Sequelize.STRING,
        dateBirthday: Sequelize.DATE,
      },
      { sequelize }
    );
  }
}

export default Customer;
