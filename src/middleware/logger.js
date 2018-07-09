export default store => next => action => {


    console.log('ACTION:', action);

    return next(action);
}

        // es5
// export default function (store){
//     return function(next){
//         return function(action){
//
//         }
//     }
// }