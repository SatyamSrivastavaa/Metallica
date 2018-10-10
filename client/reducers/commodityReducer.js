export default function commodities(defStore=[],action){
    
        switch(action.type){
            case 'FETCH_COMMODITIES':
                console.log(action.response)
                defStore= action.response;
                return defStore;
    
            default:
                return defStore;
        }
    
    }