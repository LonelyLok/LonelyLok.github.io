import React, { useState } from 'react'
import { Chance } from 'chance';
import {AiFillQuestionCircle,AiOutlineCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
const LostArkFacetSim = () => {
    const selectOptions = [9,10].map(num=><option value={num}>{num}
        </option>)

    const [value, setValue] = useState(9)

    const [chance, setChance] = useState(75)

    const c = new Chance();

    const maxChance = 75
    const minChance = 25
    const delta = 10

    const question = <AiFillQuestionCircle size={100}/>
    const good = <AiOutlineCheckCircle size={100}/>
    const bad = <AiFillCloseCircle size={100}/>

    const defaultArray = Array(value).fill(question)

    const [l0, setTheL0]:[Array<string>,any] = useState(defaultArray)
    const [l1, setTheL1]:[Array<string>,any] = useState(defaultArray)
    const [l2, setTheL2]:[Array<string>,any] = useState(defaultArray)

    const prob = (arr:Array<any>)=>{
        let firstClicked = false
        const newArray = []
        for (const e of arr){
            if(firstClicked){
                newArray.push(e);
                continue
            }
            if(e.type.name === 'AiFillQuestionCircle'){
                const v = c.integer({min:1, max:100});
                const isBad = v > chance;
                isBad 
                    ? chance < maxChance
                        ? setChance(chance + delta) 
                        : setChance(chance)
                    : chance > minChance
                        ? setChance(chance - delta)
                        : setChance(chance)
                newArray.push(isBad ? bad : good)
                firstClicked = true
            }else{
                newArray.push(e)
            }
        }
        return newArray
    }

    const handleChange = (e:any) => {
        const c = Number(e.target.value)
        setValue(c)
        setTheL0(Array(c).fill(question))
        setTheL1(Array(c).fill(question))
        setTheL2(Array(c).fill(question))
        setChance(75)
    }


    const handleChangeL0 = ()=>{
        setTheL0((oldL:Array<any>)=>prob(oldL))
    }
    const handleChangeL1 = ()=>{
        setTheL1((oldL:Array<any>)=>prob(oldL))
    }
    const handleChangeL2 = ()=>{
        setTheL2((oldL:Array<any>)=>prob(oldL))
    }

    return(
        <div>
            <p>Lost Ark Facet Simulator</p>
            <select value={value} onChange={handleChange}>
                {selectOptions}
            </select>
            <li>
                <ul>
                good row 1
                {l0}
                <button style={{'display':'inline-block'}} onClick={handleChangeL0}>click</button>
                </ul>
                <ul>
                good row 2
                {l1}
                <button style={{'display':'inline-block'}} onClick={handleChangeL1}>click</button>
                </ul>
                <ul>
                bad row 1 &nbsp;&nbsp;
                {l2}
                <button style={{'display':'inline-block'}} onClick={handleChangeL2}>click</button>
                </ul>
            </li>
            <p>{chance} % to crack</p>
        </div>
    )
}

export default LostArkFacetSim
