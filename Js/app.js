'use strict'

class SmartForm extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <form class="d-flex flex-column gap-2 w-50" type="submit">
        <label class="text-white fs-4">
            Enter Password
            <input type="password" placeholder="Plice Enter Password" class="form-control p-3 password-list">
        </label>
        <label class="text-white fs-4">
            Confirm Password
            <input type="password" placeholder="Plice Enter Confirm Password" class="form-control p-3 password-confirm">
        </label>
        <button type="button" class="btn btn-warning  p-2 fs-4 ">Submit</button>
    </form>`
        
    }
}
window.customElements.define("smart-form",SmartForm)

const html = document.querySelector('html')
const elForm = document.querySelector('form')
const elPassword = document.querySelector('.password-list')
const elConfirm = document.querySelector('.password-confirm')
const elBtn = document.querySelector('.btn-warning');


        html.addEventListener("mouseover",(e)=>{
            if(elPassword.value === ''){
                elConfirm.disabled = true;
            }else{
                elConfirm.disabled = false;
            }

            if(elPassword.value === elConfirm.value){
                elBtn.disabled = false;
            }else if(elPassword.value !== elConfirm.value){
                elBtn.disabled = true;
            }
        })
        elBtn.addEventListener('click',()=>{
            elForm.reset()
        })
