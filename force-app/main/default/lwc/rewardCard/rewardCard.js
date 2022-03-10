import { LightningElement, api } from 'lwc';

export default class RewardCard extends LightningElement {
    @api itemImgUrl;
    @api itemTitle;
    qty = 0;


    minus(){
        if (this.qty >= 1) {
            this.qty -= 1;
        }
    }

    plus(){
        this.qty +=1;
    }

    submit(){
        if (this.qty >=1){
        this.dispatchEvent(new CustomEvent('submitqty', {
            detail:
                {
                    title: this.itemTitle,
                    qty: this.qty,
                }
        }));
        //console.log(cart);
        this.qty = 0
        }
    }
}