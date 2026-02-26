import { LightningElement } from 'lwc';

export default class LifeCycleChildOfChild extends LightningElement {
    constructor(){
        super();
        console.log('child of child constructor called');
    }

    connectedCallback(){
        console.log('child of child connectedCallback called');
    }

    renderedCallback(){
        console.log('child of child renderedCallback called');
    }
}