import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  
      order: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Коньки BAUER',
          img: 'skates.jpeg',
          desc: 'Игровые коньки',
          category: 'skates',
          price: '999.50'
        },
        {
          id: 2,
          title: 'Шлем RXG Combo',
          img: 'helmet.jpeg',
          desc: 'Игровой шлем',
          category: 'helmet',
          price: '150.50'
        },
        {
          id: 3,
          title: 'Наплечник CCM',
          img: 'shoulders.jpeg',
          desc: 'Игровые наплечники',
          category: 'shoulder-pads',
          price: '80.99'
        },
        {
          id: 5,
          title: 'Наколенники BAUER',
          img: 'knees.jpeg',
          desc: 'Игровые наколенники',
          category: 'knee-pads',
          price: '210.50'
        },
        {
          id: 6,
          title: 'Клюшки BAUER',
          img: 'sticks.jpeg',
          desc: 'Игровые клюшки',
          category: 'stick',
          price: '95.50'
        },
        {
          id: 7,
          title: 'Коньки CCM',
          img: 'skates.jpeg',
          desc: 'Игровые коньки',
          category: 'skates',
          price: '999.50'
        },
        {
          id: 8,
          title: 'Краги CCM',
          img: 'crags.jpeg',
          desc: 'Игровые перчатки',
          category: 'crags',
          price: '215.90'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addOreder = this.addOreder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header order={this.state.order} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addOreder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addOreder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({order: this.state.order.filter(el => el.id !== id)})
  }

  addOreder(item) {
    this.setState({order: [...this.state.order, item]})
  }
}

export default App;
