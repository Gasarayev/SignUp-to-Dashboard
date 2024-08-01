import { useParams } from "react-router-dom";

import { useEffect, useState, useMemo, memo } from "react";
import { user_get } from "../../api/users";


const veryBigArray = new Array(2_000_000).fill(0).map((_, idx, arr) => (
    {
        id: idx,
        name: `John Doe ${idx}`,
        isManager: idx === arr.length - 1
    }
))


const fib_n = (n: number): number => {
    if (n <= 1) return n
    return fib_n(n - 1) + fib_n(n - 2)
}


function UserProfileEdit() {
    const { userID } = useParams<any>()
    const [userProfileEdit, setUserProfileEdit] = useState<any>(null)
    
    const [vacationDays, setVacationDays] = useState(21)
    const [managers] = useState(veryBigArray)
    const findUserManager = managers.find(item => item.isManager)
    const bonusesOverDecades = useMemo(() => {
        return [10, 20, 30, 40].map(i => ({
            years: i,
            bonus: fib_n(i)
        }))
    }, [])
    
    // const [bonusesOverDecades, setBonusesOverDecades] = useState<any>([])
    // useEffect(() => {
    //     const calculated = [10, 20, 30, 40].map(i => ({
    //         years: i,
    //         bonus: fib_n(i)
    //     }))
    //     setBonusesOverDecades(calculated)
    // }, [])

    useEffect(() => {
        user_get(userID)
            .then(resp => setUserProfileEdit(resp.data))
    }, [userID])


    return (
        <div>
            <h1>Edit user</h1>
            <p>User index is: {userID}</p>
            <p>{userProfileEdit?.name}</p>
            <hr />
            <p>Vacation Days: {vacationDays}</p>
            <button onClick={() => setVacationDays(vacationDays + 1)} className="btn btn-dark">Add leave days</button>
            <hr />
            <p>Manager: {findUserManager?.name}</p>
            <hr />
            <p>Bonuses: </p>
            <ul>
                {bonusesOverDecades.map((obj, idx) => (
                    <li key={idx}>{obj.years} years: {obj.bonus} $</li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default  memo(UserProfileEdit)