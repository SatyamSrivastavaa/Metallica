export default function locations(defStore=[],action){
    
        switch(action.type){
            case 'FETCH_LOCATIONS':
                console.log(action.response)
                defStore= action.response;
                return defStore;
    
            default:
                return defStore;
        }
    
    }