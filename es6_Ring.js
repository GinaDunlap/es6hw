// ENGAGEMENT RING WITH STYLE OPTIONS

 
// METAL OPTIONS:           PLATINUM; WHITE GOLD; YELLOW GOLD
// SOLITARE STONE OPTION:   DIAMOND
// SOLITARE SHAPE OPTIONS:  ROUND; PEAR; SQUARE; OVAL
// SIDE STONE OPTIONS:      DIAMOND; EMERALD; SAPPHIRE
//
class Ring {
    constructor(metal, solitare, side_stones,stone_shape, personalization, wed_band) {
        this.metal = metal;
        this.solitare = solitare;
        this.side_stones = side_stones;
        this.personalization = personalization;
        this.stone_shape = stone_shape;
        this.wed_band = wed_band;
        
    }
}          
//STONE SHAPE AS CHILD; WEDDING BAND AS CHILD; PERSONALIZATION AS CHILD

class WedSet extends Ring {
constructor (metal, solitaire, side_stones,stone_shape, personalization, wed_band){

    super (metal, solitaire, side_stones,stone_shape, personalization, wed_band);
    this.personalization = "yes"
    this.wed_band = wed_band
    this.stone_shape = stone_shape
}
    willPersonalize() {
        if(this.personalization == "yes"){
            console.log("Personalization accepted!")
        }
    }


//  wilLPersonalize(){
//     if (this.personalization==yes){
//     console.log("Your personalization is received")
//     }
//  }
    
// addwed_band() {

//    this.wed_band.push(wed_band);
//    console.log(`${this.wed_band} Added Wedding Band ${wed_band}.`);
// }

// addWed_Band(){
//     this.wed_band.push(wed_band)
//     console.log(`${this.wed_band} Added Wedding Band ${wed_band}`)
//     }
// }
}

const makeRing = new WedSet("Platinum", true , "Sapphire", "yes", "round", "Platinum")
makeRing.willPersonalize()
console.log(makeRing)