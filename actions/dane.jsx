import db from '../config/Firebase'

export const pozyskajDane = async () =>{
    try{
        const dane = await db.collection('Test').doc("Manoe").get()
        const pobraneDane = dane.data()

        alert(pobraneDane)
    }
    catch(e){
        alert(e)
    }
}

export const getUsers = async () => {
    try{
        let arrayUzytkownikow = []
        const dane = await db.collection("Students").orderBy('wiek', 'desc').get()
        dane.forEach(student => {
            arrayUzytkownikow.push(student.data())
        });

        
        return arrayUzytkownikow

    }catch(error){
        alert(error)
    }
}

export const addUserToDB = async (array) => {
    try{ 
        db.collection("Students").doc(array.imie).set(array)

    }catch(e){
        alert(e)
    }
}