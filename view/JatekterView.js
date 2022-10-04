import NegyzetView from "../view/NegyzetView.js";

class JatekterView {
    htmlElemek = []
    constructor() {

        $("main").append("<div class='jatekter'></div>");
        this.jatekterDiv = $("main").children("div:last-child");


        for (let index = 0; index < 9; index++) {
    
            //létrehozzuk a négyzeteket a ITT

            this.htmlElemek.push(new NegyzetView(index, this.jatekterDiv));
            
        }
    }
    // setNegyzetekkAllapota(tomb) {
    //     for (let index = 0; index < tomb.length; index++) {
    //         if(tomb[index]!=0){
                
    //         }
    //     }
    // }
}

export default JatekterView;