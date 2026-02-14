function Accordian(){
    return (
        <div>
            <label> Accodian Headers</label>
            <div>
                <label>
                    Accodian content
                </label>
            </div>
        </div>
    )

}

const AccodianContainer = ()=>{
    return (
        Array.from({length: 20},(_,i)=> i).map((i)=><div><Accordian key={i}/></div>)
    )
}

