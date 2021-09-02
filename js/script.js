//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function firstFunc() {
    let arr = [];
    return function secondFunc() {  
       let a = (Math.floor(Math.random() * 100));
        if (arr.includes(a)) {
        return  'Already exist';
        } 
        arr.push(a);
        return {
            num: a,
            arr
        }    
    }
};

let result = firstFunc()
for (i = 0; i <= 100; i++){
    
    console.log(result());
}


