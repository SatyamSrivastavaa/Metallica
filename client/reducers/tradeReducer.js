export default function trades(defStore=[],action){
    
        switch(action.type){    
            case 'FETCH_TRADE_DETAILS':
                console.log(action.response)
                defStore= action.response;
                return defStore;
    
            default:
                return defStore;
        }
    
    }