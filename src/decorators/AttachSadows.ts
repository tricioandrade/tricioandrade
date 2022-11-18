export function AttachShadows(){
    return function(target: any, key: string | symbol, descriptor: PropertyDescriptor){
        console.log(descriptor);
    }
}