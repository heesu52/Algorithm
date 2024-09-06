function solution(phone_book) {
    phone_book.sort();
    let target = phone_book[0];
    
        for(let j=1; j<phone_book.length; j++){
            let number = phone_book[j].slice(0,target.length);
            
            if(target === number) return false;
            target = phone_book[j]
        }
        return true;
}