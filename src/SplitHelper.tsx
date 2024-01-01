import React, { useState } from 'react'

const SplitHelper = () => {

    const [totalBeforeTax, setTotalBeforeTax] = useState('')
    const [totalAfterTax, setTotalAfterTax] = useState('')
    const [totalTips, setTotalTips] = useState('')

    const [items, setItems] = useState([''])


    const containerStyle:any = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'// Adjust this for the desired height
      };

      const handleTotalBeforeTaxChange = (event:any) => {
        event.target.validity.valid && setTotalBeforeTax(event.target.value);
      };
    
      const handleTotalAfterTaxChange = (event:any) => {
        event.target.validity.valid && setTotalAfterTax(event.target.value);
      }

      const handleTipsChange = (event:any) => {
        event.target.validity.valid && setTotalTips(event.target.value);
      }

      const handleAddItem = (event:any) => {
        setItems([...items, ''])
      }

      const handleRemoveItem = (index: number) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
      }

      const handleChangeItem = (index:number, event:any) => {
        const newItems = [...items]
        if(event.target.validity.valid){
            newItems[index] = event.target.value
            setItems(newItems)
        }
      }

      const priceCal = (items: string[], totalTips: string, totalPreTax: string, totalAfterTax: string) => {
        const totalItemsPrice = items.reduce((acc,curr)=>acc+=Number(curr), 0)
        const prop = totalItemsPrice/Number(totalPreTax)
        return totalItemsPrice * (Number(totalAfterTax)/Number(totalPreTax)) + Number(totalTips) * prop

      }

    return(
        <div style={containerStyle}>
            <h1>Split helper</h1>
            <p>Calculate how much you need to pay for your part when splitting the bill</p>
            <p>
                sale tax rate = ((total price after tax)/(total price before tax)) - 1
            </p>
            <p>
                tips you pay base on your proportion = (total tips) * (total price before tax for your items/total price before tax)
            </p>
            <p>
                how much you need to pay = total price before tax for your items + (total price before tax for your items * rate) + tips you pay base on your proportion
            </p>
            <label>total price before tax</label>
            <input type="text" pattern="^-?\d*\.?\d*$" placeholder="Input 1" value={totalBeforeTax} onChange={handleTotalBeforeTaxChange}/>
            <label>total price after tax</label>
            <input type="text" pattern="^-?\d*\.?\d*$" placeholder="Input 2" value={totalAfterTax} onChange={handleTotalAfterTaxChange}/>
            <label>total tips</label>
            <input type="text" pattern="^-?\d*\.?\d*$" placeholder="Input 3" value={totalTips} onChange={handleTipsChange}/>
            <label>Your items before tax</label>
            <button onClick={handleAddItem}>Add Input</button>
            {items.map((value,index)=>{
                return (<div>
                    <input type="text" pattern="^-?\d*\.?\d*$" placeholder={`Input ${index + 1}`} value={value} onChange={(event) => handleChangeItem(index, event)}>
                    </input>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>)
            })}
            <p>
                You need to pay: {priceCal(items, totalTips, totalBeforeTax, totalAfterTax)}
            </p>
        </div>
    )

}

export { SplitHelper }