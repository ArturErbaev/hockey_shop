import React, { Component } from 'react'

export class Categories extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'skates',
                    name: 'Коньки'
                },
                {
                    key: 'helmet',
                    name: 'Шлем'
                },
                {
                    key: 'shoulder-pads',
                    name: 'Наплечники'
                },
                {
                    key: 'knee-pads',
                    name: 'Наколенники'
                },
                {
                    key: 'stick',
                    name: 'Клюшки'
                },
                {
                    key: 'crags',
                    name: 'Краги'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories