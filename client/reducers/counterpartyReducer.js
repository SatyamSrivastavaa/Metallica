export default function counterparties(defStore=[],action){
    
        switch(action.type){
            case 'FETCH_COUNTERPARTY':
                console.log(action.response)
                defStore= action.response;
                return defStore;
    
            default:
                return defStore;
        }
    
    }