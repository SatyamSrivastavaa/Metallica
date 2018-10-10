export default function trades(defStore=[],action){

    switch(action.type){
        case 'DELETE_TRADE':
            // change the store !
            var indexOfTrade = action.index;

            return [
                ...defStore.slice(0, indexOfTrade),
                ...defStore.slice(indexOfTrade + 1)
                ];

        case 'FETCH_TRADE_DETAILS':
            console.log(action.response)
            defStore= action.response;
            return defStore;

        default:
            return defStore;
    }

}
