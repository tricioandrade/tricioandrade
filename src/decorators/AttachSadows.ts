export function AttachShadows(){
    return function(target: Object | any, key: string | symbol, Description: PropertyDescriptor){
        console.log(target);
    }
}