import fs from 'fs';

export default class Data {
  static getData(name) {
    let tmp = null;
    switch (name) {
      case 'orders':
        tmp = fs.readFileSync('./app/data/orders.json');
        break;
      case 'orders_columns':
        tmp = fs.readFileSync('./app/data/orders_columns.json');
        break;
      case 'client_columns':
        tmp = fs.readFileSync('./app/data/client_columns.json');
        break;
      case 'clients':
        tmp = fs.readFileSync('./app/data/clients.json');
        break;
      default:
        tmp = null;
    }
    const temp = JSON.parse(tmp);
    return temp;
  }

  static writeOrders() {
    const temp = JSON.stringify(
      [
        {
          key: '1',
          name: 'Deiv Nort',
          phone: '89382223422',
          email: 'example@example.psuti',
          company: 'Pampers',
          country: 'Poland',
          currency: 'USD'
        },
        {
          key: '2',
          name: 'Deiv Nort',
          phone: '89382223422',
          email: 'example@example.psuti',
          company: 'Pampers',
          country: 'Poland',
          currency: 'USD'
        },
        {
          key: '3',
          name: 'Deiv Nort',
          phone: '89382223422',
          email: 'example@example.psuti',
          company: 'Pampers',
          country: 'Poland',
          currency: 'USD'
        },
        {
          key: '4',
          name: 'Deiv Nort',
          phone: '89382223422',
          email: 'example@example.psuti',
          company: 'Pampers',
          country: 'Poland',
          currency: 'USD'
        }
      ],
      null,
      '\t'
    );
    fs.writeFileSync('./app/data/test.json', temp, 'UTF-8');
    console.log('sucsess');
  }

  static getOrdesColomns() {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Client',
        dataIndex: 'client',
        key: 'client'
      },
      {
        title: 'Type items',
        dataIndex: 'type_items',
        key: 'type_items'
      },
      {
        title: 'Count items',
        dataIndex: 'count_items',
        key: 'count_items'
      },
      {
        title: 'Cost of item',
        dataIndex: 'cost_item',
        key: 'cost_item'
      },
      {
        title: 'Orders cost',
        dataIndex: 'order_cost',
        key: 'order_cost'
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority'
      }
    ];
  }

  static test() {
    const temp = JSON.stringify(
      [
        {
          key: '1',
          name: 'Order from Mersedes',
          client: '32',
          type_items: 'words',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '2',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '3',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '4',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '5',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '6',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '7',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '8',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '9',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '10',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '11',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '12',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '13',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '14',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        },
        {
          key: '15',
          name: 'John Brown',
          client: '32',
          type_items: 'New York No. 1 Lake Park',
          count_items: '32',
          cost_item: '32',
          order_cost: '32',
          priority: '32'
        }
      ],
      null,
      '\t'
    );
    console.log(temp);
    const temp2 = JSON.parse(temp);
    console.log(temp2);
  }
}
