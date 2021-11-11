import * as Yup from 'yup';
import Customer from '../models/Customer';

class CustomerController {
  async getCustomers(req, res) {
    const { name } = req.query;
    let customers;

    if (name) {
      customers = await Customer.findAll({
        where: { name },
      });
    } else {
      customers = await Customer.findAll();
    }

    return res.json(customers);
  }

  async getCustomerById(req, res) {
    const { id } = req.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    return res.json(customer);
  }

  async createCustomer(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      dateBirthday: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const { id, name, lastName, dateBirthday } = await Customer.create(
      req.body
    );

    return res.json({
      id,
      name,
      lastName,
      dateBirthday,
    });
  }

  async updateCustomer(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      dateBirthday: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const { id } = req.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    const { name, lastName, dateBirthday } = await customer.update(req.body);

    return res.json({
      id,
      name,
      lastName,
      dateBirthday,
    });
  }

  async deleteCustomer(req, res) {
    const { id } = req.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    await Customer.destroy({
      where: { id },
    });

    return res.json();
  }
}

export default new CustomerController();
