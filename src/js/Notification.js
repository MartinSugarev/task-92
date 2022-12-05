import { formatCurrency } from './utils'
import classNames from 'classnames'


export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.notification = document.querySelector(".notifications");
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

  }

  empty(){
    document.querySelector('#notifications').innerHTML = ''
  }

  render({type, price}) {
   
    const template = `
<div class="${classNames('notification', `type-${type}`, {'is-danger': type === 'hawaiian' ? true : false})}">
  <button class="delete">Close</button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.notification.appendChild(this.container)

    document.querySelector(".delete").addEventListener('click', () => {
         document.querySelector(`.type-${type}`).style.display = 'none'
         
    })

  }
}
