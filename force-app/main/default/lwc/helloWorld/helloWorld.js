import { LightningElement, track } from 'lwc'

export default class HelloWorld extends LightningElement {
  //@track adress

  fullname = '  Zero to Hero'
  title = 'LWC'
  changeHandler(event) {
  this.title = event.target.value
  }

  address={
    city: 'New York',
    state: 'NY',
    country: 'USA',
    zip: '10001'
  }
  
  trackHandler(event){    
    //this.address.city = event.target.value
    this.address = {...this.address, "city": event.target.value} //segunda forma de fazer sem o track
  }

  users = ["John", "Jane", "Jack", "Jill"]
  num1 = 10
  num2 = 20
  
  get firstUser(){
    return this.users[0]
  } 

  get multiply(){
    return this.num1 * this.num2
  }
}